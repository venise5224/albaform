import NavMenu from "./components/NavMenu";
import MyInfoEditContainer from "./components/InfoEditContainer";
import AlbatalkFilterDropdown from "@/components/dropdown/AlbatalkFilterDropdown";
import { Suspense } from "react";
import TabDropdown from "./components/TabDropdown";

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mt-4 box-content max-w-[327px] px-6 pb-[80px] pc:max-w-[1480px] tablet:max-w-[600px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-black-500 pc:text-3xl">
          마이페이지
        </h2>
        <MyInfoEditContainer />
      </div>
      <div className="pc:mt-[46px] pc:flex pc:items-center pc:justify-between">
        <div className="mt-6 flex justify-start pc:mt-0 tablet:mt-[30px]">
          <Suspense>
            <NavMenu />
          </Suspense>
        </div>
        <div className="mt-4 flex justify-end pc:mt-0">
          <Suspense>
            <TabDropdown />
          </Suspense>
        </div>
      </div>
      <div className="mt-[30px] pc:mt-10 tablet:mt-[14px]">{children}</div>
    </div>
  );
};

export default MyPageLayout;
