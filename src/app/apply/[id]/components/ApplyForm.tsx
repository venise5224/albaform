"use client";

import ApplyFormButton from "./ApplyFormButton";
import ApplyFormInputList from "./ApplyFormInputList";
import { applySchema } from "@/schema/apply/applySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/useToast";
import { applyFormActions } from "../actions/applyFormAction";
import { uploadResumeAction } from "../actions/uploadResumeAction";
import { useRouter } from "next/navigation";

const ApplyForm = ({ id }: { id: string }) => {
  const { addToast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<z.infer<typeof applySchema>>({
    resolver: zodResolver(applySchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phoneNumber: "",
      experienceMonths: "",
      resumeName: "",
      resumeId: "",
      introduction: "",
      password: "",
    },
  });

  //폼 제출 기능
  const onSubmit = async (data: z.infer<typeof applySchema>) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value || "");
    });

    try {
      const response = await applyFormActions(formData, id);

      if (response.status !== 200) {
        return addToast(response.message as string, "warning");
      }

      addToast("지원서 제출에 성공하였습니다", "success");
    } catch (error) {
      console.error("지원서 제출 오류:", error);
      addToast("서버 오류로 인해 지원서 제출에 실패하였습니다", "warning");
    }
  };

  //이력서 제출 기능
  const handleUploadResume = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const response = await uploadResumeAction(file);

      if (response.status !== 201) {
        addToast(response.message as string, "warning");
        return;
      }

      setValue("resumeName", response.data.resumeName);
      setValue("resumeId", response.data.resumeId.toString());

      addToast("이력서 업로드에 성공하였습니다", "success");
      router.push(`/alba/${id}`);
    } catch (error) {
      console.error("이력서 업로드 오류:", error);
      addToast(
        "서버 오류로 인해 이력서 업로드 중 오류가 발생했습니다.",
        "warning"
      );
    }
  };

  //임시 저장 기능 (현 상태 그대로 로컬스토리지에 저장)
  const handleSave = () => {
    const ApplyFormData = watch();

    localStorage.setItem("ApplyFormData", JSON.stringify(ApplyFormData));
    addToast("임시 저장 완료", "success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[23px] pc:mt-[36px]">
      <ApplyFormInputList
        register={register}
        errors={errors}
        watch={watch}
        setValue={setValue}
        handleUploadResume={handleUploadResume}
      />

      <ApplyFormButton
        onSave={handleSave}
        isSubmitting={isSubmitting}
        isValid={isValid}
      />
    </form>
  );
};

export default ApplyForm;
