"use client";

import AlbatalkFilterDropdown from "@/components/dropdown/AlbatalkFilterDropdown";
import SearchInput from "@/components/input/SearchInput";

const AlbatalkSmartSearch = () => {
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
