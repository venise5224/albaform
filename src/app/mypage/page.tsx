import { Metadata } from "next";
import MyComment from "./components/MyComment";
import MyPost from "./components/MyPost";
import MyScrap from "./components/MyScrap";
import { Suspense } from "react";
import PostCardListSkeleton from "../albatalk/components/PostCardSkeleton";

export const metadata: Metadata = {
  title: "마이페이지",
};

interface MyPageProps {
  searchParams: Promise<{
    tab: string;
    albatalkOrderBy?: string;
  }>;
}

const MyPage = async ({ searchParams }: MyPageProps) => {
  const { tab = "post", albatalkOrderBy = "mostRecent" } = await searchParams;

  const renderTabContent = () => {
    switch (tab) {
      case "post":
        return <MyPost orderBy={albatalkOrderBy} />;
      case "comment":
        return <MyComment />;
      case "scrap":
        return <MyScrap />;
      default:
        return null;
    }
  };

  return (
    <Suspense
      key={`${tab}-${albatalkOrderBy}`}
      fallback={<PostCardListSkeleton count={9} />}
    >
      {renderTabContent()}
    </Suspense>
  );
};

export default MyPage;
