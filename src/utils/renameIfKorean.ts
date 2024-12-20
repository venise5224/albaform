const renameIfKorean = (fileName: string): string => {
  const fileParts = fileName.split(".");
  const extension = fileParts.pop() || ""; // 확장자 추출
  const baseName = fileParts.join("."); // 파일 이름 추출

  // 한글이 포함된 경우 파일 이름을 "image"로 변경
  const isKorean = /[가-힣]/.test(baseName);
  const newBaseName = isKorean ? "image" : baseName;

  // 새 파일 이름 반환
  return extension ? `${newBaseName}.${extension}` : newBaseName;
};

export default renameIfKorean;
