import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reesa - Fine Line & Blackwork Tattoo Artist",
  description:
    "Portfolio and booking for Reesa, a fine line and blackwork tattoo artist.",
  openGraph: {
    title: "Reesa - Fine Line & Blackwork Tattoo Artist",
    description:
      "Portfolio and booking for Reesa, a fine line and blackwork tattoo artist.",
    type: "website",
    locale: "en_US",
    url: "https://Reesaink.com", // Replace with actual domain
    siteName: "ReesaInk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
