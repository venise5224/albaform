const getAlbaTalkDetail = async (talkId: string) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/posts/${talkId}`);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        status: response.status,
        message: "알바 토크 상세 데이터 가져오기 실패",
      };
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("알바 토크 상세를 조회하는데 실패했습니다.", error);
    return null;
  }
};

export default getAlbaTalkDetail;
