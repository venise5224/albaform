"use client";

import { temporaryDataByStepAtom } from "@/atoms/addFormAtom";
import SolidButton from "@/components/button/SolidButton";
import { useAtomValue } from "jotai";
import { useCallback, useEffect, useMemo } from "react";

// 추후 form 작업을 하며 zod 타입, react-hook-form 타입이 추가될 예정입니다.
const MainButton = () => {
  const temporaryDataByStep = useAtomValue(temporaryDataByStepAtom);
  const temporaryDataArr = useMemo(
    () => [
      { step: "stepOne", data: temporaryDataByStep.stepOne },
      { step: "stepTwo", data: temporaryDataByStep.stepTwo },
      { step: "stepThree", data: temporaryDataByStep.stepThree },
    ],
    [temporaryDataByStep]
  );

  // 임시 저장 기능 (작성한만큼 로컬스토리지에 저장됩니다.)
  const handleTemporarySave = useCallback(() => {
    temporaryDataArr.forEach((item) => {
      if (item.data && Object.keys(item.data).length > 0) {
        localStorage.setItem(item.step, JSON.stringify(item.data));
      }
    });
  }, [temporaryDataArr]);

  useEffect(() => {
    handleTemporarySave();
  }, [handleTemporarySave]);

  const onSubmit = () => {
    // 성공 시 임시데이터 삭제
  };

  return (
    <div className="flex flex-col space-y-2 p-6">
      <SolidButton style="outOrange300" onClick={handleTemporarySave}>
        임시 저장
      </SolidButton>
      <SolidButton style="orange300" onClick={onSubmit} disabled={true}>
        등록하기
      </SolidButton>
    </div>
  );
};

export default MainButton;
