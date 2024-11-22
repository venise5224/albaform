"use client";

import Image from "next/image";

interface SolidButtonProps {
  icon?: string;
  label: string;
  size: "small" | "large";
  style:
    | "orange300"
    | "orange200"
    | "gray100"
    | "outOrange300"
    | "outOrange200"
    | "outGray100";
  onClick: () => void;
}

export default function SolidButton({
  icon,
  label,
  size,
  style,
  onClick,
}: SolidButtonProps) {
  // 크기 설정
  const sizeClass =
    size === "small"
      ? "w-[327px] py-4 text-base "
      : "w-[640px] h-[72px] text-xl ";

  // 스타일 설정
  let styleClass = "";
  if (style === "orange300") styleClass = "bg-orange-300 text-white";
  else if (style === "orange200") styleClass = "bg-orange-200 text-white";
  else if (style === "gray100") styleClass = "bg-gray-100 text-white";
  else if (style === "outOrange300")
    styleClass = "border border-orange-300 text-orange-300 bg-transparent";
  else if (style === "outOrange200")
    styleClass = "border border-orange-200 text-orange-200 bg-transparent";
  else if (style === "outGray100")
    styleClass = "border border-bg-gray-100 text-bg-gray-100 bg-transparent";

  // 공통
  const commonClass =
    "flex items-center gap-x-2 font-semibold rounded-lg justify-center transition-transform duration-200 ease-out active:scale-95 hover:opacity-90";

  // 최종 스타일
  const finalClassName = `${commonClass} ${sizeClass} ${styleClass}`;

  return (
    <button className={finalClassName} onClick={onClick}>
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
      {label}
    </button>
  );
}
