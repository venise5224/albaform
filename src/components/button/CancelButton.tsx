"use client";

interface CancelbuttonProps {
  children: string;
  [key: string]: any;
}

const CancelButton = ({ children, ...rest }: CancelbuttonProps) => {
  // 공통
  const styleClass =
    "rounded-lg bg-gray-100 text-white transition-transform duration-200 ease-out hover:opacity-90 active:scale-95 w-full max-w-20 py-2 text-sm pc:max-w-[122px] pc:py-3 pc:text-xl";

  return (
    <button className={styleClass} {...rest}>
      {children}
    </button>
  );
};

export default CancelButton;
