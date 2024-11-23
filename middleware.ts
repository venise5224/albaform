import { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const path = new URL(request.url).pathname;

  // const protectedRoutes = ["/"];
  // const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
};
