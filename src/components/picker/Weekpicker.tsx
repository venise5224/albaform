"use client";

import { useState } from "react";

const Weekpicker = () => {
  const weekList = ["일", "월", "화", "수", "목", "금", "토"];
  const [selectedWeek, setSelectedWeek] = useState([""]);

  return (
    <div className="flex h-[48px] w-[327px] gap-[10px] text-lg pc:h-[64px] pc:w-[456px] pc:gap-[17px] pc:text-xl">
      {weekList.map((week) => (
        <button
          onClick={(prev) => setSelectedWeek([...prev, week])}
          className="flex h-[48px] w-[38px] items-center justify-center rounded-[12px] bg-background-200 px-3 py-[6px] text-gray-500 hover:bg-orange-200 hover:text-white pc:h-[64px] pc:w-[50px] pc:px-[16px] pc:py-[10px]"
        >
          {week}
        </button>
      ))}
    </div>
  );
};

export default Weekpicker;
