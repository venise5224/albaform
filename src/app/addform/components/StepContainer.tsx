"use client";

import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { FormProvider } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  currentImageListAtom,
  addFormSubmitDisabledAtom,
  addFormIsSubmittingAtom,
  addFromSubmitTriggerAtom,
} from "@/atoms/addFormAtomStore";
import { useAtom, useSetAtom } from "jotai";
import { handleDateRangeFormat } from "@/utils/formatAddFormDate";
import { addFormImgUpload } from "../actions/addFormImgUpload";
import { useToast } from "@/hooks/useToast";
import { addFormSubmit } from "../actions/addFormSubmit";
import { useAddForm } from "@/hooks/useAddForm";
import StepContent from "./StepContent";
import { formatDate } from "@/utils/formatDate";
import { base64ToFile } from "@/utils/imageFileConvert";

interface StepContainerProps {
  albaForm?:
    | z.infer<typeof addFormSchema>
    | {
        status: number;
        message: string;
      };
  formId: string;
}

const StepContainer = ({ albaForm, formId }: StepContainerProps) => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "stepOne";
  const [currentImageList, setCurrentImageList] = useAtom(currentImageListAtom);
  const setAddFormSubmitDisabled = useSetAtom(addFormSubmitDisabledAtom);
  const setAddFormIsSubmitting = useSetAtom(addFormIsSubmittingAtom);
  const [submitTrigger, setSubmitTrigger] = useAtom(addFromSubmitTriggerAtom);
  const { addToast } = useToast();
  const { methods, loadAllTempData } = useAddForm();
  const router = useRouter();
  const isEdit = albaForm && !("status" in albaForm);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (albaForm && !isInitialized.current) {
      if ("status" in albaForm) {
        addToast(albaForm.message, "warning");
        return;
      } else {
        const workDates = formatDate(
          albaForm.workStartDate,
          albaForm.workEndDate
        );

        const recruitmentDates = formatDate(
          albaForm.recruitmentStartDate,
          albaForm.recruitmentEndDate
        );

        methods.reset({
          ...albaForm,
          workStartDate: workDates[0],
          workEndDate: workDates[1],
          recruitmentStartDate: recruitmentDates[0],
          recruitmentEndDate: recruitmentDates[1],
        });

        if (albaForm.imageUrls && albaForm.imageUrls.length > 0) {
          const convertToFile = async () => {
            const files = await Promise.all(
              albaForm.imageUrls!.map((url) => base64ToFile(url, "serverImage"))
            );
            setCurrentImageList(files);
          };
          convertToFile();
        }
        isInitialized.current = true;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albaForm]);

  // 등록 버튼 활성화 여부 (선택값이 많아서 isValid 미동작으로 값들이 모두 채워지면 활성화)
  useEffect(() => {
    const values = methods.getValues();
    const hourlyWage = values.hourlyWage;
    const workDays = values.workDays;

    const isComplete = Object.values(values).every((value) => {
      if (value === hourlyWage) {
        return value > 0;
      }

      if (value === workDays) {
        return workDays.length > 0;
      }

      if (typeof value === "number") {
        return value !== undefined;
      }

      const result = value !== undefined && value !== "";

      return result;
    });

    setAddFormSubmitDisabled(!isComplete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, methods.watch(), setAddFormSubmitDisabled]);

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
    loadAllTempData();
  }, [loadAllTempData]);

  const onSubmit = async (data: z.infer<typeof addFormSchema>) => {
    try {
      const imgFormData = new FormData();

      if (albaForm && !("status" in albaForm)) {
        const existingUrls = albaForm.imageUrls || [];

        const newImageList = currentImageList.filter(
          (img) => img.name !== "serverImage"
        );

        let uploadUrls: string[] = [];

        newImageList.forEach((img) => {
          imgFormData.append("image", img);
        });

        const imgResponse = await addFormImgUpload(imgFormData);

        if (imgResponse.status !== 201) {
          addToast(imgResponse.message as string, "warning");
          return;
        }

        if (imgResponse.data) {
          uploadUrls = [...existingUrls, ...imgResponse.data];
        }

        const dateFields = [
          "workStartDate",
          "workEndDate",
          "recruitmentStartDate",
          "recruitmentEndDate",
        ] as const;

        dateFields.forEach((field) => {
          methods.setValue(field, handleDateRangeFormat(data[field]));
        });

        methods.setValue("imageUrls", uploadUrls);

        const updatedData = methods.getValues();

        const formData = new FormData();
        formData.append("imageUrls", JSON.stringify(uploadUrls));
        formData.append("workDays", JSON.stringify(updatedData.workDays));

        Object.entries(updatedData).forEach(([key, value]) => {
          if (key !== "imageUrls" && key !== "workDays") {
            formData.append(key, value as string);
          }
        });

        const response = await addFormSubmit(formData, isEdit, formId);

        if (response.status === false) {
          addToast("입력하신 내용을 확인해주세요.", "warning");
          return;
        } else if (response.status !== 201 && response.status !== 200) {
          addToast(response.message as string, "warning");
          return;
        }

        const { id } = response;
        if (isEdit) {
          addToast("알바폼 수정이 완료되었습니다.", "success");
        } else {
          addToast("알바폼 등록이 완료되었습니다.", "success");
        }

        ["stepOne", "stepTwo", "stepThree"].forEach((step) => {
          localStorage.removeItem(step);
        });

        methods.reset();
        setCurrentImageList([]);

        router.push(`/alba/${id}`);
      }
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
        <StepContent step={step} />
      </form>
    </FormProvider>
  );
};

export default StepContainer;
