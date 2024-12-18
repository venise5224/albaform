import StepSidebar from "./components/StepSidebar";
import Title from "./components/Title";
import AlbaformCreateDropdown from "@/components/dropdown/AlbaformCreateDropdown";
import { Suspense } from "react";
import MainButton from "./components/MainButton";
import LoadingSkeleton from "./components/LoadingSkeleton";

const AddFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pc:ml-[148px] pc:mt-10">
      <div className="m-auto flex w-[375px] flex-col space-y-3 pc:m-0 pc:w-full pc:flex-row pc:space-y-0">
        <StepSidebar />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <Title />
            <div className="m-auto w-[327px] pc:hidden">
              <AlbaformCreateDropdown />
            </div>
            <Suspense fallback={<LoadingSkeleton isImage={true} />}>
              {children}
            </Suspense>
          </div>
          <div className="pc:hidden">
            <MainButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFormLayout;
