import ErrorText from "@/components/errorText/ErrorText";
import { applySchema } from "@/schema/apply/applySchema";
import { cls } from "@/utils/dynamicTailwinds";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { uploadResumeAction } from "../actions/uploadResumeAction";
import { useToast } from "@/hooks/useToast";

const ResumeNameInput = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<z.infer<typeof applySchema>>();
  const resumeName = watch("resumeName");
  const resumeId = watch("resumeId");
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  //이력서 제출 기능
  const handleUploadResume = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const response = await uploadResumeAction(file);

      if (response.status !== 201) {
        addToast(response.message as string, "warning");
        return;
      }

      setValue("resumeName", response.data.resumeName);
      setValue("resumeId", response.data.resumeId.toString());

      addToast("이력서 업로드에 성공하였습니다", "success");
    } catch (error) {
      console.error("이력서 업로드 오류:", error);
      addToast(
        "서버 오류로 인해 이력서 업로드 중 오류가 발생했습니다.",
        "warning"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col">
      <label htmlFor="resumeName" className="labelStyle">
        이력서
        <span className="text-orange-300"> *</span>
      </label>

      <label
        className={cls(
          "inputStyle",
          "flex cursor-pointer items-center",
          resumeName ? "text-black-400" : "text-gray-300"
        )}
      >
        <div className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          {loading ? "로딩 중..." : resumeName ? resumeName : "파일 업로드하기"}
        </div>
        <input
          type="file"
          hidden
          id="resumeName"
          {...register("resumeName")}
          accept=".pdf,.doc,.docx"
          onChange={handleUploadResume}
        />
        <input value={resumeId} {...register("resumeId")} hidden readOnly />
        <Image
          src={resumeName ? "/icon/Xcircle-md.svg" : "/icon/share-md.svg"}
          alt="파일 업로드"
          width={24}
          height={24}
          className="absolute bottom-4 right-3 cursor-pointer"
          onClick={(e) => {
            if (resumeName) {
              e.preventDefault();
              setValue("resumeName", "");
              setValue("resumeId", "");
            }
          }}
        />
      </label>

      <ErrorText error={errors.resumeName}>
        {errors.resumeName?.message}
      </ErrorText>
    </div>
  );
};

export default ResumeNameInput;
