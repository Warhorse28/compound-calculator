import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://scalemonthly.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ScaleMonthly",
    template: "%s | ScaleMonthly",
  },

  description:
    "ScaleMonthly helps you compare retirement income, net worth targets, and compound growth scenarios with simple financial tools.",

  icons: {
    icon: "/logo-sm.png",
    shortcut: "/logo-sm.png",
    apple: "/logo-sm.png",
  },

  openGraph: {
    title: "ScaleMonthly",
    description:
      "Retirement income comparisons, net worth targets, and compound interest tools.",
    url: siteUrl,
    siteName: "ScaleMonthly",

    images: [
      {
        url: "/logo-sm.png",
        width: 512,
        height: 512,
        alt: "ScaleMonthly",
      },
    ],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <header className="siteHeader">
          <Link href="/" className="brand" aria-label="ScaleMonthly home">
            <Image
              src="/logo-sm.png"
              alt="ScaleMonthly"
              width={44}
              height={44}
              className="brandLogo"
              priority
            />

            <span className="brandText">
              <strong>
                Scale<span>Monthly</span>
              </strong>

              <small>Invest smart. Grow monthly.</small>
            </span>
          </Link>

          <nav className="siteNav" aria-label="Main navigation">
            <Link href="/compound-interest-calculator">
              Calculator
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
