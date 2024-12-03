"use client";

import PostCard from "@/components/card/PostCard";
import { PostCardProps } from "@/types/post";
import { useEffect, useState } from "react";
import { getArticles } from "../api/getArticles";
import { useSearchParams } from "next/navigation";
import { useAtomValue } from "jotai";
import { albatalkFilterAtom } from "@/atoms/dropdownAtomStore";

const AlbatalkList = ({
  posts: initialList,
  nextCursor: initialNextCursor,
}: {
  posts: PostCardProps[];
  nextCursor: number | null;
}) => {
  const [posts, setPosts] = useState(initialList);
  const [cursor, setCursor] = useState(initialNextCursor);
  const [isLoading, setIsLoading] = useState(false);
  const fillter = useAtomValue(albatalkFilterAtom);

  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  //데이터 변경 시 요청 로직
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const response = await getArticles({
          limit: 6,
          cursor: 0,
          keyword,
          orderBy: fillter.value,
        });

        setPosts(response.data);
        setCursor(response.nextCursor);
      } catch (error) {
        console.error("초기 데이터를 불러오는데 실패했습니다.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, [keyword, fillter]);

  return (
    <div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
          {posts.map((post) => (
            <PostCard key={post.id} info={post} />
          ))}
        </div>
      ) : (
        <div>게시글이 없습니다</div> //빈페이지 필요
      )}
    </div>
  );
};

export default AlbatalkList;
