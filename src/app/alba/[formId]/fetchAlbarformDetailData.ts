import instance from "@/lib/instance";

const fetchAlbarformDetailData = async (formId: string, isLogin?: boolean = false) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("API URL이 env파일에 정의되어 있지 않습니다.");
  }

  if (!isLogin) {
    const res = await fetch(`${API_URL}/forms/${formId}`, {
      next: { tags: ["albarformDetail"] },
    });
    if (!res.ok) {
      throw new Error(`데이터 요청에 실패했습니다.: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } else if (isLogin) {
    const res = await instance(`${API_URL}/forms/${formId}`);

    if (!res) {
      throw new Error(`데이터 요청에 실패했습니다.: ${res.error}`);
    }

    return res;
  }
};

export default fetchAlbarformDetailData;
