"use client";

import PostCardListSkeleton from "@/app/albatalk/components/PostCardSkeleton";
import useInfinityScroll from "@/hooks/useInfinityScroll";
import { useState } from "react";
import { MyComment } from "@/types/comment";
import { getMyComments } from "../getMyComments";
import CommentCard from "@/components/card/CommentCard";
import EmptyComment from "@/app/albatalks/[talkId]/components/EmptyComments";

interface MyCommentResponseType {
  data?: MyComment[];
  totalItemCount?: number;
  currentPage?: number;
  totalPages?: number;
  status?: number;
  message?: string;
}

const MyCommentList = ({
  myComments: initialComments,
  currentPage: initialCurrentPage,
  totalPages,
}: {
  myComments: MyComment[];
  totalPages: number;
  currentPage: number;
}) => {
  const [myComments, setMyComments] = useState(initialComments);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreData = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response: MyCommentResponseType = await getMyComments({
        page: currentPage + 1,
        pageSize: 6,
      });

      const newComments = response.data ?? [];
      const newCurrentPage = response.currentPage || 0;

      setMyComments((prevList) => [
        ...prevList,
        ...newComments.filter(
          (newComment) => !prevList.some((post) => post.id === newComment.id)
        ),
      ]);
      setCurrentPage(newCurrentPage);
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
      {myComments?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
          {myComments.map((myComment) => (
            <CommentCard key={myComment.id} info={myComment} />
          ))}
        </div>
      ) : (
        <EmptyComment />
      )}
      {totalPages > currentPage && (
        <div ref={observerRef} style={{ height: "1px" }} />
      )}
      {isLoading && <PostCardListSkeleton count={3} />}
    </div>
  );
};

export default MyCommentList;
