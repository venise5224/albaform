const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto mt-10 max-w-[327px] pb-12 pc:mt-[88px] pc:max-w-[1480px] pc:pb-[41px] tablet:mt-20 tablet:max-w-[600px] tablet:pb-[66px]">
      {children}
    </main>
  );
};

export default layout;
