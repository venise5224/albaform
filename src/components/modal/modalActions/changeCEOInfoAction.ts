"use server";

import instance from "@/lib/instance";
import { changeCEOInfoSchema } from "@/schema/modal/changeCEOInfoSchema";

export const changeCEOInfoAction = async (formData: FormData) => {
  const data = {
    nickname: formData.get("nickname")?.toString(),
    storeName: formData.get("storeName")?.toString() || "",
    storePhoneNumber: formData.get("storePhoneNumber") || "",
    phoneNumber: formData.get("phoneNumber") || "",
    location: formData.get("location")?.toString() || "",
  };

  const parseData = changeCEOInfoSchema.safeParse(data);

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
