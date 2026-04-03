import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Projects | Sevteq Solutions",
  description: "Explore our diverse range of successful Enterprise IT, Custom Software, and Digital Transformation projects delivered by Sevteq Solutions.",
  openGraph: {
    title: "Portfolio & Projects | Sevteq Solutions",
    description: "Explore our diverse range of successful Enterprise IT, Custom Software, and Digital Transformation projects.",
    url: "https://sevteqsolutions.com/projects",
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
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
