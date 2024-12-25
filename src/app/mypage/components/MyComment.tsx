import type { MyComment } from "@/types/comment";
import { getMyComments } from "../getMyComments";
import MyCommentList from "./MyCommentList";

const MyComment = async () => {
  const response = await getMyComments({
    page: 1,
    pageSize: 12,
  });

  const myComments: MyComment[] = response.data;
  const totalPages: number = response.totalPages;
  const currentPage: number = response.currentPage;
  const totalItemCount: number = response.totalItemCount;

  return (
    <MyCommentList
      myComments={myComments}
      totalPages={totalPages}
      currentPage={currentPage}
    />
  );
};

export default MyComment;
