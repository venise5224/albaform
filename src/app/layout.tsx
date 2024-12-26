import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/header/Header";
import Sidebar from "@/components/header/Sidebar";
import ModalManager from "@/components/modal/modalManager/ModalManager";
import ToastContainer from "@/components/toast/ToastContainer";
import Script from "next/script";
import RedirectWarning from "@/lib/RedirectWarning";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Albaform",
  },
  description: "아르바이트 공고를 올리고 채용하는 플랫폼 Albaform!",
  icons: { icon: "/logo/main-logo.svg", shortcut: "/logo/main-logo.svg" },
  metadataBase: new URL("https://albaform-five.vercel.app/"),
  openGraph: {
    title: {
      template: "%s",
      default: "Albaform",
    },
    description: "아르바이트 공고를 올리고 채용하는 플랫폼 Albaform!",
    images: "/logo/main-logo.svg",
    url: "https://albaform-five.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RedirectWarning />
        <Sidebar />
        <Header />
        <ModalManager />
        <ToastContainer />
        {children}
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false&libraries=services`}
        />
        <Script
          strategy="beforeInteractive"
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></Script>
      </body>
    </html>
  );
}
