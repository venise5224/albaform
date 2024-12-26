"use client";

import ModalContainer from "../modalContainer/ModalContainer";
import FormInput from "@/components/input/FormInput";
import ErrorText from "@/components/errorText/ErrorText";
import { useForm, Path, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { changeCEOInfoSchema } from "@/schema/modal/changeCEOInfoSchema";
import SolidButton from "@/components/button/SolidButton";
import { useModal } from "@/hooks/useModal";
import { changeCEOInfoAction } from "../modalActions/changeCEOInfoAction";
import { useAtomValue } from "jotai";
import { profileImgAtom } from "@/atoms/signupAtomStore";
import { profileImgActions } from "@/app/(auth)/signup/actions/profileImgActions";
import { useToast } from "@/hooks/useToast";
import ProfileImg from "@/app/(auth)/signup/components/ProfileImg";
import { addressAtom } from "@/atoms/addressAtom";
import StoreLocationInput from "../modalComponents/StoreLocationInput";

const ChangeCEOInfoModal = () => {
  const { closeModal } = useModal();
  const profileImg = useAtomValue(profileImgAtom);
  const { addToast } = useToast();
  const address = useAtomValue(addressAtom);
  const methods = useForm<z.infer<typeof changeCEOInfoSchema>>({
    resolver: zodResolver(changeCEOInfoSchema),
    mode: "onChange",
    defaultValues: {
      nickname: "",
      storeName: "",
      storePhoneNumber: "",
      phoneNumber: "",
      location: "",
    },
  });

  const isRequiredValid =
    !methods.watch("nickname") ||
    !methods.watch("storeName") ||
    !methods.watch("storePhoneNumber") ||
    !methods.watch("location");

  const inputArr = [
    {
      label: "닉네임",
      name: "nickname",
      type: "text",
      placeholder: "닉네임을 입력해주세요.",
      error: methods.formState.errors.nickname,
      register: methods.register("nickname"),
      required: true,
    },
    {
      label: "가게 이름",
      name: "storeName",
      type: "text",
      placeholder: "가게 이름(상호명)을 입력해주세요.",
      error: methods.formState.errors.storeName,
      register: methods.register("storeName"),
      required: true,
    },
    {
      label: "가게 전화번호",
      name: "storePhoneNumber",
      type: "tel",
      placeholder: "숫자만 입력해주세요.",
      error: methods.formState.errors.storePhoneNumber,
      register: methods.register("storePhoneNumber"),
      required: true,
    },
    {
      label: "사장님 전화번호",
      name: "phoneNumber",
      type: "tel",
      placeholder: "숫자만 입력해주세요.",
      error: methods.formState.errors.phoneNumber,
      register: methods.register("phoneNumber"),
      required: false,
    },
  ];

  const onSubmit = async (data: z.infer<typeof changeCEOInfoSchema>) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value || "");
      });

      const response = await changeCEOInfoAction(formData);

      if (response.status === 200) {
        if (profileImg) {
          const imgFormData = new FormData();
          imgFormData.append("image", profileImg);

          try {
            const profileImgResponse = await profileImgActions(imgFormData);

            if (profileImgResponse.status !== 200) {
              addToast(profileImgResponse.message as string, "warning");
              console.error(
                "프로필 사진 업로드 오류",
                profileImgResponse.message
              );
            }
          } catch (error) {
            console.error("프로필 사진 업로드 오류", error);
            addToast(
              "정보 수정은 완료되었으나 프로필 사진 업로드 중 오류가 발생했습니다.",
              "warning"
            );
          }
        }

        addToast("정보 수정이 완료되었습니다.", "info");
        closeModal();
      } else {
        console.error(response.message, response.status);
        addToast(response.message as string, "warning");
      }
    } catch (error) {
      console.error("정보 수정 에러 발생", error);
      addToast("정보 수정 중 오류가 발생했습니다.", "warning");
    }
  };

  return (
    <ModalContainer>
      <div className="flex flex-col items-center pb-[8px]">
        <strong className="text-2lg font-semibold text-black-400 pc:text-[32px] pc:leading-[46px]">
          사장님 정보 관리
        </strong>
        <div className="mt-10 pc:mt-[50px]">
          <ProfileImg />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mt-6 flex flex-col pc:mt-10"
          >
            {inputArr.map((input) => (
              <div key={input.name} className="relative flex flex-col">
                <label htmlFor={input.name} className={labelStyle}>
                  {input.label}
                  {input.required && <span className="text-red"> *</span>}
                </label>
                <FormInput
                  id={input.name}
                  name={input.name as Path<z.infer<typeof changeCEOInfoSchema>>}
                  type={input.type}
                  register={methods.register}
                  error={input.error}
                  placeholder={input.placeholder}
                  className={
                    input.name === "location"
                      ? `${inputStyle} pl-11`
                      : inputStyle
                  }
                />
                <ErrorText error={input.error}>
                  {input.error?.message}
                </ErrorText>
              </div>
            ))}
            <StoreLocationInput />

            <div className="mt-6 flex gap-[11px] pc:mt-[30px] pc:gap-3">
              <div className={buttmonContainerStyle}>
                <SolidButton
                  size="xl"
                  style="gray100"
                  type="button"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  취소
                </SolidButton>
              </div>
              <div className={buttmonContainerStyle}>
                <SolidButton
                  size="xl"
                  disabled={isRequiredValid || methods.formState.isSubmitting}
                  style="orange300"
                  type="submit"
                >
                  수정하기
                </SolidButton>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </ModalContainer>
  );
};

export default ChangeCEOInfoModal;

const labelStyle =
  "text-md font-regular text-black-400 w-fit cursor-pointer mt-[17px] pc:mt-8 pc:text-xl";
const inputStyle =
  "mt-[8px] rounded-[8px] bg-gray-50 p-[14px] placeholder:text-md placeholder:font-regular border focus:border-orange-300 pc:mt-4";
const buttmonContainerStyle = "h-[58px] w-[158px] pc:h-[72px] pc:w-[314px]";

// {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isSubmitting },
//   }
