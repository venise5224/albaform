const translateStatus = (
  status: "REJECTED" | "INTERVIEW_PENDING" | "INTERVIEW_COMPLETED" | "HIRED"
) => {
  if (status === "REJECTED") return "거절";
  else if (status === "INTERVIEW_PENDING") return "면접 대기";
  else if (status === "INTERVIEW_COMPLETED") return "면접 완료";
  else if (status === "HIRED") return "채용 완료";
};

export default translateStatus;
