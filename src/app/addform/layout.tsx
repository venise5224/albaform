import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알바폼 만들기",
};

const AddFormLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="pc:ml-[148px] pc:mt-10">{children}</div>;
};

export default AddFormLayout;
