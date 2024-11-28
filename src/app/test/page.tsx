import CommentCard from "@/components/card/CommentCard";

const page = () => {
  const mock = {
    post: {
      content:
        "알바 추천해주세요.알바 추천해주세요.알바 추천해주세요.알바 추천해주세요.알바 추천해주세요.알바 추천해주세요.알바 추천해주세요.",
      title: "알바 추천해주세요.",
      id: 0,
    },
    updatedAt: "2024-11-27T06:52:01.461Z",
    createdAt: "2024-11-27T06:52:01.461Z",
    content: "스터디카페 했었는데 너무 좋았어요",
    id: 0,
  };
  return <CommentCard info={mock} />;

import PostCard from "@/components/card/PostCard";

const page = () => {
  const mockData = {
    writer: {
      imageUrl: "",
      nickname: "junjeong",
      id: 0,
    },
    updatedAt: "2024-11-27T06:43:38.097Z",
    createdAt: "2024-11-27T06:43:38.097Z",
    commentCount: 0,
    likeCount: 0,
    imageUrl: "string",
    content:
      "안녕 내 이름은 정준영이야 안녕 내 이름은 정준영이야안녕 내 이름은 정준영이야안녕 내 이름은 정준영이야안녕 내 이름은 정준영이야안녕 내 이름은 정준영이야",
    title: "제목",
    id: 0,
  };
  return <PostCard info={mockData} />;

};

export default page;
