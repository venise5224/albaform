const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[94px] flex flex-col space-y-8 px-6">{children}</div>
  );
};

export default AuthLayout;
