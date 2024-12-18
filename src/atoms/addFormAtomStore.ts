import { AddFormStepProps } from "@/types/addform";
import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

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

// 현재 이미지 리스트
export const currentImageListAtom = atom<File[]>([]);

// 임시 데이터
export const temporaryDataByStepAtom = atom<AddFormStepProps>({});

// 등록 버튼 클릭 시 트리거
export const addFromSubmitTriggerAtom = atom<boolean>(false);

// 등록 버튼 비활성화
export const addFormSubmitDisabledAtom = atom<boolean>(false);

// 등록 중 여부
export const addFormIsSubmittingAtom = atom<boolean>(false);

// 2단계 메뉴 안겹치도록 관리
export const stepTwoMenuOpenAtom = atom<string | null>(null);

// 각 단계 작성중 여부
export const stepActiveAtomFamily = atomFamily((step: string) =>
  atom<boolean>(false)
);
