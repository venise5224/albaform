"use client";

import RangePicker from "./RangePicker";
import CalendarContainer from "../CalendarContainer";
import { useAtomValue } from "jotai";
import { calendarAtom } from "@/atoms/calendarAtom";

const DatePickerCalendar = () => {
  const isOpen = useAtomValue(calendarAtom);

  return (
    <div className="relative">
      <RangePicker />
      {isOpen && <CalendarContainer />}
    </div>
  );
};

export default DatePickerCalendar;
