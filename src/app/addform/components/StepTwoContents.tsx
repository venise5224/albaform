import { useFormContext } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { useEffect, useState } from "react";
import RequirementPicker from "@/components/picker/RequirementPicker";
import { temporaryDataByStepAtom } from "@/atoms/addFormAtom";
import { useSetAtom } from "jotai";
import ErrorText from "@/components/errorText/ErrorText";

const StepTwoContents = () => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext<z.infer<typeof addFormSchema>>();
  const setTemporaryDataByStep = useSetAtom(temporaryDataByStepAtom);
  const [stepTwoData, setStepTwoData] = useState({
    numberOfPositions: 0,
    gender: "",
    education: "",
    age: "",
    preferred: "",
  });
  const fields = [
    "numberOfPositions",
    "gender",
    "education",
    "age",
    "preferred",
  ] as const;

  const inputArr = [
    {
      label: "모집인원",
      name: "numberOfPositions",
      errors: errors.numberOfPositions,
    },
    { label: "성별", name: "gender", errors: errors.gender },
    { label: "학력", name: "education", errors: errors.education },
    { label: "연령", name: "age", errors: errors.age },
    { label: "우대사항", name: "preferred", errors: errors.preferred },
  ];

  // 추출한 필수값을 폼에 적용
  useEffect(() => {
    if (stepTwoData) {
      fields.forEach((field) => {
        setValue(field, stepTwoData[field]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepTwoData, setValue]);

  // 임시 데이터 atom 업데이트
  useEffect(() => {
    setTemporaryDataByStep((prev) => ({
      ...prev,
      stepTwo: stepTwoData,
    }));
  }, [stepTwoData, setTemporaryDataByStep]);

  // 임시 데이터 있으면 로컬스토리지에서 불러오기
  useEffect(() => {
    const localStorageData = localStorage.getItem("stepTwo");
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      fields.forEach((field) => {
        setValue(field, parsedData[field]);
      });
      setStepTwoData(parsedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, setStepTwoData]);

  return (
    <div className="flex flex-col space-y-8 pc:w-[640px]">
      <div className="relative flex flex-col space-y-4">
        {inputArr.map((input) => (
          <div key={input.name}>
            <RequirementPicker
              label={
                input.label as
                  | "모집인원"
                  | "성별"
                  | "학력"
                  | "연령"
                  | "우대사항"
              }
              setStepTwoData={setStepTwoData}
              initialValue={stepTwoData}
            />
            <ErrorText error={input.errors}>{input.errors?.message}</ErrorText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTwoContents;
