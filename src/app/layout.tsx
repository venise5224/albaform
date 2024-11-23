import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Albaform",
  description: "아르바이트 공고를 올리고 채용하는 플랫폼 Albaform!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div id="sidebar-root"></div>
        <Sidebar />
        <Header />
        {children}
      </body>
    </html>
  );
}
