"use client";

import { useToast } from "@/hooks/useToast";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectWarning = () => {
  const { addToast } = useToast();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const signinError = currentParams.get("nonMemberError");
    const roleError = currentParams.get("roleError");

    if (signinError) {
      addToast("해당 페이지로 이동하시려면 로그인이 필요합니다.", "warning");
    } else if (roleError) {
      addToast("해당 페이지로 이동하시려면 권한이 필요합니다.", "warning");
    }

    currentParams.delete("nonMemberError");
    currentParams.delete("roleError");
    router.replace(`${pathname}?${currentParams.toString()}`);
  }, [addToast, pathname, router]);

  return null;
};

export default RedirectWarning;
