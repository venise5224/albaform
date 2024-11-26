import EmployerInfo from "@/components/EmployerInfo";

const page = () => {
  const info = {
    recruitmentStartDate: "2024-11-26T07:21:19.278Z",
    recruitmentEndDate: "2024-11-26T07:21:19.278Z",
    storePhoneNumber: "02-312-2827",
    phoneNumber: "010-7678-9548",
  };
  return <EmployerInfo info={info} />;
};

export default page;
