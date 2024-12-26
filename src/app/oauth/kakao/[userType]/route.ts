import { NextResponse } from "next/server";

const KAKAO_TOKEN_URL = "https://kauth.kakao.com/oauth/token";
const APPLICANT_REDIRECT_URI =
  process.env.NEXT_PUBLIC_KAKAO_APPLICANT_REDIRECT_URL;
const OWNER_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_OWNER_REDIRECT_URL;
const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

// 액세스 토큰 요청 함수
const getAccessToken = async (code: string, role: string) => {
  try {
    const response = await fetch(KAKAO_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: REST_API_KEY || "",
        redirect_uri:
          (role === "applicant"
            ? APPLICANT_REDIRECT_URI
            : OWNER_REDIRECT_URI) || "",
        code, // 전달받은 Authorization Code
      }).toString(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    return data.access_token; // 액세스 토큰 반환
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw new Error("Failed to fetch access token");
  }
};

// Route Handler
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code"); // URL에서 Authorization Code 추출
  const role = request.url.includes("applicant") ? "applicant" : "owner";

  if (!code) {
    return new Response("Authorization code not provided", { status: 400 });
  }

  try {
    // 1. 인가 코드를 사용해 액세스 토큰 요청
    const accessToken = await getAccessToken(code, role);

    // 2. 쿠키에 AccesToken 추가, 사용자 정보 받는 페이지로 이동시킴
    const response = NextResponse.redirect(
      request.url.includes("applicant")
        ? "http:localhost:3000/signup/applicant?stepOneDone=true?isOAuth=true?provider=kakao"
        : "http:localhost:3000/signup/owner?stepOneDone=true?isOAuth=true?provider=kakao"
    );

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24시간
    });

    return response;
  } catch (error) {
    console.error("Error during Kakao login process:", error);
    return new Response("Failed to process Kakao login", { status: 500 });
  }
};
