import { z } from "zod";

export const albaTalkCommentSchema = z.object({
  content: z.string().min(1, { message: "내용을 입력해주세요." }),
});
