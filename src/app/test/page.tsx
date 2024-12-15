"use client";

import { useModal } from "@/hooks/useModal";

const Page = () => {
  const { openModal } = useModal();

  return (
    <div>
      <div>
        <button onClick={() => openModal("SelectLocationModal")}>
          위치 선택 모달
        </button>
      </div>
      <div>
        <button onClick={() => openModal("ChangeCEOInfoModal")}>
          사장님 정보 수정 모달
        </button>
      </div>
      <div>
        <button onClick={() => openModal("ChangePasswordModal")}>
          비밀번호 수정 모달
        </button>
      </div>
    </div>
  );
};

export default Page;
