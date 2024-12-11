"use client";

import Image from "next/image";
import ModalContainer from "../modalContainer/ModalContainer";
import SolidButton from "@/components/button/SolidButton";
import useViewPort from "@/hooks/useViewport";
import { useModal } from "@/hooks/useModal";
import { useParams } from "next/navigation";
import instance from "@/lib/instance";
import { useToast } from "@/hooks/useToast";

const DeleteAlbaformModal = () => {
  const { closeModal } = useModal();
  const { addToast } = useToast();
  const viewPort = useViewPort();
  const { id } = useParams();

  const handleDeleteAlbaform = async () => {
    if (!id) return;

    const response = await instance(
      `${process.env.NEXT_PUBLIC_API_URL}/forms/${id}`
    );

    if (response.status !== 204) {
      return {
        status: response.status,
        message: response.error,
      };
    }

    return {
      status: response.status,
    };
  };

  return (
    <ModalContainer>
      <div className="flex flex-col items-center pc:mx-10">
        <div className="modal-image-container">
          <Image
            src="/image/email-orange.svg"
            fill
            alt="모집마감"
            className="object-cover"
          />
        </div>
        <h2 className="modal-title">알바폼을 삭제할까요?</h2>
        <p className="modal-sub-title">삭제 후 정보를 복구할 수 없어요.</p>
        <div className="mt-6 h-[56px] w-[327px] pc:h-[72px] pc:w-[360px]">
          <SolidButton
            size={viewPort === "pc" ? "large" : "small"}
            style="orange300"
            type="button"
            onClick={() => {
              closeModal();
              handleDeleteAlbaform;
            }}
          >
            삭제하기
          </SolidButton>
        </div>
        <p
          onClick={() => closeModal()}
          className="mt-[16px] cursor-pointer text-lg font-regular text-orange-300 pc:mt-[20px] pc:text-xl"
        >
          다음에 할게요
        </p>
      </div>
    </ModalContainer>
  );
};

export default DeleteAlbaformModal;
