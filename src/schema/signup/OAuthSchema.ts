import { z } from "zod";

export const OAuthSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
  passwordConfirm: z.string().optional(),
  role: z.enum(["OWNER", "APPLICANT"]),
  nickname: z.string().min(1, { message: "닉네임을 입력해주세요." }),
  name: z.string().optional(),
  phoneNumber: z.string().optional(),
  storeName: z.string().optional(),
  storePhoneNumber: z.string().optional(),
  location: z.string().optional(),
  token: z.string().optional(),
  redirectUri: z.string().optional(),
});
