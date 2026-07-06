import type { Metadata } from "next";
// Use system fonts for offline-safe builds to avoid Google Fonts fetch in CI
// If you prefer Google-hosted fonts, restore the imports below and ensure
// network access during build.
// import { Inter, Poppins } from "next/font/google";
import { Providers } from "@/src/lib/providers";
import { site } from "@/src/constants/site";
import { Footer } from "@/src/components/layout/Footer/Footer";
import { Navbar } from "@/src/components/layout/Navbar/Navbar";
import "./globals.css";

const poppins = { variable: "--font-poppins" };
const inter = { variable: "--font-inter" };

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: site.locale,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} preview`,
      },
    ],
  },
  icons: {
    icon: site.favicon,
    shortcut: site.favicon,
    apple: site.favicon,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: site.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: site.themeColor.dark },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${poppins.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-background text-text antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
