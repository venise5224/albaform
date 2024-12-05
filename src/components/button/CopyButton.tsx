"use client";

import { useToast } from "@/hooks/useToast";

const CopyButton = ({ text }: { text: string }) => {
  const { addToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => addToast("복사에 성공했습니다.", "info"))
      .catch(() => addToast("복사에 실패했습니다.", "error"));
  };

  return (
    <button
      className="ml-2 text-md text-orange-300 pc:text-xl"
      onClick={handleCopy}
    >
      복사
    </button>
  );
};

export default CopyButton;
