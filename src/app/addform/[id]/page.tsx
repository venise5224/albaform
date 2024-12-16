import { Metadata } from "next";
import StepContainer from "../components/StepContainer";
import instance from "@/lib/instance";

export const metadata: Metadata = {
  title: "알바폼 수정하기",
};

interface EditFormPageProps {
  params: Promise<{ id: string }>;
}

const EditFormPage = async ({ params }: EditFormPageProps) => {
  const { id } = await params;

  const getAlbaForm = async () => {
    try {
      const response = await instance(
        `${process.env.NEXT_PUBLIC_API_URL}/forms/${id}`,
        {
          method: "GET",
          cache: "force-cache",
        }
      );

      if (response.status !== 200) {
        return {
          status: response.status,
          message: response.error,
        };
      }

      const formData = response.data;

      return formData;
    } catch (error) {
      console.error("editAlbaFormPage에서 에러 발생", error);
      return {
        status: 500,
        message: "알바폼 조회 중 오류가 발생했습니다.",
      };
    }
  };

  const albaForm = await getAlbaForm();

  return <StepContainer albaForm={albaForm} />;
};

export default EditFormPage;
