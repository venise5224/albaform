import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Albaform",
  },
  description: "블라블라블라",
  icons: { icon: "/logo/main-logo.svg", shortcut: "/logo/main-logo.svg" },
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: {
      template: "%s",
      default: "Albaform",
    },
    description: "블라블라블라",
    images: "/logo/main-logo.svg",
    url: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
