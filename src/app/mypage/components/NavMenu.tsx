"use client";

import MyPageButton from "./NavMenuButton";

const NavMenu = () => {
  return (
    <div className="flex max-w-[327px] gap-[10px] rounded-[14px] bg-background-200 p-[6px] pc:w-[422px]">
      <MyPageButton>내가 쓴 글</MyPageButton>
      <MyPageButton>내가 쓴 댓글</MyPageButton>
      <MyPageButton>스크랩</MyPageButton>
    </div>
  );
};

export default NavMenu;
