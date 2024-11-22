"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "/public/logo/albaform-with-logo.svg";
import Menu from "/public/icon/menu-lg.svg";

const Header = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthPage = currentPath === "/signin" || currentPath === "/signup";

  return (
    <header className="flex w-full items-center justify-between border-b-[1px] border-b-gray-100 px-[220px] py-[24px]">
      <Link href="/">
        <Image src={Logo} width={284} height={40} alt="logo" />
      </Link>
      <div className={isAuthPage ? "hidden" : ""}>
        <HeaderNavigation />
      </div>
      {isAuthPage ? (
        <ul>
          <li>사장님 전용</li>
          <li>지원자 전용</li>
        </ul>
      ) : (
        <button onClick={() => setIsOpen(!open)}>
          <Image src={Menu} width={36} height={36} alt="header menu" />
        </button>
      )}
    </header>
  );
};

export default Header;
