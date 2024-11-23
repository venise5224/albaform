"use client";

import { createPortal } from "react-dom";
import { useSidebarState } from "@/hooks/useSidebarState";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebarState();

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[98] bg-black opacity-50"
        onClick={() => setIsOpen(false)} // Overlay 클릭 시 Sidebar 닫기
      />
      {/* Sidebar */}
      <nav className="fixed right-0 top-0 z-[99] h-[100vh] w-[560px] bg-white shadow-lg">
        <div className="flex h-[88px] w-full flex-row-reverse items-center border-b border-b-gray-100 px-[26px]">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/icon/close-lg.svg"
              width={36}
              height={36}
              alt="닫기 버튼"
            />
          </button>
        </div>
        <ul className="flex flex-col">
          <li>
            <Link
              href="/mypage"
              className="flex h-[100px] w-full items-center gap-[24px] px-[56px] py-[32p]"
            >
              <div className="text-orange-100">
                <Image
                  src="/icon/profile-orange.svg"
                  width={36}
                  height={36}
                  alt="마이페이지 이동"
                />
              </div>
              <span className="text-xl text-black-400">마이페이지</span>
            </Link>
          </li>
          <li className="flex h-[100px] w-full items-center gap-[24px] px-[56px] py-[32px]">
            <Image
              src="/icon/logout-orange.svg"
              width={36}
              height={36}
              alt="로그아웃"
              className="text-orange-100"
            />
            <span className="text-xl text-black-400">로그아웃</span>
          </li>
        </ul>
      </nav>
    </>,
    document.getElementById("sidebar-root") as HTMLElement
  );
};

export default Sidebar;
