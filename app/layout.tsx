import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BUILD Innovation | Innovation Capability Consulting",
  description:
    "Transform your innovation capability with proven expertise from P&G's first Digital Design Capability leader. $100M+ in results delivered.",
  keywords: [
    "innovation consulting",
    "capability building",
    "industrial design",
    "design thinking",
    "P&G",
    "product development",
  ],
  openGraph: {
    title: "BUILD Innovation | Innovation Capability Consulting",
    description:
      "Transform your innovation capability with proven expertise from P&G's first Digital Design Capability leader.",
    url: "https://buildinnovation.co",
    siteName: "BUILD Innovation",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
