import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { assetPath } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "Binsmith London — Fresh bins. Zero effort.",
    template: "%s | Binsmith London",
  },
  description:
    "Beautifully clean bins, without the dirty work. Wheelie bin and food caddy cleaning every four weeks across west and south-west London. Plans from £7/month.",
  robots: { index: false, follow: false },
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
