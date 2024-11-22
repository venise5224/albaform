import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../zodSchema/signupSchema";
import Image from "next/image";
import PrimaryCTA from "@/app/components/button/PrimaryCTA";
import { StepTwoInput } from "./StepTwoInput";
import { cls } from "@/app/lib/utils";

interface SignupSecondContentsProps {
  formWatch: UseFormWatch<z.infer<typeof signupSchema>>;
  register: UseFormRegister<z.infer<typeof signupSchema>>;
  errors: FieldErrors<z.infer<typeof signupSchema>>;
  isSubmitting: boolean;
  userType: string;
  isValid: boolean;
}

const SignupSecondContents = ({
  formWatch,
  register,
  errors,
  isSubmitting,
  userType,
  isValid,
}: SignupSecondContentsProps) => {
  const inputArr = StepTwoInput({ userType, register, errors });

  return (
    <div className="flex flex-col items-center space-y-10">
      <label htmlFor="profileImg" className="relative cursor-pointer">
        <Image
          src="/images/profile-img-edit.png"
          alt="프로필사진 변경"
          width={80}
          height={80}
        />
        <Image
          src="/images/img-edit-btn.png"
          alt="프로필사진 변경 버튼"
          width={24}
          height={24}
          className="absolute bottom-0 right-0"
        />
      </label>
      <input
        type="file"
        id="profileImg"
        name="profileImg"
        className="hidden"
        accept="image/*"
      />
      {inputArr.map((input) => (
        <div
          className="relative flex w-full flex-col space-y-2"
          key={input.name}
        >
          <label htmlFor={input.name} className="text-md text-black-400">
            {input.title}{" "}
            {input.isRequired && <span className="text-orange-300">*</span>}
          </label>
          <input
            {...input.register}
            type={input.type}
            name={input.name}
            className={cls("form-input-base", input.error ? "border-red" : "")}
            placeholder={input.placeholder}
          />
          {input.error && (
            <p className="absolute bottom-0 right-0 translate-y-full text-sm font-medium text-red">
              {input.error}
            </p>
          )}
        </div>
      ))}
      <div className="relative flex w-full flex-col space-y-2">
        <label htmlFor="storeLocation" className="text-md text-black-400">
          가게 위치
        </label>
        <div
          className={cls(
            "form-input-base flex items-center space-x-2 focus-within:border-orange-300",
            errors.storeLocation ? "border-red" : ""
          )}
        >
          <Image
            src="/icons/map-pin.png"
            alt="가게 위치"
            width={36}
            height={36}
          />
          <input
            {...register("storeLocation")}
            type="text"
            name="storeLocation"
            className="w-full"
            placeholder="위치를 입력해주세요."
          />
          {errors.storeLocation && (
            <p className="absolute bottom-0 right-0 translate-y-full text-sm font-medium text-red">
              {errors.storeLocation.message}
            </p>
          )}
        </div>
      </div>
      <PrimaryCTA disabled={!isValid || isSubmitting} type="submit">
        시작하기
      </PrimaryCTA>
    </div>
  );
};

export default SignupSecondContents;
