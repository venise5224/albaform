"use client";

import { usePathname } from "next/navigation";
import { useSidebarState } from "@/hooks/useSidebarState";
import Link from "next/link";
import Image from "next/image";
import HeaderNavigation from "./HeaderNavigation";
import AuthPageHeader from "./AuthPageHeader";

const Header = () => {
  const currentPath = usePathname();
  const { isOpen, setIsOpen } = useSidebarState();

  const isAuthPage = currentPath === "/signin" || currentPath === "/signup";

  return (
    <>
      <header className="flex h-[88px] w-full items-center justify-between border-b-[1px] border-b-gray-100 px-[220px] py-[24px]">
        <Link href="/">
          <Image
            src="/logo/albaform-with-logo.svg"
            width={284}
            height={40}
            alt="logo"
          />
        </Link>
        <HeaderNavigation isAuthPage={isAuthPage} />
        {isAuthPage ? (
          <AuthPageHeader />
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src="/icon/menu-lg.svg"
              width={36}
              height={36}
              alt="header menu"
            />
          </button>
        )}
      </header>
    </>
  );
};

export default Header;
