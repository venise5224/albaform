"use client";

import { editDeleteDropdownAtom } from "@/atoms/dropdownAtomStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import { useAtom } from "jotai";

// 트리거 요소를 넣으시고, 수정 및 삭제 함수도 전달해서 사용해주세요.
const EditDeleteDropdown = ({
  children,
  onEdit,
  onDelete,
}: {
  children: React.ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const [editDeleteDropdown, setEditDeleteDropdown] = useAtom(
    editDeleteDropdownAtom
  );

  const handleEditClick = () => {
    setEditDeleteDropdown(!editDeleteDropdown);
    onEdit();
  };

  const handleDeleteClick = () => {
    setEditDeleteDropdown(!editDeleteDropdown);
    onDelete();
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
            className="rounded-lg px-3 py-2 text-center pc:text-base"
          >
            {item.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditDeleteDropdown;
