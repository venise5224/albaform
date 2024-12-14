"use client";

import { useState } from "react";
import { cls } from "../../utils/dynamicTailwinds";

interface HourlyWageInputProps {
  setHourlyWage: (value: string) => void;
  initialHourlyWage: string;
}

const HourlyWageInput = ({
  setHourlyWage,
  initialHourlyWage,
}: HourlyWageInputProps) => {
  const [inputValue, setInputValue] = useState(
    initialHourlyWage === "0" ? "" : initialHourlyWage
  );
  const [wage, setWage] = useState("9860");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const numericValue = Number(value);

    // 500만 이하 값만 허용
    if (numericValue <= 5000000) {
      setInputValue(value);
      setHourlyWage(value);
    }
  };

  return (
    <section className="flex h-[92px] w-[327px] flex-col gap-4 text-md pc:h-[112px] pc:w-[640px] pc:text-xl">
      <h3 className="font-medium text-black-400 pc:text-xl">
        시급 <span className="text-orange-300">*</span>
      </h3>
      <div
        className={cls(
          "flex h-[54px] w-full items-center justify-between gap-2 rounded-lg bg-background-200 px-4 py-[14px] pc:h-[64px] pc:px-6",
          inputValue ? "text-black-400" : "text-gray-400"
        )}
      >
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          onBlur={() => setWage(wage)}
          placeholder="9860"
          className="w-full bg-inherit"
        />
        <span className="text-right text-black-400">원</span>
      </div>
    </section>
  );
};

export default HourlyWageInput;
