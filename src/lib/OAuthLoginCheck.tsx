"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { isLoggedAtom } from "@/atoms/isLogged";
import { useSetAtom } from "jotai";

const OAuthLoginCheck = () => {
  const pathname = usePathname();
  const id = Cookies.get("id");
  const isLogged = useSetAtom(isLoggedAtom);

  useEffect(() => {
    if (pathname.startsWith("/") && id) {
      localStorage.setItem("isLogin", "true");
      isLogged(true);
    }
  }, [pathname, id, isLogged]);

  return null;
};

export default OAuthLoginCheck;
