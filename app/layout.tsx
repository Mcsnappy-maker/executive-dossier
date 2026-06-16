import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mark O'Hare | Third Sector Operations & People Leader",
  description:
    "Open CV for Mark O'Hare, covering third-sector operations, service delivery, people leadership, partnerships, governance and digital improvement."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
