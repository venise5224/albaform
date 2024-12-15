// 파일 객체를 base64로 변환하여 로컬스토리지 저장
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
};

// base64를 파일 객체로 변환
export const base64ToFile = async (base64: string, fileName: string) => {
  const response = await fetch(base64);
  const blob = await response.blob();
  return new File([blob], fileName, { type: blob.type });
};
