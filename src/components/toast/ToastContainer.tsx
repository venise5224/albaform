"use client";

import { useState } from "react";
import { useAtom } from "jotai";
import { toastAtom } from "@/atoms/toastAtomStore";
import ToastItem from "./ToastItem";

const ToastContainer = () => {
  const [toasts, setToasts] = useAtom(toastAtom);
  const [animatingToast, setAnimatingToast] = useState<string | null>(null); // 애니메이션 상태 관리

  const removeToast = (id: string) => {
    setAnimatingToast(id);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
      setAnimatingToast(null);
    }, 300);
  };

  return (
    <div className="fixed left-1/2 top-[54px] z-50 flex -translate-x-1/2 flex-col gap-y-2 pc:top-[190px] pc:space-y-4 tablet:top-[60px] tablet:gap-y-3">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          isAnimating={animatingToast === toast.id}
          onRemove={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
