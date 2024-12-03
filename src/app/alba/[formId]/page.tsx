import Title from "./components/Title";

const page = () => {
  const mock = {
    id: 0,
    createdAt: "2024-12-03T07:45:51.320Z",
    preferred: "경력 무관",
    isPublic: true,
    location: "서울 종로구",
    recruitmentEndDate: "2024-12-03T07:45:51.320Z",
    title:
      "코드잇 스터디카페 관리 (주말 오전) 모집합니다 서울 종로구 용산구 서대문",
    scrapCount: 8,
    applyCount: 5,
    storeName: "스터디카페",
  };

  return (
    <div className="flex flex-col gap-[32px] pc:grid pc:grid-cols-[770px_640px] pc:grid-rows-[900px_562px] pc:gap-x-8 pc:gap-y-[120px] mobile:w-[327px]">
      <Title info={mock} />
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default page;
