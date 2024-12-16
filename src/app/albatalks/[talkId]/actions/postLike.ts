"use server";

import instance from "@/lib/instance";

const postLike = async (id: number) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/like`);

  const response = await instance(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    return {
      status: response.status,
      error: response.error,
    };
  }

  return {
    status: response.status,
    data: response.data,
  };
};

export default postLike;
