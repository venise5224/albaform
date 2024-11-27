import Link from "next/link";
import AuthNav from "../../components/AuthNav";

const SigninTitle = ({ userType }: { userType: string }) => {
  const userTypeText = userType === "applicant" ? "사장님" : "지원자";

  return (
    <div className="flex flex-col space-y-10">
      <AuthNav userType={userType} location="signin" />
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-semibold text-black-500 pc:text-3xl">
          로그인
        </h1>
        <div className="flex flex-col items-center space-y-[2px]">
          <p className="text-xs text-black-100 pc:text-xl">
            아직 계정이 없으신가요?
            <Link
              href={
                userType === "applicant" ? "/signup/applicant" : "/signup/owner"
              }
              className="ml-2 font-semibold text-black-400 underline"
            >
              회원가입 하기
            </Link>
          </p>
          <span className="text-xs text-black-100 pc:text-xl">
            {userTypeText} 로그인은 {userTypeText} 전용 페이지에서 할 수
            있습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SigninTitle;
