import ApplicantStats from "@/components/ApplicantStats";

const page = () => {
  const info = {
    scrapCount: 8,
    applyCount: 5,
  };

  return <ApplicantStats info={info} />;
};

export default page;
