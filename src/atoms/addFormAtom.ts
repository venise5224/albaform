import { AddFormStepProps } from "@/types/addform";
import { atom } from "jotai";

interface AlbaformCreateStep {
  title?: string;
  value: string;
  stepNum?: number;
}

export const addFormStepAtom = atom<AlbaformCreateStep>({
  title: "모집 내용",
  value: "stepOne",
  stepNum: 1,
});

export const currentImageListAtom = atom<File[]>([]);

export const temporaryDataByStepAtom = atom<AddFormStepProps>({});

// 등록 버튼 클릭 시 트리거
export const addFromSubmitTriggerAtom = atom<boolean>(false);

// 등록 버튼 비활성화
export const addFormSubmitDisabledAtom = atom<boolean>(false);

// 등록 중 여부
export const addFormIsSubmittingAtom = atom<boolean>(false);
