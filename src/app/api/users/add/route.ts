import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/config/prisma";
import { NewsletterStatus, SubscriptionData } from "@/lib/services/models";

const isValidPayload = ({ name, email }: SubscriptionData) => name && email;

export const POST = async (request: NextRequest) => {
  const payload: SubscriptionData = await request.json();

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findMany({ where: { email: payload.email } });

  if (user.length) {
    return NextResponse.json(
      { message: "This email is already added" },
      { status: 400 }
    );
  }

  const userCreated = await prisma.user.create({
    data: { ...payload, newsletterStatus: NewsletterStatus.Subscribed },
  });

  return NextResponse.json(userCreated);
};
