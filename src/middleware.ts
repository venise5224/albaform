import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const url = new URL(request.url);
  const path = url.pathname;
  const role = request.cookies.get("role");
  const referer = request.headers.get("referer");
  const ownerPath = ["/owner", "/addform", "/addform/", "/applications/"];
  const applicantPath = ["/applicant", "/apply/", "/myapply/"];
  const accessToken = request.cookies.get("accessToken");

  // 사장님용 페이지
  if (role && role.value === "APPLICANT" && ownerPath.includes(path)) {
    // const prevUrl = referer || url.origin;
    // const errorUrl = new URL(prevUrl);
    // errorUrl.searchParams.set("error", "matchErrror");

    if (referer) {
      return NextResponse.redirect(referer);
    } else {
      return NextResponse.redirect(url.origin);
    }
  }

  // 지원자용 페이지
  if (role && role.value === "OWNER" && applicantPath.includes(path)) {
    // const prevUrl = referer || url.origin;
    // const errorUrl = new URL(prevUrl);
    // errorUrl.searchParams.set("error", "matchErrror");

    if (referer) {
      return NextResponse.redirect(referer);
    } else {
      return NextResponse.redirect(url.origin);
    }
  }

  // 비회원이 전용페이지 접근하는 것을 차단
  if (!role && !accessToken) {
    if (ownerPath.includes(path) || applicantPath.includes(path)) {
      return NextResponse.redirect(new URL("/signin/applicant", request.url));
    }
  }

  // 로그인되어 있으면 로그인페이지로 못가도록 막음
  if (path.startsWith("/signin")) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
};
