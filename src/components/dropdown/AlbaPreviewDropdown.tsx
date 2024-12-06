"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";

// 트리거 요소를 넣으시고, 지원하기 및 스크랩 함수도 전달해서 사용해주세요.
const AlbaPreviewDropdown = ({
  children,
  onApply,
  onScrap,
}: {
  children: React.ReactNode;
  onApply: () => void;
  onScrap: () => void;
}) => {
  const itemArr = [
    {
      text: "지원하기",
      onClick: onApply,
    },
    {
      text: "스크랩",
      onClick: onScrap,
    },
  ];

  return (
    <DropdownMenu className="bg-transparent">
      <DropdownMenuTrigger
        asChild
        id="editDelete"
        checkedValue={undefined}
        className="rounded-lg"
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        id="editDelete"
        className="translate-x-[-50px] items-center bg-white p-1 pc:w-[132px] pc:translate-x-[-100px]"
      >
        {itemArr.map((item) => (
          <DropdownMenuItem
            key={item.text}
            onClick={item.onClick}
            className="rounded-lg px-3 py-2 text-center font-semibold text-gray-400 hover:text-black-400 pc:text-base"
          >
            {item.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlbaPreviewDropdown;
