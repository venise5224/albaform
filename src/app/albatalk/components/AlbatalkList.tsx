"use client";

import PostCard from "@/components/card/PostCard";
import useInfiniteScroll from "@/hooks/useInfinityScroll";
import { PostCardProps } from "@/types/post";
import { useEffect, useState } from "react";

const AlbatalkList = ({
  posts: initialList,
  nextCursor,
}: {
  posts: PostCardProps[];
  nextCursor: number | null;
}) => {
  const [list, setList] = useState(initialList);
  const { lastElementRef } = useInfiniteScroll();

  useEffect(() => {}, []);

  return (
    <div>
      {list.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
          {list.map((post) => (
            <PostCard key={post.id} info={post} />
          ))}
        </div>
      ) : (
        <div>게시글이 없습니다</div> //빈페이지 필요
      )}
      {nextCursor && <div ref={lastElementRef}></div>}
    </div>
  );
};

export default AlbatalkList;
