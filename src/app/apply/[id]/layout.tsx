import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알바폼 지원하기",
  openGraph: {
    title: "알바폼 지원하기",
  },
};

const ApplyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[375px] px-6 pb-[80px] pc:max-w-[640px]">
      {children}
    </div>
  );
};

export default ApplyLayout;
