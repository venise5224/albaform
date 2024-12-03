import { ReactNode } from "react";
import SearchBar from "./components/SearchBar";

const AlbaListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};

export default AlbaListLayout;
