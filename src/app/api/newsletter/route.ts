import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/config/prisma";
import { NewsletterData, NewsletterStatus } from "@/services/models";

import { getTemplate } from "./template";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_SMTP_EMAIL,
    pass: process.env.NEXT_SMTP_PASSWORD,
  },
});

const isValidPayload = ({ subject, callToAction, content }: NewsletterData) =>
  subject && content && callToAction?.label && callToAction?.link;

export const POST = async (request: NextRequest) => {
  const payload: NewsletterData = await request.json();

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const users = await prisma.user.findMany({
    where: { newsletterStatus: NewsletterStatus.Subscribed },
  });
  const emailFrom = process.env.NEXT_SMTP_EMAIL || "";
  const nameFrom = emailFrom.split("@")[0];

  const emailsToSend = users.map(
    async (user) =>
      await transporter.sendMail({
        from: `"${nameFrom}" <${emailFrom}>`,
        to: user.email,
        subject: payload.subject,
        html: getTemplate(payload, user),
      })
  );

  const emailsResponse = await Promise.all(emailsToSend);

  return NextResponse.json(emailsResponse);
};
