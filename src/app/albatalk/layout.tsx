import AddtalkButton from "@/components/button/AddtalkButton";
import AlbatalkSmartSearch from "./components/AlbatalkSmartSearch";
import { Suspense } from "react";
import FloatingButton from "@/components/button/FloatingButton";

const AlbaTalkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mt-6 max-w-[327px] pc:max-w-[1480px] tablet:max-w-[600px]">
      <Suspense>
        <AlbatalkSmartSearch />
      </Suspense>
      <div className="mt-[50px] pc:mt-10 tablet:mt-10">{children}</div>
      <div className="fixed bottom-20 right-10">
        <FloatingButton icon="/icon/writing-fill.svg" href="/addtalk" />
      </div>
    </div>
  );
};

export default AlbaTalkLayout;
