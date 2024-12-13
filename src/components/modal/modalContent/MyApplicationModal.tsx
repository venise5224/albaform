"use client";

import ModalContainer from "../modalContainer/ModalContainer";
import instance from "@/lib/instance";
import formatExperienceMonth from "@/utils/formatExperienceMonth";
import LoadingSpinner from "@/components/spinner/LoadingSpinner";
import ResumInput from "@/components/input/ResumeInput";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface MyApplicationData {
  id: number;
  applicantId: number;
  name: string;
  phoneNumber: string;
  updatedAt: string;
  createdAt: string;
  status: "REJECTED" | "INTERVIEW_PENDING" | "INTERVIEW_COMPLETED" | "HIRED";
  introduction: string;
  resumeName: string;
  resumeId: number;
  experienceMonths: number;
}

const MyApplicationModal = () => {
  const [data, setData] = useState<MyApplicationData>({
    id: 0,
    applicantId: 0,
    name: "",
    phoneNumber: "",
    updatedAt: "",
    createdAt: "",
    status: "INTERVIEW_PENDING",
    introduction: "",
    resumeName: "",
    resumeId: 0,
    experienceMonths: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { formId } = useParams();

  const formattedExperienceMonth = formatExperienceMonth(data.experienceMonths);

  useEffect(() => {
    const fetchMyApplicationData = async () => {
      setIsLoading(true);
      try {
        const res = await instance(
          `${process.env.NEXT_PUBLIC_API_URL}/forms/${formId}/my-application`
        );
        setData(res.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("지원 내역을 조회하지 못하였습니다.", error);
      }
    };
    fetchMyApplicationData();
  }, [formId]);

  return (
    <ModalContainer>
      {!isLoading ? (
        <div className="flex flex-col pb-[8px]">
          <h2 className="text-2lg font-semibold text-black-400 pc:text-2xl">
            제출 내용
          </h2>
          <section>
            <div className="flex justify-between border border-b-line-100 py-[14px]">
              <h3 className="text-black-100">이름</h3>
              <span className="text-black-400">{data?.name}</span>
            </div>
            <div className="flex justify-between border border-b-line-100 py-[14px]">
              <h3 className="text-black-100">연락처</h3>
              <span className="text-black-400">{data?.phoneNumber}</span>
            </div>
            <div className="flex justify-between border border-b-line-100 py-[14px]">
              <h3 className="text-black-100">경력</h3>
              <span className="text-black-400">{formattedExperienceMonth}</span>
            </div>
          </section>
          <section className="flex flex-col gap-[14px]">
            <h3 className="text-black-100">이력서</h3>
            <ResumInput title={data.resumeName} />
          </section>
          <section className="felx-col flex gap-[14px]">
            <h3 className="text-black-100">자기소개</h3>
            <span className="h-[244px] w-full resize-none overflow-scroll rounded-lg border border-gray-200 p-[14px]">
              {data.introduction}
            </span>
          </section>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </ModalContainer>
  );
};

export default MyApplicationModal;
