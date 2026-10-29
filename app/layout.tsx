import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://executive-dossier-kohl.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mark O'Hare | Third Sector Operations & People Leader",
  description: "Leadership dossier for Mark O'Hare: Scottish third-sector operations, service delivery, people leadership, partnerships, governance and digital improvement.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mark O'Hare | Leadership Dossier",
    description: "The decisions, services and people behind 25+ years of community and operational leadership.",
    url: siteUrl,
    siteName: "Mark O'Hare Leadership Dossier",
    type: "website",
    locale: "en_GB",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", title: "Mark O'Hare | Leadership Dossier", images: ["/opengraph-image"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
