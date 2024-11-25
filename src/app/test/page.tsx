import ApplicantCard from "@/components/card/ApplicantCard";

const info = {
  updatedAt: "2024-11-25T08:30:09.264Z",
  createdAt: "2024-11-25T08:30:09.264Z",
  status: "REJECTED",
  resumeName: "정준영 이력서",
  resumeId: 0,
  form: {
    owner: {
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg",
      storeName: "강아지 분양소",
      id: 0,
    },
    recruitmentEndDate: "2024-11-30T08:30:09.264Z",
    recruitmentStartDate: "2024-11-25T08:30:09.264Z",
    description: "이곳은 멋진 강아지들을 분양할 수 있는 강아지 분양소입니다.",
    title: "강아지 분양소에서 알바를 모집합니다.",
    id: 0,
  },
  id: 0,
};

const testPage = () => {
  return <ApplicantCard info={info} />;
};

export default testPage;
