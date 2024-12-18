"use server";

import instance from "@/lib/instance";

const postDeleteLike = async (id: number, method: string) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/like`);

  const response = await instance(url.toString(), {
    method: method === "POST" ? "POST" : "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (method === "POST") {
    if (response.status !== 200) {
      return {
        status: response.status,
        error: response.error,
      };
    }
  } else if (method === "DELETE") {
    if (response.status !== 204) {
      return {
        status: response.status,
        error: response.error,
      };
    }
  }

  return {
    status: response.status,
    data: response.data,
  };
};

export default postDeleteLike;
