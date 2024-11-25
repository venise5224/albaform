"use client";

import Image from "next/image";

interface SolidButtonProps {
  icon?: string;
  children: string;
  size?: "small" | "large";
  style: "orange300" | "orange200" | "outOrange300" | "outOrange200";
  disabled?: boolean;
  [key: string]: any;
}

const SolidButton = ({
  icon,
  children,
  size = "small",
  style,
  disabled = false,
  ...rest
}: SolidButtonProps) => {
  // 크기별 스타일
  const sizeStyle = {
    small: "w-full max-w-[327px] py-4 text-base",
    large: "w-full max-w-[640px] py-5 text-xl",
  };

  // 활성화 상태 or 비활성화 상태 스타일
  const buttonStyles = {
    orange300: disabled
      ? "solid-disabled-button-orange"
      : "solid-button-orange",
    orange200: disabled
      ? "solid-disabled-button-orange"
      : "solid-button-orange",
    outOrange300: disabled
      ? "solid-disabled-button-outOrange"
      : "solid-button-outOrange",
    outOrange200: disabled
      ? "solid-disabled-button-outOrange"
      : "solid-button-outOrange",
  };

  const styleClass = buttonStyles[style];

  // 공통
  const commonClass = `flex items-center gap-x-2 font-semibold rounded-lg justify-center transition-transform duration-200 ease-out hover:opacity-90}`;

  // 최종 스타일
  const finalClassName = `${commonClass} ${sizeStyle[size]} ${styleClass}`;

  return (
    <button className={finalClassName} disabled={disabled} {...rest}>
      {icon && (
        <span>
          <Image
            src={icon}
            alt="buttonIcon"
            width={size === "small" ? 24 : 36}
            height={size === "small" ? 24 : 36}
          />
        </span>
      )}
      {children}
    </button>
  );
};

export default SolidButton;
