import ErrorText from "@/components/errorText/ErrorText";
import { applySchema } from "@/schema/apply/applySchema";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const ExperienceInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof applySchema>>();

  return (
    <div className="relative flex flex-col">
      <label htmlFor="experienceMonths" className="labelStyle">
        경력(개월 수)
        <span className="text-orange-300"> *</span>
      </label>

      <input
        id="experienceMonths"
        {...register("experienceMonths")}
        type="number"
        placeholder="숫자만 입력해주세요."
        className={`inputStyle ${errors.experienceMonths ? "border-red" : ""}`}
      />

      <ErrorText error={errors.experienceMonths}>
        {errors.experienceMonths?.message}
      </ErrorText>
    </div>
  );
};

export default ExperienceInput;
