"use client";

import { AddFormStepProps } from "@/types/addform";

interface StepSidebarProps {
  temporaryDataByStep: AddFormStepProps;
}

// 추후 form 작업을 하며 zod 타입, react-hook-form 타입이 추가될 예정입니다.
const MainButton = ({ temporaryDataByStep }: StepSidebarProps) => {
  const temporaryDataArr = [
    { step: "stepOne", data: temporaryDataByStep.stepOne },
    { step: "stepTwo", data: temporaryDataByStep.stepTwo },
    { step: "stepThree", data: temporaryDataByStep.stepThree },
  ];

  // 임시 저장 기능 (작성한만큼 로컬스토리지에 저장됩니다.)
  const handleTemporarySave = () => {
    temporaryDataArr.forEach((item) => {
      if (item.data && Object.keys(item.data).length > 0) {
        localStorage.setItem(item.step, JSON.stringify(item.data));
      }
    });
  };

  const onSubmit = () => {
    // 성공 시 임시데이터 삭제
  };

  return (
    <div className="flex flex-col space-y-2 p-6">
      <button
        onClick={handleTemporarySave}
        className="rounded-lg border-[1px] border-gray-200 p-4 text-base font-semibold text-gray-300 transition-all hover:border-orange-300 hover:bg-background-100 hover:text-orange-300 pc:text-xl"
      >
        임시 저장
      </button>
      <button
        onClick={onSubmit}
        className="rounded-lg bg-gray-100 p-4 text-base font-semibold text-white transition-all hover:bg-orange-300 pc:text-xl"
      >
        등록하기
      </button>
    </div>
  );
};

export default MainButton;
