import SignupTitle from "../components/SignupTitle";

const SignupPage = ({ params }: { params: { userType: string } }) => {
  const { userType } = params;
  
  return (
    <>
      <SignupTitle userType={userType} />
    </>
  );
};

export default SignupPage;
