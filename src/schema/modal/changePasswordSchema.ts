import { z } from "zod";

export const changePasswordSchema = z.object({
  password: z
    .string()
    .min(1, { message: "비밀번호를 입력해주세요." })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{7,}$/, {
      message: "특수문자 포함 7자 이상 입력해주세요.",
    })
    .trim(),
  passwordConfirm: z.string().optional(),
});
