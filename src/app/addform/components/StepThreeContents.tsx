import { useFormContext } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { temporaryDataByStepAtom } from "@/atoms/addFormAtomStore";
import { useSetAtom } from "jotai";
import Location from "./stepThree/Location";
import RecruitmentDate from "./stepThree/RecruitmentDate";
import WorkingTime from "./stepThree/WorkingTime";
import WorkDate from "./stepThree/WorkDate";
import HourlyWage from "./stepThree/HourlyWage";
import IsPublicCheck from "./stepThree/IsPublicCheck";
import { useEffect, useMemo, useState } from "react";
import { AddFormStepProps } from "@/types/addform";

const StepThreeContents = () => {
  const { watch, setValue } = useFormContext<z.infer<typeof addFormSchema>>();
  const setTemporaryDataByStep = useSetAtom(temporaryDataByStepAtom);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fields = [
    "location",
    "workStartDate",
    "workEndDate",
    "workStartTime",
    "workEndTime",
    "workDays",
    "hourlyWage",
    "isPublic",
    "isNegotiableWorkDays",
  ] as const;

  const stepThreeData = useMemo(() => {
    return fields.reduce(
      (acc, field) => ({
        ...acc,
        [field]: field === "hourlyWage" ? Number(watch(field)) : watch(field),
      }),
      {} as NonNullable<AddFormStepProps["stepThree"]>
    );
  }, [watch, fields]);

  // 임시 데이터 atom 업데이트
  useEffect(() => {
    setTemporaryDataByStep((prev) => ({
      ...prev,
      stepThree: stepThreeData,
    }));
  }, [stepThreeData, setTemporaryDataByStep]);

  // 임시 데이터 로컬스토리지에서 불러오기
  useEffect(() => {
    const localStorageData = localStorage.getItem("stepThree");
    if (localStorageData) {
      const data = JSON.parse(localStorageData);
      fields.forEach((field) => {
        setValue(field, data[field]);
      });
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        잠시만 기다려주세요...
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-8 pc:w-[640px]">
      <Location />
      <RecruitmentDate />
      <WorkingTime />
      <WorkDate />
      <HourlyWage />
      <IsPublicCheck />
    </div>
  );
};

export default StepThreeContents;
