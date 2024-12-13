"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import StepOneContents from "./StepOneContents";
import StepTwoContents from "./StepTwoContents";
import StepThreeContents from "./StepThreeContents";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { addFormLoadingAtom, currentImageListAtom } from "@/atoms/addFormAtom";
import { useAtomValue, useSetAtom } from "jotai";
import { handleDateRangeFormat } from "@/utils/formatAddFormDate";
import { addFormImgUpload } from "../actions/addFormImgUpload";
import { useToast } from "@/hooks/useToast";
import { addFormSubmit } from "../actions/addFormSubmit";

const StepContainer = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "stepOne";
  const currentImageList = useAtomValue(currentImageListAtom);
  const setAddFormLoading = useSetAtom(addFormLoadingAtom);
  const { addToast } = useToast();
  const router = useRouter();

  const methods = useForm<z.infer<typeof addFormSchema>>({
    resolver: zodResolver(addFormSchema),
    mode: "all",
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

  // 등록 버튼 활성화 여부
  useEffect(() => {
    if (!methods.formState.isValid || methods.formState.isSubmitting) {
      setAddFormLoading(false);
    } else {
      setAddFormLoading(true);
    }
  }, [
    methods.formState.isValid,
    methods.formState.isSubmitting,
    setAddFormLoading,
  ]);

  const componentsByStepArr = [
    { step: "stepOne", component: StepOneContents },
    { step: "stepTwo", component: StepTwoContents },
    { step: "stepThree", component: StepThreeContents },
  ];

  const onSubmit = async (data: z.infer<typeof addFormSchema>) => {
    try {
      const imgFormData = new FormData();
      currentImageList.forEach((img) => {
        imgFormData.append("image", img);
      });

      const imgResponse = await addFormImgUpload(imgFormData);

      if (imgResponse.status !== 201) {
        addToast(imgResponse.message as string, "warning");
        return;
      }

      const imageUrl: string[] = imgResponse.data.url;
      const currentWorkStart = data.workStartTime;
      const currentWorkEnd = data.workEndTime;
      methods.setValue(
        "workStartTime",
        handleDateRangeFormat(currentWorkStart)
      );
      methods.setValue("workEndTime", handleDateRangeFormat(currentWorkEnd));
      methods.setValue("imageUrls", imageUrl);

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const response = await addFormSubmit(formData);

      if (response.status !== 201) {
        addToast(response.message as string, "warning");
        return;
      }

      const { id } = response;
      addToast("알바폼 등록이 완료되었습니다.", "success");

      ["stepOne", "stepTwo", "stepThree"].forEach((step) => {
        localStorage.removeItem(step);
      });

      router.push(`/alba/${id}`);
    } catch (error) {
      console.error("알바폼 등록 중 오류 발생", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="p-6">
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
