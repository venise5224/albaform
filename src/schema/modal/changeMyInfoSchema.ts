import { z } from "zod";

export const changeMyInfoSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  nickname: z.string().min(1, { message: "닉네임을 입력해주세요." }),
  phoneNumber: z.string().regex(/^(010|011|016|017|018|019)\d{7,8}$/, {
    message: "올바르지 않은 번호입니다.",
  }),
});
