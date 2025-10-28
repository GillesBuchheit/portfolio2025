import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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
  openGraph: {
    title: "Gilles Buchheit | Développeur web Fullstack React | Java",
    description: "Gilles Buchheit | Développeur web Fullstack React | Java",
    url: "https://gillesbuchheit.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
