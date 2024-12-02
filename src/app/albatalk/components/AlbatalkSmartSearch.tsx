"use client";

import AlbatalkFilterDropdown from "@/components/dropdown/AlbatalkFilterDropdown";
import SearchInput from "@/components/input/SearchInput";
import { useAtomValue } from "jotai";
import { albatalkFilterAtom } from "@/atoms/dropdownAtomStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AlbatalkSmartSearch = () => {
  const filter = useAtomValue(albatalkFilterAtom);
  const router = useRouter();

  useEffect(() => {
    router.push(`/albatalk?orderBy=${filter.value}`);
  }, [router, filter.value]);

  return (
    <div className="relative flex items-center justify-between">
      <SearchInput placeholder="궁금한 점을 검색해보세요" />
      <div className="absolute bottom-[-38px] right-0 pc:static tablet:static">
        <AlbatalkFilterDropdown />
      </div>
    </div>
  );
};

export default AlbatalkSmartSearch;
