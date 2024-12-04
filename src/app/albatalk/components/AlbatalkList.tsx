"use client";

import PostCard from "@/components/card/PostCard";
import { PostCardProps } from "@/types/post";
import { useCallback, useEffect, useState } from "react";
import { getArticles } from "../api/getArticles";
import { useAtomValue } from "jotai";
import { albatalkFilterAtom } from "@/atoms/dropdownAtomStore";
import { useSearchParams } from "next/navigation";
import useInfinityScroll from "@/hooks/useInfinityScroll";

interface AlbatalkResponse {
  data: PostCardProps[];
  nextCursor: number | null;
}

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
  const filter = useAtomValue(albatalkFilterAtom);
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const fetchData = async ({ isReset = false }: { isReset: boolean }) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response: AlbatalkResponse = await getArticles({
        limit: 6,
        cursor: isReset ? 0 : cursor,
        keyword,
        orderBy: filter.value,
      });

      setPosts((prevList) =>
        isReset
          ? response.data
          : [
              ...prevList,
              ...response.data.filter(
                (newPost) => !prevList.some((post) => post.id === newPost.id)
              ),
            ]
      );
      setCursor(response.nextCursor);
    } catch (error) {
      console.error("데이터를 불러오는데 실패했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };
  // 검색, 드랍다운 기능 사용 시 요청
  useEffect(() => {
    fetchData({ isReset: true });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [filter.value, keyword]);

  // 무한스크롤 요청
  const fetchMoreData = () => {
    fetchData({ isReset: false });
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
        <div>게시글이 없습니다</div> //빈페이지 필요
      )}

      {/* 무한 스크롤 트리거 */}
      {cursor && <div ref={observerRef} style={{ height: "1px" }} />}
    </div>
  );
};

export default AlbatalkList;
