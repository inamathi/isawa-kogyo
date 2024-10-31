import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { TypeInqueryValues } from "@/types/types";

export const useInqueryForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      age: "",
      gender: "notanswer",
      subject: "",
      email: "",
      content: "",
    },
  });

  const onSubmit = useCallback(async (values: TypeInqueryValues) => {
    const { username, age, gender, email, subject, content } = values;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          age,
          gender,
          email,
          subject,
          content,
        }),
      });
      console.log(values);
    } catch (err) {
      console.error(err);
    }
  }, []);
  return { form, onSubmit };
};
