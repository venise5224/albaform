"use server";

import instance from "@/lib/instance";

export const addFormImgUpload = async (imgFormData: FormData) => {
  try {
    const response = await instance(
      `${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
      {
        method: "POST",
        body: imgFormData,
      }
    );

    if (response.status !== 201) {
      return {
        status: response.status,
        message: "이미지 업로드 실패",
      };
    }

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.error("addFormImgUpload 이미지 업로드에서 에러 발생", error);
    return {
      status: 500,
      message: "이미지 업로드 중 오류가 발생했습니다",
    };
  }
};
