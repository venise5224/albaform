"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const LandingButton = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(Boolean(localStorage.getItem("isLogin")));
  }, []);

  return (
    <Link href={isLogin ? "/albalist" : "/signin/applicant"}>{children}</Link>
  );
};

export default LandingButton;
