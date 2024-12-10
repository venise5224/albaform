"use client";

import Image from "next/image";

const ShareButton = () => {
  const handleClick = () => {
    // 공유하기 기능 비즈니스 로직 추가해야 함.
    // 모달이 나타나면서 안에서는 현재 링크가 보이고 "링크 복사 버튼",
    // SNS 로고가 나열되고 각 로고를 누르면 해당하는 SNS로 공유가 되는 기능이 있으면 좋을 것 같음.
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
