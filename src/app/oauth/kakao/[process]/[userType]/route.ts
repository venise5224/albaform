import { NextResponse } from "next/server";

// 카카오에서의 리다이렉트로 요청에 따른 Route Handler
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code"); // URL에서 Authorization Code 추출
  const role = request.url.includes("applicant") ? "applicant" : "owner";
  const isProgress = request.url.includes("signin") ? "signin" : "signup";

  if (!code) {
    return new Response("Authorization code not provided", { status: 400 });
  }

  try {
    // 1. 회원가입 요청이라면 플랫폼에서 받아야 하는 추가 데이터가 필요해 cookie에 Authorization code만 실어서 singup/stepOneDone 페이지로 이동시킴
    if (isProgress === "signup") {
      const response = NextResponse.redirect(
        role === "applicant"
          ? `${process.env.NEXT_PUBLIC_DEPLOY_URL}/signup/applicant?stepOneDone=true&isOAuth=true&provider=kakao`
          : `${process.env.NEXT_PUBLIC_DEPLOY_URL}/signup/owner?stepOneDone=true&isOAuth=true&provider=kakao`
      );

      response.cookies.set("authorizationcode", code, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24시간
      });

      return response;
    }
    // 2. 로그인 요청이라면 넥스트 서버 -> 백엔드 서버(/oauth/sign-in/{provider})로 바로 요청을 보내고 ok를 받으면 쿠키에 userInfo,refreshtoken, accesstoken만 싣고 "/" 페이지로 리다이렉트 시킴
    else if (isProgress === "signin") {
      const oauthLoginResponse: any = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/oauth/sign-in/kakao`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            redirectUri:
              role === "applicant"
                ? process.env.NEXT_PUBLIC_KAKAO_APPLICANT_SIGNIN_REDIRECT_URL
                : process.env.NEXT_PUBLIC_KAKAO_OWNER_SIGNIN_REDIRECT_URL,
            token: code,
          }),
        }
      );

      if (oauthLoginResponse.ok) {
        const {
          user: { role, id },
          refreshToken,
          accessToken,
        } = await oauthLoginResponse.json();

        const response = NextResponse.redirect(
          `${process.env.NEXT_PUBLIC_DEPLOY_URL}/?message=${encodeURIComponent("로그인이 완료되었습니다.")}`
        );

        response.cookies.set("role", role, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24, // 24시간
        });

        response.cookies.set("id", id, {
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
      } else {
        console.error("Kakao 로그인 실패", oauthLoginResponse.statusText);
        return new Response("카카오로그인에 실패했습니다.", { status: 500 });
      }
    } else {
      console.error("잘못된 경로로의 요청입니다.");
      return new Response("잘못된 경로로의 요청입니다.", { status: 404 });
    }
  } catch (error) {
    console.error("Error during Kakao login process:", error);
    return new Response("Failed to process Kakao login", { status: 500 });
  }
};
