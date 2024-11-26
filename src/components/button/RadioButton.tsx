"use client";

interface RadioButtonProps {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const RadioButton = ({
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}: RadioButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      className={`size-5 cursor-pointer appearance-none rounded-full border-[5px] checked:bg-orange-300 checked:ring-orange-300 ${
        disabled
          ? "cursor-default border-line-100 bg-line-100 ring-gray-200"
          : "border-gray-50 ring-1 ring-gray-100 transition-transform duration-200 ease-out active:scale-50"
      }`}
    />
  );
};

export default RadioButton;
