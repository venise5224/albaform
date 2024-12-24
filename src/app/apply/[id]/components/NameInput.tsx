import ErrorText from "@/components/errorText/ErrorText";
import { applySchema } from "@/schema/apply/applySchema";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const NameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof applySchema>>();

  return (
    <div className="relative flex flex-col">
      <label htmlFor="name" className="labelStyle">
        이름
        <span className="text-orange-300"> *</span>
      </label>

      <input
        id="name"
        {...register("name")}
        type="text"
        placeholder="이름을 입력해주세요."
        className={`inputStyle ${errors.name ? "border-red" : ""}`}
      />

      <ErrorText error={errors.name}>{errors.name?.message}</ErrorText>
    </div>
  );
};

export default NameInput;
