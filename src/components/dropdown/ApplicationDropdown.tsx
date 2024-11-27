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
    <DropdownMenu>
      <DropdownMenuTrigger
        checkedValue={
          valueArr.find((item) => item.status === applicationStatus)?.value
        }
        id="application"
      />
      <DropdownMenuContent id="application">
        {valueArr.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleClick(item.status)}
          >
            {item.value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApplicationDropdown;
