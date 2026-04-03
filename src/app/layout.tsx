import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sevteq Solutions | Enterprise Technology and Digital Transformation",
  description:
    "Sevteq Solutions delivers premium enterprise technology services across custom software, web development, mobile apps, UI/UX, cloud, and digital transformation.",
  icons: {
    icon: "/Sevteq Logo.jpeg",
    shortcut: "/Sevteq Logo.jpeg",
    apple: "/Sevteq Logo.jpeg",
  },
  openGraph: {
    title: "Sevteq Solutions | Enterprise Digital Transformation",
    description: "Accelerate your business with enterprise-grade custom software, robust cloud solutions, and top-tier mobile & web applications.",
    url: "https://sevteqsolutions.com",
    siteName: "Sevteq Solutions",
    images: [
      {
        url: "/Sevteq Logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Sevteq Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sevteq Solutions",
  "url": "https://sevteqsolutions.com",
  "logo": "https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Sevteqsolutions/main/public/Sevteq%20Logo.jpeg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-703-301-1006",
    "contactType": "customer service",
    "email": "sevteqsolutions@outlook.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sevteq/posts/?feedView=all"
  ]
};

import { SmoothScroller } from "@/components/utilities/SmoothScroller";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col bg-[#0A0A0A] text-white font-sans selection:bg-[#2D5BFF]/30 min-h-screen">
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
