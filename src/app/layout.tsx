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
  icons: {
    icon: "/Sevteq Logo.jpeg",
    shortcut: "/Sevteq Logo.jpeg",
    apple: "/Sevteq Logo.jpeg",
  },
};

import { SmoothScroller } from "@/components/utilities/SmoothScroller";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col bg-[#04070d] text-white font-sans selection:bg-[var(--color-primary-glow)] min-h-screen relative">
        <div className="cinematic-noise" />
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
