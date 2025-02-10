"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ImageListItem {
  id: number;
  lg: string;
  sm: string;
}

const LandingImage = ({ list }: { list: ImageListItem }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null); // 요소를 참조하기 위한 ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 요소가 화면에 보이면 애니메이션 시작
        }
      },
      {
        threshold: 0.5, // 요소의 50%가 보이면 애니메이션 시작
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // observer 시작
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // 컴포넌트 언마운트 시 observer 해제
      }
    };
  }, []);

  return (
    <div
      ref={elementRef} // ref를 요소에 연결
      className={`relative h-[344px] w-[327px] pc:h-[640px] pc:w-[1140px] tablet:h-[320px] tablet:w-[570px] ${
        isVisible
          ? list.id % 2 === 0
            ? "animate-slide-in-right"
            : "animate-slide-in-left"
          : ""
      }`}
    >
      <Image src={list.lg} fill alt="이미지" className="mobile:hidden" />
      <Image
        src={list.sm}
        fill
        alt="이미지"
        className="pc:hidden tablet:hidden"
      />
    </div>
  );
};

export default LandingImage;
