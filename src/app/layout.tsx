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
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Inno Expo GL — World Robot Games 2026 Bangladesh Pathway",
  description:
    "The world's premier youth robotics & scientific innovation platform. Register through Inno Expo GL for the WRG 2026 Bangladesh National Qualifier and Japan International Finals.",
  keywords: [
    "Inno Expo GL",
    "World Robot Games 2026",
    "WRG 2026 Bangladesh",
    "RoboBuild Sustainable Cities",
    "Chiba Port Arena Japan",
    "Tech Autocrats",
  ],
  authors: [{ name: "Inno Expo GL Organization" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased selection:bg-blue-500 selection:text-white`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
