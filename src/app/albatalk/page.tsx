"use server";

import { Suspense } from "react";
import PostCardListSkeleton from "./components/PostCardSkeleton";
import AlbatalkRander from "./components/AlbatalkRander";

const AlbaTalkPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ albatalkOrderBy?: string; keyword?: string }>;
}) => {
  const { albatalkOrderBy = "mostRecent", keyword = "" } = await searchParams;

  return (
    <Suspense
      key={`${albatalkOrderBy}-${keyword}`}
      fallback={<PostCardListSkeleton count={9} />}
    >
      <AlbatalkRander orderBy={albatalkOrderBy} keyword={keyword} />
    </Suspense>
  );
};

export default AlbaTalkPage;
