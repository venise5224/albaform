"use server";

import { cookies } from "next/headers";

// 토큰이 필요한 요청을 할 때 fetch 대신 instance를 사용합니다.
const instance = async (url: string, options: RequestInit = {}) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  let response = await fetch(url, { ...options });

  if (response.status === 401) {
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      return {
        status: response.status,
        error: "장시간 사용하지 않아 로그인이 해제되었습니다.",
      };
    }

    const newAccessToken = cookieStore.get("accessToken")?.value;

    if (newAccessToken && newAccessToken !== accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      };
    }

    response = await fetch(url, { ...options });
  }

  if (response.status === 204) {
    return {
      status: response.status,
      data: null, // 응답 본문이 없을 때 null 반환합니다.
    };
  }

  if (!response.ok) {
    console.error("요청 실패", response.statusText, response.status);
    return {
      status: response.status,
      error: "오류가 발생하여 요청이 실패했습니다.",
    };
  }

  const responseData = await response.json();

  return {
    status: response.status,
    ...responseData,
  }; // 각 요청의 응답을 json으로 반환합니다.
};

export default instance;
