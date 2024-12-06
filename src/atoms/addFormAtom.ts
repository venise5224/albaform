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
