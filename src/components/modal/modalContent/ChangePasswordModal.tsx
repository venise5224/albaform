"use client";

import ErrorText from "@/components/errorText/ErrorText";
import ModalContainer from "../modalContainer/ModalContainer";
import Image from "next/image";
import FormInput from "@/components/input/FormInput";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "@/schema/modal/changePasswordSchema";

const ChangePasswordModal = () => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = () => {};

  return (
    <ModalContainer>
      <div className="flex flex-col items-center pb-[8px] pc:mx-[-40px]">
        <strong className="text-2lg font-semibold text-black-400 pc:text-[32px] pc:leading-[46px]">
          비밀번호 변경
        </strong>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col pc:mt-10"
        >
          <div className="relative flex flex-col">
            <label htmlFor="password" className={`${labelStyle} mt-[16px]`}>
              현재 비밀번호
            </label>
            <FormInput
              name="password"
              type={visible ? "text" : "password"}
              register={register}
              error={errors.password}
              className={`${inputStyle} pr-[50px]`}
              placeholder="현재 비밀번호를 입력해주세요."
              id="password"
            />
            <Image
              onClick={() => setVisible(!visible)}
              src={visible ? "/icon/visible.svg" : "/icon/non-visible.svg"}
              alt="비밀번호 보이기 버튼"
              width={24}
              height={24}
              priority={true}
              className="absolute right-3 top-[63px] pc:top-[67px]"
            />
            <ErrorText error={errors.password}>
              {errors.password?.message}
            </ErrorText>
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="password" className={`${labelStyle} mt-[16px]`}>
              새 비밀번호
            </label>
            <FormInput
              name="password"
              type={visible ? "text" : "password"}
              register={register}
              error={errors.password}
              className={`${inputStyle} pr-[50px]`}
              placeholder="새로운 비밀번호를 입력해주세요."
              id="password"
            />
            <Image
              onClick={() => setVisible(!visible)}
              src={visible ? "/icon/visible.svg" : "/icon/non-visible.svg"}
              alt="비밀번호 보이기 버튼"
              width={24}
              height={24}
              priority={true}
              className="absolute right-3 top-[63px] pc:top-[67px]"
            />
            <ErrorText error={errors.password}>
              {errors.password?.message}
            </ErrorText>
          </div>
          <div className="relative flex flex-col">
            <label htmlFor="password" className={`${labelStyle} mt-[16px]`}>
              새 비밀번호 확인
            </label>
            <FormInput
              name="password"
              type={visible ? "text" : "password"}
              register={register}
              error={errors.password}
              className={`${inputStyle} pr-[50px]`}
              placeholder="새로운 비밀번호를 다시 한번 입력해주세요."
              id="password"
            />
            <Image
              onClick={() => setVisible(!visible)}
              src={visible ? "/icon/visible.svg" : "/icon/non-visible.svg"}
              alt="비밀번호 보이기 버튼"
              width={24}
              height={24}
              priority={true}
              className="absolute right-3 top-[63px] pc:top-[67px]"
            />
            <ErrorText error={errors.password}>
              {errors.password?.message}
            </ErrorText>
          </div>

          <div className="mt-6 flex gap-[11px] pc:mt-[30px] pc:gap-3">
            <button className="h-[58px] w-[158px] rounded-[8px] border bg-gray-100 text-white pc:h-[72px] pc:w-[314px]">
              취소
            </button>
            <button className="h-[58px] w-[158px] rounded-[8px] border bg-orange-300 text-white pc:h-[72px] pc:w-[314px]">
              수정하기
            </button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default ChangePasswordModal;

const labelStyle =
  "text-md font-regular text-black-400 w-fit cursor-pointer pc:text-lg";
const inputStyle =
  "mt-[8px] rounded-[8px] bg-background-200 p-[14px] placeholder:text-md placeholder:font-regular border focus:border-orange-300";
