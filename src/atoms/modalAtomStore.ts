"use client";

import { atom } from "jotai";
import { ModalType } from "@/types/modal";

//모달타입
export const modalAtom = atom<ModalType[]>([]);

//지원서 아이디
export const applicationIdAtom = atom<number | null>(null);
