import Link from "next/link";
import { cls } from "@/app/lib/utils";

const SignupTitle = ({
  userType,
  stepOneDone,
}: {
  userType: string;
  stepOneDone: string;
}) => {
  const userTypeText = userType === "applicant" ? "지원자" : "사장님";
  const linkArr = [
    {
      type: "owner",
      title: "사장님 전용",
      href: "/signup/owner",
      signinHref: "/signin/owner",
    },
    {
      type: "applicant",
      title: "지원자 전용",
      href: "/signup/applicant",
      signinHref: "/signin/applicant",
    },
  ];
  
  return (
    <div className="flex flex-col space-y-10">
      {stepOneDone !== "true" && (
        <nav className="flex items-center justify-center space-x-4">
          {linkArr.map((link) => (
            <Link
            key={link.type}
            href={link.href}
            className={cls(
              "text-lg font-bold leading-[26px] text-gray-300",
              link.type === userType ? "text-orange-300" : ""
            )}
          >
            {link.title}
          </Link>
          ))}
        </nav>
      )}
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-black-500 text-2xl font-semibold">
          {stepOneDone === "true" ? "지원자 정보 입력" : "회원가입"}
        </h1>
        {stepOneDone !== "true" ? (
          <div className="flex flex-col items-center space-y-[2px]">
            <p className="text-black-100 text-xs">
              이미 계정이 있으신가요?
              <Link
                href={
                  userType === "applicant"
                    ? "/signin/applicant"
                    : "/signin/owner"
                }
                className="text-black-400 ml-2 font-semibold underline"
              >
                로그인 하기
              </Link>
            </p>
            <span className="text-black-100 text-xs">
              {userTypeText} 회원가입은 {userTypeText} 전용 페이지에서 할 수
              있습니다.
            </span>
          </div>
        ) : (
          <p className="text-black-100 text-xs">추가 정보를 입력하여 회원가입을 완료해주세요.</p>  
        )}
      </div>
    </div>
  );
};

export default SignupTitle;
