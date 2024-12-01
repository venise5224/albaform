"use client";

import RequirementPicker from "@/components/picker/RequirementPicker";

const testPage = () => {
  return (
    <>
      <div className="mt-[50px] flex flex-col gap-2 pl-[30px]">
        <span>모집인원</span>
        <RequirementPicker label="모집인원" />
      </div>
      <div className="mt-[50px] flex flex-col gap-2 pl-[30px]">
        <span>성별</span>
        <RequirementPicker label="성별" />
      </div>
      <div className="mt-[50px] flex flex-col gap-2 pl-[30px]">
        <span>학력</span>
        <RequirementPicker label="학력" />
      </div>
      <div className="mt-[50px] flex flex-col gap-2 pl-[30px]">
        <span>연령</span>
        <RequirementPicker label="연령" />
      </div>
      <div className="mt-[50px] flex flex-col gap-2 pl-[30px]">
        <span>우대사항</span>
        <RequirementPicker label="우대사항" />
      </div>
    </>
  );
};

export default testPage;
