import { Comment } from "@/types/comment";
import ProfileImage from "./ProfileImage";
import formatYearMonthDay from "@/utils/formatYearMonthDay";
import EditDeleteDropdown from "@/components/dropdown/EditDeleteDropdown";
import kebabIcon from "@/../public/icon/kebab-md.svg";
import Image from "next/image";

const CommentItem = ({ item }: { item: Comment }) => {
  return (
    <div className="border-b border-line-200 bg-gray-50 py-4 pc:px-[10px] pc:py-6 tablet:px-[10px] tablet:py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-2 flex items-center gap-x-1 border-r border-line-200 pr-2 pc:mr-4 pc:pr-4">
            <ProfileImage imageUrl={item.writer.imageUrl} />
            <span className="text-xs text-gray-500 pc:text-lg">
              {item.writer.nickname}
            </span>
          </div>
          <span className="text-xs text-gray-500 pc:text-lg">
            {formatYearMonthDay(item.createdAt)}
          </span>
        </div>
        <EditDeleteDropdown
          id={String(item.id)}
          onEdit={() => alert("수정")}
          onDelete={() => alert("삭제")}
        >
          <Image
            src={kebabIcon}
            width={24}
            height={24}
            className="pc:size-9"
            alt="수정 및 삭제 메뉴"
          />
        </EditDeleteDropdown>
      </div>
      <p className="mt-6 text-md text-black-400 pc:mt-8 pc:text-xl tablet:text-lg">
        {item.content}
      </p>
    </div>
  );
};

export default CommentItem;
