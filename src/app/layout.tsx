import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Roboto({ weight: ["300", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stori Newsletter",
  description: "Newsletter sending app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
