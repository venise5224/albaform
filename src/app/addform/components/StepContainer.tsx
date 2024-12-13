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
import {
  currentImageListAtom,
  addFormSubmitDisabledAtom,
  addFormIsSubmittingAtom,
  addFromSubmitTriggerAtom,
} from "@/atoms/addFormAtom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { handleDateRangeFormat } from "@/utils/formatAddFormDate";
import { addFormImgUpload } from "../actions/addFormImgUpload";
import { useToast } from "@/hooks/useToast";
import { addFormSubmit } from "../actions/addFormSubmit";

const StepContainer = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "stepOne";
  const currentImageList = useAtomValue(currentImageListAtom);
  const setAddFormSubmitDisabled = useSetAtom(addFormSubmitDisabledAtom);
  const setAddFormIsSubmitting = useSetAtom(addFormIsSubmittingAtom);
  const [submitTrigger, setSubmitTrigger] = useAtom(addFromSubmitTriggerAtom);
  const { addToast } = useToast();
  const router = useRouter();

  const methods = useForm<z.infer<typeof addFormSchema>>({
    resolver: zodResolver(addFormSchema),
    mode: "onSubmit",
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
      hourlyWage: 0,
      isPublic: false,
    },
  });

  // 등록 버튼 활성화 여부
  useEffect(() => {
    if (!methods.formState.isValid) {
      setAddFormSubmitDisabled(true);
    } else {
      setAddFormSubmitDisabled(false);
    }
  }, [methods.formState.isValid, setAddFormSubmitDisabled]);

  // 등록 중 여부
  useEffect(() => {
    if (methods.formState.isSubmitting) {
      setAddFormIsSubmitting(true);
    } else {
      setAddFormIsSubmitting(false);
    }
  }, [methods.formState.isSubmitting, setAddFormIsSubmitting]);

  // 마운트 시 전체 임시저장 데이터 가져오기
  useEffect(() => {
    const loadAllTempData = () => {
      const TempDataArr = ["stepOne", "stepTwo", "stepThree"];

      TempDataArr.forEach((step) => {
        const localStorageData = localStorage.getItem(step);

        if (localStorageData) {
          const parsedData = JSON.parse(localStorageData);

          Object.entries(parsedData).forEach(([key, value]) => {
            if (key !== "tempImage") {
              methods.setValue(
                key as keyof z.infer<typeof addFormSchema>,
                value as z.infer<typeof addFormSchema>[keyof z.infer<
                  typeof addFormSchema
                >]
              );
            }
          });
        }
      });
    };

    loadAllTempData();
  }, [methods]);

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

      methods.setValue(
        "workStartDate",
        handleDateRangeFormat(data.workStartDate)
      );
      methods.setValue("workEndDate", handleDateRangeFormat(data.workEndDate));
      methods.setValue("imageUrls", imgResponse.data);

      const updatedData = methods.getValues();

      const formData = new FormData();
      formData.append("imageUrls", JSON.stringify(imgResponse.data));
      formData.append("workDays", JSON.stringify(updatedData.workDays));

      Object.entries(updatedData).forEach(([key, value]) => {
        if (key !== "imageUrls" && key !== "workDays") {
          formData.append(key, value as string);
        }
      });

      const response = await addFormSubmit(formData);

      if (response.status === false) {
        addToast("입력하신 내용을 확인해주세요.", "warning");
        return;
      } else if (response.status !== 201) {
        addToast(response.message as string, "warning");
        return;
      }

      const { id } = response;
      addToast("알바폼 등록이 완료되었습니다.", "success");

      ["stepOne", "stepTwo", "stepThree"].forEach((step) => {
        localStorage.removeItem(step);
      });

      methods.reset();
      router.push(`/alba/${id}`);
    } catch (error) {
      console.error("알바폼 등록 중 오류 발생", error);
      addToast("알바폼 등록 중 오류가 발생했습니다.", "warning");
    }
  };

  useEffect(() => {
    if (submitTrigger) {
      methods.handleSubmit(onSubmit)();
      setSubmitTrigger(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitTrigger]);

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
