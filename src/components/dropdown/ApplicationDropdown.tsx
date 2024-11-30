"use client";

import { applicationStatusAtom } from "@/atoms/dropdownAtomStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import { useAtom } from "jotai";

// import한 컴포넌트에서 useAtomValue로 applicationStatus 값을 받으세요.
const ApplicationDropdown = () => {
  const [applicationStatus, setApplicationStatus] = useAtom(
    applicationStatusAtom
  );

  const handleClick = (status: boolean | undefined) => {
    setApplicationStatus(status);
  };

  const valueArr = [
    { value: "전체", status: undefined },
    { value: "모집 중", status: true },
    { value: "모집 마감", status: false },
  ];

  return (
    <DropdownMenu className="w-20 pc:w-[126px]">
      <DropdownMenuTrigger
        checkedValue={
          valueArr.find((item) => item.status === applicationStatus)?.value
        }
        id="application"
      />
      <DropdownMenuContent id="application" className="pc:w-[126px]">
        {valueArr.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleClick(item.status)}
            className="py-1.5 pl-2.5 pr-2 text-start pc:py-2 pc:pl-4 pc:pr-3 pc:text-2lg"
          >
            {item.value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApplicationDropdown;
