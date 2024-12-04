import EmployerInfo from "@/components/card/EmployerInfo";

const page = () => {
  const mock = {
    recruitmentEndDate: "2024-12-03T21:22:20.992Z",
    recruitmentStartDate: "2024-12-03T21:22:20.992Z",
    storePhoneNumber: "02-323-0723",
    phoneNumber: "01076789472",
  };

  return <EmployerInfo info={mock} />;
};

export default page;
