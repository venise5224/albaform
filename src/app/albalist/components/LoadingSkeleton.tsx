"use server";

const LoadingSkeleton = () => (
  <div className="mx-auto mt-32 pc:mt-[178px] tablet:mt-[205px]">
    <span className="text-center text-md text-gray-400 pc:text-2lg">
      로딩중입니다...
    </span>
  </div>
);

export default LoadingSkeleton;
