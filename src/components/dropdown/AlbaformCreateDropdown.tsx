"use client";

import { addFormStepAtom } from "@/atoms/addFormAtomStore";
import { dropdownTriggerAtom } from "@/atoms/dropdownAtomStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import { useSearchParamsCustom } from "@/hooks/useSearchParamsCustom";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { useEffect } from "react";

// 알바폼 생성 컴포넌트 URL에서 albaformStep 값을 받아서 단계별 form을 표출하는데 사용하세요.
const AlbaformCreateDropdown = () => {
  const [currentStep, setCurrentStep] = useAtom(addFormStepAtom);
  const isOpen = useAtomValue(dropdownTriggerAtom("albaformCreate"));
  const { updateURL } = useSearchParamsCustom({
    key: "step",
    value: currentStep.value,
  });

  const handleClick = (value: string, stepNum: number, title: string) => {
    setCurrentStep({ title, value, stepNum });
    updateURL({ key: "step", value });
  };

  useEffect(() => {
    updateURL({ key: "step", value: currentStep.value });
  }, [currentStep.value, updateURL]);

  const itemArr = [
    { title: "모집 내용", value: "stepOne", stepNum: 1 },
    { title: "모집 조건", value: "stepTwo", stepNum: 2 },
    { title: "근무 조건", value: "stepThree", stepNum: 3 },
  ];

  return (
    <DropdownMenu className="pc:hidden">
      <DropdownMenuTrigger
        asChild
        id="albaformCreate"
        checkedValue={currentStep.value}
      >
        <div className="group flex w-[327px] items-center justify-between rounded-2xl bg-orange-300 px-6 py-3">
          <div className="flex items-center space-x-3">
            <span className="flex size-5 items-center justify-center rounded-full bg-white text-md font-bold text-orange-300">
              {currentStep.stepNum}
            </span>
            <h2 className="text-md font-bold text-white">
              {currentStep.title}
            </h2>
            <CreatingTag />
          </div>
          <Image
            src={
              isOpen
                ? "/icon/albaform-dropdown-off.svg"
                : "/icon/albaform-dropdown-on.svg"
            }
            alt="알바폼 생성 드롭다운"
            width={24}
            height={24}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        id="albaformCreate"
        className="w-[327px] rounded-2xl bg-orange-300"
      >
        {itemArr.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleClick(item.value, item.stepNum, item.title)}
            className="border-line-200"
          >
            {item.value !== currentStep.value && (
              <div className="group flex items-center space-x-3 bg-white px-6 py-3 transition-colors hover:bg-orange-300">
                <span className="flex size-5 items-center justify-center rounded-full bg-background-300 text-md font-bold text-gray-200 hover:bg-orange-300 group-hover:bg-orange-50 group-hover:text-orange-300">
                  {item.stepNum}
                </span>
                <h2 className="text-md font-bold text-black-100 group-hover:text-white">
                  {item.title}
                </h2>
              </div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlbaformCreateDropdown;

const CreatingTag = () => {
  return (
    <div className="rounded-full border-[1px] border-white bg-orange-200 px-2 py-1 text-xs text-white">
      작성중
    </div>
  );
};
