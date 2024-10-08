import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import FloatingButton from "./components/ui/floatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Academy",
  description: "Станьте востребованным специалистом в области аналитики данных за 6 месяцев вместе с AI ACADEMY и получите гарантированную стажировку!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <main className="min-h-[50vh]">
            {children}
        </main>
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
