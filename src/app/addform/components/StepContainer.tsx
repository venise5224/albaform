"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import StepOneContents from "./StepOneContents";
import StepTwoContents from "./StepTwoContents";
import StepThreeContents from "./StepThreeContents";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

const StepContainer = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<z.infer<typeof addFormSchema>>({
    resolver: zodResolver(addFormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      recruitmentStartDate: "",
      recruitmentEndDate: "",
      numberOfPositions: 0,
      gender: "",
      education: "",
      age: "",
      preferred: "",
      location: "",
      workStartDate: "",
      workEndDate: "",
      workStartTime: "",
      workEndTime: "",
      workDays: [],
      isNegotiableWorkDays: false,
      hourlyWage: 0,
      isPublic: false,
    },
  });

  const compoentsByStepArr = [
    { step: "stepOne", component: StepOneContents },
    { step: "stepTwo", component: StepTwoContents },
    { step: "stepThree", component: StepThreeContents },
  ];

  return (
    <form className="p-6">
      {compoentsByStepArr.map((component) => (
        <>
          {step === component.step && (
            <component.component
              key={component.step}
              register={register}
              errors={errors}
            />
          )}
        </>
      ))}
    </form>
  );
};

export default StepContainer;
