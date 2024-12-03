import Title from "./components/Title";

const page = () => {
  const mock = {
    id: 0,
    createdAt: "2024-12-03T07:45:51.320Z",
    preferred: "string",
    isPublic: true,
    location: "string",
    recruitmentEndDate: "2024-12-03T07:45:51.320Z",
    description: "string",
    title: "string",
    scrapCount: 0,
    applyCount: 0,
    storeName: "string",
  };

  return (
    <div className="felx-col pc:grid-row-2pc:gap-x-[150px] flex gap-[32px] pc:grid pc:grid-cols-2 pc:gap-y-[120px]">
      <Title info={mock} />
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default page;
