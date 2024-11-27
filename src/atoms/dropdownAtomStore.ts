import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const dropdownTriggerAtom = atomFamily((id: string) => atom(false));

export const applicationStatusAtom = atom<boolean | undefined>(undefined);

export const editDeleteDropdownAtom = atom(false);

export const editDeleteOpenAtom = atomFamily((id: string) => atom(false));
