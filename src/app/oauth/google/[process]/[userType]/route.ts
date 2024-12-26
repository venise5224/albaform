import { NextResponse } from "next/server";

// 구글에서의 리다이렉트로 요청에 따른 Route Handler
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code"); // URL에서 Authorization Code 추출
  const role = request.url.includes("applicant") ? "applicant" : "owner";
  const isProgress = request.url.includes("signin") ? "signin" : "signup";
  let oauthAccessToken = null;

  if (!code) {
    return new Response("Authorization code not provided", { status: 400 });
  }

  try {
    // 1. 회원가입 요청이라면 Google API를 통해 Access Token을 요청한 뒤 쿠키에 저장하고 이후 추가 데이터를 받기 위해 singup/stepOneDone 페이지로 이동시킴
    if (isProgress === "signup") {
      const redirectUri =
        role === "applicant"
          ? process.env.NEXT_PUBLIC_GOOGLE_APPLICANT_SIGNUP_REDIRECT_URL
          : process.env.NEXT_PUBLIC_GOOGLE_OWNER_SIGNUP_REDIRECT_URL;

      const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code, // Authorization Code
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
          client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
          redirect_uri: redirectUri || "", // redirect URI
          grant_type: "authorization_code", // grant type
        }).toString(),
      });

      if (!tokenResponse.ok) {
        throw new Error("Failed to fetch access token from Google");
      }

      const tokenData = await tokenResponse.json();
      oauthAccessToken = tokenData.id_token;

      const response = NextResponse.redirect(
        role === "applicant"
          ? "http://localhost:3000/signup/applicant?stepOneDone=true&isOAuth=true&provider=google"
          : "http://localhost:3000/signup/owner?stepOneDone=true&isOAuth=true&provider=google"
      );

      response.cookies.set("oauthAccessToken", oauthAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24시간
      });

      return response;
    }

    // 2. 로그인 요청이라면 넥스트 서버 -> 백엔드 서버(/oauth/sign-in/{provider})로 바로 요청을 보내고 쿠키에 데이터 저장
    else if (isProgress === "signin") {
      const oauthLoginResponse: any = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/oauth/sign-in/google`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            redirectUri:
              role === "applicant"
                ? process.env.NEXT_PUBLIC_GOOGLE_APPLICANT_SIGNIN_REDIRECT_URL
                : process.env.NEXT_PUBLIC_GOOGLE_OWNER_SIGNIN_REDIRECT_URL,
            token: oauthAccessToken, // 구글은 카카오와 다르게 Authorization Code가 아닌 AccessToken임;;
          }),
        }
      );

      if (oauthLoginResponse.ok) {
        const {
          user: userData,
          refreshToken,
          accessToken,
        } = await oauthLoginResponse.json();

        const response = NextResponse.redirect(
          `${process.env.NEXT_PUBLIC_DEPLOY_URL}`
        );

        response.cookies.set("userData", userData, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24, // 24시간
        });

        response.cookies.set("accessToken", accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24, // 24시간
        });

        response.cookies.set("refreshToken", refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24, // 24시간
        });

        return response;
      }
    }
  } catch (error) {
    console.error("Error during Google OAuth process:", error);
    return new Response("Failed to process Google OAuth", { status: 500 });
  }
};
