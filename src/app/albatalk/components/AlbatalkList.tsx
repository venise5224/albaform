"use client";

import PostCard from "@/components/card/PostCard";
import { PostCardProps } from "@/types/post";
import useInfinityScroll from "@/hooks/useInfinityScroll";
import useFetchAlbatalkData from "../hooks/useFetchAlbatalkData";
import Empty from "./Empty";
import PostCardListSkeleton from "./PostCardSkeleton";

const AlbatalkList = ({
  posts: initialPosts,
  nextCursor: initialCursor,
}: {
  posts: PostCardProps[];
  nextCursor: number | null;
}) => {
  const { posts, cursor, isLoading, fetchArticles } = useFetchAlbatalkData({
    initialPosts,
    initialCursor,
  });

  // 무한스크롤 요청
  const fetchMoreData = () => {
    fetchArticles({ isReset: false });
  };

  // 무한 스크롤 훅 사용
  const observerRef = useInfinityScroll({
    fetchMoreData,
  });

  return (
    <div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
          {posts.map((post) => (
            <PostCard key={post.id} info={post} />
          ))}
        </div>
      ) : (
        <Empty />
      )}

      {/* 무한 스크롤 트리거 */}
      {cursor && <div ref={observerRef} style={{ height: "1px" }} />}

      {isLoading && <PostCardListSkeleton count={3} />}
    </div>
  );
};

export default AlbatalkList;
