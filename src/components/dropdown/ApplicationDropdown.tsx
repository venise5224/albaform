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

  const handleClick = (status: string) => {
    setApplicationStatus(status);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger checkedValue={applicationStatus} id="application" />
      <DropdownMenuContent id="application">
        <DropdownMenuItem onClick={() => handleClick("전체")}>
          전체
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClick("모집 중")}>
          모집 중
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClick("모집 마감")}>
          모집 마감
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApplicationDropdown;
