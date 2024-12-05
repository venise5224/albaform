"use server";

import { Suspense } from "react";
import { getAlbaList } from "../getAlbaList";
import AlbaList from "../components/AlbaList";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { cookies } from "next/headers";

interface AlbaListPageProps {
  searchParams: Promise<{
    keyword?: string;
    orderBy?: string;
    isRecruiting?: boolean;
  }>;
}

const AlbaListPage = async ({ searchParams }: AlbaListPageProps) => {
  const { keyword, orderBy, isRecruiting } = await searchParams;

  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value || "defaultRole";

  const response = await getAlbaList({
    orderBy: orderBy || "mostRecent",
    limit: 6,
    cursor: 0,
    keyword,
    isRecruiting: isRecruiting || undefined,
  });

  const albaList = response.data || [];
  const nextCursor: number | null = response.nextCursor;

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <AlbaList list={albaList} nextCursor={nextCursor} role={role} />
    </Suspense>
  );
};

export default AlbaListPage;
