"use client";

import MyApplication from "@/app/alba/components/MyApplication";
import ApplicationStatus from "@/components/card/ApplicationStatus";
import { useAtomValue } from "jotai";
import { AlbaformDetailData } from "@/types/alba";
import { nonMemberInfoAtom } from "@/atoms/nonMemberInfoAtom";

const GuestDataFetcher = ({
  albarformData,
}: {
  albarformData: AlbaformDetailData;
}) => {
  const nonMemberInfo = useAtomValue(nonMemberInfoAtom);

  return (
    <>
      <section className="pc:col-start-2 pc:row-start-1">
        <ApplicationStatus
          recruitmentEndDate={albarformData.recruitmentEndDate}
          createdAt={nonMemberInfo.createdAt}
          status={nonMemberInfo.status}
        />
      </section>
      <section className="mt-8 pc:col-start-2 pc:row-start-2 pc:-mt-48">
        <MyApplication info={nonMemberInfo} />
      </section>
    </>
  );
};

export default GuestDataFetcher;
