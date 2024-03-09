import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const inter = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RFID Attendance",
  description: "Simple RFID Attendance for your workers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
