import { PostCardProps } from "@/types/post";
import AlbatalkList from "./AlbatalkList";
import { getArticles } from "../getArticles";

const AlbatalkRander = async ({
  orderBy,
  keyword,
}: {
  orderBy: string;
  keyword: string;
}) => {
  const response = await getArticles({
    limit: 9,
    cursor: 0,
    orderBy,
    keyword,
  });
  const nextCursor: number | null = response.nextCursor;
  const posts: PostCardProps[] = response.data;

  return (
    <AlbatalkList
      posts={posts}
      nextCursor={nextCursor}
      orderBy={orderBy}
      keyword={keyword}
    />
  );
};

export default AlbatalkRander;
