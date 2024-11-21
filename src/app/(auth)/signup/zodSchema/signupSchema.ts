import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email({ message: "이메일 형식이 아닙니다." }).trim(),
    password: z
      .string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{7,}$/, {
        message: "특수문자 포함 7자 이상 입력해주세요.",
      })
      .trim(),
    passwordConfirm: z
      .string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{7,}$/, {
        message: "특수문자 포함 7자 이상 입력해주세요.",
      })
      .trim(),
    username: z.string().min(1, { message: "이름을 입력해주세요." }).trim(),
    phoneNumber: z
      .string()
      .min(11, { message: "올바르지 않은 번호입니다." })
      .regex(/^[0-9]+$/, { message: "숫자만 입력해주세요." })
      .optional(),
    nickname: z.string().min(1, { message: "닉네임을 입력해주세요." }).trim(),
    storeName: z.string().min(1, { message: "가게 이름을 입력해주세요." }).trim(),
    storeNumber: z
      .string()
      .min(9, { message: "올바르지 않은 번호입니다." })
      .regex(/^[0-9]+$/, { message: "숫자만 입력해주세요." })
      .trim(),
    storeLocation: z.string().min(1, { message: "가게 위치를 입력해주세요." }).trim(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });
