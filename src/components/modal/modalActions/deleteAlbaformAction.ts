"use server";

import instance from "@/lib/instance";

export const deleteAlbaformAction = async (id: string) => {
  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/forms/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 204) {
    return {
      status: response.status,
      message: response.error,
    };
  }

  return {
    status: response.status,
  };
};
