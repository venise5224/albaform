"use client";

import Image from "next/image";
import instance from "@/lib/instance";
import { cls } from "@/utils/dynamicTailwinds";

const ScrapButton = ({
  isScrapped,
  formId,
}: {
  isScrapped: boolean;
  formId: number;
}) => {
  // 스크랩이 안되어 있으면 클릭시 스크롭 등록 요청을 보내고, 되어있으면 취소 요청을 보내는 로직
  const toggleScrap = async () => {
    if (isScrapped) {
      try {
        await instance(
          `${process.env.NEXT_PUBLIC_API_URL}/forms/${formId}/scrap`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("알바폼 스크랩 취소에 실패했습니다.", error);
      }
    } else {
      try {
        await instance(
          `${process.env.NEXT_PUBLIC_API_URL}/forms/${formId}/scrap`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("알바폼 스크랩 등록에 실패했습니다.", error);
      }
    }
  };

  return (
    <button
      className={cls(
        "flex size-[54px] items-center justify-center rounded-full shadow-md pc:size-[64px]",
        isScrapped ? "bg-orange-50" : "border border-line-100 bg-gray-50"
      )}
      disabled={isScrapped}
      onClick={toggleScrap}
    >
      <Image
        src={
          isScrapped
            ? "/icon/bookmark-orange.svg"
            : "/icon/bookmark-fill-md.svg"
        }
        width={32}
        height={32}
        alt="공유하기 버튼"
      />
    </button>
  );
};

export default ScrapButton;
