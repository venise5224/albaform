"use client";

interface RoundedButtonProps {
  children: string;
  [key: string]: any;
}

const RoundedButton = ({ children, ...rest }: RoundedButtonProps) => {
  // 공통
  const styleClass =
    "font-bold text-white bg-blue-300 rounded-[100px] transition-transform duration-200 ease-out hover:opacity-90 active:scale-95 w-full max-w-[149px] py-4 text-base pc:max-w-[223px] pc:py-6 pc:text-2xl";

  return (
    <button className={styleClass} {...rest}>
      {children}
    </button>
  );
};

export default RoundedButton;
