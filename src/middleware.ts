import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const url = new URL(request.url);
  const path = url.pathname;
  const role = request.cookies.get("role");
  const referer = request.headers.get("referer");
  const ownerPath = ["/owner", "/addform", "/addform/", "/applications/"];
  const applicantPath = ["/applicant", "/apply/", "/myapply/"];
  const accessToken = request.cookies.get("accessToken");
  const instanceRequest = request.headers.get("x-instance-request") === "true";
  console.log(instanceRequest);

  // instance로 요청이 들어왔을 때의 토큰 갱신 및 재요청
  if (instanceRequest) {
    console.log("instanceRequest");
    if (!accessToken) {
      return NextResponse.json(
        { error: "로그인이 필요한 서버스입니다." },
        { status: 401 }
      );
    }

    try {
      const response = await fetch(request);
      const cookieList = ["accessToken", "refreshToken", "role", "id"];

      if (response.status === 401) {
        const refreshToken = request.cookies.get("refreshToken")?.value;

        if (!refreshToken) {
          const response = NextResponse.json(
            { error: "장시간 미활동으로 인해 로그인이 해제되었습니다." },
            { status: 401 }
          );

          cookieList.forEach((cookie) => {
            response.cookies.delete(cookie);
          });

          return response;
        }

        const refreshResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
          {
            method: "POST",
            body: JSON.stringify({ refreshToken }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(refreshResponse);
        if (refreshResponse.ok) {
          const tokenData = await refreshResponse.json();
          const { accessToken: newAccessToken } = tokenData;

          const response = NextResponse.next();
          response.cookies.set({
            name: "accessToken",
            value: newAccessToken,
          });

          const newRequest = new Request(request.url, {
            method: request.method,
            headers: new Headers(request.headers),
            body: request.body,
          });
          newRequest.headers.set("Authorization", `Bearer ${newAccessToken}`);

          const retryResponse = await fetch(newRequest);
          const responseResult = NextResponse.json(await retryResponse.json(), {
            status: retryResponse.status,
          });

          return responseResult;
        } else {
          const response = NextResponse.redirect(
            new URL("/signin", request.url)
          );

          cookieList.forEach((cookie) => {
            response.cookies.delete(cookie);
          });

          return response;
        }
      }
    } catch (error) {
      return NextResponse.json(
        { error: "오류가 발생하여 요청이 실패했습니다." },
        { status: 500 }
      );
    }
  }

  // 사장님용 페이지
  if (role && role.value === "APPLICANT" && ownerPath.includes(path)) {
    const prevUrl = referer || url.origin;
    const errorUrl = new URL(prevUrl);
    errorUrl.searchParams.set("error", "matchErrror");

    return NextResponse.redirect(errorUrl);
  }

  // 지원자용 페이지
  if (role && role.value === "OWNER" && applicantPath.includes(path)) {
    const prevUrl = referer || url.origin;
    const errorUrl = new URL(prevUrl);
    errorUrl.searchParams.set("error", "matchErrror");

    return NextResponse.redirect(errorUrl);
  }

  // 로그인되어 있으면 로그인페이지로 못가도록 막음
  if (path.startsWith("/signin")) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
};
