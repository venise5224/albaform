import { AddFormStepProps } from "@/types/addform";
import StepSidebar from "./components/StepSidebar";

const mockTemporaryDataByStep: AddFormStepProps = {
  stepOne: {
    title: "테스트 타이틀",
    description: "테스트 설명",
    recruitmentStartDate: "2024-12-04",
    recruitmentEndDate: "2024-12-05",
    imageUrls: [
      "https://i.namu.wiki/i/TLYZbmNFPJa1hRl3A_O1MkTsy2R4FC13SSKN3hTMVAAPtVXEAc02vk6feRp3yntMLSxK9Ei2gsCXVRvyuKP0Ti3snEudeAvNMsDOf-b0HCNhBgqrqPXDvRyvDGAsMN-to26YD2vNX-BfQ6PaHrLxHA.webp",
    ],
  },
  stepTwo: {
    numberOfPositions: 1,
    gender: "남성",
    education: "고등학교 졸업",
    age: "20대",
    preferred: "성실성, 끈기",
  },
  stepThree: {
    location: "광주광역시",
    workStartDate: "09:00",
    workEndDate: "",
    workStartTime: "",
    workEndTime: "",
    workDays: [],
    isNegotiableWorkDays: false,
    hourlyWage: 0,
    isPublic: true,
  },
};

const AddFormPage = async () => {
  return (
    <>
      <StepSidebar temporaryDataByStep={mockTemporaryDataByStep} />
    </>
  );
};

export default AddFormPage;
