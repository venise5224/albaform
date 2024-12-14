"use client";

import { useModal } from "@/hooks/useModal";

const Page = () => {
  const { openModal } = useModal();

  return (
    <div>
      <button onClick={() => openModal("MyApplicationModal")}>
        지원 내역 제출 모달
      </button>
    </div>
  );
};

export default Page;
