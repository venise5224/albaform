const LoadingSkeleton = ({
  count = 3,
  isImage = false,
}: {
  count?: number;
  isImage?: boolean;
}) => {
  return (
    <div className="m-auto mt-10 flex animate-pulse flex-col space-y-10 pc:m-0 pc:ml-4 pc:mt-12 pc:w-[640px] pc:space-y-12">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="h-16 w-[327px] rounded-lg bg-background-200 pc:w-[640px]"
          />
        ))}
      {isImage && (
        <div className="size-20 rounded-lg bg-background-200 pc:size-[116px]" />
      )}
    </div>
  );
};

export default LoadingSkeleton;
