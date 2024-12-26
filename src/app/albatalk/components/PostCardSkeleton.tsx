export const PostCardSkeleton = () => {
  return (
    <section className="relative flex h-[210px] w-[327px] flex-col justify-between rounded-[16px] border border-line-100 bg-background-100 p-6 pc:h-[280px] pc:w-[477px] tablet:h-[180px] tablet:w-full">
      <h3 className="h-[26px] w-[80%] rounded-md bg-gray-100"></h3>
      <p className="mt-2 h-[48px] w-[80%] rounded-md bg-gray-100 pc:-mt-[60px]"></p>
      <div className="mt-[20px] flex items-center justify-between gap-2">
        <div className="relative size-6 overflow-hidden rounded-full bg-gray-100"></div>
        <div className="h-[26px] w-[66px] flex-grow rounded-md bg-gray-100"></div>
      </div>
    </section>
  );
};

const PostCardListSkeleton = ({ count }: { count: number }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 pc:mt-[48px] pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
      {new Array(count).fill(0).map((_, idx) => (
        <PostCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default PostCardListSkeleton;
