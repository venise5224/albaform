import PostCard from "@/components/card/PostCard";

const page = () => {
  const mockData = {
    writer: {
      imageUrl: "https://www.w3.org/TR/WCAG21/#text-alternatives",
      nickname: "junjeong",
      id: 0,
    },
    updatedAt: "2024-11-27T06:43:38.097Z",
    createdAt: "2024-11-27T06:43:38.097Z",
    commentCount: 0,
    likeCount: 0,
    imageUrl: "string",
    content: "",
    title: "string",
    id: 0,
  };
  return <PostCard info={mockData} />;
};

export default page;
