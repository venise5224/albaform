"use server";

import instance from "@/lib/instance";

export const profileImgActions = async (image: FormData) => {
  if (!image) {
    return { message: "프로필 사진이 없습니다." };
  }

  // 이미지 업로드
  const response = await instance(
    `${process.env.NEXT_PUBLIC_API_URL}/images/upload`,
    {
      method: "POST",
      body: image,
    }
  );

  if (!response.ok) {
    const errorBody = await response.json();
    console.log(errorBody);
    return {
      status: response.status,
      message: "이미지 업로드 오류",
    };
  } else {
    const data = await response.json();
    console.log(data);

    // 프로필 사진 업로드
    const patchResponse = await instance(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      {
        method: "PATCH",
        body: JSON.stringify({ imageUrl: data.url }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(patchResponse);
    if (!patchResponse.ok) {
      return {
        status: patchResponse.status,
        message: "프로필 사진 수정 오류",
      };
    }

    return {
      status: patchResponse.status,
    };
  }
};
