"use server";

import { Suspense } from "react";
import AlbaListFetcher from "./components/AlbaListFetcher";
import CardListSkeleton from "./components/CardListSkeleton";

interface AlbaListPageProps {
  searchParams: Promise<{
    keyword?: string;
    orderBy?: string;
    isRecruiting?: boolean;
    isPublic?: boolean;
  }>;
}

const AlbaListPage = async ({ searchParams }: AlbaListPageProps) => {
  const params = await searchParams;

  return (
    <div className="flex justify-center">
      <Suspense fallback={<CardListSkeleton count={6} />}>
        <AlbaListFetcher
          key={`${params.orderBy}-${params.keyword}-${params.isRecruiting}-${params.isPublic}`}
          params={params}
        />
      </Suspense>
    </div>
  );
};

export default AlbaListPage;
