import { ArticleData } from "@/types/article";
import ArticleList from "./components/ArticleList";

const fetchMoreArticles = async (cursor: string | null) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?limit=6&cursor=${cursor}`
  );
  const result = await response.json();

  return {
    data: result.data,
    nextCursor: result.nextCursor,
  };
};

const AlbatalkPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?limit=6`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const result = await response.json();

  const nextCursor: number | null = result.nextCursor;
  const articles: ArticleData[] | [] = result.data;

  return (
    <main className="mx-auto mt-6 w-full max-w-[800px]">
      <h2>알바 토크</h2>
      <ArticleList nextCursor={nextCursor} articles={articles} />
    </main>
  );
};

export default AlbatalkPage;
