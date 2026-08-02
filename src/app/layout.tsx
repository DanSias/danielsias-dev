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

const siteUrl = "https://danielsias.dev";
const siteTitle = "Daniel Sias | Full-Stack Software Engineer";
const siteDescription =
  "Full-Stack Software Engineer building developer tooling, payment platforms, and AI-assisted software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Daniel Sias",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Daniel Sias",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div
            data-testid="app-shell"
            className="min-h-dvh flex flex-col bg-slate-50 dark:bg-slate-900">
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
              width="566"
              height="567"
              decoding="async"
              data-nimg="1"
              className="hidden dark:xl:block absolute right-[-40px] md:right-8 top-24 opacity-50 blur-2xl"
              src="/blur-indigo.png"
              title=""
            />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
