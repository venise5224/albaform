"use client";

import AlbatalkFilterDropdown from "@/components/dropdown/AlbatalkFilterDropdown";
import OrderByDropdown from "@/components/dropdown/OrderByDropdown";
import PublicDropdown from "@/components/dropdown/PublicDropdown";
import RecruitDropdown from "@/components/dropdown/RecruitDropdown";
import { useSearchParams } from "next/navigation";

const TabDropdown = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "post"; // 기본값은 "post"로 설정

  return (
    <div>
      {tab === "post" && <AlbatalkFilterDropdown />}
      {tab === "scrap" && (
        <>
          <OrderByDropdown />
          <PublicDropdown />
          <RecruitDropdown />
        </>
      )}
      {/* comment일 경우 아무 것도 렌더링하지 않음 */}
    </div>
  );
};

export default TabDropdown;
