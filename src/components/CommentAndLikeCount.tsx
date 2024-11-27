import Image from "next/image";

const CommentAndLikeCount = ({
  commentCount,
  likeCount,
}: {
  commentCount: number;
  likeCount: number;
}) => {
  return (
    <ul className="flex items-center gap-4">
      <li className="flex items-center gap-[2px]">
        <Image src="/icon/comment-md.svg" width={28} height={28} alt="댓글" />
        <span>{commentCount}</span>
      </li>
      <li className="flex items-center gap-[2px]">
        <Image src="/icon/heart-md.svg" width={28} height={28} alt="좋아요" />
        <span>{likeCount}</span>
      </li>
    </ul>
  );
};

export default CommentAndLikeCount;
