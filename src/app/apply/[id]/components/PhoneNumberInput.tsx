import ErrorText from "@/components/errorText/ErrorText";
import { applySchema } from "@/schema/apply/applySchema";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const PhoneNumberInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof applySchema>>();

  return (
    <div className="relative flex flex-col">
      <label htmlFor="phoneNumber" className="labelStyle">
        연락처
        <span className="text-orange-300"> *</span>
      </label>

      <input
        id="phoneNumber"
        {...register("phoneNumber")}
        type="tel"
        placeholder="숫자만 입력해주세요."
        className={`inputStyle ${errors.phoneNumber ? "border-red" : ""}`}
      />

      <ErrorText error={errors.phoneNumber}>
        {errors.phoneNumber?.message}
      </ErrorText>
    </div>
  );
};

export default PhoneNumberInput;
