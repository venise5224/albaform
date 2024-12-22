import getCurrentTime from "@/utils/getCurrentTime";
import { getDday } from "@/utils/getDday";
import translateStatus from "@/utils/translateStatus";

type ApplicationStatusProps = {
  createdAt: string;
  recruitmentEndDate: string;
  status: "REJECTED" | "INTERVIEW_PENDING" | "INTERVIEW_COMPLETED" | "HIRED";
};

const ApplicationStatus = ({
  createdAt,
  recruitmentEndDate,
  status,
}: ApplicationStatusProps) => {
  const formattedCreatedTime = getCurrentTime(createdAt);
  const Dday = getDday(recruitmentEndDate);
  const translatedStatus = translateStatus(status);

  return (
    <div className="max-w-[375px] pc:max-w-[640px] pc:rounded-lg pc:border pc:border-line-100 pc:bg-background-100 pc:p-6">
      <div className="flex justify-between border-b border-b-line-100 py-4 text-md text-black-400">
        <span className="text-black-100">
          지원일시 <span className="ml-2 text-orange-300">{Dday}</span>
        </span>
        <span>{formattedCreatedTime}</span>
      </div>
      <div className="flex justify-between border-b border-b-line-100 py-4 text-md text-black-400 pc:border-none">
        <span className="text-black-100">진행 상태</span>
        <span>{translatedStatus}</span>
      </div>
    </div>
  );
};

export default ApplicationStatus;
