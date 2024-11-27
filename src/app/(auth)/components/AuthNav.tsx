import { cls } from "@/utils/dynamicTailwind";
import Link from "next/link";

const AuthNav = ({
  userType,
  location,
}: {
  userType: string;
  location: string;
}) => {
  const linkArr = [
    {
      type: "owner",
      title: "사장님 전용",
      href: `/${location}/owner`,
    },
    {
      type: "applicant",
      title: "지원자 전용",
      href: `/${location}/applicant`,
    },
  ];

  return (
    <nav className="flex items-center justify-center space-x-4 pc:hidden tablet:hidden">
      {linkArr.map((link) => (
        <Link
          key={link.type}
          href={link.href}
          className={cls(
            "text-lg font-bold leading-[26px] text-gray-300",
            link.type === userType ? "text-orange-300" : ""
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default AuthNav;
