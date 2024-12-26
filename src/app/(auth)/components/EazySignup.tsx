"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const EazySignup = () => {
  const pathname = usePathname();

  // SNS 로그인 화면으로 이동시키기
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${pathname.includes("applicant") ? process.env.NEXT_PUBLIC_KAKAO_APPLICANT_SIGNUP_REDIRECT_URL : process.env.NEXT_PUBLIC_KAKAO_OWNER_SIGNUP_REDIRECT_URL}
&response_type=code`;

  const handleClick = (sns: string) => {
    if (sns === "kakao") window.location.href = kakaoURL;
  };

  return (
    <section className="flex h-[96px] w-full flex-col gap-6 text-md">
      <div className="flex items-center gap-[13px] text-gray-300">
        <div className="h-0 w-full border border-gray-100" />
        <span className="w-[500px] break-keep text-center">
          SNS 계정으로 회원가입하기
        </span>
        <div className="h-0 w-full border border-gray-100" />
      </div>

      <div className="mx-auto flex w-full gap-4">
        <button onClick={() => handleClick("kakao")} className="m-auto">
          <Image
            src={"/image/kakao_login_large.png"}
            width={480}
            height={480}
            alt="kakao logo"
            priority={true}
          />
        </button>
      </div>
    </section>
  );
};

export default EazySignup;
