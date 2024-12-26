"use client";

import instance from "@/lib/instance";
import isPast from "@/utils/isPast";
import SolidButton from "@/components/button/SolidButton";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { AppliedAlbaData } from "@/types/alba";

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
  const [isApplied, setIsApplied] = useState(false);
  const router = useRouter();
  const { openModal } = useModal();
  const { addToast } = useToast();

  useEffect(() => {
    if (isPast(recruitmentEndDate)) setDisabled(true);
    // 회원이라면 페이지에 들어왔을 때 해당 알바폼에 지원한 이력이 있는지 체크해야 함.
    const confirmIsApplied = async () => {
      const res = await instance(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me/applications?limit=99`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      res.data.map((data: AppliedAlbaData) => {
        if (data.form.id === Number(formId)) setIsApplied(true);
      });
    };
    confirmIsApplied();
  }, [recruitmentEndDate, formId]);

  const submitApply = () => {
    if (isLogin) router.push(`/apply/${formId}`);
    else addToast("로그인이 필요한 서비스입니다.", "warning");
  };

  const showMyApplication = () => {
    if (isLogin) {
      if (isApplied) router.push(`/myapply/${formId}`);
      else addToast("지원한 내역이 없습니다.", "warning");
    } else openModal("GetMyApplicationModal");
  };

  return (
    <>
      <SolidButton
        size="2xl"
        icon={disabled ? "" : "/icon/write-fill-md.svg"}
        style={disabled ? "gray100" : "orange300"}
        disabled={disabled}
        onClick={submitApply}
      >
        {disabled ? "모집 완료" : "지원하기"}
      </SolidButton>
      <SolidButton
        size="2xl"
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
