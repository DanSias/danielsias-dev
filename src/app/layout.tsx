import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Sias | Software Engineer & Full-Stack Developer",
  description:
    "Experienced software engineer specializing in full-stack development, React, Node.js, and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />

          {/* Background Blur Elements */}
          <Image
            alt=""
            width="530"
            height="530"
            decoding="async"
            data-nimg="1"
            className="hidden dark:xl:block absolute left-[-50px] md:left-8 top-4 opacity-50 blur-2xl"
            src="/blur-cyan.png"
            title=""
          />
          <Image
            alt=""
            width="567"
            height="567"
            decoding="async"
            data-nimg="1"
            className="hidden dark:xl:block absolute right-[-40px] md:right-8 top-24 opacity-50 blur-2xl"
            src="/blur-indigo.png"
            title=""
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
