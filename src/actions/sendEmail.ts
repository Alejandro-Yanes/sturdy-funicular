"use server";

import { getErrorMessage, validateString } from "@/lib/utils";

import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid sender Email",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "alejandrorafaelyanes@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      //   text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
