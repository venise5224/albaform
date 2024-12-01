"use client";

import { useState } from "react";
import Image from "next/image";
import PickableList from "./PickableList";

type labelType = {
  label: "모집인원" | "성별" | "학력" | "연령" | "우대사항";
};

const RequirementPicker = ({ label }: labelType) => {
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex h-[54px] w-[327px] items-center rounded-lg bg-background-200 p-[14px] px-6 text-lg text-black-400 pc:h-[64px] pc:w-[640px] pc:px-8 pc:text-xl"
    >
      <span className="flex-grow text-left text-gray-400">
        {value ? value : "선택"}
      </span>
      <Image src="/icon/arrow-fill-bottom.svg" width={28} height={28} alt="" />
      {label && isOpen && (
        <PickableList setValue={setValue} setIsOpen={setIsOpen} label={label} />
      )}
    </button>
  );
};

export default RequirementPicker;
