import { ReactNode } from "react";
import SearchContainer from "./components/SearchContainer";

const AlbaListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SearchContainer />
      {children}
    </div>
  );
};

export default AlbaListLayout;
