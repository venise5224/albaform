"use client";

import Image from "next/image";
import deleteIcon from "@/../public/icon/trash-md.svg";

interface DeletebuttonProps {
  [key: string]: any;
}

const DeleteButton = ({ ...rest }: DeletebuttonProps) => {
  // 공통
  const styleClass =
    "flex justify-center  rounded bg-line-200 transition-transform duration-200 ease-out hover:opacity-90 active:scale-95 w-full max-w-[70px] py-[17px] pc:max-w-[114px] pc:py-[18px]";

  return (
    <button className={styleClass} {...rest}>
      <Image
        src={deleteIcon}
        alt="buttonIcon"
        width={24}
        height={24}
        className="pc:size-9"
      />
    </button>
  );
};

export default DeleteButton;
