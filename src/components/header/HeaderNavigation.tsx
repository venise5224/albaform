"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavigation = ({ isAuthPage }: { isAuthPage: boolean }) => {
  const currentPathname = usePathname();

  if (isAuthPage) return null;

  const navList = [
    {
      name: "알바 목록",
      href: "/albalist",
    },
    {
      name: "알바토크",
      href: "/albatalk",
    },
    {
      name: "내 알바폼",
      href: "/myalbaform",
    },
  ];

  return (
    <nav className="m-[16px] flex-grow">
      <ul className="flex gap-[16px] text-gray-300">
        {navList.map((list) => (
          <Link
            href={list.href}
            className={currentPathname === list.href ? "text-orange-100" : ""}
          >
            {list.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
