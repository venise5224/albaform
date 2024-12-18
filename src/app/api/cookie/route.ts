import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookie = await cookies();

  const role = cookie.get("role")?.value;
  const userId = cookie.get("userId")?.value;

  console.log(role);

  return NextResponse.json({
    ok: true,
    data: {
      role,
      userId,
    },
  });
};
