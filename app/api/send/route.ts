import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { username, age, gender, email, subject, content } =
    await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "石和工業有限会社 <no-reply@isawa-kogyo.com>",
      to: ["info@isawa-kogyo.com", email],
      subject: "お問い合わせフォームより送信",
      react: EmailTemplate({
        username: username,
        age: age,
        gender: gender,
        email: email,
        subject: subject,
        content: content,
      }) as React.ReactElement,
    });
    if (error) {
      return NextResponse.json({ error });
    }

    return Response.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
