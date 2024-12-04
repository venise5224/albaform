"use server";

import { Suspense } from "react";
import { getAlbaList } from "../api/getAlbaList";
import AlbaList from "../components/AlbaList";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { cookies } from "next/headers";

interface AlbaListPageProps {
  params: Promise<{ userType: string }>;
  searchParams: Promise<{
    keyword?: string;
    orderBy?: string;
    isRecruiting?: boolean;
  }>;
}

const AlbaListPage = async ({ params, searchParams }: AlbaListPageProps) => {
  const { userType } = await params;
  const { keyword, orderBy, isRecruiting } = await searchParams;

  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value || "defaultRole";

  const response = await getAlbaList({
    orderBy: orderBy || "mostRecent",
    limit: 6,
    keyword,
    isRecruiting: isRecruiting || true,
  });

  const albaList = response.data || [];
  const nextCursor: number | null = response.nextCursor;

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <AlbaList
        list={albaList}
        initialCursor={nextCursor}
        userType={userType}
        role={role}
      />
    </Suspense>
  );
};

export default AlbaListPage;
