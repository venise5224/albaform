import { cls } from "@/app/lib/utils";
import Link from "next/link";

const SignupTitle = ({ userType }: { userType: string }) => {
  const linkArr = [
    { type: "owner", title: "사장님 전용", href: "/signup/owner" },
    { type: "applicant", title: "지원자 전용", href: "/signup/applicant" },
  ];

  return (
    <div className="flex flex-col space-y-8">
      <nav className="flex items-center justify-center space-x-4">
        {linkArr.map((link) => (
          <Link
            key={link.type}
            href={link.href}
            className={cls(
              "font-bold leading-[26px] text-gray-400",
              link.type === userType ? "text-orange-500" : ""
            )}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SignupTitle;
