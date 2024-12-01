"use client";

import { useState } from "react";
import Image from "next/image";

const TimePicker = () => {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("24:00");
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  return (
    <div className="flex h-[54px] w-[327px] gap-[27px] text-lg pc:h-[64px] pc:w-[456px] pc:gap-[36px] pc:text-xl">
      <button
        onClick={() => setStartOpen(!startOpen)}
        className="flex items-center gap-2 rounded-[8px] bg-background-200 p-[14px] text-black-400"
      >
        <Image src="/icon/clock-blank.svg" width={24} height={24} alt="" />
        <span className="flex-grow">{startTime}</span>
        <Image
          src={
            startOpen
              ? "/icon/arrow-fill-top.svg"
              : "/icon/arrow-fill-bottom.svg"
          }
          width={24}
          height={24}
          alt=""
        />
      </button>
      <button
        onClick={() => setEndOpen(!endOpen)}
        className="flex items-center gap-2 rounded-[8px] bg-background-200 p-[14px] text-black-400"
      >
        <Image src="/icon/clock-blank.svg" width={24} height={24} alt="" />
        <span className="flex-grow">{endTime}</span>
        <Image
          src={
            endOpen ? "/icon/arrow-fill-top.svg" : "/icon/arrow-fill-bottom.svg"
          }
          width={24}
          height={24}
          alt=""
        />
      </button>
    </div>
  );
};

export default TimePicker;
