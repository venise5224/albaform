"use client";

import { useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-between p-6 pc:m-0 pc:w-[640px]">
      <h2 className="text-xl font-semibold text-black-500 pc:text-3xl">
        알바폼 만들기
      </h2>
      <button
        onClick={() => router.push("/albalist/owner")}
        className="rounded-lg bg-gray-100 px-3.5 py-2 text-md font-semibold text-white transition-colors hover:bg-orange-300 pc:text-xl"
      >
        작성 취소
      </button>
    </div>
  );
};

export default Title;
