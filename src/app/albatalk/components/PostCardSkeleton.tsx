export const PostCardSkeleton = () => {
  return (
    <section className="relative flex h-[210px] w-[327px] flex-col justify-between rounded-[16px] border border-line-100 bg-background-200 p-6 pc:h-[280px] pc:w-[477px] tablet:h-[180px] tablet:w-[600px]">
      <h3 className="h-[26px] w-[80%] bg-gray-200"></h3>
      <p className="mt-2 h-[48px] w-[80%] bg-gray-200 pc:-mt-[60px]"></p>
      <div className="mt-[20px] flex items-center justify-between gap-2">
        <div className="relative size-6 overflow-hidden rounded-full bg-gray-200"></div>
        <div className="h-[26px] w-[66px] bg-gray-200"></div>
        <time className="h-[26px] w-[66px] flex-grow bg-gray-200"></time>
        <ul className="flex items-center gap-4">
          <li className="h-[26px] w-[38px] items-center bg-gray-200"></li>
          <li className="h-[26px] w-[38px] items-center bg-gray-200"></li>
        </ul>
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
