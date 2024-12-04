import SimpleRequirements from "@/components/card/SimpleRequirements";
import Content from "./components/Content";
import Title from "./components/Title";
import EmployerInfo from "@/components/card/EmployerInfo";
import DetailRequirements from "@/components/card/DetailRequirements";
import SolidButton from "../../../components/button/SolidButton";
import fetchData from "./api/fetchData";

interface AlbarformDetailPageProps {
  params: {
    formId: string;
  };
}

const AlbarformDetailPage = async ({ params }: AlbarformDetailPageProps) => {
  const { formId } = params;
  let data;

  try {
    data = await fetchData(formId);
  } catch (error) {
    console.error(error); // toast로 error 메시지 띄우는 걸로 바꿔야 함.

    return (
      <div>
        <h1>데이터를 불러올 수 없습니다.</h1>
        <p>잠시 후 다시 시도해주세요.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-[32px] pc:grid-cols-[770px_640px] pc:justify-items-center pc:gap-0 pc:gap-x-[150px] pc:gap-y-[40px] pc:grid-areas-layout tablet:w-[327px] tablet:grid-cols-1 tablet:grid-rows-[270px_116px_156px_396px_302px_340px_158px] mobile:w-[327px] mobile:grid-cols-1 mobile:grid-rows-[270px_116px_156px_396px_302px_340px_158px]">
      <div className="pc:grid-in-box1">
        <Title info={data} />
      </div>
      <div className="pc:grid-in-box4">
        <SimpleRequirements info={data} />
      </div>
      <div className="pc:grid-in-box5">
        <EmployerInfo info={data} />
      </div>
      <div className="pc:grid-in-box2">
        <Content description={data.description} />
      </div>
      <div className="pc:grid-in-box7">
        <DetailRequirements info={data} />
      </div>
      {/* <StoreLocation/> */}
      <div className="pc:grid-in-box6">
        <section className="flex flex-col gap-[10px]">
          <SolidButton icon="/icon/write-fill-md.svg" style="orange300">
            지원하기
          </SolidButton>
          <SolidButton icon="/icon/document-md.svg" style="outOrange300">
            내 지원 내역 보기
          </SolidButton>
        </section>
      </div>
    </div>
  );
};

export default AlbarformDetailPage;
