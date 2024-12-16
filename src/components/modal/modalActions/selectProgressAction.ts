"use server";

import instance from "@/lib/instance";
import { ProgressValue } from "../modalContent/SelectProgressModal";

export const selectProgressAction = async (
  status: ProgressValue,
  applicationId: number | null
) => {
  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/applications/${applicationId}`,
    {
      method: "PATCH",
      body: JSON.stringify(status),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    return {
      status: response.status,
      message: response.error,
    };
  }

  return {
    status: response.status,
  };
};
