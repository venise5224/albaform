import SolidButton from "@/components/button/SolidButton";
import Carousel from "@/components/Carousel/Carousel";
import fetchData from "./fetchData";
import Content from "./components/Content";
import Title from "./components/Title";
import StoreLocation from "./components/StoreLocation";
import SimpleRequirements from "./components/SimpleRequirements";
import EmployerInfo from "./components/EmployerInfo";
import DetailRequirements from "./components/DetailRequirements";
import NoticeApplicant from "./components/NoticeApplicant";
import { AlbaformDetailData } from "@/types/alba";

interface AlbarformDetailPageProps {
  params: {
    formId: string;
  };
}

const AlbarformDetailPage = async ({ params }: AlbarformDetailPageProps) => {
  const { formId } = params;
  let data: AlbaformDetailData;

  const mockImages = [
    "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/22/13/53/pinecone-9216518_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/20/09/14/christmas-9210799_1280.jpg",
  ];

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
      <Carousel imageUrls={mockImages} />
      <div className="mt-8 grid gap-[32px] pc:mt-[80px] pc:grid-cols-[770px_640px] pc:grid-rows-[432px_336px_152px_562px] pc:justify-items-center pc:gap-0 pc:gap-x-[150px] pc:gap-y-[40px] pc:grid-areas-layout tablet:w-[327px] tablet:grid-cols-1 tablet:grid-rows-[270px_116px_156px_396px_302px_340px_158px] mobile:w-[327px] mobile:grid-cols-1 mobile:grid-rows-[270px_116px_156px_396px_302px_340px_158px]">
        <section className="pc:grid-in-box1">
          <Title info={data} />
        </section>
        <section className="pc:self-center pc:grid-in-box4">
          <SimpleRequirements info={data} />
        </section>
        <section className="pc:grid-in-box5">
          <EmployerInfo info={data} />
        </section>
        <section className="pc:justify-self-start pc:grid-in-box2">
          <Content description={data.description} />
        </section>
        <section className="pc:grid-in-box7">
          <DetailRequirements info={data} />
        </section>
        <section className="pc:grid-in-box3">
          <StoreLocation location={data.location} />
        </section>
        <section className="flex w-full flex-col gap-[10px] pc:grid-in-box6">
          <SolidButton icon="/icon/write-fill-md.svg" style="orange300">
            지원하기
          </SolidButton>
          <SolidButton icon="/icon/document-md.svg" style="outOrange300">
            내 지원 내역 보기
          </SolidButton>
        </section>
      </div>
      <NoticeApplicant count={data.applyCount} />
    </>
  );
};

export default AlbarformDetailPage;
