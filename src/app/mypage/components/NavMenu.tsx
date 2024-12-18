"use client";

import TabButton from "./TabButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const NavMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("post");
  const tabs = [
    { name: "post", label: "내가 쓴 글" },
    { name: "comment", label: "내가 쓴 댓글" },
    { name: "scrap", label: "스크랩" },
  ];

  // 초기 tab 쿼리스트링을 보여주는 로직 (사용시 드랍다운 쿼리스트링을 덮어버림)
  // useEffect(() => {
  //   const tabFromUrl = searchParams.get("tab");
  //   if (!tabFromUrl) {
  //     router.push(`/mypage?tab=post`);
  //   }
  // }, [searchParams, router]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/mypage?tab=${tab}`);
  };

  return (
    <div className="flex max-w-[327px] gap-[10px] rounded-[14px] bg-background-200 p-[6px] pc:w-[422px]">
      {tabs.map((tab) => (
        <TabButton
          key={tab.name}
          onClick={() => handleTabChange(tab.name)}
          className={
            activeTab === tab.name
              ? "bg-gray-50 text-black-400"
              : "text-gray-400"
          }
        >
          {tab.label}
        </TabButton>
      ))}
    </div>
  );
};

export default NavMenu;
