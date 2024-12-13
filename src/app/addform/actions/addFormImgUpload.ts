"use server";

import instance from "@/lib/instance";

export const addFormImgUpload = async (imgFormData: FormData) => {
  try {
    const files = Array.from(imgFormData.getAll("image"));
    const uploadResults: string[] = [];

    for (const file of files) {
      const singleImgFormData = new FormData();
      singleImgFormData.append("image", file);

      const response = await instance(
        `${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
        {
          method: "POST",
          body: singleImgFormData,
        }
      );

      const responseErrorText = {
        400: "이미지를 확인해주세요.",
        401: "로그인이 필요한 서비스입니다.",
        500: response.error,
      };

      if (response.status !== 201) {
        console.log("이미지 업로드 실패", response.status);
        return {
          status: response.status,
          message:
            responseErrorText[
              response.status as keyof typeof responseErrorText
            ],
        };
      }
      uploadResults.push(response.data.url);
    }

    return {
      status: 201,
      data: uploadResults,
    };
  } catch (error) {
    console.error("addFormImgUpload 이미지 업로드에서 에러 발생", error);
    return {
      status: 500,
      message: "이미지 업로드 중 오류가 발생했습니다",
    };
  }
};
