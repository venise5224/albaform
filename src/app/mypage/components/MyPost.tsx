"use server";

import Empty from "@/app/albatalk/components/Empty";
import PostCard from "@/components/card/PostCard";
import instance from "@/lib/instance";
import { PostCardProps } from "@/types/post";

const MyPost = async () => {
  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/users/me/posts?limit=6`
  );

  if (response.status !== 200) {
    return <div>오류 발생</div>;
  }

  const myPosts: PostCardProps[] = response.data.data;

  return (
    <div>
      {myPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
          {myPosts.map((myPost) => (
            <PostCard key={myPost.id} info={myPost} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default MyPost;
