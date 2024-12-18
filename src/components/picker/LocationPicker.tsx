import { useModal } from "@/hooks/useModal";
import { cls } from "@/utils/dynamicTailwinds";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LocationPickerProps {
  initialLocation: string;
}

const LocationPicker = ({ initialLocation }: LocationPickerProps) => {
  const [location, setLocation] = useState<string>(initialLocation || "");
  const { openModal } = useModal();

  useEffect(() => {
    if (initialLocation) {
      setLocation(initialLocation);
    }
  }, [initialLocation]);

  return (
    <section className="flex h-[92px] w-[327px] flex-col gap-4 text-md pc:h-[112px] pc:w-[640px] pc:text-xl">
      <h3 className="font-medium text-black-400">
        근무 위치 <span className="text-orange-300">*</span>
      </h3>
      <button
        type="button"
        className={cls(
          "flex h-[54px] w-full items-center gap-2 rounded-lg bg-background-200 px-4 py-[14px] pc:h-[64px] pc:px-6",
          location ? "text-black-400" : "text-gray-400"
        )}
        onClick={() => openModal("SelectLocationModal")}
      >
        <div className="relative size-6 pc:size-9">
          <Image src="/icon/pin-md.svg" fill alt="핀 아이콘" />
        </div>
        <span>{location || "위치를 입력해주세요."}</span>
      </button>
    </section>
  );
};

export default LocationPicker;
