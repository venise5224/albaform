"use server";

import type { MyScrap } from "@/types/scrap";
import { getMyScraps } from "../getMyScraps";
import MyScrapList from "./MyScrapList";
import { cookies } from "next/headers";

interface MyScrapProps {
  orderBy: string;
  isPublic?: boolean;
  isRecruiting?: boolean;
}

const MyScrap = async ({ orderBy, isPublic, isRecruiting }: MyScrapProps) => {
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value || "APPLICANT";

  const response = await getMyScraps({
    limit: 12,
    cursor: 0,
    orderBy,
    isPublic,
    isRecruiting,
  });

  const nextCursor: number | null = response.nextCursor;
  const myScraps: MyScrap[] = response.data;

  return (
    <MyScrapList
      myScraps={myScraps}
      nextCursor={nextCursor}
      orderBy={orderBy}
      isPublic={isPublic}
      isRecruiting={isRecruiting}
      role={role}
    />
  );
};

export default MyScrap;
