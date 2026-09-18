import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Building Cleaning Services",
  description:
    "Professional building cleaning services for residential and commercial properties by Al Asrar Al Thahabeya Technical Services.",
  keywords: [
    "Building Cleaning",
    "Building Cleaning Services",
    "Cleaning Services",
    "Property Cleaning",
    "Residential Cleaning",
    "Commercial Cleaning",
    "Building Maintenance",
  ],
  alternates: {
    canonical:
      "https://www.alasraralthahabeya.com/services/building-cleaning",
  },
  openGraph: {
    title: "Building Cleaning Services | Al Asrar Al Thahabeya",
    description:
      "Professional building and property cleaning services for residential and commercial properties.",
    url: "https://www.alasraralthahabeya.com/services/building-cleaning",
    siteName: "Al Asrar Al Thahabeya Technical Services",
    locale: "en_AE",
    type: "website",
  },
};

const services = [
  "Building Cleaning",
  "Residential Property Cleaning",
  "Commercial Property Cleaning",
  "Common Area Cleaning",
  "Routine Cleaning Services",
  "Property Maintenance Cleaning",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Building Cleaning Services",
  serviceType: "Building Cleaning Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Al Asrar Al Thahabeya Technical Services",
    url: "https://www.alasraralthahabeya.com",
    telephone: "+971505847430",
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  url: "https://www.alasraralthahabeya.com/services/building-cleaning",
};

export default function BuildingCleaningPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(155,17,30,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-10 lg:px-12 lg:pb-28">
          {/* Breadcrumb */}
          <div className="mb-14 flex items-center gap-3 text-sm text-white/40">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <span>/</span>

            <span className="text-white/70">
              Building Cleaning
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Content */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#9B111E]" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c88991]">
                  Technical Services
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
                Building Cleaning
                <span className="block text-[#9B111E]">
                  UAE
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Professional building and property cleaning services
                for residential and commercial properties across
                UAE.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/971505847430?text=Hello%20Al%20Asrar%20Al%20Thahabeya%20Technical%20Services%2C%20I%20would%20like%20to%20request%20building%20cleaning%20service%20in%20Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#9B111E] px-6 py-4 text-sm font-semibold transition hover:bg-[#6E0F18]"
                >
                  <MessageCircle size={18} />
                  Request Cleaning Service
                </a>

                <a
                  href="tel:+971505847430"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  <Phone size={18} />
                  +971 50 584 7430
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative min-h-[380px] overflow-hidden border border-white/10 bg-[#101010]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

              <div className="absolute right-8 top-8 text-right">
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Service
                </p>

                <p className="mt-2 text-5xl font-light text-white/10">
                  02
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[#9B111E]/40">
                  <div className="absolute h-32 w-32 rounded-full border border-white/10" />

                  <div className="absolute h-20 w-20 rounded-full border border-white/10" />

                  <Sparkles
                    size={54}
                    strokeWidth={1}
                    className="text-[#9B111E]"
                  />
                </div>
              </div>

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Al Asrar Al Thahabeya
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    Technical Services · UAE
                  </p>
                </div>

                <Sparkles
                  size={20}
                  className="text-white/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10 bg-[#0c0c0c]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c88991]">
              Cleaning Services in UAE
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              Clean properties.
              <span className="block text-white/40">
                Professional service.
              </span>
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-white/60 sm:text-lg">
              Al Asrar Al Thahabeya Technical Services provides
              professional building cleaning services for
              residential and commercial properties in UAE.
              Our services support properties that require
              consistent and professional cleaning solutions.
            </p>

            <p className="mt-6 text-base leading-8 text-white/40">
              From buildings and common areas to residential and
              commercial properties, our cleaning services can be
              arranged according to the requirements of each
              property.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDED */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c88991]">
                What We Handle
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Cleaning Services
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40">
              Cleaning solutions for different property types
              and maintenance requirements.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service}
                className="group bg-[#0c0c0c] p-7 transition hover:bg-[#111111]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs text-white/25">
                    0{index + 1}
                  </span>

                  <Check
                    size={18}
                    className="text-[#9B111E] opacity-60 transition group-hover:opacity-100"
                  />
                </div>

                <h3 className="text-lg font-medium leading-7">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-white/10 bg-[#0c0c0c]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c88991]">
                Why Choose Us
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Professional cleaning
                <span className="block text-white/40">
                  services in UAE.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Professional Service",
                  "Structured cleaning services for residential and commercial properties.",
                ],
                [
                  "02",
                  "Property Focused",
                  "Cleaning solutions arranged around the needs of each property.",
                ],
                [
                  "03",
                  "UAE Based",
                  "Serving residential and commercial properties across UAE.",
                ],
                [
                  "04",
                  "Direct Communication",
                  "Discuss your cleaning requirements directly through WhatsApp or phone.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border border-white/10 bg-[#101010] p-7"
                >
                  <span className="text-xs text-[#9B111E]">
                    {number}
                  </span>

                  <h3 className="mt-8 text-lg font-medium">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <div className="relative overflow-hidden border border-white/10 bg-[#101010] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#9B111E]/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c88991]">
                  Need Cleaning Service?
                </p>

                <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                  Let&apos;s discuss your
                  <span className="text-[#9B111E]">
                    {" "}property.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                  Contact Al Asrar Al Thahabeya Technical Services
                  for building and property cleaning requirements
                  in UAE.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/971505847430?text=Hello%20Al%20Asrar%20Al%20Thahabeya%20Technical%20Services%2C%20I%20would%20like%20to%20request%20building%20cleaning%20service%20in%20Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#9B111E] px-7 py-4 text-sm font-semibold transition hover:bg-[#6E0F18]"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 px-7 py-4 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  Get a Quote
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACK TO SERVICES */}
      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            All Services
          </Link>

          <span className="text-xs uppercase tracking-[0.2em] text-white/20">
            UAE
          </span>
        </div>
      </section>
    </main>
  );
}