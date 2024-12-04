"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAtomValue } from "jotai";
import { publicStatusAtom } from "@/atoms/dropdownAtomStore";
import { applicationStatusAtom } from "@/atoms/dropdownAtomStore";
import { orderByAtom } from "@/atoms/dropdownAtomStore";
import AlbarPreview from "@/components/card/AlbarPreview";
import { AlbarformData } from "@/types/alba";
import { getAlbaList } from "../api/getAlbaList";
import Empty from "./EmptyState";
import BlurWrapper from "./BlurWrapper";
import SearchContainer from "./SearchContainer";
import Link from "next/link";
import FloatingButton from "@/components/button/FloatingButton";
import plusIcon from "@/../public/icon/plus-md.svg";

interface AlbaListProps {
  list: AlbarformData[];
  initialCursor: number | null;
  userType: string;
  role: string;
}

const AlbaList = ({ list, initialCursor, userType, role }: AlbaListProps) => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const publicStatus = useAtomValue(publicStatusAtom);
  const applicationStatus = useAtomValue(applicationStatusAtom);
  const orderby = useAtomValue(orderByAtom);
  const [albaList, setAlbaList] = useState(list);
  const [nextCursor, setNextCursor] = useState(initialCursor);

  useEffect(() => {
    const fetchAlbaList = async () => {
      try {
        const response = await getAlbaList({
          orderBy: orderby.value,
          limit: 6,
          keyword,
          isRecruiting: applicationStatus,
        });

        const filteredData =
          publicStatus !== undefined
            ? response.data.filter(
                (item: AlbarformData) => item.isPublic === publicStatus
              )
            : response.data;

        setAlbaList(filteredData || []);
        setNextCursor(response.nextCursor);
      } catch (error) {
        setAlbaList([]);
      }
    };

    fetchAlbaList();
  }, [publicStatus, applicationStatus, orderby, keyword]);

  return (
    <main className="min-h-screen bg-background-100">
      <SearchContainer userType={userType} />
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
          <Empty role={role} />
        )}
      </section>
    </main>
  );
};

export default AlbaList;
