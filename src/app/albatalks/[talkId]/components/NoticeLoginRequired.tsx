"use client";

import { useEffect } from "react";
import { useModal } from "@/hooks/useModal";

const NoticeLoginRequired = ({
  accessToken,
}: {
  accessToken: string | undefined;
}) => {
  const { openModal } = useModal();

  useEffect(() => {
    if (!accessToken) openModal("LoginRequestModal");
  }, [openModal, accessToken]);

  return null;
};

export default NoticeLoginRequired;
