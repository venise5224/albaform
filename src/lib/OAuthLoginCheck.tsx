"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const OAuthLoginCheck = () => {
  const pathname = usePathname();
  const id = Cookies.get("id");

  useEffect(() => {
    if (pathname.startsWith("/") && id) {
      localStorage.setItem("isLogin", "true");
    }
  }, [pathname, id]);

  return null;
};

export default OAuthLoginCheck;
