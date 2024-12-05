import { AddFormStepProps } from "@/types/addform";
import StepSidebar from "./components/StepSidebar";
import Title from "./components/Title";
import AlbaformCreateDropdown from "@/components/dropdown/AlbaformCreateDropdown";
import StepContainer from "./components/StepContainer";

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

const AddFormPage = () => {
  return (
    <div className="m-auto flex w-[375px] flex-col space-y-3 pc:m-0 pc:w-full pc:flex-row pc:space-y-0">
      <StepSidebar temporaryDataByStep={mockTemporaryDataByStep} />
      <div className="flex flex-col">
        <Title />
        <div className="m-auto w-[327px] pc:hidden">
          <AlbaformCreateDropdown />
        </div>
        <StepContainer />
      </div>
    </div>
  );
};

export default AddFormPage;
