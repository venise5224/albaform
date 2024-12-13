"use client";

import { useEffect, useState } from "react";
import getComments from "../getComments";
import { Comment } from "@/types/comment";
import SolidButton from "@/components/button/SolidButton";
import CommentItem from "./CommentItem";
import EmptyComment from "./EmptyComments";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { albaTalkCommentSchema } from "@/schema/albaTalkComment/albaTalkCommentSchema";
import ErrorText from "@/components/errorText/ErrorText";
import { cls } from "@/utils/dynamicTailwinds";

const CommentSection = ({ id }: { id: number }) => {
  const [totalCount, setTotalCount] = useState("");
  const [list, setList] = useState<Comment[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof albaTalkCommentSchema>>({
    resolver: zodResolver(albaTalkCommentSchema),
    mode: "onSubmit",
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async () => {
    alert("제출");
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(id);
        setTotalCount(response.totalItemCount);
        setList(response.data);
      } catch (error) {
        console.error("댓글 목록을 가져오는데 실패했습니다.", error);
      }
    };
    console.log("error= " + errors.content?.message);
    fetchComments();
  }, [id, errors]);

  return (
    <section>
      <h3 className="mt-[104px] border-b border-line-200 pb-4 text-lg font-semibold text-black-400 pc:mt-[100px] pc:text-2xl tablet:text-xl">
        댓글({totalCount ?? 0})
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 pc:mt-10 tablet:mt-10"
      >
        <div className="relative">
          <textarea
            id="content"
            {...register("content")}
            className={cls(
              "h-[132px] w-full rounded-lg bg-background-200 p-[14px] placeholder:text-md placeholder:text-gray-400 pc:h-40 pc:placeholder:text-xl tablet:placeholder:text-lg",
              errors.content ? "border border-red" : ""
            )}
            placeholder="댓글을 입력해주세요."
          />
          <ErrorText error={errors.content}>
            {errors.content?.message}
          </ErrorText>
        </div>
        <div
          className={cls(
            "ml-auto max-w-[108px] pc:mt-2 pc:max-w-[214px] tablet:mt-2",
            errors.content ? "mt-[26px] pc:mt-8 tablet:mt-[26px]" : ""
          )}
        >
          <SolidButton style="orange300">등록하기</SolidButton>
        </div>
      </form>
      <ul className="mt-6 flex flex-col gap-y-4 pc:mt-14 pc:gap-y-6 tablet:mt-10">
        {list?.length > 0 ? (
          list?.map((item) => <CommentItem key={item.id} item={item} />)
        ) : (
          <EmptyComment />
        )}
      </ul>
    </section>
  );
};

export default CommentSection;
