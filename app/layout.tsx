import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cheerysworld.netlify.app"),
  title: "CHEERYS • One Name. Four Expressions. One Creative Culture.",
  description:
    "Cheerys brings together four distinct creative ventures by Cheery: cheery_fic (caricatures), anim_daddy (animation mentoring), cheerys_tees (apparel), and cheerys_bakes (healthy custom baking).",
  keywords: [
    "Cheerys",
    "Cheery",
    "cheery_fic",
    "anim_daddy",
    "cheerys_tees",
    "cheerys_bakes",
    "caricatures",
    "animation mentoring",
    "custom apparel",
    "healthy baking",
  ],
  authors: [{ name: "Cheery" }],
  openGraph: {
    title: "CHEERYS • Creative Culture by Cheery",
    description: "One name. Four expressions. One creative culture.",
    url: "https://cheerysworld.netlify.app",
    siteName: "CHEERYS",
    images: [
      {
        url: "/brand/cheery-signature-clean.jpg",
        width: 1200,
        height: 630,
        alt: "Cheery signature and self portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#faf8f5] text-stone-900 antialiased selection:bg-amber-300 selection:text-stone-950">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
