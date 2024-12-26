import SignupTitle from "../components/SignupTitle";
import SignupContents from "../components/SignupContents";
import { Metadata } from "next";

interface SignupPageProps {
  params: Promise<{ userType: string }>;
  searchParams: Promise<{ stepOneDone: string }>;
}

export const metadata: Metadata = {
  title: "회원가입",
  openGraph: {
    title: "회원가입",
  },
};

const SignupPage = async ({ params, searchParams }: SignupPageProps) => {
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
