// 서버전달 시 필요한 날짜 포맷 변환
export const handleDateRangeFormat = (dateString: string) => {
  const formattedDate =
    dateString.replace(/\.\s*/g, "-").replace(/\s/g, "").replace(/-T.*$/, "") +
    "T00:00:00";
  return formattedDate;
};
