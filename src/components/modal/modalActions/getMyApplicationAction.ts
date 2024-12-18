"use server";

import { getMyApplicationSchema } from "@/schema/modal/getMyApplicationSchema";

export const getMyApplicationAction = async (
  formData: FormData,
  id: string
) => {
  const data = {
    name: formData.get("name")?.toString(),
    phoneNumber: formData.get("phoneNumber")?.toString(),
    password: formData.get("password")?.toString(),
  };

  const parseData = getMyApplicationSchema.safeParse(data);

  if (!parseData.success) {
    return {
      status: false,
      message: parseData.error.flatten(),
    };
  }

  console.log("id :", id);
  console.log("data :", data);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/forms/${id}/my-application/verify`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log("지원 내역 상세 :", response);

  if (!response.ok) {
    return {
      status: response.status,
      message: "지원 내역을 조회하는데 실패하였습니다.",
    };
  }

  return {
    status: response.status,
    data: await response.json(),
  };
};
