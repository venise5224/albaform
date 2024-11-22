import { FieldErrors } from "react-hook-form";

import { signupSchema } from "../zodSchema/signupSchema";

import { UseFormRegister } from "react-hook-form";
import { z } from "zod";

interface StepTwoInputProps {
  userType: string;
  register: UseFormRegister<z.infer<typeof signupSchema>>;
  errors: FieldErrors<z.infer<typeof signupSchema>>;
}

export const StepTwoInput = ({
  userType,
  register,
  errors,
}: StepTwoInputProps) => {
  const isApplicant = userType === "applicant";

  const commonInput = [
    {
      name: "nickname",
      title: "닉네임",
      placeholder: "닉네임을 입력해주세요.",
      type: "text",
      isRequired: true,
      error: errors.nickname?.message,
      register: register("nickname"),
    },
  ];

  const applicantInput = [
    {
      name: "username",
      title: "이름",
      placeholder: "이름을 입력해주세요.",
      type: "text",
      isRequired: true,
      error: errors.username?.message,
      register: register("username"),
    },
    {
      name: "phoneNumber",
      title: "연락처",
      placeholder: "숫자만 입력해주세요.",
      type: "tel",
      isRequired: true,
      error: errors.phoneNumber?.message,
      register: register("phoneNumber"),
    },
  ];

  const ownerInput = [
    {
      name: "storeName",
      title: "가게 이름",
      placeholder: "가게 이름(상호명)을 입력해주세요.",
      type: "text",
      isRequired: true,
      error: errors.storeName?.message,
      register: register("storeName"),
    },
    {
      name: "storeNumber",
      title: "가게 전화번호",
      placeholder: "숫자만 입력해주세요.",
      type: "tel",
      isRequired: true,
      error: errors.storeNumber?.message,
      register: register("storeNumber"),
    },
    {
      name: "phoneNumber",
      title: "사장님 전화번호",
      placeholder: "숫자만 입력해주세요.",
      type: "tel",
      isRequired: false,
      error: errors.phoneNumber?.message,
      register: register("phoneNumber"),
    },
  ];

  const inputArr = [
    ...commonInput,
    ...(isApplicant ? applicantInput : ownerInput),
  ];

  return inputArr;
};
