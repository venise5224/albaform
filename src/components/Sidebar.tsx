import Image from "next/image";
import profile from "/public/icon/profile-orange.svg";
import logout from "/public/icon/logout-orange.svg";
import close from "/public/icon/close-lg.svg";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="z-99 fixed right-0 h-[100vh] w-[560px]">
      <button className="flex h-[88px] w-full flex-row-reverse items-center border-b border-b-gray-100 px-[26px]">
        <Image src={close} width={36} height={36} alt="닫기 버튼" />
      </button>
      <ul className="flex flex-col">
        <Link href="/mypage">
          <li className="flex h-[100px] w-full items-center gap-[24px] px-[56px] py-[32px]">
            <div className="text-orange-100">
              <Image
                src={profile}
                width={36}
                height={36}
                alt="마이페이지 이동"
              />
            </div>
            <span className="text-xl text-black-400">마이페이지 </span>
          </li>
        </Link>
        <li className="flex h-[100px] w-full items-center gap-[24px] px-[56px] py-[32px]">
          <Image
            src={logout}
            width={36}
            height={36}
            alt="마이페이지 이동"
            className="text-orange-100"
          />
          <span className="text-xl text-black-400">로그아웃 </span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
