import { Suspense } from "react";
import MyComment from "./components/MyComment";
import MyPost from "./components/MyPost";
import MyScrap from "./components/MyScrap";

const MyPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ orderBy: string }>;
}) => {
  const { orderBy } = await searchParams;
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <MyPost />
      </Suspense>
      <Suspense fallback={<div>로딩중...</div>}>
        <MyComment />
      </Suspense>
      <Suspense fallback={<div>로딩중...</div>}>
        <MyScrap />
      </Suspense>
    </div>
  );
};

export default MyPage;
