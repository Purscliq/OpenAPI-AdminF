import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import StoreProvider from "@/context/StoreProvider";

const zen = Zen_Kaku_Gothic_Antique({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open API Admin",
  description: "Purs Finance Open API Admin Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${zen.className} !bg-[#FAFAFA]`}>
        <AntdRegistry>
          <StoreProvider>{children}</StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
