import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Vinit Singare | Backend Developer",
    template: "%s | Vinit Singare",
  },
  description:
    "Backend Developer & CSE Student. I build scalable backend systems and solve real-world problems. Explore projects, blog posts, and more.",
  keywords: [
    "backend developer",
    "computer science",
    "portfolio",
    "Vinit Singare",
    "software engineer",
    "microservices",
    "systems programming",
  ],
  authors: [{ name: "Vinit Singare" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vinit Singare",
    title: "Vinit Singare | Backend Developer",
    description:
      "Backend Developer & CSE Student building scalable systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
