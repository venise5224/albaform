"use client";

import { modalAtom } from "@/atoms/modalAtom";
import { ModalType } from "@/types/modal";
import { useSetAtom } from "jotai";

export const useModal = () => {
  const setModalType = useSetAtom(modalAtom);

  const openModal = (type: keyof typeof ModalType) => {
    setModalType(ModalType[type]);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return { openModal, closeModal };
};
