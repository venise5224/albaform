"use server";

import instance from "@/lib/instance";

export interface getMyPostsProps {
  limit: number;
  cursor?: number | null;
  orderBy?: string;
}

export const getMyPosts = async (query: getMyPostsProps) => {
  const { limit = 6, cursor = 0, orderBy = "mostRecent" } = query;

  const queryString = new URLSearchParams({
    limit: String(limit),
    cursor: String(cursor),
    orderBy,
  });

  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/users/me/posts?${queryString}`
  );

  if (response.status !== 200) {
    return {
      status: response.status,
      message: response.error,
    };
  }

  console.log("패스 후 리스폰스 :", response.data.data);

  return {
    data: response.data.data,
    nextCursor: response.data.nextCursor,
  };
};
