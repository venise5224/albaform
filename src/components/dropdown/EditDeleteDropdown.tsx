"use client";

import { editDeleteDropdownAtom } from "@/atoms/dropdownAtomStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import { useAtom } from "jotai";

const EditDeleteDropdown = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const [editDeleteDropdown, setEditDeleteDropdown] = useAtom(
    editDeleteDropdownAtom
  );

  const handleEditClick = () => {
    setEditDeleteDropdown(!editDeleteDropdown);
    onClick?.();
  };

  const handleDeleteClick = () => {
    setEditDeleteDropdown(!editDeleteDropdown);
    onClick?.();
  };

  const itemArr = [
    {
      text: "수정하기",
      onClick: handleEditClick,
    },
    {
      text: "삭제하기",
      onClick: handleDeleteClick,
    },
  ];

  return (
    <DropdownMenu className="bg-transparent">
      <DropdownMenuTrigger
        asChild
        id="editDelete"
        checkedValue={editDeleteDropdown}
        className="rounded-lg"
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        id="editDelete"
        className="translate-x-[-100px] items-center bg-white p-1 pc:w-[132px]"
      >
        {itemArr.map((item) => (
          <DropdownMenuItem
            key={item.text}
            onClick={item.onClick}
            className="rounded-lg px-3 py-2 text-center"
          >
            {item.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditDeleteDropdown;
