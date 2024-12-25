"use client";

import SolidButton from "@/components/button/SolidButton";
import { useToast } from "@/hooks/useToast";
import { applySchema } from "@/schema/apply/applySchema";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const ApplyFormButton = ({ isLoading }: { isLoading: boolean }) => {
  const {
    getValues,
    formState: { isSubmitting, isValid },
  } = useFormContext<z.infer<typeof applySchema>>();
  const { addToast } = useToast();

  //임시 저장 기능 (현 상태 그대로 로컬스토리지에 저장)
  const handleSave = () => {
    const formData = getValues();
    localStorage.setItem("applyFormData", JSON.stringify(formData));
    addToast("임시 저장 완료", "success");
  };

  return (
    <div className="mt-[62px] flex flex-col gap-[10px] pc:mt-[88px] pc:flex-row pc:gap-[8px]">
      <SolidButton
        size="xl"
        style="outOrange300"
        type="button"
        disabled={isSubmitting}
        onClick={handleSave}
      >
        임시 저장
      </SolidButton>

      <SolidButton
        size="xl"
        style="orange300"
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        {isLoading ? "로딩 중..." : "작성 완료"}
      </SolidButton>
    </div>
  );
};

export default ApplyFormButton;
