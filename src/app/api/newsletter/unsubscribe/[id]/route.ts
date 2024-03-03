import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/config/prisma";
import { NewsletterStatus } from "@/services/models";

type RouteParams = { params: { id: string } };

export const GET = async (_: NextRequest, route: RouteParams) => {
  const id = route.params.id;

  if (!id) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({ where: { id: Number(id) } });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 500 });
  }

  user.newsletterStatus = NewsletterStatus.Unsubscribed;
  await prisma.user.update({ data: user, where: { id: user.id } });

  return NextResponse.json(`<h1>User successfully unsubscribed!</h1>`, {
    headers: { "content-type": "text/html" },
  });
};
