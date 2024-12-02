import SearchInput from "@/components/input/SearchInput";

const AlbaTalkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mt-[94px] flex max-w-[600px] flex-col space-y-8 pc:max-w-[1500px]">
      <div className="flex justify-between">
        <SearchInput />
        <div>임시 드랍다운</div>
      </div>
      {children}
    </div>
  );
};

export default AlbaTalkLayout;
