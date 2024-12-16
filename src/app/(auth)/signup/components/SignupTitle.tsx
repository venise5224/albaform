import Link from "next/link";
import AuthNav from "../../components/AuthNav";

const SignupTitle = ({
  userType,
  stepOneDone,
}: {
  userType: string;
  stepOneDone: string;
}) => {
  const userTypeText = userType === "applicant" ? "사장님" : "지원자";

  return (
    <div className="flex flex-col space-y-10">
      {stepOneDone !== "true" && (
        <AuthNav userType={userType} location="signup" />
      )}
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-semibold text-black-500 pc:text-3xl">
          {stepOneDone === "true" ? "지원자 정보 입력" : "회원가입"}
        </h1>
        {stepOneDone !== "true" ? (
          <div className="flex flex-col items-center space-y-[2px]">
            <p className="text-xs text-black-100 pc:text-xl">
              이미 계정이 있으신가요?
              <Link
                href={
                  userType === "applicant"
                    ? "/signin/applicant"
                    : "/signin/owner"
                }
                className="ml-2 font-semibold text-black-400 underline"
              >
                로그인 하기
              </Link>
            </p>
            <span className="text-xs text-black-100 pc:text-xl">
              {userTypeText} 회원가입은 {userTypeText} 전용 페이지에서 할 수
              있습니다.
            </span>
          </div>
        ) : (
          <p className="text-xs text-black-100 pc:text-xl">
            추가 정보를 입력하여 회원가입을 완료해주세요.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupTitle;
