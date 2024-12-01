"use client";
import DatePickerCalendar from "@/components/datepicker/DatePickerCalendar";

const ModalPage = () => {

  return (
    <div className="mt-[50px] flex flex-col gap-[60px] pl-[30px]">
      <DatePickerCalendar />
      <div>
        <button>캘린더 피커 테스트</button>
      </div>
    </div>
  );
};

export default ModalPage;
