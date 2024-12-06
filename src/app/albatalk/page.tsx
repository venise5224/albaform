"use server";

import { Suspense } from "react";
import PostCardListSkeleton from "./components/PostCardSkeleton";
import AlbatalkRander from "./components/AlbatalkRander";

const AlbaTalkPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ orderBy?: string; keyword?: string }>;
}) => {
  const { orderBy = "mostRecent", keyword = "" } = await searchParams;

  return (
    <Suspense
      key={`${orderBy}-${keyword}`}
      fallback={<PostCardListSkeleton count={9} />}
    >
      <AlbatalkRander orderBy={orderBy} keyword={keyword} />
    </Suspense>
  );
};

export default AlbaTalkPage;
