import instance from "@/lib/instance";

const fetchApplicationData = async (
  formId: string,
  userId: string | undefined
) => {
  const response = await instance(
    userId
      ? `${process.env.NEXT_PUBLIC_API_URL}/forms/${formId}/my-application`
      : `${process.env.NEXT_PUBLIC_API_URL}/forms/${formId}/my-application/verify`, // userId가 undefined이면 비회원이라는 뜻
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );

  if (!response) {
    throw new Error(`instance 요청에 실패했습니다.: ${response.statusText}`);
  }

  return response;
};

export default fetchApplicationData;
