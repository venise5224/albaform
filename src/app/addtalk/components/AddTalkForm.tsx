"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTalkSchema } from "@/schema/addTalk/addTalkSchema";
import FormInput from "@/components/input/FormInput";
import ImageInput from "@/components/button/ImageInput";
import SolidButton from "@/components/button/SolidButton";
import useViewPort from "@/hooks/useViewport";
import { z } from "zod";
import { cls } from "@/utils/dynamicTailwinds";
import ErrorText from "@/components/errorText/ErrorText";
import { useRouter } from "next/navigation";

const AddTalkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof addTalkSchema>>({
    resolver: zodResolver(addTalkSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const viewPort = useViewPort();
  const router = useRouter();

  const onImageChange = () => {};

  const onCancel = () => {
    router.push("/albatalk");
  };
  const onSubmit = () => {};

  // size prop 설정
  const imageInputSize = viewPort === "pc" ? "large" : "medium";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mx-auto max-w-[327px] pt-4 pc:max-w-[1480px] pc:pt-10 tablet:max-w-[600px] tablet:pt-[23px]"
    >
      <h3 className="mb-8 border-b border-line-200 pb-4 text-2lg font-semibold pc:mb-[72px] pc:pb-10 pc:text-3xl tablet:pb-[23px]">
        글쓰기
      </h3>
      <div className="flex flex-col gap-y-10 pc:gap-y-6">
        <div className="relative flex flex-col gap-y-4">
          <label
            htmlFor="title"
            className="fit-content w-[fit-content] cursor-pointer text-2lg pc:text-xl"
          >
            제목
            <span className="ml-1 text-red">*</span>
          </label>
          <FormInput
            id="title"
            name="title"
            type="text"
            register={register}
            error={errors.title}
            placeholder="제목을 입력해주세요."
            className="rounded-lg border-none bg-background-200 p-[14px] placeholder:text-md pc:p-4 pc:placeholder:text-xl tablet:placeholder:text-lg"
          />
          <ErrorText error={errors.title}>{errors.title?.message}</ErrorText>
        </div>
        <div className="relative flex flex-col gap-y-4">
          <label
            htmlFor="description"
            className="w-[fit-content] cursor-pointer text-2lg pc:text-xl"
          >
            내용
            <span className="ml-1 text-red">*</span>
          </label>
          <textarea
            id="description"
            {...register("description")}
            className={cls(
              "h-[180px] resize-none appearance-none rounded-lg border-none bg-background-200 p-[14px] text-start placeholder:text-md focus:outline-none pc:w-full pc:p-4 pc:placeholder:text-xl tablet:h-[200px] tablet:placeholder:text-lg",
              errors.description ? "border-red" : ""
            )}
            placeholder="내용을 입력해주세요."
          />
          <ErrorText error={errors.description}>
            {errors.description?.message}
          </ErrorText>
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="w-[fit-content] text-2lg pc:text-xl">이미지</label>
          <ImageInput size={imageInputSize} onImageChange={onImageChange} />
        </div>
      </div>
      <div className="mb-[18px] mt-[34px] flex flex-col gap-y-1 pc:absolute pc:right-0 pc:top-0 pc:h-[58px] pc:w-[372px] pc:flex-row pc:gap-x-3 tablet:absolute tablet:right-0 tablet:top-0 tablet:mb-0 tablet:mt-4 tablet:h-[46px] tablet:w-[217px] tablet:flex-row tablet:gap-x-2">
        <SolidButton style="gray100" onClick={onCancel}>
          취소
        </SolidButton>
        <SolidButton style="orange300">등록하기</SolidButton>
      </div>
    </form>
  );
};

export default AddTalkForm;
