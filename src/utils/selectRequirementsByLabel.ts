const selectRequirementsByLabel = (
  label: "모집인원" | "성별" | "학력" | "연령" | "우대사항"
) => {
  switch (label) {
    case "모집인원":
      return [
        "인원미정",
        "1명",
        "2명",
        "3명",
        "4명",
        "5명",
        "6명",
        "7명",
        "8명",
        "9명",
        "10명",
      ];
    case "성별":
      return ["성별무관", "남자", "여자"];
    case "학력":
      return ["학력무관", "고졸", "초대졸", "대졸"];
    case "연령":
      return ["연령무관", "10대", "20대", "30대", "40대", "50대"];
    case "우대사항":
      return ["없음", "직접입력"];
    default:
      return;
  }
};

export default selectRequirementsByLabel;
