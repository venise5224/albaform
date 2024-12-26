"use server";

import instance from "@/lib/instance";
import { revalidateTag } from "next/cache";

const patchComment = async (id: number, content: string) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`);

  const response = await instance(url.toString(), {
    method: "PATCH",
    body: JSON.stringify({ content }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 201) {
    return {
      status: response.status,
      error: response.error,
    };
  }

  revalidateTag("myComment");

  return {
    status: response.status,
    data: response.data,
  };
};

export default patchComment;
