import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f0f7ff",
};

export const metadata: Metadata = {
  title: "InnoExpo GL — Pupil-Led STEM Innovation Platform",
  description:
    "InnoExpo GL is a non-profit innovation platform run by pupils making STEM education accessible, providing project materials, mentorship, and pathways to national and global stages.",
  keywords: [
    "InnoExpo GL",
    "STEM Education",
    "Youth Robotics",
    "World Robot Games 2026",
    "Project-Based Learning",
    "Bangladesh Science Olympiad",
  ],
  authors: [{ name: "InnoExpo GL Organization" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#f0f7ff] text-zinc-900 antialiased selection:bg-blue-600 selection:text-white`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
