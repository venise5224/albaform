import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "/public/logo/albaform-with-logo.svg";
import Menu from "/public/icon/menu-lg.svg";

("use client");
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full items-center border-b-[1px] border-b-gray-100 px-[220px] py-[24px]">
      <Link href="/">
        <Image src={Logo} width={284} height={40} alt="logo" />
      </Link>
      <HeaderNavigation />
      <button onClick={() => setIsOpen(!open)}>
        <Image src={Menu} width={36} height={36} alt="header menu" />
      </button>
    </header>
  );
};

export default Header;
