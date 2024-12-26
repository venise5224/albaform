"use client";

import { useEffect, useRef } from "react";
import { useModal } from "@/hooks/useModal";
import isPast from "@/utils/isPast";

const NoticeIsClosed = ({ closedDate }: { closedDate: string }) => {
  const { openModal } = useModal();
  const hasShownToast = useRef(false);

  useEffect(() => {
    const showModal = () => {
      if (!hasShownToast.current && isPast(closedDate)) {
        openModal("ClosedAlbaformModal");
        hasShownToast.current = true;
      }
    };

    showModal();
  }, [openModal, closedDate]);

  return null;
};

export default NoticeIsClosed;
