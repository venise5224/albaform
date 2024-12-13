import instance from "@/lib/instance";

const getComments = async (id: number) => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/comments`
  );

  try {
    const response = await instance(url.toString());

    if (response.status !== 200) {
      return {
        status: response.status,
        message: response.error,
      };
    }

    return response.data;
  } catch (error) {
    console.error("댓글 목록을 조회하는데 실패했습니다.", error);
    return [];
  }
};

export default getComments;
