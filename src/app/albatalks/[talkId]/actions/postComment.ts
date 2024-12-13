"use server";

import instance from "@/lib/instance";

const postComment = async ({
  id,
  content,
}: {
  id: number;
  content: string;
}) => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/comments`
  );

  try {
    const response = await instance(url.toString());
  } catch (error) {}
};
