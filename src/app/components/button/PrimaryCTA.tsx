interface PrimaryCTAProps {
  children: React.ReactNode;
  disabled: boolean;
  type: "button" | "submit";
  onClick?: () => void;
}

const PrimaryCTA = ({ children, disabled, type, onClick }: PrimaryCTAProps) => {
  return (
    <button
      type={type}
      className="w-full max-w-[640px] rounded-lg bg-orange-300 p-4 text-lg font-semibold text-white disabled:bg-gray-100"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryCTA;
