import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { CONTACT, SITE, SOCIAL } from "@/lib/constants";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${SITE.name} | iPhones y accesorios Apple en ${CONTACT.city}`,
  description: SITE.description,
  keywords: [
    "iPhone",
    "Apple",
    "Neiva",
    "Huila",
    "iPhone usado",
    "iPhone nuevo",
    "accesorios Apple",
    "AirPods",
    "MacBook",
  ],
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: [{ url: "/images/logo.png", type: "image/png" }],
    shortcut: "/images/logo.png",
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    locale: SITE.locale,
    type: "website",
    images: [{ url: "/images/logo.png", alt: SITE.name }],
  },
  other: {
    "instagram:url": SOCIAL.instagram,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
