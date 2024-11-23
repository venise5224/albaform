import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const path = new URL(request.url).pathname;

  if (path.startsWith("/signin") || path.startsWith("/signup")) {
    const accessToken = request.cookies.get("accessToken");

    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
};
