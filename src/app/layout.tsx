import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albaform",
  description: "블라블라블라",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={}>{children}</body>
    </html>
  );
}
