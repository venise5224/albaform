import { Suspense } from "react";
import MyInfoEditContainer from "./components/InfoEditContainer";
import NavContainer from "./components/NavContainer";

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mt-4 box-content max-w-[327px] px-6 pb-[80px] pc:max-w-[1480px] tablet:max-w-[600px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-black-500 pc:text-3xl">
          마이페이지
        </h2>
        <MyInfoEditContainer />
      </div>
      <Suspense>
        <NavContainer />
      </Suspense>
      <div className="mt-[30px] pc:mt-10 tablet:mt-[14px]">{children}</div>
    </div>
  );
};

export default MyPageLayout;
