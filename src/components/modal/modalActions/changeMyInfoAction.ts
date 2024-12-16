"use server";

import instance from "@/lib/instance";
import { changeMyInfoSchema } from "@/schema/modal/changeMyInfoSchema";

export const changeMyInfoAction = async (formData: FormData) => {
  const data = {
    name: formData.get("name")?.toString(),
    nickname: formData.get("nickname")?.toString(),
    phoneNumber: formData.get("phoneNumber"),
  };

  const parseData = changeMyInfoSchema.safeParse(data);

  if (!parseData.success) {
    return {
      status: false,
      message: parseData.error.flatten(),
    };
  }

  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
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
