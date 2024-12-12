import { useFormContext } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { temporaryDataByStepAtom } from "@/atoms/addFormAtom";
import { useSetAtom } from "jotai";
import Location from "./stepThree/Location";
import RecruitmentDate from "./stepThree/RecruitmentDate";
import WorkingTime from "./stepThree/WorkingTime";
import WorkDate from "./stepThree/WorkDate";
import HourlyWage from "./stepThree/HourlyWage";
import IsPublicCheck from "./stepThree/IsPublicCheck";
import { useEffect, useMemo, useState } from "react";

const StepThreeContents = () => {
  const { watch, setValue } = useFormContext<z.infer<typeof addFormSchema>>();
  const setTemporaryDataByStep = useSetAtom(temporaryDataByStepAtom);
  const [loading, setLoading] = useState(true);

  const stepThreeData = useMemo(() => {
    return {
      location: watch("location"),
      workStartDate: watch("workStartDate"),
      workEndDate: watch("workEndDate"),
      workStartTime: watch("workStartTime"),
      workEndTime: watch("workEndTime"),
      workDays: watch("workDays"),
      hourlyWage: Number(watch("hourlyWage")),
      isPublic: watch("isPublic"),
      isNegotiableWorkDays: watch("isNegotiableWorkDays"),
    };
  }, [watch]);

  // 임시 데이터 atom 업데이트
  useEffect(() => {
    setTemporaryDataByStep({
      stepThree: stepThreeData,
    });
  }, [stepThreeData, setTemporaryDataByStep]);

  // 임시 데이터 로컬스토리지에서 불러오기
  useEffect(() => {
    const localStorageData = localStorage.getItem("stepThree");
    if (localStorageData) {
      const data = JSON.parse(localStorageData);
      setValue("location", data.location);
      setValue("workStartDate", data.workStartDate);
      setValue("workEndDate", data.workEndDate);
      setValue("workStartTime", data.workStartTime);
      setValue("workEndTime", data.workEndTime);
      setValue("workDays", data.workDays);
      setValue("hourlyWage", data.hourlyWage);
      setValue("isPublic", data.isPublic);
      setValue("isNegotiableWorkDays", data.isNegotiableWorkDays);
    }
    setLoading(false);
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
