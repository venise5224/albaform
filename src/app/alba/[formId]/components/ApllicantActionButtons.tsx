"use client";

import isPast from "@/utils/isPast";
import SolidButton from "@/components/button/SolidButton";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";

type ApllicantActionButtonsProps = {
  formId: string;
  recruitmentEndDate: string;
  isLogin: boolean;
};

const ApllicantActionButtons = ({
  formId,
  recruitmentEndDate,
  isLogin,
}: ApllicantActionButtonsProps) => {
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const { openModal } = useModal();
  const { addToast } = useToast();

  useEffect(() => {
    if (isPast(recruitmentEndDate)) setDisabled(true);
  }, [recruitmentEndDate]);

  const submitApply = () => {
    if (isLogin) router.push(`/apply/${formId}`);
    else addToast("로그인이 필요한 서비스입니다.", "warning");
  };

  const showMyApplication = () => {
    if (isLogin) router.push(`/myapply/${formId}`);
    else openModal("GetMyApplicationModal");
  };

  return (
    <>
      <SolidButton
        icon={disabled ? "" : "/icon/write-fill-md.svg"}
        style={disabled ? "gray100" : "orange300"}
        disabled={disabled}
        onClick={submitApply}
      >
        {disabled ? "모집 완료" : "지원하기"}
      </SolidButton>
      <SolidButton
        icon="/icon/document-md.svg"
        style="outOrange300"
        onClick={showMyApplication}
      >
        내 지원 내역 보기
      </SolidButton>
    </>
  );
};

export default ApllicantActionButtons;
