"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const EazyLogin = () => {
  const pathname = usePathname();
  const isSigninPage = pathname.includes("/signin");
  const loginOrSignup = isSigninPage ? "로그인" : "회원가입";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;

  const handleEazyLogin = (sns: string) => {
    if (sns === "kakao") window.location.href = kakaoURL;
  };

  return (
    <section className="flex h-[96px] w-full flex-col gap-6 text-md">
      <div className="flex items-center gap-[13px] text-gray-300">
        <div className="h-0 w-full border border-gray-100" />
        <span className="w-[500px]">SNS 계정으로 {loginOrSignup} 하기</span>
        <div className="h-0 w-full border border-gray-100" />
      </div>

      <div className="mx-auto flex h-[48px] w-[112px] gap-4">
        <button>
          <Image
            src={"/logo/logo-google.svg"}
            width={48}
            height={48}
            alt="google logo"
          />
        </button>
        <button onClick={() => handleEazyLogin("kakao")}>
          <Image
            src={"/logo/logo-kakao.svg"}
            width={48}
            height={48}
            alt="kakao logo"
          />
        </button>
      </div>
    </section>
  );
};

export default EazyLogin;
