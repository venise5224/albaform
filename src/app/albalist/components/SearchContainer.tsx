"use client";

import SearchInput from "@/components/input/SearchInput";
import PublicDropdown from "@/components/dropdown/PublicDropdown";
import ApplicationDropdown from "@/components/dropdown/ApplicationDropdown";
import OrderByDropdown from "@/components/dropdown/OrderByDropdown";
import { useAtomValue } from "jotai";
import { publicStatusAtom } from "@/atoms/dropdownAtomStore";
import { applicationStatusAtom } from "@/atoms/dropdownAtomStore";
import { orderByAtom } from "@/atoms/dropdownAtomStore";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchContainerProps {
  userType: string;
}

const SearchContainer = ({ userType }: SearchContainerProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const publicStatus = useAtomValue(publicStatusAtom);
  const applicationStatus = useAtomValue(applicationStatusAtom);
  const orderby = useAtomValue(orderByAtom);

  useEffect(() => {
    const params = new URLSearchParams();

    if (keyword) params.set("keyword", keyword);
    params.set("isPublic", String(publicStatus));
    params.set("isRecruiting", String(applicationStatus));
    params.set("orderBy", orderby.value);

    router.push(`/albalist/${userType}?${params.toString()}`);
  }, [router, publicStatus, applicationStatus, orderby]);

  return (
    <div className="mx-auto border-b border-line-100">
      <div className="m-auto px-6 pb-[10px] pt-[14px] pc:max-w-[1480px] pc:px-0 pc:pb-[20px] pc:pt-6 tablet:px-[72px]">
        <SearchInput placeholder="어떤 알바를 찾고 계세요?" />
        <div className="mt-[14px] flex items-center justify-between pc:mt-6">
          <div className="flex gap-x-[10px] pc:gap-x-4">
            <PublicDropdown />
            <ApplicationDropdown />
          </div>
          <OrderByDropdown />
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
