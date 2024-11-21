"use client";

import Image from "next/image";
import Link from "next/link";
import SignupSecondContents from "./SignupSecondContents";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../zodSchema/signupSchema";
import PrimaryCTA from "@/app/components/button/PrimaryCTA";

const SignupContents = ({ userType, stepOneDone }: { userType: string, stepOneDone: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visiblePasswordConfirm, setVisiblePasswordConfirm] = useState(false);
  const currentParams = new URLSearchParams(searchParams.toString());
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      username: "",
      phoneNumber: "",
      storeName: "",
      storeNumber: "",
      storeLocation: "",
    },
  });
  const isValidFirstStep =
    !watch("email") || !watch("password") || !watch("passwordConfirm");
  
  const handleNextStep = () => {
    currentParams.set("stepOneDone", "true");
    router.push(`/signup/${userType}?${currentParams.toString()}`);
  }

  const passwordArr = [
    {
      name: "password",
      title: "비밀번호",
      placeholder: "비밀번호를 입력해주세요.",
      visible: visiblePassword,
      visibleFn: setVisiblePassword,
      register: { ...register("password") },
      error: errors.password?.message,
    },
    {
      name: "passwordConfirm",
      title: "비밀번호 확인",
      placeholder: "비밀번호를 한번 더 입력해주세요.",
      visible: visiblePasswordConfirm,
      visibleFn: setVisiblePasswordConfirm,
      register: { ...register("passwordConfirm") },
      error: errors.passwordConfirm?.message,
    },
  ];

  return (
    <form>
      {stepOneDone !== "true" ? (
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-2 relative">
            <label htmlFor="email" className="text-black-400 text-md">
            이메일
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="form-input-base"
            placeholder="이메일을 입력해주세요."
          />
          {errors.email && (
            <p className="absolute bottom-0 right-0 translate-y-full text-red text-sm font-medium">{errors.email.message}</p>
          )}
        </div>
        {passwordArr.map((item) => (
          <div key={item.name} className="flex flex-col space-y-2 relative">
            <label htmlFor={item.name} className="text-black-400 text-md">
              {item.title}
            </label>
            <div className="form-input-base flex items-center justify-between focus-within:border-orange-300">
              <input
                {...item.register}
                type={item.visible ? "text" : "password"}
                name={item.name}
                placeholder={item.placeholder}
                className="w-full outline-none"
              />
              <Image
                onClick={() => item.visibleFn(!item.visible)}
                src={
                  item.visible
                    ? "/icons/visibility_on.png"
                    : "/icons/visibility_off.png"
                }
                alt="비밀번호 보이기 버튼"
                width={24}
                height={24}
              />
            </div>
            {item.error && (
              <p className="absolute bottom-0 right-0 translate-y-full text-red text-sm font-medium">{item.error}</p>
            )}
          </div>
        ))}
        <PrimaryCTA disabled={isValidFirstStep} type="button" onClick={handleNextStep}>다음</PrimaryCTA>
        <p className="text-black-100 text-center text-xs">
          가입 시
          <Link
            href="/terms"
            className="ml-1 font-semibold text-orange-300 underline"
          >
            이용약관
          </Link>
          에 동의한 것으로 간주됩니다.
          </p>
        </div>
      ) : (
        <SignupSecondContents formWatch={watch} userType={userType} isValid={isValid} register={register} errors={errors} />
      )}
    </form>
  );
};

export default SignupContents;
