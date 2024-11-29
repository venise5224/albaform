import { calendarAtom } from "@/atoms/calendarAtom";
import { useAtom } from "jotai";
import Image from "next/image";

const DatePicker = () => {
  const [isOpen, setIsOpen] = useAtom(calendarAtom);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex h-[54px] w-[327px] items-center rounded-lg border border-gray-200 bg-background-200 p-[14px] disabled:text-gray-400 pc:h-[64px] pc:w-[640px]"
    >
      <span className="relative size-6 pc:size-8">
        <Image src="/icon/calendar-md.svg" fill alt="" />
      </span>
      <span className="ml-2 text-lg text-black-400 pc:text-xl">
        시작일 ~ 종료일
      </span>
    </button>
  );
};

export default DatePicker;
