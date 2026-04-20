import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontUi = Inter({ subsets: ["latin"], variable: "--font-ui" });
const fontDisplay = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Mark O'Hare | Leadership Profile",
  description: "Operational leadership for complex, community-facing organisations. Board-trusted, community-rooted and operationally credible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-accent selection:text-background",
        fontUi.variable,
        fontDisplay.variable
      )}>
        {children}
      </body>
    </html>
  );
}
