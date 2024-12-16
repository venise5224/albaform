"use client";

import { useEffect, useState } from "react";
import CheckBoxButton from "../button/CheckBoxButton";
import { cls } from "@/utils/dynamicTailwinds";

interface WeekPickerProps {
  setWeeklyWorkDays: (days: string[]) => void;
  initialWeeklyWorkDays: string[];
  setIsNegotiable: (key: "isNegotiableWorkDays") => void;
  checked: boolean;
}

const WeekPicker = ({
  setWeeklyWorkDays,
  initialWeeklyWorkDays,
  setIsNegotiable,
  checked,
}: WeekPickerProps) => {
  const weekList = ["일", "월", "화", "수", "목", "금", "토"];
  const [selectedWeeks, setSelectedWeeks] = useState(
    initialWeeklyWorkDays || []
  );

  const isSelectedWeek = (week: string) => {
    return selectedWeeks.includes(week);
  };

  const toggleSelect = (week: string) => {
    setSelectedWeeks((prev) =>
      prev.includes(week)
        ? prev.filter((item) => item !== week)
        : [...prev, week]
    );
  };

  useEffect(() => {
    setWeeklyWorkDays(selectedWeeks);
  }, [selectedWeeks, setWeeklyWorkDays]);

  return (
    <section className="flex w-[327px] flex-col gap-4 text-lg pc:mt-4 pc:w-[640px] pc:text-xl">
      <h3 className="text-md font-medium pc:text-xl">
        근무 요일 <span className="text-orange-300">*</span>
      </h3>
      <div className="flex h-[48px] w-[327px] gap-[10px] pc:h-[64px] pc:w-[456px] pc:gap-[17px]">
        {weekList.map((week) => (
          <button
            type="button"
            key={week}
            onClick={() => toggleSelect(week)}
            className={cls(
              "flex h-[48px] w-[38px] items-center justify-center rounded-[12px] px-3 py-[6px] transition-all hover:bg-orange-200 hover:text-white pc:h-[64px] pc:w-[50px] pc:px-[16px] pc:py-[10px]",
              isSelectedWeek(week)
                ? "bg-orange-200 text-white"
                : "bg-background-200 text-gray-500"
            )}
          >
            {week}
          </button>
        ))}
      </div>
      <CheckBoxButton
        name="요일 협의 가능"
        onChange={() => setIsNegotiable("isNegotiableWorkDays")}
        checked={checked}
      />
    </section>
  );
};

export default WeekPicker;
