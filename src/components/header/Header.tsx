"use client";

import { usePathname } from "next/navigation";
import { useSidebarState } from "@/hooks/useSidebarState";
import HeaderNavigation from "./HeaderNavigation";
import AuthPageNavigation from "./AuthPageNavigation";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const currentPath = usePathname();
  const { isOpen, setIsOpen } = useSidebarState();

  const isAuthPage = currentPath === "/signin" || currentPath === "/signup";

  const tabletStyle =
    "tablet:h-[60px] tablet:gap-[24px] tablet:px-[72px] tablet:py-[15px] tablet:text-lg";
  const pcStyle =
    "pc:h-[88px] pc:gap-[24px] pc:px-[240px] pc:py-[24px] pc:text-xl";

  return (
    <>
      <header
        className={`flex h-[54px] w-full items-center justify-between border-b-[1px] border-b-gray-100 px-[24px] py-[12px] text-md ${tabletStyle} ${pcStyle} `}
      >
        <Logo />
        <HeaderNavigation isAuthPage={isAuthPage} />
        {isAuthPage ? (
          <AuthPageNavigation />
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <HeaderMenu />
          </button>
        )}
      </header>
    </>
  );
};

export default Header;
