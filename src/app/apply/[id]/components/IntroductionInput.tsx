import ErrorText from "@/components/errorText/ErrorText";
import { applySchema } from "@/schema/apply/applySchema";
import { cls } from "@/utils/dynamicTailwinds";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const IntroductionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof applySchema>>();

  return (
    <div className="relative flex flex-col">
      <label htmlFor="introduction" className="labelStyle">
        자기 소개
        <span className="text-orange-300"> *</span>
      </label>

      <textarea
        id="introduction"
        {...register("introduction")}
        className={cls(
          "h-[132px] resize-none appearance-none focus:outline-none",
          "inputStyle",
          errors.introduction ? "border-red" : ""
        )}
        placeholder="최대 200자까지 입력 가능합니다."
      />

      <ErrorText error={errors.introduction}>
        {errors.introduction?.message}
      </ErrorText>
    </div>
  );
};

export default IntroductionInput;
