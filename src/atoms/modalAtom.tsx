"use client";

import { atom } from "jotai";
import { ModalType } from "@/types/modal";

export const modalAtom = atom<ModalType | null>(null);
