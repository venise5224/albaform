import SigninTitle from "../components/SigninTitle";
import SigninContents from "../components/SigninContents";
import { Metadata } from "next";

interface SigninPageProps {
  params: Promise<{ userType: string }>;
}

export const metadata: Metadata = {
  title: "로그인",
};

const SigninPage = async ({ params }: SigninPageProps) => {
  const { userType } = await params;

  return (
    <>
      <SigninTitle userType={userType} />
      <SigninContents />
    </>
  );
};

export default SigninPage;
