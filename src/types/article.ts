export interface ArticleData {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    imageUrl: string | null;
  };
}
