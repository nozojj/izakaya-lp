import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "酒場こもれび　｜　予約サイト",
  description: "ポートフォリオ用に制作した架空の居酒屋予約LPです。",
  openGraph: {
    title: "居酒屋 こもれび",
    description: "落ち着いた和空間で、炭火料理とお酒を。",
    images: ["/ogp.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "居酒屋 こもれび",
    description: "落ち着いた和空間で、炭火料理とお酒を。",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster />
      </body>
    </html>
  );
}
