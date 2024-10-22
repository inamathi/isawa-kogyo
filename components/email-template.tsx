import * as React from "react";

interface EmailTemplateProps {
  username: string;
  age: number;
  gender: string;
  email: string;
  subject: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  age,
  gender,
  email,
  subject,
  content,
}) => (
  <div>
    <h3>{username} 様</h3>
    <p>お問い合わせありがとうございました。</p>
    <p>お問い合わせフォームより、以下のお問い合わせを受け付けました。</p>
    <p>
      追って返信差し上げますが、２〜３日のお時間をいただく場合がございますのでご了承ください。
    </p>
    <h4>【お問い合わせ内容】</h4>
    <p>
      お名前：
      <span>
        <b>{username}</b>
      </span>
    </p>
    <p>
      年　齢：
      <span>
        <b>{age}</b>
      </span>
    </p>
    <p>
      性　別：
      <span>
        <b>{gender}</b>
      </span>
    </p>
    <p>
      Email：
      <span>
        <b>{email}</b>
      </span>
    </p>
    <p>
      件　名：
      <span>
        <b>{subject}</b>
      </span>
    </p>
    <dl>
      <dt>お問い合わせ内容：</dt>
      <dd>{content}</dd>
    </dl>
    <hr />
    <p>
      このメールは https://isawa-kogyo.com
      の問い合わせフォームに入力されたメールアドレスに送信されています。
    </p>
    <p>
      このメールは送信専用のアドレスより送信しておりますので、返信することができませんのでご承知おきください。
    </p>
    <p>
      また、このメールにお心当たりのない場合は、お手数ですがメールの破棄をお願いいたします。
    </p>
  </div>
);
