"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PickableList from "./PickableList";
import { cls } from "@/utils/dynamicTailwinds";

interface TimePickerProps {
  setTime: (data: [string, string]) => void;
  initialTime: [string, string];
}

const TimePicker = ({ setTime, initialTime }: TimePickerProps) => {
  const [startTime, setStartTime] = useState({
    time: initialTime[0] || "시작시간",
    updated: false,
  });
  const [endTime, setEndTime] = useState({
    time: initialTime[1] || "종료시간",
    updated: false,
  });
  const [isStartButtonOpen, setIsStartButtonOpen] = useState(false);
  const [isEndButtonOpen, setIsEndButtonOpen] = useState(false);

  useEffect(() => {
    if (startTime.time || endTime.time) {
      setTime([startTime.time, endTime.time]);
    }
  }, [startTime.time, endTime.time, setTime]);

  useEffect(() => {
    if (initialTime[0] && initialTime[1]) {
      setStartTime({ time: initialTime[0], updated: true });
      setEndTime({ time: initialTime[1], updated: true });
    }
  }, [initialTime]);

  return (
    <section className="flex h-[92px] w-[327px] flex-col gap-4">
      <h3 className="text-md font-medium text-black-400 pc:text-xl">
        근무 시간 <span className="text-orange-300">*</span>
      </h3>
      <div className="flex h-[54px] w-full items-center justify-between text-lg pc:h-[64px] pc:w-[456px] pc:gap-[36px] pc:text-xl">
        {/* 시작시간 설정 버튼 */}
        <button
          type="button"
          onClick={() => setIsStartButtonOpen(!isStartButtonOpen)}
          className={cls(
            "relative flex w-[150px] items-center justify-between rounded-[8px] bg-background-200 p-[14px] pc:w-[210px]",
            startTime.updated
              ? startTime.time !== "시작시간"
                ? "text-black-400"
                : "text-gray-400"
              : "text-gray-400"
          )}
        >
          <Image src="/icon/clock-blank.svg" width={24} height={24} alt="" />
          <span className="flex-grow">{startTime.time}</span>
          <Image
            src={
              isStartButtonOpen
                ? "/icon/arrow-fill-top.svg"
                : "/icon/arrow-fill-bottom.svg"
            }
            width={24}
            height={24}
            alt=""
          />
          {isStartButtonOpen && (
            <PickableList
              label="근무시간"
              setIsOpen={setIsStartButtonOpen}
              setValue={setStartTime}
            />
          )}
        </button>

        {/* 종료시간 설정 버튼 */}
        <button
          type="button"
          onClick={() => setIsEndButtonOpen(!isEndButtonOpen)}
          className={cls(
            "relative flex w-[150px] items-center justify-between rounded-[8px] bg-background-200 p-[14px] pc:w-[210px]",
            endTime.updated
              ? endTime.time !== "종료시간"
                ? "text-black-400"
                : "text-gray-400"
              : "text-gray-400"
          )}
        >
          <Image src="/icon/clock-blank.svg" width={24} height={24} alt="" />
          <span className="flex-grow">{endTime.time}</span>
          <Image
            src={
              isEndButtonOpen
                ? "/icon/arrow-fill-top.svg"
                : "/icon/arrow-fill-bottom.svg"
            }
            width={24}
            height={24}
            alt=""
          />
          {isEndButtonOpen && (
            <PickableList
              label="근무시간"
              setIsOpen={setIsEndButtonOpen}
              setValue={setEndTime}
            />
          )}
        </button>
      </div>
    </section>
  );
};

export default TimePicker;
