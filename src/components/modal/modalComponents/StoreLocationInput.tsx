"use client";

import Image from "next/image";
import ErrorText from "@/components/errorText/ErrorText";
import { changeCEOInfoSchema } from "@/schema/modal/changeCEOInfoSchema";
import { cls } from "@/utils/dynamicTailwinds";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { useModal } from "@/hooks/useModal";
import { useAtomValue } from "jotai";
import { addressAtom } from "@/atoms/addressAtom";
import { useEffect } from "react";

const StoreLocationInput = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<z.infer<typeof changeCEOInfoSchema>>();
  const { openModal } = useModal();
  const address = useAtomValue(addressAtom);

  useEffect(() => {
    if (address) {
      setValue("location", address); // location 값을 address로 업데이트
    }
  }, [address, setValue]);

  return (
    <div className="relative flex flex-col">
      <label htmlFor="location" className="labelStyle mt-[17px] pc:mt-[32px]">
        가게 위치
        <span className="text-red"> *</span>
      </label>

      <label
        className={cls(
          "flex cursor-pointer items-center",
          "form-input-base mt-[8px] pl-11 text-md pc:mt-[16px]",
          address ? "text-black-400" : "text-gray-300"
        )}
      >
        <div className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          {address ? address : "위치를 입력해주세요."}
        </div>

        <input
          hidden
          id="location"
          {...register("location")}
          type="text"
          onClick={() => openModal("SelectLocationModal")}
        />
        <ErrorText error={errors.location}>
          {errors.location?.message}
        </ErrorText>

        <Image
          src="/icon/pin-fill-lg.svg"
          alt="가게 위치"
          width={36}
          height={36}
          className="absolute bottom-2 left-2"
        />
      </label>
    </div>
  );
};

export default StoreLocationInput;
