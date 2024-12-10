import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알바 토크 글쓰기",
};

const AddTalkLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AddTalkLayout;
