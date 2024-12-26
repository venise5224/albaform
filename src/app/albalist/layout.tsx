import { ReactNode, Suspense } from "react";
import SearchContainer from "./components/SearchContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알바 목록",
  openGraph: {
    title: "알바 목록",
  },
};

const AlbaListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Suspense>
        <SearchContainer />
      </Suspense>
      {children}
    </div>
  );
};

export default AlbaListLayout;
