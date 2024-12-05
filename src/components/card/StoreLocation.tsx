import CopyButton from "../button/CopyButton";
import KakaoMap from "../map/KakaoMap";

const StoreLocation = ({ location }: { location: string }) => {
  return (
    <section className="h-[340px] w-[375px] pc:h-[562px] pc:w-[770px]">
      <h2 className="h-[58px] w-full px-6 py-4 text-2lg text-black-500 pc:h-[78px] pc:px-0 pc:text-3xl">
        근무 지역
      </h2>
      <div className="flex justify-between px-6 py-2 text-md text-black-400 pc:mt-6 pc:p-0">
        <span className="w-[240px] pc:w-[640px] pc:text-2xl">{location}</span>
        <CopyButton text={location} />
      </div>
      <div className="px-6 pc:px-0 mt-2 h-[210px] w-full pc:mt-12 pc:h-[380px]">
        <KakaoMap location={location} />
      </div>
    </section>
  );
};

export default StoreLocation;
