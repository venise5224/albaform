import SimpleRequirements from "@/components/card/SimpleRequirements";
import Content from "./components/Content";
import Title from "./components/Title";
import EmployerInfo from "@/components/card/EmployerInfo";
import DetailRequirements from "@/components/card/DetailRequirements";
import SolidButton from "../../../components/button/SolidButton";

const page = () => {
  const mock = {
    id: 0,
    createdAt: "2024-12-03T07:45:51.320Z",
    preferred: "경력 무관",
    isPublic: true,
    location: "서울 종로구",
    title:
      "코드잇 스터디카페 관리 (주말 오전) 모집합니다 서울 종로구 용산구 서대문",
    scrapCount: 8,
    applyCount: 5,
    storeName: "스터디카페",
    description:
      "코드잇 스터디 카페입니다. 주말 토, 일 오픈업무 하실 분 구합니다. 성실하게 일하실 분들만 지원 바랍니다 작성한 이력서(사진 부착)를 알바폼에 첨부해주시고, 아래와 같이 문자 보내주세요.근무 중 전화통화 불가합니다.예) OOO입니다.__에 거주합니다.알바폼 지원.이력서 검토 후 면접진행자에 한해 면접일정 개별 연락드리겠습니다.많은 지원 바랍니다.",
    workDays: ["월", "화", "수", "목"],
    workEndTime: "17:00",
    workStartTime: "23:00",
    workEndDate: "2024-12-04T07:45:51.320Z",
    workStartDate: "2024-12-03T00:45:51.320Z",
    hourlyWage: 12300,
    recruitmentStartDate: "2024-12-04T07:45:51.320Z",
    recruitmentEndDate: "2024-12-21T07:45:51.320Z",
    storePhoneNumber: "023237657",
    phoneNumber: "01076789547",
    age: "25",
    education: "고졸",
    gender: "남자",
    numberOfPositions: 13,
  };

  return (
    <div className="flex flex-col gap-[32px] pc:grid pc:grid-cols-[770px_640px] pc:grid-rows-[900px_562px] pc:gap-x-8 pc:gap-y-[120px] mobile:w-[327px]">
      <Title info={mock} />
      <SimpleRequirements info={mock} />
      <EmployerInfo info={mock} />
      <Content description={mock.description} />
      <DetailRequirements info={mock} />
      <SolidButton icon="/icon/write-fill-md.svg" style="orange300">
        지원하기
      </SolidButton>
      <SolidButton icon="/icon/document-md.svg" style="outOrange300">
        내 지원 내역 보기
      </SolidButton>
    </div>
  );
};

export default page;
