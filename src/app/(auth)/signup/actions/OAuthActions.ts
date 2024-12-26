"use server";

import { setCookie } from "@/lib/cookie";
import { OAuthSchema } from "@/schema/signup/OAuthSchema";
import { cookies } from "next/headers";

export const OAuthActions = async (
  formData: FormData,
  provider: string,
  role: string
) => {
  const cookieStore = await cookies();
  const authorizationCode = cookieStore.get("authorizationcode")?.value;
  const oauthAccessToken = cookieStore.get("oauthAccessToken")?.value;

  const providerRedirectUri =
    role === "OWNER"
      ? provider === "kakao"
        ? `${process.env.NEXT_PUBLIC_KAKAO_OWNER_SIGNUP_REDIRECT_URL}`
        : `${process.env.NEXT_PUBLIC_GOOGLE_OWNER_SIGNUP_REDIRECT_URL}`
      : provider === "kakao"
        ? `${process.env.NEXT_PUBLIC_KAKAO_APPLICANT_SIGNUP_REDIRECT_URL}`
        : `${process.env.NEXT_PUBLIC_GOOGLE_APPLICANT_SIGNUP_REDIRECT_URL}`;

  const data = {
    location: formData.get("location")?.toString() || "",
    phoneNumber: formData.get("phoneNumber"),
    storePhoneNumber: formData.get("storePhoneNumber") || "",
    storeName: formData.get("storeName")?.toString() || "",
    role: formData.get("role")?.toString(),
    nickname: formData.get("nickname")?.toString(),
    name: formData.get("name")?.toString() || "",
    redirectUri: providerRedirectUri,
    token: authorizationCode || oauthAccessToken,
  };

  const result = OAuthSchema.safeParse(data);

  if (!result.success) {
    return {
      status: false,
      message: result.error.flatten(),
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/oauth/sign-up/${provider}`,
      {
        method: "POST",
        body: JSON.stringify(result.data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseErrorText = {
      400: "잘못된 인가코드입니다.",
      404: "잘못된 경로로의 요청입니다.",
      500: "서버 오류가 발생했습니다.",
    };

    if (!response.ok) {
      console.error(
        "OAuth 회원가입 요청 실패",
        response.statusText,
        response.status
      );
      return {
        status: response.status,
        message:
          responseErrorText[
            response.status as keyof typeof responseErrorText
          ] || response.statusText,
      };
    }

    const resData = await response.json();
    const { accessToken, refreshToken, ...rest } = resData;

    await setCookie(accessToken, refreshToken, rest.user.role, rest.user.id);

    return {
      status: response.status,
    };
  } catch (error) {
    console.error("간편회원가입에서 에러 발생", error);
    return {
      status: 500,
      message: "회원가입 중 오류가 발생했습니다.",
    };
  }
};
