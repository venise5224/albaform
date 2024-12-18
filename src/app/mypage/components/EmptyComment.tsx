import Image from "next/image";
import emptyIcon from "@/../public/icon/empty-md.svg";

const Empty = () => {
  return (
    <div className="mx-auto mt-32 flex flex-col items-center gap-y-6 pc:mt-[178px] pc:gap-y-8 tablet:mt-[205px]">
      <Image
        src={emptyIcon}
        width={120}
        height={120}
        alt="null icon"
        className="h-[80px] w-[80px] pc:h-[120px] pc:w-[120px]"
      />

      <span className="text-center text-md text-gray-400 pc:text-2lg">
        작성된 댓글이 없어요.
      </span>
    </div>
  );
};

export default Empty;
