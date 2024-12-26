import { Metadata } from "next";
import StepContainer from "./components/StepContainer";

export const metadata: Metadata = {
  title: "알바폼 만들기",
  openGraph: {
    title: "알바폼 만들기",
  },
};

const AddFormPage = () => {
  return <StepContainer />;
};

export default AddFormPage;
