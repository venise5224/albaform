"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setKeyword(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSubmit = () => {
    if (keyword) {
      router.push(`/albalist?keyword=${keyword}`);
    } else {
      router.push(`/albalist`);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="flex w-full justify-center">
      <input
        className="mx-auto w-[327px] rounded-3xl bg-background-200 px-[17px] py-[14px] pc:ml-[220px] pc:w-[728px] pc:px-6 tablet:ml-[72px]"
        placeholder="어떤 알바를 찾고 계세요?"
        value={keyword}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
