"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cls } from "@/utils/dynamicTailwinds";

const Carousel = ({ imageUrls }: { imageUrls: string[] }) => {
  const [isRenderingIndex, setIsRenderingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRenderingIndex((prevIndex) => (prevIndex + 1) % 3); // 다음 div로 이동, 3번째 이후는 첫번째로
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);

  return (
    <section className="relative h-[260px] w-screen pc:h-[562px]">
      {/* 캐러셀 이미지 */}
      {imageUrls.map((imageUrl, index) => (
        <figure
          key={index}
          className={cls(
            "absolute left-0 top-0 h-full w-full transition-opacity duration-1000",
            isRenderingIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
          )}
        >
          <Image src={imageUrl} fill alt="캐러샐 이미지" />
        </figure>
      ))}
      {/* 인디케이터 */}
      <div className="absolute bottom-[15px] left-0 right-0 z-10 flex justify-center">
        <div className="flex space-x-2">
          {imageUrls.map((image, index) => (
            <div
              key={index}
              className={cls(
                "size-2 rounded-full pc:size-3",
                index === isRenderingIndex ? "bg-white" : "bg-gray-100"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
