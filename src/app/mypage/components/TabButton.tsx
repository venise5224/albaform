interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const TabButton = ({ children, className, ...props }: TabButtonProps) => {
  return (
    <button
      className={`h-8 w-[98px] rounded-[8px] text-md font-medium pc:w-[130px] pc:text-lg ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TabButton;
