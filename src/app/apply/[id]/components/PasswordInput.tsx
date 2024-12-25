import ErrorText from "@/components/errorText/ErrorText";
import { applySchema } from "@/schema/apply/applySchema";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const PasswordInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof applySchema>>();
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex flex-col">
      <label htmlFor="password" className="labelStyle">
        비밀번호
        <span className="text-orange-300"> *</span>
      </label>

      <input
        id="password"
        {...register("password")}
        type={visible ? "text" : "password"}
        placeholder="이름을 입력해주세요."
        className={`inputStyle ${errors.password ? "border-red" : ""}`}
      />
      <Image
        onClick={() => setVisible(!visible)}
        src={visible ? "/icon/visible.svg" : "/icon/non-visible.svg"}
        alt="비밀번호 보기"
        width={24}
        height={24}
        className="absolute bottom-4 right-3 cursor-pointer"
      />
      <p className="absolute bottom-[-20px] left-0 text-xs text-gray-400 pc:bottom-[-26px] pc:text-md">
        *지원내역 확인에 사용됩니다.
      </p>

      <ErrorText error={errors.password}>{errors.password?.message}</ErrorText>
    </div>
  );
};

export default PasswordInput;
