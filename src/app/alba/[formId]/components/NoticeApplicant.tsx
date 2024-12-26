"use client";

import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/useToast";

const NoticeApplicant = ({ count }: { count: number }) => {
  const { addToast } = useToast();
  const hasShownToast = useRef(false);

  useEffect(() => {
    const showToast = () => {
      if (!hasShownToast.current && count > 0) {
        setTimeout(() => {
          addToast(<span> 현재 {count}명이 지원했어요!</span>, "info");
        }, 0);
        hasShownToast.current = true;
      }
    };

    showToast();
  }, [count, addToast]);

  return null;
};

export default NoticeApplicant;
