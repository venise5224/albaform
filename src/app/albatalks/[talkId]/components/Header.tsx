"use client";

import EditDeleteDropdown from "@/components/dropdown/EditDeleteDropdown";
import Image from "next/image";
import kebabIcon from "@/../public/icon/kebab-md.svg";
import commentIcon from "@/../public/icon/comment-md.svg";
import likeIcon from "@/../public/icon/heart-md.svg";
import { PostCardProps } from "@/types/post";
import ProfileImage from "./ProfileImage";
import formatYearMonthDay from "@/utils/formatYearMonthDay";

interface props {
  info: PostCardProps;
}

const Header = ({ info }: props) => {
  return (
    <div>
      <div className="border-bg-line-200 flex items-center justify-between border-b pb-6 pc:pb-5">
        <h2 className="text-lg font-semibold text-black-400 pc:text-2xl tablet:text-xl">
          {info.title}
        </h2>
        <EditDeleteDropdown
          id={String(info.id)}
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
      <div className="mt-6 flex items-center justify-between pc:mt-10">
        <div className="flex items-center gap-x-4 pc:gap-x-8">
          <div className="flex items-center gap-x-1">
            <ProfileImage imageUrl={info.writer.imageUrl} />
            <span className="text-xs text-gray-500 pc:text-lg">
              {info.writer.nickname}
            </span>
          </div>
          <div className="text-xs text-gray-500 pc:text-lg">
            {formatYearMonthDay(info.createdAt)}
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="flex items-center gap-x-[2px]">
            <Image
              src={commentIcon}
              width={24}
              height={24}
              className="pc:size-9"
              alt="댓글 개수"
            />
            <small className="text-xs text-gray-500 pc:text-lg">
              {info.commentCount}
            </small>
          </div>
          <div className="flex items-center gap-x-[2px]">
            <button type="button">
              <Image
                src={likeIcon}
                width={24}
                height={24}
                className="pc:size-9"
                alt="좋아요 버튼"
              />
            </button>
            <small className="text-xs text-gray-500 pc:text-lg">
              {info.likeCount}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
