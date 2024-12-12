"use server";

export const uploadResumeAction = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/resume/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.status !== 201) {
    return {
      status: response.status,
      message: "이력서 제출에 실패하였습니다.",
    };
  }

  return {
    status: response.status,
    data: await response.json(),
  };
};
