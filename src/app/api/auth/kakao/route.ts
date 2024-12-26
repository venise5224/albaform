import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // 1. 인가 코드 가져오기
    const { searchParams } = new URL(req.url);
    const authorizationCode = searchParams.get("code");

    if (!authorizationCode) {
      return NextResponse.json(
        { error: "Authorization code is missing" },
        { status: 400 }
      );
    }

    // 2. 액세스 토큰 요청
    const tokenResponse = await fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || "",
        redirect_uri: "http://localhost:3000/api/auth/kakao", // 동일한 redirect_uri
        code: authorizationCode,
      }).toString(),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      throw new Error(
        `Failed to fetch access token: ${errorData.error_description}`
      );
    }

    const tokenData = await tokenResponse.json();
    const { access_token } = tokenData;

    // 3. 사용자 정보 요청
    const userResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!userResponse.ok) {
      const errorData = await userResponse.json();
      throw new Error(
        `Failed to fetch user info: ${errorData.error_description}`
      );
    }

    const userInfo = await userResponse.json();

    // 4. 사용자 정보 반환
    return NextResponse.json({ userInfo });
  } catch (error: any) {
    console.error("Kakao authentication error:", error);
    return NextResponse.json(
      { error: "Failed to authenticate with Kakao", details: error.message },
      { status: 500 }
    );
  }
}
