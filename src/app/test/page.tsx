"use client";

import { useModal } from "@/hooks/useModal";

const TestPage = () => {
  const { openModal } = useModal();
  return (
    <div>
      <div>
        <button onClick={() => openModal("SelectProgressModal")}>
          진행 상태 수정 모달
        </button>
      </div>
    </div>
  );
};

export default TestPage;
