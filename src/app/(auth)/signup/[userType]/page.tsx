import SignupTitle from "../components/SignupTitle";
import SignupContents from "../components/SignupContents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입",
};

const SignupPage = async ({
  params,
  searchParams,
}: {
  params: { userType: string };
  searchParams: { stepOneDone: string };
}) => {
  const { userType } = await params;
  const { stepOneDone } = await searchParams;

  return (
    <>
      <SignupTitle userType={userType} stepOneDone={stepOneDone} />
      <SignupContents userType={userType} stepOneDone={stepOneDone} />
    </>
  );
};

export default SignupPage;
