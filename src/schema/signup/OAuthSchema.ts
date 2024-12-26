import { z } from "zod";

export const OAuthSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
  passwordConfirm: z.string().optional(),
  role: z.enum(["OWNER", "APPLICANT"]),
  nickname: z.string().optional(),
  name: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(/^(010|011|016|017|018|019)\d{7,8}$/, {
      message: "올바르지 않은 번호입니다.",
    })
    .optional(),
  storeName: z.string().optional(),
  storePhoneNumber: z.string().optional(),
  location: z.string().optional(),
  token: z.string().optional(),
  redirectUri: z.string().optional(),
});
