import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - RFID Attendance",
  description: "Dashboard for reports RFID Attendance for your workers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
