import Image from "next/image";

interface ApplicantStatsProps {
  info: {
    scrapCount: number;
    applyCount: number;
  };
}

const ApplicantStats = ({ info }: ApplicantStatsProps) => {
  const contentList = [
    {
      id: 0,
      href: "/icon/bookmark-orange.svg",
      title: "스크랩",
      content: `${info.scrapCount}회`,
      alt: "스크랩",
    },
    {
      id: 1,
      href: "/icon/people.svg",
      title: "지원현황",
      content: `현재까지 ${info.applyCount}명이 알바폼에 지원했어요!`,
      alt: "지원현황",
    },
  ];

  return (
    <section className="h-[84px] w-[327px] border-b border-t border-line-100 px-2 py-4">
      {contentList.map((list) => (
        <div key={list.id} className="flex">
          <div className="relative size-6">
            <Image src={list.href} fill alt={list.alt} />
          </div>
          <h3 className="ml-2 text-xs font-semibold text-black-400">
            {list.title}
          </h3>
          <p className="ml-[44px] flex-grow text-xs font-semibold text-black-200">
            {list.content}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ApplicantStats;
