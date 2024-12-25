"use client";

import Empty from "@/app/albatalk/components/Empty";
import PostCardListSkeleton from "@/app/albatalk/components/PostCardSkeleton";
import PostCard from "@/components/card/PostCard";
import useInfinityScroll from "@/hooks/useInfinityScroll";
import { PostCardProps } from "@/types/post";
import { useState } from "react";
import { getMyPosts } from "../getMyPosts";

interface ResponseType {
  data?: PostCardProps[];
  nextCursor?: number | null;
  status?: number;
  message?: string;
}

const MyPostList = ({
  myPosts: initialPosts,
  nextCursor: initialCursor,
  orderBy,
}: {
  myPosts: PostCardProps[];
  nextCursor: number | null;
  orderBy: string;
}) => {
  const [myPosts, setMyPosts] = useState(initialPosts);
  const [cursor, setCursor] = useState(initialCursor);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreData = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response: ResponseType = await getMyPosts({
        limit: 6,
        cursor,
        orderBy,
      });

      const newPosts = response.data ?? [];
      const newCursor = response.nextCursor ?? null;

      setMyPosts((prevList) => [
        ...prevList,
        ...newPosts.filter(
          (newPost) => !prevList.some((post) => post.id === newPost.id)
        ),
      ]);
      setCursor(newCursor);
    } catch (error) {
      console.error("데이터를 불러오는데 실패했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const observerRef = useInfinityScroll({
    fetchMoreData,
  });

  return (
    <div>
      {myPosts?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
          {myPosts.map((myPost) => (
            <PostCard key={myPost.id} info={myPost} />
          ))}
        </div>
      ) : (
        <Empty />
      )}

      {cursor && <div ref={observerRef} style={{ height: "1px" }} />}

      {isLoading && <PostCardListSkeleton count={3} />}
    </div>
  );
};

export default MyPostList;
