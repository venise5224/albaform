"use client";

import { useState } from "react";
import { useAtomValue } from "jotai";
import { calendarAtom } from "@/atoms/calendarAtom";
import RangePicker from "./RangePicker";
import CalendarContainer from "./CalendarContainer";

const DatePickerCalendar = () => {
  const isOpen = useAtomValue(calendarAtom);
  const [range, setRange] = useState<[string, string]>(["", ""]);

  return (
    <div className="relative">
      <RangePicker range={range} />
      {isOpen && <CalendarContainer setRange={setRange} />}
    </div>
  );
};

export default DatePickerCalendar;
