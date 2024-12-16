"use client";

import Image from "next/image";
import ModalContainer from "../modalContainer/ModalContainer";
import SolidButton from "@/components/button/SolidButton";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";
import writeIcon from "@/../public/icon/write-fill-md.svg";

const LoginRequiredModal = () => {
  const router = useRouter();
  const { closeModal } = useModal();

  return (
    <ModalContainer>
      <div className="flex flex-col items-center pc:mx-10">
        <div className="modal-image-container">
          <Image src={writeIcon} fill alt="모집마감" className="object-cover" />
        </div>
        <h2 className="modal-title">로그인이 필요한 서비스입니다.</h2>
        <div className="mt-6 h-[56px] w-[327px] pc:h-[72px] pc:w-[360px]">
          <SolidButton
            style="orange300"
            type="button"
            onClick={() => {
              closeModal();
              router.back();
            }}
          >
            로그인
          </SolidButton>
        </div>
      </div>
    </ModalContainer>
  );
};

export default LoginRequiredModal;
