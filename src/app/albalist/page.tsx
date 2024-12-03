import { getAlbaList } from "./api";
import AlbaList from "./components/AlbaList";

const AlbaListPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    keyword?: string;
  }>;
}) => {
  const { keyword } = await searchParams;

  const response = await getAlbaList({
    orderBy: "mostRecent",
    limit: 6,
    keyword,
    isRecruiting: true,
  });

  const albaList = response.data || [];
  const nextCursor: number | null = response.nextCursor;

  return (
    <AlbaList
      list={albaList}
      initialCursor={nextCursor}
      initialKeyword={keyword}
    />
  );
};

export default AlbaListPage;
