"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AlbarPreview from "@/components/card/AlbarPreview";
import { AlbarformData } from "@/types/alba";
import EmptyState from "./EmptyState";
import BlurWrapper from "./BlurWrapper";
import Link from "next/link";
import FloatingButton from "@/components/button/FloatingButton";
import plusIcon from "@/../public/icon/plus-md.svg";
import SearchInput from "@/components/input/SearchInput";
import PublicDropdown from "@/components/dropdown/PublicDropdown";
import ApplicationDropdown from "@/components/dropdown/ApplicationDropdown";
import OrderByDropdown from "@/components/dropdown/OrderByDropdown";
import useInfinityScroll from "@/hooks/useInfinityScroll";
import useAlbaList from "../hooks/useAlbaList";

interface AlbaListProps {
  list: AlbarformData[];
  nextCursor: number | null;
  role: string;
}

const AlbaList = ({ list, nextCursor, role }: AlbaListProps) => {
  const searchParams = useSearchParams();
  const orderBy = searchParams.get("orderBy") || "mostRecent";
  const keyword = searchParams.get("keyword") || "";
  const isPublic =
    searchParams.get("isPublic") === "true"
      ? true
      : searchParams.get("isPublic") === "false"
        ? false
        : undefined;
  const isRecruiting =
    searchParams.get("isRecruiting") === "true"
      ? true
      : searchParams.get("isRecruiting") === "false"
        ? false
        : undefined;

  const { albaList, cursor, fetchAlbaList } = useAlbaList({
    orderBy,
    keyword,
    isPublic,
    isRecruiting,
    initialList: list,
    initialCursor: nextCursor,
  });

  // 무한 스크롤 데이터 요청
  const fetchMoreData = () => {
    if (!cursor) return;
    fetchAlbaList(false);
  };

  // 무한 스크롤 Ref
  const observerRef = useInfinityScroll({ fetchMoreData });

  useEffect(() => {
    fetchAlbaList(true);
  }, [isPublic, isRecruiting, orderBy, keyword]);

  return (
    <main className="min-h-screen bg-background-100">
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
      {role === "OWNER" && (
        <FloatingButton
          icon={plusIcon}
          href="/addform"
          className="pc:size-large fixed right-[79px] top-1/2 z-10 -translate-y-1/2 transform pc:right-[212px] tablet:right-[212px]"
        >
          폼 만들기
        </FloatingButton>
      )}
      <section className="mx-auto mt-[9px] w-[327px] pc:mt-14 pc:w-[1479px] tablet:mt-[14px]">
        {albaList.length > 0 ? (
          <ul className="flex flex-col gap-y-8 pc:flex-row pc:flex-wrap pc:gap-x-6 pc:gap-y-16 tablet:gap-y-12">
            {albaList.map((item: AlbarformData) => (
              <li key={item.id} className="pc:w-[calc(33.333%_-_16px)]">
                {item.isPublic ? (
                  <Link href={`/alba/${item.id}`} className="block">
                    <BlurWrapper isPublic={item.isPublic}>
                      <AlbarPreview info={item} />
                    </BlurWrapper>
                  </Link>
                ) : (
                  <BlurWrapper isPublic={item.isPublic}>
                    <AlbarPreview info={item} />
                  </BlurWrapper>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState role={role} />
        )}
      </section>
      {cursor && <div ref={observerRef} style={{ height: "10px" }} />}
    </main>
  );
};

export default AlbaList;
