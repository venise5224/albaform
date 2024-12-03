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
    <div className="felx-col pc:grid-row-2pc:gap-x-[150px] flex gap-[32px] pc:grid pc:grid-cols-2 pc:gap-y-[120px]">
      <Title info={mock} />
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default page;
