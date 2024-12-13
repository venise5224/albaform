"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import StepOneContents from "./StepOneContents";
import StepTwoContents from "./StepTwoContents";
import StepThreeContents from "./StepThreeContents";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";
import { currentImageListAtom } from "@/atoms/addFormAtom";
import { useAtomValue } from "jotai";

const StepContainer = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "stepOne";
  const currentImageList = useAtomValue(currentImageListAtom);

  const {
    formState: { isValid, isSubmitting },
  } = useForm<z.infer<typeof addFormSchema>>({
    resolver: zodResolver(addFormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      recruitmentStartDate: "",
      recruitmentEndDate: "",
      imageUrls: [],
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
      hourlyWage: "",
      isPublic: false,
    },
  });

  const methods = useForm<z.infer<typeof addFormSchema>>({
    resolver: zodResolver(addFormSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      recruitmentStartDate: "",
      recruitmentEndDate: "",
      imageUrls: [],
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
      hourlyWage: "",
      isPublic: false,
    },
  });

  const componentsByStepArr = [
    { step: "stepOne", component: StepOneContents },
    { step: "stepTwo", component: StepTwoContents },
    { step: "stepThree", component: StepThreeContents },
  ];

  return (
    <FormProvider {...methods}>
      <form className="p-6">
        {componentsByStepArr.map((component) => (
          <Fragment key={component.step}>
            {step === component.step && <component.component />}
          </Fragment>
        ))}
      </form>
    </FormProvider>
  );
};

export default StepContainer;
