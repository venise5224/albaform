export interface Comment {
  writer: {
    imageUrl: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface MyComment {
  post: {
    content: string;
    title: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
