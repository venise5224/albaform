"use server";

import instance from "@/lib/instance";
import { changePasswordSchema } from "@/schema/modal/changePasswordSchema";

export const changePasswordAction = async (formData: FormData) => {
  const data = {
    newPassword: formData.get("newPassword")?.toString(),
    currentPassword: formData.get("currentPassword")?.toString(),
  };

  const parseData = changePasswordSchema.safeParse(data);

  if (!parseData.success) {
    return {
      status: false,
      message: parseData.error.flatten(),
    };
  }

  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/users/me/password`,
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
