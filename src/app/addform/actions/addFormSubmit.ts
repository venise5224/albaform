"use server";

import instance from "@/lib/instance";
import { addFormSchema } from "@/schema/addForm/addFormSchema";

export const addFormSubmit = async (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    recruitmentStartDate: formData.get("recruitmentStartDate"),
    recruitmentEndDate: formData.get("recruitmentEndDate"),
    imageUrls: formData.get("imageUrls"),
    numberOfPositions: formData.get("numberOfPositions"),
    gender: formData.get("gender"),
    education: formData.get("education"),
    age: formData.get("age"),
    preferred: formData.get("preferred"),
    location: formData.get("location"),
    workStartDate: formData.get("workStartDate"),
    workEndDate: formData.get("workEndDate"),
    workStartTime: formData.get("workStartTime"),
    workEndTime: formData.get("workEndTime"),
    workDays: formData.get("workDays"),
    isNegotiableWorkDays: formData.get("isNegotiableWorkDays"),
    hourlyWage: formData.get("hourlyWage"),
    isPublic: formData.get("isPublic"),
  };

  const checkData = addFormSchema.safeParse(data);

  if (!checkData.success) {
    return {
      status: false,
      message: checkData.error.flatten(),
    };
  }

  try {
    const response = await instance(
      `${process.env.NEXT_PUBLIC_API_URL}/forms`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseErrorText = {
      401: "로그인이 필요한 서비스입니다.",
      400: "입력하신 내용을 확인해주세요.",
    };

    if (response.status !== 201) {
      console.error("addFormSubmit에서 오류 발생", response.status);
      return {
        status: response.status,
        message:
          responseErrorText[response.status as keyof typeof responseErrorText],
      };
    }

    const resData = response.data;
    const { id } = resData;

    return {
      status: response.status,
      id,
    };
  } catch (error) {
    console.error("addFormSubmit에서 서버 오류 발생", error);
    return {
      status: 500,
      message: "알바폼 등록 중에 오류가 발생했습니다.",
    };
  }
};
