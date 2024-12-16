const LoadingSkeleton = ({
  count = 3,
  isImage = false,
}: {
  count?: number;
  isImage?: boolean;
}) => {
  return (
    <div className="m-auto mt-6 flex animate-pulse flex-col space-y-8 pc:m-0 pc:ml-4 pc:mt-0 pc:w-[640px]">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="h-16 w-[327px] rounded-lg bg-background-200"
          />
        ))}
      {isImage && (
        <div className="size-[116px] rounded-lg bg-background-200 pc:size-20" />
      )}
    </div>
  );
};

export default LoadingSkeleton;
