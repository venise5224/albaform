import SearchInput from "@/components/input/SearchInput";
import { ReactNode } from "react";

const AlbaListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <SearchInput />
      {children}
    </div>
  );
};

export default AlbaListLayout;
