"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const EazySignin = () => {
  const pathname = usePathname();

  // SNS 로그인 화면으로 이동시키기
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${pathname.includes("applicant") ? process.env.NEXT_PUBLIC_KAKAO_APPLICANT_SIGNIN_REDIRECT_URL : process.env.NEXT_PUBLIC_KAKAO_OWNER_SIGNIN_REDIRECT_URL}
&response_type=code`;

  const handleClick = (sns: string) => {
    if (sns === "kakao") window.location.href = kakaoURL;
  };

  return (
    <button
      type="button"
      onClick={() => handleClick("kakao")}
      className="flex h-[72px] w-full items-center justify-center space-x-4 rounded-xl bg-[#FEE500]"
    >
      <Image
        src={"/icon/kakao_login_logo.png"}
        width={20}
        height={20}
        alt="kakao logo"
        priority={true}
      />
      <span className="text-[rgba(0, 0, 0, 0.85)] text-xl font-semibold mobile:text-lg">
        5초만에 카카오로 시작하기
      </span>
    </button>
  );
};

export default EazySignin;
