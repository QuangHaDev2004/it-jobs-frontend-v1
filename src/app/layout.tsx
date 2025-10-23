import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "28.ITJobs",
  description: "Trang web tuyển dụng IT hàng đầu Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <Header />

        {children}

        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
