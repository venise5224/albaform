"use client";

import { useSearchParams } from "next/navigation";
import NavMenu from "./NavMenu";
import AlbatalkFilterDropdown from "@/components/dropdown/AlbatalkFilterDropdown";
import PublicDropdown from "@/components/dropdown/PublicDropdown";
import OrderByDropdown from "@/components/dropdown/OrderByDropdown";
import ApplicationDropdown from "@/components/dropdown/ApplicationDropdown";

const NavContainer = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "post"; // 기본값은 "post"로 설정

  return (
    <>
      <div className="pc:mt-[46px] pc:flex pc:items-center pc:justify-between">
        <div className="mt-6 flex justify-start pc:mt-0 tablet:mt-[30px]">
          <NavMenu />
        </div>
        {tab === "post" && (
          <div className="mt-4 flex justify-end pc:mt-0">
            <AlbatalkFilterDropdown />
          </div>
        )}
      </div>
      {tab === "scrap" && (
        <div className="mt-[30px] flex items-center justify-between">
          <div className="flex gap-[10px] pc:gap-4">
            <PublicDropdown />
            <ApplicationDropdown />
          </div>
          <OrderByDropdown />
        </div>
      )}
    </>
  );
};

export default NavContainer;
