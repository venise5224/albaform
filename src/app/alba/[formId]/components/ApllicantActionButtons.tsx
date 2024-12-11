"use client";

import SolidButton from "@/components/button/SolidButton";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";

const ApllicantActionButtons = ({ formId }: { formId: string }) => {
  const router = useRouter();
  const { openModal } = useModal();

  return (
    <>
      <SolidButton
        icon="/icon/write-fill-md.svg"
        style="orange300"
        onClick={() => router.push(`/apply/${formId}`)}
      >
        지원하기
      </SolidButton>
      <SolidButton
        icon="/icon/document-md.svg"
        style="outOrange300"
        onClick={() => openModal("GetMyApplicationModal")}
      >
        내 지원 내역 보기
      </SolidButton>
    </>
  );
};

export default ApllicantActionButtons;
