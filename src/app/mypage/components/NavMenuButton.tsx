const MyPageButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="h-8 w-[98px] rounded-[8px] bg-gray-50 text-md font-semibold text-black-400 pc:w-[130px] pc:text-lg">
      {children}
    </button>
  );
};

export default MyPageButton;
