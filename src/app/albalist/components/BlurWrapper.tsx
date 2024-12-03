const BlurWrapper = ({
  children,
  isPublic,
}: {
  children: React.ReactNode;
  isPublic: boolean;
}) => {
  return !isPublic ? (
    <div className="pointer-events-none blur-sm">{children}</div>
  ) : (
    <>{children}</>
  );
};
