"use client";

import { PostCardProps } from "@/types/post";
import { useState } from "react";
import { getArticles } from "../getArticles";

interface AlbatalkResponse {
  data: PostCardProps[];
  nextCursor: number | null;
}

const useFetchAlbatalkData = ({
  initialPosts,
  initialCursor,
  orderBy,
  keyword,
}: {
  initialPosts: PostCardProps[];
  initialCursor: number | null;
  orderBy: string;
  keyword: string;
}) => {
  const [posts, setPosts] = useState(initialPosts);
  const [cursor, setCursor] = useState(initialCursor);
  const [isLoading, setIsLoading] = useState(false);

  console.log(`무한스크롤 로직 이전:${orderBy}  ${keyword}`);

  const fetchArticles = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response: AlbatalkResponse = await getArticles({
        limit: 6,
        cursor,
        keyword,
        orderBy,
      });

      setPosts((prevList) => [
        ...prevList,
        ...response.data.filter(
          (newPost) => !prevList.some((post) => post.id === newPost.id)
        ),
      ]);
      setCursor(response.nextCursor);
    } catch (error) {
      console.error("데이터를 불러오는데 실패했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(`무한스크롤 로직 이후:${orderBy}  ${keyword}`);

  return {
    posts,
    cursor,
    isLoading,
    fetchArticles,
  };
};

export default useFetchAlbatalkData;
