import userProfile from "@/../public/icon/profile-circle-md.svg";
import Image from "next/image";

const ProfileImage = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <div className="relative size-6 rounded-full pc:size-9">
      <Image
        src={imageUrl ? imageUrl : userProfile}
        fill
        className="rounded-full"
        alt="작성자 프로필 이미지"
      />
    </div>
  );
};

export default ProfileImage;
