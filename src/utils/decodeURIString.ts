const decodeBufferToKorean = (encodedString: string) => {
  try {
    // URI-encoded 문자열을 디코딩
    const decodedURIComponent = decodeURIComponent(encodedString);

    // Buffer를 사용해 UTF-8로 디코딩
    const buffer = Buffer.from(decodedURIComponent, "binary");
    const koreanString = buffer.toString("utf-8");

    return koreanString;
  } catch (error: any) {
    console.error("디코딩 중 오류 발생:", error.message);
    return encodedString;
  }
};

export default decodeBufferToKorean;
