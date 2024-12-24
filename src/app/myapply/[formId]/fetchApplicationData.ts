import instance from "@/lib/instance";

const fetchApplicationData = async (formId: string, role: string) => {
  const response = await instance(
    role
      ? `${process.env.NEXT_PUBLIC_API_URL}/forms/${formId}/my-application`
      : `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/nonmemberinfo`,
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
