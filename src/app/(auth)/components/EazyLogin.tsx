"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const EazyLogin = () => {
  const pathname = usePathname();
  const isSigninPage = pathname.includes("/signin");
  const loginOrSignup = isSigninPage ? "로그인" : "회원가입";

  // SNS 로그인 화면으로 이동시키기
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_APPLICANT_REDIRECT_URL}
&response_type=code`;
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
		&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_APPLICANT_REDIRECT_URL}
		&response_type=code
    &scope=email`;

  const handleEazyLogin = (sns: string) => {
    if (sns === "kakao") window.location.href = kakaoURL;
    if (sns === "google") window.location.href = googleURL;
  };

  return (
    <section className="flex h-[96px] w-full flex-col gap-6 text-md">
      <div className="flex items-center gap-[13px] text-gray-300">
        <div className="h-0 w-full border border-gray-100" />
        <span className="w-[500px] break-keep text-center">
          SNS 계정으로 {loginOrSignup} 하기
        </span>
        <div className="h-0 w-full border border-gray-100" />
      </div>

      <div className="mx-auto flex h-[48px] w-[112px] gap-4">
        <button onClick={() => handleEazyLogin("google")}>
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
