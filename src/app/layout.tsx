import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alasraralthahabeya.com"),

  title: {
    default: "Al Asrar Al Thahabeya Technical Services | Dubai",
    template: "%s | Al Asrar Al Thahabeya Technical Services",
  },

  description:
    "Al Asrar Al Thahabeya Technical Services — professional technical services, maintenance, and property solutions in Dubai, UAE.",

  keywords: [
  "Al Asrar Al Thahabeya Technical Services",
  "Technical Services Dubai",
  "Technical Services Company Dubai",
  "Maintenance Company Dubai",
  "Home Maintenance Dubai",
  "Building Maintenance Dubai",
  "Property Maintenance Dubai",
  "AC Maintenance Dubai",
  "Air Conditioning Maintenance Dubai",
  "Plumbing Services Dubai",
  "Electrical Services Dubai",
  "Painting Services Dubai",
  "Floor and Wall Tiling Dubai",
  "False Ceiling Dubai",
  "Carpentry Services Dubai",
],

  authors: [
    {
      name: "Al Asrar Al Thahabeya Technical Services",
    },
  ],

  openGraph: {
    title: "Al Asrar Al Thahabeya Technical Services | Dubai",
    description:
      "Professional technical services, maintenance, and property solutions in Dubai, UAE.",
    url: "https://www.alasraralthahabeya.com",
    siteName: "Al Asrar Al Thahabeya Technical Services",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/golden-secrets-og.png",
        width: 1200,
        height: 630,
        alt: "Al Asrar Al Thahabeya Technical Services — Dubai, UAE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Al Asrar Al Thahabeya Technical Services | Dubai",
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
      <body className="min-h-full flex flex-col">
  {children}

  <Script
    id="business-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Al Asrar Al Thahabeya Technical Services",
        url: "https://www.alasraralthahabeya.com",
        telephone: "+971505847430",
        email: "alasrar@yahoo.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
          postalCode: "252262",
        },
        areaServed: {
          "@type": "City",
          name: "Dubai",
        },
        priceRange: "$$",
        serviceType: [
          "Carpentry & Wood Flooring Works",
          "Building Cleaning Services",
          "Air-Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance",
          "Floor & Wall Tiling Works",
          "False Ceiling & Light Partitions Installation",
          "Plumbing & Sanitary Installation",
          "Painting Contracting",
          "Electrical Fittings & Fixtures Repairing & Maintenance",
        ],
      }),
    }}
  />
</body>
    </html>
  );
}