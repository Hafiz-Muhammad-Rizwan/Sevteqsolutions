import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sevteq | Enterprise Technology and Digital Transformation",
  description:
    "Sevteq delivers premium enterprise technology services across digital engineering, AI, cloud, and managed operations.",
};

import { SmoothScroller } from "@/components/utilities/SmoothScroller";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col bg-[#0A0A0A] text-white font-sans selection:bg-[#2D5BFF]/30 min-h-screen">
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
