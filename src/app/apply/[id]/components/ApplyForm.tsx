"use client";

import ApplyFormButton from "./ApplyFormButton";
import { applySchema } from "@/schema/apply/applySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useToast } from "@/hooks/useToast";
import { applyFormActions } from "../actions/applyFormAction";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";
import { useAtom } from "jotai";
import { newWriteAtom } from "@/atoms/newWrite";
import NameInput from "./NameInput";
import PhoneNumberInput from "./PhoneNumberInput";
import ExperienceInput from "./ExperienceInput";
import ResumeNameInput from "./ResumeInput";
import IntroductionInput from "./IntroductionInput";
import PasswordInput from "./PasswordInput";

const defaultValues = {
  name: "",
  phoneNumber: "",
  experienceMonths: "",
  resumeName: "",
  resumeId: "",
  introduction: "",
  password: "",
};

const ApplyForm = ({ id }: { id: string }) => {
  const method = useForm<z.infer<typeof applySchema>>({
    resolver: zodResolver(applySchema),
    mode: "onChange",
    defaultValues,
  });
  const { addToast } = useToast();
  const { openModal } = useModal();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [newWrite, setNewWrite] = useAtom(newWriteAtom);

  //지원하기 폼 들어왔을 때 이어쓰기 모달 열림
  useEffect(() => {
    const applyFormData = localStorage.getItem("applyFormData");
    if (applyFormData) {
      openModal("NewWriteformModal");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //지원하기 폼 들어왔을 때 로컬스토리지 값 사용 여부
  useEffect(() => {
    const applyFormData = localStorage.getItem("applyFormData");
    if (!newWrite && applyFormData) {
      const parsedData = JSON.parse(applyFormData);
      method.reset(parsedData);
    }

    if (newWrite && !applyFormData) {
      method.reset(defaultValues);
      setNewWrite(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newWrite]);

  //폼 제출 기능
  const onSubmit = async (data: z.infer<typeof applySchema>) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value || "");
    });

    setLoading(true);
    try {
      const response = await applyFormActions(formData, id);

      if (response.status === 404) {
        return addToast(response.message as string, "warning");
      }

      addToast("지원서 제출에 성공하였습니다", "success");
      localStorage.removeItem("applyFormData");

      router.push(`/myapply/${id}`);
    } catch (error) {
      console.error("지원서 제출 오류:", error);
      addToast("서버 오류로 인해 지원서 제출에 실패하였습니다", "warning");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(onSubmit)}
        className="mt-[23px] pc:mt-[36px]"
      >
        <NameInput />
        <PhoneNumberInput />
        <ExperienceInput />
        <ResumeNameInput />
        <IntroductionInput />
        <PasswordInput />

        <ApplyFormButton isLoading={loading} />
      </form>
    </FormProvider>
  );
};

export default ApplyForm;
