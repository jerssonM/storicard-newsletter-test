import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/config/prisma";
import { NewsletterData, NewsletterStatus } from "@/lib/services/models";

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

const isValidPayload = ({
  subject,
  callToActionLabel,
  callToActionLink,
  content,
}: NewsletterData) =>
  subject && content && callToActionLabel && callToActionLink;

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(
    formData.entries()
  ) as unknown as NewsletterData;
  const file = formData.get("file") as unknown as File;

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
  const attachments: Attachment[] = [];

  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    attachments.push({ filename: file.name, content: buffer });
  }

  const emailsToSend = users.map(
    async (user) =>
      await transporter.sendMail({
        attachments,
        from: `"${nameFrom}" <${emailFrom}>`,
        to: user.email,
        subject: payload.subject,
        html: getTemplate(payload, user),
      })
  );

  const emailsResponse = await Promise.all(emailsToSend);

  return NextResponse.json(emailsResponse);
};
