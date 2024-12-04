"use client";

import StepButton from "./StepButton";
import { AddFormStepProps } from "@/types/addform";

interface StepSidebarProps {
  temporaryDataByStep: AddFormStepProps;
}

const StepSidebar = ({ temporaryDataByStep }: StepSidebarProps) => {
  const temporaryDataArr = [
    { step: "stepOne", data: temporaryDataByStep.stepOne },
    { step: "stepTwo", data: temporaryDataByStep.stepTwo },
    { step: "stepThree", data: temporaryDataByStep.stepThree },
  ];

  const handleTemporarySave = () => {
    temporaryDataArr.forEach((item) => {
      localStorage.setItem(item.step, JSON.stringify(item.data));
    });
  };

  return (
    <div className="hidden h-[966px] w-[452px] flex-col justify-between rounded-3xl bg-background-200 p-8 pc:flex">
      <div className="flex flex-col space-y-2">
        <StepButton />
      </div>
      <div className="flex flex-col space-y-2">
        <button
          onClick={handleTemporarySave}
          className="rounded-lg border-[1px] border-gray-200 p-4 text-xl font-semibold text-gray-300 transition-all hover:border-orange-300 hover:bg-background-100 hover:text-orange-300"
        >
          임시 저장
        </button>
        <button className="rounded-lg bg-gray-100 p-4 text-xl font-semibold text-white transition-all hover:bg-orange-300">
          등록하기
        </button>
      </div>
    </div>
  );
};

export default StepSidebar;
