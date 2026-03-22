import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Atmospheric Precision - Dashboard",
  description: "Weather Dashboard MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} bg-background text-on-background font-body selection:bg-primary/30 antialiased`}
      >
        <Sidebar />
        <main className="md:ml-[280px] min-h-screen pb-20 md:pb-0 relative">
          <TopBar />
          {children}
        </main>
      </body>
    </html>
  );
}
