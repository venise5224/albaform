"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const keyword = searchParams.get("keyword");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === search) return;
    router.push(`${pathname}?keyword=${search}`);
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <input
        type="text"
        value={search}
        onChange={handleChangeSearch}
        placeholder="궁금한 점을 검색해보세요"
        className="form-input-base"
      />
    </form>
  );
};

export default SearchInput;
