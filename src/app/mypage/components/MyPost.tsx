"use server";

import { PostCardProps } from "@/types/post";
import { getMyPosts } from "../getMyPosts";
import MyPostList from "./MyPostList";

const MyPost = async ({ orderBy }: { orderBy: string }) => {
  const response = await getMyPosts({
    limit: 9,
    cursor: 0,
    orderBy,
  });

  const nextCursor: number | null = response.nextCursor;
  const myPosts: PostCardProps[] = response.data;

  return (
    <MyPostList myPosts={myPosts} nextCursor={nextCursor} orderBy={orderBy} />
  );
};

export default MyPost;
