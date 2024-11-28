import { useSetAtom } from "jotai";
import { ToastType } from "@/types/toast";
import { toastAtom } from "@/atoms/toastAtomStore";

export const useToast = () => {
  const setToasts = useSetAtom(toastAtom);

  const addToast = (
    message: string | JSX.Element,
    type: ToastType["type"] = "info"
  ) => {
    // ID 생성
    const id = Math.random().toString(36).slice(2, 11);

    const newToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    // 자동 제거
    // setTimeout(() => {
    //   setToasts((prev) => prev.filter((toast) => toast.id !== id));
    // }, 3000);
  };

  return { addToast };
};
