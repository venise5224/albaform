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
    orderBy?: string;
    isPublic?: boolean;
    isRecruiting?: boolean;
  }>;
}

const MyPage = async ({ searchParams }: MyPageProps) => {
  const {
    tab = "post",
    albatalkOrderBy = "mostRecent",
    orderBy = "mostRecent",
    isPublic = true,
    isRecruiting = true,
  } = await searchParams;

  const renderTabContent = () => {
    switch (tab) {
      case "post":
        return <MyPost orderBy={albatalkOrderBy} />;
      case "comment":
        return <MyComment />;
      case "scrap":
        return (
          <MyScrap
            orderBy={orderBy}
            isPublic={isPublic}
            isRecruiting={isRecruiting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Suspense
      key={`${tab}-${albatalkOrderBy}-${orderBy}-${isPublic}-${isRecruiting}`}
      fallback={<PostCardListSkeleton count={9} />}
    >
      {renderTabContent()}
    </Suspense>
  );
};

export default MyPage;
