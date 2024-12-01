"use client";

import DatePicker from "./Datepicker";
import CalendarContainer from "../CalendarContainer";
import { useAtomValue } from "jotai";
import { calendarAtom } from "@/atoms/calendarAtom";

const DatePickerCalendar = () => {
  const isOpen = useAtomValue(calendarAtom);

  return (
    <>
      <DatePicker />
      {isOpen && <CalendarContainer />}
    </>
  );
};

export default DatePickerCalendar;
