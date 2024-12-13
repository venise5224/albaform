import Image from "next/image";

type ResumeInputProps = {
  title: string;
};

const ResumInput = ({ title }: ResumeInputProps) => {
  return (
    <div className="flex h-[52px] w-full justify-between rounded-lg bg-background-200">
      <span>{title}.pdf </span>
      <Image src="/icon/write-md.svg" alt="이력서 수정 버튼" />
    </div>
  );
};

export default ResumInput;
