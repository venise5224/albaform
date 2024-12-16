import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/signin/applicant">
      <div className="flex h-[52px] w-[120px] items-center justify-center rounded-lg bg-orange-300 text-lg text-white hover:opacity-90 mobile:bg-white mobile:text-orange-300">
        <button>로그인</button>
      </div>
    </Link>
  );
};

export default LoginButton;
