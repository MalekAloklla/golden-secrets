import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://golden-secrets.vercel.app"),

  title: {
    default: "Golden Secrets Technical Services | Dubai",
    template: "%s | Golden Secrets Technical Services",
  },

  description:
    "Golden Secrets Technical Services — professional technical services, maintenance, and property solutions in Dubai, UAE.",

  keywords: [
    "Golden Secrets Technical Services",
    "Technical Services Dubai",
    "Maintenance Dubai",
    "Home Maintenance Dubai",
    "Property Maintenance UAE",
    "Dubai Technical Services",
  ],

  authors: [
    {
      name: "Golden Secrets Technical Services",
    },
  ],

  openGraph: {
    title: "Golden Secrets Technical Services | Dubai",
    description:
      "Professional technical services, maintenance, and property solutions in Dubai, UAE.",
    url: "https://golden-secrets.vercel.app",
    siteName: "Golden Secrets Technical Services",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/golden-secrets-og.png",
        width: 1200,
        height: 630,
        alt: "Golden Secrets Technical Services — Dubai, UAE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Golden Secrets Technical Services | Dubai",
    description:
      "Professional technical services, maintenance, and property solutions in Dubai, UAE.",
    images: ["/golden-secrets-og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/golden-secrets-logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}