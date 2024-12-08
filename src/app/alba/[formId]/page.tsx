import SolidButton from "@/components/button/SolidButton";
import fetchData from "./fetchData";
import Content from "./components/Content";
import Title from "./components/Title";
import StoreLocation from "./components/StoreLocation";
import SimpleRequirements from "./components/SimpleRequirements";
import EmployerInfo from "./components/EmployerInfo";
import DetailRequirements from "./components/DetailRequirements";
import Carousel from "@/components/Carousel/Carousel";
import NoticeApplicant from "./components/NoticeApplicant";
import { AlbaformDetailData } from "@/types/alba";
import { log } from "console";

interface AlbarformDetailPageProps {
  params: {
    formId: string;
  };
}

const AlbarformDetailPage = async ({ params }: AlbarformDetailPageProps) => {
  const { formId } = params;
  let data: AlbaformDetailData;

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
    <>
      <Carousel imageUrls={data.imageUrls} />
      <div className="mt-[1200px] grid gap-[32px] pc:grid-cols-[770px_640px] pc:justify-items-center pc:gap-0 pc:gap-x-[150px] pc:gap-y-[40px] pc:grid-areas-layout tablet:w-[327px] tablet:grid-cols-1 tablet:grid-rows-[270px_116px_156px_396px_302px_340px_158px] mobile:w-[327px] mobile:grid-cols-1 mobile:grid-rows-[270px_116px_156px_396px_302px_340px_158px]">
        <section className="pc:grid-in-box1">
          <Title info={data} />
        </section>
        <section className="pc:grid-in-box4">
          <SimpleRequirements info={data} />
        </section>
        <section className="pc:grid-in-box5">
          <EmployerInfo info={data} />
        </section>
        <section className="pc:grid-in-box2">
          <Content description={data.description} />
        </section>
        <section className="pc:grid-in-box7">
          <DetailRequirements info={data} />
        </section>
        <section className="pc:grid-in-box3">
          <StoreLocation location={data.location} />
        </section>
        <section className="pc:grid-in-box6">
          <section className="flex flex-col gap-[10px]">
            <SolidButton icon="/icon/write-fill-md.svg" style="orange300">
              지원하기
            </SolidButton>
            <SolidButton icon="/icon/document-md.svg" style="outOrange300">
              내 지원 내역 보기
            </SolidButton>
          </section>
        </section>
      </div>
      <NoticeApplicant count={data.applyCount} />
    </>
  );
};

export default AlbarformDetailPage;
