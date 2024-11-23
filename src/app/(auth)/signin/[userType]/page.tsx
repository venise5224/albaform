import SigninTitle from "../components/SigninTitle";
import SigninContents from "../components/SigninContents";
const SigninPage = async ({ params }: { params: { userType: string } }) => {
  const { userType } = await params;

  return (
    <>
      <SigninTitle userType={userType} />
      <SigninContents userType={userType} />
    </>
  );
};

export default SigninPage;
