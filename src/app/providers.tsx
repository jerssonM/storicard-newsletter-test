"use client";

import { Analytics } from "@vercel/analytics/react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
      <Analytics />
    </NextUIProvider>
  );
}
