"use server";

import { cookies, headers } from "next/headers";

// 토큰이 필요한 요청을 할 때 fetch 대신 instance를 사용합니다.
const instance = async (url: string, options: RequestInit = {}) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const instanceHeader = new Headers(options.headers || {});
  instanceHeader.set("x-instance-request", "true");
  console.log(instanceHeader);
  if (accessToken) {
    instanceHeader.set("Authorization", `Bearer ${accessToken}`);
  }

  const headerOptions = {
    ...options,
    headers: instanceHeader,
  };

  let response = await fetch(url, headerOptions);

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

  return {
    status: response.status,
    data: await response.json(),
  }; // 각 요청의 응답을 json으로 반환합니다.
};

export default instance;
