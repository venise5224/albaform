"use client";

import { isLoggedAtom } from "@/atoms/isLogged";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HeaderNavigation = ({ isAuthPage }: { isAuthPage: boolean }) => {
  const currentPathname = usePathname();
  const isLogged = useAtomValue(isLoggedAtom);
  const [isNotLogin, setIsNotLogin] = useState<boolean>(true); // 초기 상태를 true로 설정

  useEffect(() => {
    // 클라이언트에서만 실행되는 코드
    const isLoggedIn = localStorage.getItem("isLogin") !== null;
    setIsNotLogin(!isLoggedIn); // 로그인 상태에 따라 변경
  }, [isLogged]); // 의존성 배열이 빈 배열이므로 컴포넌트 마운트 시에만 실행됨
  // let isNotLogin: boolean;

  // if (typeof window !== "undefined")
  //   isNotLogin = localStorage.getItem("isLogin") === null;

  if (isAuthPage) return null;

  const navList = [
    {
      id: 0,
      name: "알바 목록",
      href: "/albalist",
    },
    {
      id: 1,
      name: "알바토크",
      href: "/albatalk",
    },
    {
      id: 2,
      name: "내 알바폼",
      href: "/myalbaform",
    },
  ];

  return (
    <nav className="m-[16px] flex-grow">
      <ul className="flex gap-[28px] text-gray-300">
        {navList.map((list, index) =>
          isNotLogin && index === 2 ? null : ( // 비회원인 경우 "내 알바폼"만 안 보이게 하기 위함
            <Link
              key={list.id}
              href={list.href}
              className={currentPathname === list.href ? "text-orange-100" : ""}
            >
              {list.name}
            </Link>
          )
        )}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
