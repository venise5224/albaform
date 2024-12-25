"use server";

import instance from "@/lib/instance";

export interface getMyScrapsProps {
  limit: number;
  cursor?: number | null;
  orderBy?: string;
  isPublic?: boolean;
  isRecruiting?: boolean;
}

export const getMyScraps = async (query: getMyScrapsProps) => {
  const {
    limit = 6,
    cursor = 0,
    orderBy = "mostRecent",
    isPublic = true,
    isRecruiting = true,
  } = query;

  const queryString = new URLSearchParams({
    limit: String(limit),
    cursor: String(cursor),
    orderBy,
    isPublic: String(isPublic),
    isRecruiting: String(isRecruiting),
  });

  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/users/me/scrap?${queryString}`
  );

  if (response.status !== 200) {
    return {
      status: response.status,
      message: response.error,
    };
  }

  return {
    data: response.data,
    nextCursor: response.nextCursor,
  };
};
