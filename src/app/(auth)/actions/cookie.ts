"use server";

import { cookies } from "next/headers";

interface CookieData {
  name: string;
  value: string;
}

export const createCookie = async (data: CookieData) => {
  const cookieStore = await cookies();

  cookieStore.set(data.name, data.value, { secure: true, httpOnly: true });
};
