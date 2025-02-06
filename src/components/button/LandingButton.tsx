"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const LandingButton = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(Boolean(localStorage.getItem("isLogin")));
  }, []);

  return (
    <Link
      href={isLogin ? "/albalist" : "/signin/applicant"}
      className="rounded-[100px] bg-blue-300 px-[24px] py-[16px] text-lg text-white pc:mt-[60px] pc:px-[36px] pc:py-[24px] pc:text-2xl"
    >
      {children}
    </Link>
  );
};

export default LandingButton;
