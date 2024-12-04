import StoreLocation from "@/components/card/StoreLocation";

const page = () => {
  const location =
    "서울특별시 중구 청계천로 100 시그니쳐타워 동관 1층 코드잇 스터디카페";

  return (
    <div className="w-[375px] pc:w-[720px]">
      <StoreLocation location={location} />
    </div>
  );
};

export default page;
