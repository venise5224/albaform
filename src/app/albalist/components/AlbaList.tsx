"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { publicStatusAtom } from "@/atoms/dropdownAtomStore";
import { applicationStatusAtom } from "@/atoms/dropdownAtomStore";
import { orderByAtom } from "@/atoms/dropdownAtomStore";
import PublicDropdown from "@/components/dropdown/PublicDropdown";
import ApplicationDropdown from "@/components/dropdown/ApplicationDropdown";
import OrderByDropdown from "@/components/dropdown/OrderByDropdown";
import AlbarPreview from "@/components/card/AlbarPreview";
import { AlbarformData } from "@/types/alba";
import { getAlbaList } from "../api";
import Empty from "./Empty";

interface AlbaListProps {
  list: AlbarformData[];
  initialCursor: number | null;
  initialKeyword: string | undefined;
}

const AlbaList = ({ list, initialCursor, initialKeyword }: AlbaListProps) => {
  const router = useRouter();
  const publicStatus = useAtomValue(publicStatusAtom);
  const applicationStatus = useAtomValue(applicationStatusAtom);
  const orderby = useAtomValue(orderByAtom);
  const [albaList, setAlbaList] = useState(list);
  const [nextCursor, setNextCursor] = useState(initialCursor);
  const [keyword, setKeyword] = useState(initialKeyword);

  // useEffect(() => {
  //   setKeyword(initialKeyword);
  // }, [initialKeyword]);

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

  const handleCardClick = (id: number) => {
    router.push(`/alba/${id}`);
  };

  return (
    <main className="bg-background-100">
      <div className="border-b border-line-100 bg-background-100 px-6 pb-[10px] pt-[14px] pc:px-[220px] pc:pb-[20px] pc:pt-6 tablet:px-[72px]">
        <div className="mx-auto flex items-center justify-between pc:max-w-[1480px]">
          <div className="flex gap-x-[10px] pc:gap-x-4">
            <PublicDropdown />
            <ApplicationDropdown />
          </div>
          <OrderByDropdown />
        </div>
      </div>
      <section className="mx-auto mt-[9px] w-[327px] pc:mt-14 pc:w-[1479px] tablet:mt-[14px]">
        {albaList.length > 0 ? (
          <ul className="flex flex-col gap-y-8 pc:flex-row pc:flex-wrap pc:gap-x-6 pc:gap-y-16 tablet:gap-y-12">
            {albaList.map((item: AlbarformData) => (
              <li
                key={item.id}
                className="pc:w-[calc(33.333%_-_16px)]"
                onClick={() => handleCardClick(item.id)}
              >
                <AlbarPreview info={item} />
              </li>
            ))}
          </ul>
        ) : (
          <Empty />
        )}
      </section>
    </main>
  );
};

export default AlbaList;
