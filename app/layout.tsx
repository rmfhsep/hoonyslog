import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junghoon Blog",
  description: "Junghoon Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footer = (
    <footer>
      <p>Made with ❤️</p>
    </footer>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {footer}
      </body>
    </html>
  );
}
