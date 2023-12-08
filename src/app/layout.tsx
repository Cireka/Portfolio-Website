import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tsotne Portfolio",
  openGraph: {
    title: "Tsotne Tsirekidze Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Tsotne Portfolio</title>
        <meta property="og:title" content="Tsotne Tsirekidze Portfolio" />
        <meta property="og:description" content="Tsotne Tsirekidze Portfolio"
      </head>
      <body>{children}</body>
    </html>
  );
}
