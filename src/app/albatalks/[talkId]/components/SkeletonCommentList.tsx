const SkeletonComment = () => (
  <div className="animate-pulse py-4 pc:px-[10px] pc:py-6 tablet:px-[10px] tablet:py-6">
    <div className="h-8 w-1/2 rounded-md bg-gray-100 pc:h-[43px]"></div>
    <div className="mt-6 h-6 w-full rounded-md bg-gray-100 pc:mt-8 pc:h-8 tablet:h-[26px]"></div>
  </div>
);

const SkeletonCommentList = ({ count }: { count: number }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-4 pc:mt-14 pc:gap-y-6 tablet:mt-10">
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonComment key={idx} />
      ))}
    </div>
  );
};

export default SkeletonCommentList;
