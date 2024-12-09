"use client";

import Image from "next/image";

const ShareButton = () => {
  const handleClick = () => {
    // 공유하기 기능 비즈니스 로직 추가해야 함.
  };
  return (
    <button
      className="flex size-[54px] items-center justify-center rounded-full bg-orange-300 shadow-md pc:size-[64px]"
      onClick={handleClick}
    >
      <Image src="/icon/link.svg" width={24} height={24} alt="공유하기 버튼" />
    </button>
  );
};

export default ShareButton;
