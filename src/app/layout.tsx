import { BottomNav } from "@/components/bottom-nav/bottom-nav";
import { Header } from "@/components/header/header";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Каталог товаров",
  description: "Товары интернет магазин",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <BottomNav />
        </body>
      </html>
    </Providers>
  );
}
