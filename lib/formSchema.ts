import { z } from "zod";

// 全角数字を半角数字に変換する関数
const convertNum = (str: string) => {
  return str.replace(/[０-９]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0xfee0)
  );
};

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は２文字以上で入力してください" }),
  subject: z.string().min(2, { message: "件名は２文字以上で入力してください" }),
  email: z
    .string()
    .email({ message: "正しいメールアドレスを入力してください" }),
  content: z
    .string()
    .min(10, { message: "メッセージ内容は10文字以上で入力してください" })
    .max(200, { message: "本文は200文字以内で入力してください" }),
  age: z.coerce
    .string()
    .transform((val) => convertNum(val))
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: "有効な年齢を入力してください" })
    .pipe(
      z
        .number()
        .min(18, {
          message:
            "弊社へのお問い合わせ、求人への応募は18歳以上とさせていただいております",
        })
        .max(65, {
          message: "業務の性質上、年齢の上限を設けさせていただいております",
        })
    ),
  gender: z.enum(["男性", "女性", "未回答"], {
    required_error: "どれかひとつを選択してください",
  }),
});
