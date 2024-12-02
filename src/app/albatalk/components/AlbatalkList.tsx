"use client";

import PostCard from "@/components/card/PostCard";
import { PostCardProps } from "@/types/post";
import { useEffect, useState } from "react";
import { getArticles } from "../api/getArticles";
import { useSearchParams } from "next/navigation";

const AlbatalkList = ({
  posts: initialList,
  nextCursor,
}: {
  posts: PostCardProps[];
  nextCursor: number | null;
}) => {
  const [list, setList] = useState(initialList);
  const [cursor, setCursor] = useState(nextCursor);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams(); // 쿼리스트링 값 가져오기

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const response = await getArticles({
          limit: 6,
          cursor: 0,
        });

        setList(response.data);
        setCursor(response.nextCursor);
      } catch (error) {
        console.error("초기 데이터를 불러오는데 실패했습니다.", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, [searchParams]);

  const fetchMoreData = async () => {
    if (!cursor || isLoading) return;

    setIsLoading(true);
    try {
      const response = await getArticles({
        limit: 6,
        cursor,
      });

      setList((prevList) => [...prevList, ...response.data]);
      setCursor(response.nextCursor);
    } catch (error) {
      console.error("추가 데이터를 불러오는데 실패했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

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
    </div>
  );
};

export default AlbatalkList;
