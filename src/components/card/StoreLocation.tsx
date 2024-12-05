import CopyButton from "../button/CopyButton";
import KakaoMap from "../map/KakaoMap";

const StoreLocation = ({ location }: { location: string }) => {
  return (
    <section className="w-full">
      <h2 className="px-6 py-4 text-2lg text-black-500 pc:px-0 pc:text-3xl">
        근무 지역
      </h2>
      <div className="flex justify-between px-6 py-2 text-md text-black-400 pc:mt-6 pc:p-0">
        <span className="w-[240px] pc:w-[640px] pc:text-2xl">{location}</span>
        <CopyButton text={location} />
      </div>
      <div className="mt-2 pc:mt-12">
        <KakaoMap location={location} />
      </div>
    </section>
  );
};

export default StoreLocation;
