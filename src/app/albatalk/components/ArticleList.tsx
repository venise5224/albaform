import { ArticleData } from "@/types/article";
import Image from "next/image";

interface ArticlesListProps {
  articles: ArticleData[];
  nextCursor: number | null;
}

const ArticleList = ({ articles, nextCursor }: ArticlesListProps) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <h3>{article.title}</h3>
          <div>{article.content}</div>
          <div className="relative h-[80px] w-[80px]">
            <Image
              src={article.imageUrl}
              fill
              className="object-cover"
              alt="이미지"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
