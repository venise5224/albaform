import { FieldErrors, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { applicantSchema, ownerSchema } from "../zodSchema/signupSchema";
import Image from "next/image";
import PrimaryCTA from "@/app/components/button/PrimaryCTA";
import { StepTwoInput } from "./StepTwoInput";
import { cls } from "@/app/lib/utils";

interface SignupSecondContentsProps {
  register: UseFormRegister<
    z.infer<typeof applicantSchema> | z.infer<typeof ownerSchema>
  >;
  errors: FieldErrors<
    z.infer<typeof applicantSchema> | z.infer<typeof ownerSchema>
  >;
  isSubmitting: boolean;
  userType: string;
  isValid: boolean;
}

const SignupSecondContents = ({
  register,
  errors,
  isSubmitting,
  userType,
  isValid,
}: SignupSecondContentsProps) => {
  const inputArr = StepTwoInput({ userType, register, errors });
  const ownerErrors = errors as FieldErrors<z.infer<typeof ownerSchema>>;

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
      {userType === "owner" && (
        <div className="relative flex w-full flex-col space-y-2">
          <label htmlFor="storeLocation" className="text-md text-black-400">
            가게 위치
          </label>
          <div
            className={cls(
              "form-input-base flex items-center space-x-2 focus-within:border-orange-300",
              ownerErrors.location ? "border-red" : ""
            )}
          >
            <Image
              src="/icons/map-pin.png"
              alt="가게 위치"
              width={36}
              height={36}
            />
            <input
              {...register("location")}
              type="text"
              name="location"
              className="w-full"
              placeholder="위치를 입력해주세요."
            />
            {ownerErrors.location && (
              <p className="absolute bottom-0 right-0 translate-y-full text-sm font-medium text-red">
                {ownerErrors.location.message}
              </p>
            )}
          </div>
        </div>
      )}
      <PrimaryCTA disabled={!isValid || isSubmitting} type="submit">
        시작하기
      </PrimaryCTA>
    </div>
  );
};

export default SignupSecondContents;
