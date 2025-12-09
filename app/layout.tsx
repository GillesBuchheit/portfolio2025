import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gilles Buchheit | Développeur web Fullstack React | Java",
  description: "Gilles Buchheit | Développeur web Fullstack React | Java",
  keywords: ["Gilles Buchheit", "Développeur web", "Fullstack React", "Java"],
  authors: [{ name: "Gilles Buchheit", url: "https://gillesbuchheit.dev" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  metadataBase: new URL("https://gillesbuchheit.dev"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gillesbuchheit.dev",
    title: "Gilles Buchheit | Développeur web Fullstack React | Java",
    description: "Gilles Buchheit | Développeur web Fullstack React | Java",
    siteName: "Gilles Buchheit Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Gilles Buchheit - Développeur web Fullstack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilles Buchheit | Développeur web Fullstack React | Java",
    description: "Gilles Buchheit | Développeur web Fullstack React | Java",
    images: ["/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
