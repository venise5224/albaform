import { AlbaformDetailData } from "@/types/alba";
import ApplicantStats from "../../../../components/card/ApplicantStats";
import isPast from "@/utils/isPast";
import getCurrentTime from "@/utils/getCurrentTime";

interface titleData {
  title: string;
  storeName: string;
  location: string;
  isPublic: boolean;
  createdAt: string;
  recruitmentEndDate: string;
  preferred: string;
  scrapCount: number;
  applyCount: number;
}

const Title = ({ info }: { info: titleData }) => {
  const isRecruiting = !isPast(info.recruitmentEndDate);
  const submitDate = getCurrentTime(info.createdAt);

  return (
    <section>
      <div className="flex justify-between text-xs pc:text-md">
        <ul className="flex gap-2">
          <li className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 text-orange-300">
            {info.isPublic}
          </li>
          <li className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 text-orange-300">
            {isRecruiting ? "모집중" : "모집완료"}
          </li>
        </ul>
        <span className="text-gray-500">{submitDate}</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex text-md">
          <span className="font-semibold underline">{info.storeName}</span>
          <span className="ml-[10px] font-medium text-gray-400">
            <p>{info.location}</p> - <p>{info.preferred}</p>
          </span>
        </div>
        <h2 className="text-xl font-semibold text-black-500">{info.title}</h2>
      </div>

      <ApplicantStats
        info={{ scrapCount: info.scrapCount, applyCount: info.applyCount }}
      />
    </section>
  );
};

export default Title;
