import { z } from "zod";

export const addTalkSchema = z.object({
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  description: z
    .string()
    .min(1, { message: "내용을 입력해주세요." })
    .max(200, { message: "내용은 200자 이상 입력할 수 없습니다." }),
});
