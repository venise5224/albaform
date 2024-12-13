import { z } from "zod";

export const albaTalkCommentSchema = z.object({
  content: z
    .string()
    .min(1, { message: "내용을 입력해주세요." })
    .max(200, { message: "내용은 200자 이상 입력할 수 없습니다." }),
});
