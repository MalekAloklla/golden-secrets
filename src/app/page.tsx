"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Maximize2,
} from "lucide-react";
import { useEffect, useState } from "react";

const phone = "0505847430";
const whatsapp = "https://wa.me/971505847430";
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      license: "License",
      contact: "Contact",
      quote: "Get a Quote",
    },

    hero: {
      location: "Dubai · UAE",
      title: "Technical",
      titleAccent: "Excellence.",
      description:
        "Professional technical services for villas, residences and commercial properties across Dubai. From finishing and renovation to maintenance — one trusted team.",
      request: "Request a Quote",
      explore: "Explore Services",
      services: "Services",
      based: "Based",
      support: "Support",
      commitment: "Commitment",
    },

    about: {
      label: "About Us",
      title: "Built on",
      titleAccent: "precision.",
      description:
        "Al Asrar Al Thahabeya Technical Services is a Dubai-based technical services company delivering professional solutions for residential and commercial properties.",
      description2:
        "Our approach combines skilled workmanship, attention to detail and reliable service to ensure every project is completed to a high professional standard.",
      features: [
        "Professional workmanship",
        "Reliable project delivery",
        "Quality-focused execution",
        "Residential & commercial",
      ],
    },

    why: {
      label: "Why AL ASRAR AL THAHABEYA",
      title: "More than",
      titleAccent: "technical work.",
      description:
        "We believe great technical service is not only about fixing problems. It is about protecting your property, your time and your investment.",
      work: "Work With Us",
      features: [
        {
          title: "Professional Standards",
          text: "Every project is handled with attention to detail, professional execution and a commitment to quality.",
        },
        {
          title: "Reliable Response",
          text: "We understand that maintenance issues cannot always wait. Our team is ready to respond when you need us.",
        },
        {
          title: "One Trusted Team",
          text: "Multiple technical disciplines under one company, making your project simpler and easier to manage.",
        },
        {
          title: "Attention to Detail",
          text: "From preparation to final finishing, we focus on the small details that make a professional result.",
        },
      ],
    },

    services: {
      label: "What We Do",
      title: "Technical solutions",
      titleAccent: "without compromise.",
      description:
        "From individual maintenance jobs to complete property finishing, our team provides a wide range of professional technical services under one roof.",
      need: "Need a technical solution?",
      tell: "Tell us what your property needs.",
      request: "Request a Quote",
    },

    projects: {
      label: "Selected Work",
      title: "Spaces we've",
      titleAccent: "helped transform.",
      description:
        "A selection of residential and commercial work representing our approach to quality, finishing and technical execution.",
      workDescription:
        "Professional technical work and finishing delivered with attention to detail and a focus on quality.",
      previous: "Previous project",
      next: "Next project",
      have: "Have a project in mind?",
      discuss: "Let's discuss how we can help.",
      start: "Start a Conversation",
      goTo: "Go to project",
    },

    license: {
      badge: "Licensed & Trusted",
      title: "Professional services.",
      titleAccent: "Built on trust.",
      description:
        "Al Asrar Al Thahabeya Technical Services is a licensed Dubai-based technical services company providing reliable installation, maintenance and finishing solutions for residential and commercial properties.",
      activities: "Licensed Activities",
      active: "Active Status",
      uae: "United Arab Emirates",
      business: "Licensed Business",
      registered: "Officially registered and operating in Dubai, UAE.",
      company: "Company License",
      view: "View Full License",
      close: "Close license",
    },

    contact: {
      label: "Contact Us",
      title: "Let's Build Something",
      titleAccent: "Exceptional.",
      description:
        "Tell us about your project and our team will get back to you with the right solution for your technical service needs.",
      request: "Request a Quote",
      formDescription:
        "Fill in your details and contact us directly through WhatsApp.",
      fullName: "Full Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      email: "Email Address",
      service: "Service Required",
      select: "Select a service",
      message: "Message Details",
      messagePlaceholder: "Tell us about your project...",
      whatsapp: "Request Quote via WhatsApp",
      whatsappNote: "Your request will open directly in WhatsApp.",
      company: "AL ASRAR AL THAHABEYA",
      companyTitle: "Professional Technical",
      companyTitle2: "Services in Dubai.",
      call: "Call Us",
      address: "Address",
      quick: "Need a quick response?",
      chat: "Chat with us on WhatsApp",
    },

    footer: {
  contact: "Contact",
  hours: "Working Hours",
  follow: "Follow Us",
  description:
    "Professional technical services and property maintenance solutions in Dubai, UAE.",
  social:
    "Follow Al Asrar Al Thahabeya Technical Services on Instagram & TikTok.",
  uae: "Dubai · United Arab Emirates",
  workingDays: "Monday – Saturday",
  workingTime: "7:00 AM – 6:00 PM",
  closed: "Sunday: Closed",
},
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      license: "الرخصة",
      contact: "تواصل معنا",
      quote: "اطلب عرض سعر",
    },

    hero: {
      location: "دبي · الإمارات",
      title: "تميّز",
      titleAccent: "تقني.",
      description:
        "نقدم خدمات فنية متخصصة للفلل والمساكن والمنشآت التجارية في دبي، من التشطيبات والتجديد إلى أعمال الصيانة — فريق واحد تثق به.",
      request: "اطلب عرض سعر",
      explore: "استكشف خدماتنا",
      services: "خدمة",
      based: "في الإمارات",
      support: "دعم",
      commitment: "التزام",
    },

    about: {
      label: "من نحن",
      title: "نُنجز أعمالنا",
      titleAccent: "بدقة.",
      description:
        "الأسرار الذهبية للخدمات الفنية شركة متخصصة في دبي تقدم حلولًا فنية احترافية للمشاريع السكنية والتجارية.",
      description2:
        "نعتمد على الخبرة في التنفيذ، والاهتمام بأدق التفاصيل، والالتزام بتقديم خدمة موثوقة لضمان إنجاز كل مشروع وفق أعلى المعايير المهنية.",
      features: [
        "تنفيذ احترافي",
        "التزام بمواعيد المشاريع",
        "تركيز على الجودة",
        "للمشاريع السكنية والتجارية",
      ],
    },

    why: {
      label: "لماذا الأسرار الذهبية",
      title: "أكثر من مجرد",
      titleAccent: "أعمال فنية.",
      description:
        "نؤمن بأن الخدمة الفنية المتميزة لا تقتصر على حل المشاكل، بل تشمل حماية ممتلكاتك ووقتك واستثمارك.",
      work: "اعمل معنا",
      features: [
        {
          title: "معايير احترافية",
          text: "نتعامل مع كل مشروع باهتمام كبير بالتفاصيل وتنفيذ احترافي والتزام حقيقي بالجودة.",
        },
        {
          title: "استجابة موثوقة",
          text: "ندرك أن أعطال الصيانة لا تنتظر دائمًا، لذلك فريقنا مستعد للاستجابة عند الحاجة.",
        },
        {
          title: "فريق واحد تثق به",
          text: "تخصصات فنية متعددة تحت شركة واحدة، مما يجعل إدارة مشروعك أسهل وأكثر سلاسة.",
        },
        {
          title: "اهتمام بالتفاصيل",
          text: "من مرحلة التجهيز وحتى اللمسات النهائية، نهتم بالتفاصيل الصغيرة التي تصنع الفرق.",
        },
      ],
    },

    services: {
      label: "ماذا نقدم",
      title: "حلول فنية",
      titleAccent: "بلا تنازل.",
      description:
        "من أعمال الصيانة الفردية إلى تشطيبات العقارات المتكاملة، نقدم مجموعة واسعة من الخدمات الفنية الاحترافية تحت سقف واحد.",
      need: "تحتاج إلى حل فني؟",
      tell: "أخبرنا بما يحتاجه عقارك.",
      request: "اطلب عرض سعر",
    },

    projects: {
      label: "أعمال مختارة",
      title: "مساحات ساهمنا",
      titleAccent: "في تطويرها.",
      description:
        "مجموعة من الأعمال السكنية والتجارية التي تعكس منهجنا في الجودة والتشطيبات والتنفيذ الفني.",
      workDescription:
        "أعمال فنية وتشطيبات احترافية يتم تنفيذها بعناية واهتمام بالتفاصيل مع التركيز على الجودة.",
      previous: "المشروع السابق",
      next: "المشروع التالي",
      have: "لديك مشروع في ذهنك؟",
      discuss: "دعنا نناقش كيف يمكننا مساعدتك.",
      start: "ابدأ محادثة",
      goTo: "الانتقال إلى المشروع",
    },

    license: {
      badge: "مرخصة وموثوقة",
      title: "خدمات احترافية.",
      titleAccent: "مبنية على الثقة.",
      description:
        "الأسرار الذهبية للخدمات الفنية شركة مرخصة في دبي تقدم حلولًا موثوقة للتركيب والصيانة والتشطيبات للمشاريع السكنية والتجارية.",
      activities: "أنشطة مرخصة",
      active: "حالة نشطة",
      uae: "الإمارات العربية المتحدة",
      business: "منشأة مرخصة",
      registered: "شركة مسجلة رسميًا وتعمل في دبي، الإمارات العربية المتحدة.",
      company: "رخصة الشركة",
      view: "عرض الرخصة كاملة",
      close: "إغلاق الرخصة",
    },

    contact: {
      label: "تواصل معنا",
      title: "لنبنِ شيئًا",
      titleAccent: "استثنائيًا.",
      description:
        "أخبرنا عن مشروعك وسيتواصل معك فريقنا لتقديم الحل المناسب لاحتياجاتك من الخدمات الفنية.",
      request: "طلب عرض سعر",
      formDescription:
        "أدخل بياناتك وسنتواصل معك مباشرة عبر واتساب.",
      fullName: "الاسم الكامل",
      namePlaceholder: "اكتب اسمك",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      service: "الخدمة المطلوبة",
      select: "اختر الخدمة",
      message: "تفاصيل الطلب",
      messagePlaceholder: "أخبرنا عن تفاصيل مشروعك...",
      whatsapp: "طلب عرض سعر عبر واتساب",
      whatsappNote: "سيتم فتح طلبك مباشرة في واتساب.",
      company: "الأسرار الذهبية",
      companyTitle: "خدمات فنية احترافية",
      companyTitle2: "في دبي.",
      call: "اتصل بنا",
      address: "العنوان",
      quick: "تحتاج إلى رد سريع؟",
      chat: "تحدث معنا عبر واتساب",
    },

    footer: {
  contact: "تواصل معنا",
  hours: "ساعات العمل",
  follow: "تابعنا",
  description:
    "خدمات فنية احترافية وحلول متكاملة لصيانة العقارات في دبي، الإمارات.",
  social:
    "تابع الأسرار الذهبية للخدمات الفنية على إنستغرام وتيك توك.",
  uae: "دبي · الإمارات العربية المتحدة",
  workingDays: "الاثنين – السبت",
  workingTime: "7:00 صباحًا – 6:00 مساءً",
  closed: "الأحد: مغلق",
},
  },
};

const services = [
  {
    number: "01",
    title: "Carpentry & Wood Flooring",
    arTitle: "أعمال النجارة والأرضيات الخشبية",
    description:
      "Professional carpentry, custom woodwork and premium wood flooring solutions.",
    arDescription:
      "أعمال نجارة احترافية، وتصاميم خشبية مخصصة، وحلول متخصصة للأرضيات الخشبية.",
    icon: Wrench,
    href: "/services/carpentry-wood-flooring",
  },
  {
    number: "02",
    title: "Building Cleaning",
    arTitle: "خدمات تنظيف المباني",
    description:
      "Reliable cleaning solutions for residential, commercial and building spaces.",
    arDescription:
      "حلول تنظيف موثوقة للمباني والمساحات السكنية والتجارية.",
    icon: Sparkles,
    href: "/services/building-cleaning",
  },
  {
    number: "03",
    title: "Air Conditioning & Ventilation",
    arTitle: "تكييف الهواء والتهوية",
    description:
      "Installation, maintenance and servicing of air-conditioning, ventilation and filtration systems.",
    arDescription:
      "تركيب وصيانة وخدمة أنظمة التكييف والتهوية وتنقية الهواء.",
    icon: Clock3,
    href: "/services/ac-maintenance",
  },
  {
    number: "04",
    title: "Floor & Wall Tiling",
    arTitle: "تركيب بلاط الأرضيات والجدران",
    description:
      "Precise floor and wall tiling with professional finishing and attention to detail.",
    arDescription:
      "تركيب دقيق لبلاط الأرضيات والجدران مع تشطيبات احترافية واهتمام بأدق التفاصيل.",
    icon: CheckCircle2,
    href: "/services/floor-wall-tiling",
  },
  {
    number: "05",
    title: "False Ceiling & Light Partitions",
    arTitle: "الأسقف المستعارة والقواطع الخفيفة",
    description:
      "Modern false ceilings and light partition systems designed for practical and elegant spaces.",
    arDescription:
      "تنفيذ الأسقف المستعارة وأنظمة القواطع الخفيفة لتوفير مساحات عملية وأنيقة.",
    icon: ClipboardCheck,
    href: "/services/false-ceiling-light-partitions",
  },
  {
    number: "06",
    title: "Plumbing & Sanitary Installation",
    arTitle: "أعمال السباكة والصرف الصحي",
    description:
      "Professional plumbing, sanitary installations, repairs and maintenance.",
    arDescription:
      "أعمال سباكة وتركيبات صحية وإصلاحات وصيانة باحترافية.",
    icon: Wrench,
    href: "/services/plumbing-sanitary",
  },
  {
    number: "07",
    title: "Painting Contracting",
    arTitle: "أعمال الدهانات",
    description:
      "Interior and exterior painting with clean preparation and high-quality finishing.",
    arDescription:
      "أعمال دهانات داخلية وخارجية مع تجهيز دقيق وتشطيبات عالية الجودة.",
    icon: Sparkles,
    href: "/services/painting",
  },
  {
    number: "08",
    title: "Electrical Repair & Maintenance",
    arTitle: "إصلاح وصيانة الأعمال الكهربائية",
    description:
      "Electrical fittings, fixtures, repairs and maintenance for residential and commercial properties.",
    arDescription:
      "إصلاح وصيانة التركيبات والتجهيزات الكهربائية للمباني السكنية والتجارية.",
    icon: ShieldCheck,
    href: "/services/electrical",
  },
];

const projects = [
  {
  title: "Premium Villa",
  arTitle: "فيلا فاخرة",
  category: "Villa Renovation",
  arCategory: "تجديد الفلل",
  image:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
},
  {
  title: "Modern Interior",
  arTitle: "تصميم داخلي عصري",
  category: "Interior Finishing",
  arCategory: "تشطيبات داخلية",
  image:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
},
  {
  title: "Luxury Residence",
  arTitle: "مسكن فاخر",
  category: "Maintenance & Renovation",
  arCategory: "صيانة وتجديد",
  image:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
},
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [licenseOpen, setLicenseOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const isArabic = language === "ar";
  const t = translations[language];

  const previousProject = () => {
    setActiveProject(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  const nextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}, [language]);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
  <AnimatePresence mode="wait">
    <motion.div
      key={language}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen"
    >
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white shadow-lg shadow-black/40 md:h-14 md:w-14">
              <Image
                src="/golden-secrets-logo.jpg"
                alt="Al Asrar Al Thahabeya Technical Services Logo"
                fill
                priority
                className="object-cover"
                sizes="56px"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-[0.18em] text-white">
                AL ASRAR AL THAHABEYA
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/40">
                Technical Services
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {t.nav.home}
            </a>

            <a
              href="#about"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {t.nav.about}
            </a>

            <a
              href="#services"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {t.nav.services}
            </a>

            <a
              href="#projects"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {t.nav.projects}
            </a>

          </nav>

{/* Language Switcher */}
<button
  type="button"
  onClick={() => setLanguage((current) => (current === "en" ? "ar" : "en"))}
  className="hidden items-center gap-2 border border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/60 transition hover:border-[#9B111E] hover:text-white md:flex"
  aria-label="Switch language"
>
  <span className={language === "en" ? "text-white" : "text-white/35"}>
    EN
  </span>

  <span className="text-white/20">/</span>

  <span className={language === "ar" ? "text-white" : "text-white/35"}>
    AR
  </span>
</button>

          {/* Desktop CTA */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-3 bg-[#9B111E] px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:bg-[#6E0F18] md:inline-flex"
          >
            {t.nav.quote}
            <ArrowRight size={15} />
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-white transition hover:border-white/25 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden border-t border-white/10 bg-[#080808]/98 backdrop-blur-xl md:hidden"
    >
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:px-6">
        {[
          [t.nav.home, "#home"],
          [t.nav.about, "#about"],
          [t.nav.services, "#services"],
          [t.nav.projects, "#projects"],
          [t.nav.license, "#license"],
          [t.nav.contact, "#contact"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="py-1 text-sm text-white/65 transition hover:text-white"
          >
            {label}
          </a>
        ))}

        {/* Mobile Actions */}
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setLanguage((current) => (current === "en" ? "ar" : "en"))
            }
            dir="ltr"
            className="flex h-12 items-center justify-center gap-2 border border-white/10 px-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition hover:border-[#9B111E] hover:text-white"
            aria-label="Switch language"
          >
            <span
              className={
                language === "en" ? "text-white" : "text-white/35"
              }
            >
              EN
            </span>

            <span className="text-white/20">/</span>

            <span
              className={
                language === "ar" ? "text-white" : "text-white/35"
              }
            >
              AR
            </span>
          </button>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex h-12 flex-1 items-center justify-center gap-3 bg-[#9B111E] px-4 text-xs font-semibold uppercase tracking-wider transition hover:bg-[#6E0F18]"
          >
            {t.nav.quote}
            <ArrowRight size={15} />
          </a>
        </div>
      </nav>
    </motion.div>
  )}
</AnimatePresence>
</header>

{/* =========================================================
    HERO V2
========================================================= */}
<section
  id="home"
  className="relative min-h-[100svh] overflow-hidden bg-[#080808] md:min-h-screen"
>
  {/* Background atmosphere */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(155,17,30,0.10),transparent_35%)]" />

  {/* Architectural grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

  <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-10">
    <div
      className={`grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 ${
        isArabic ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* =====================================================
          LEFT — CONTENT
      ===================================================== */}
      <div className={isArabic ? "lg:[direction:rtl]" : ""}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-[#9B111E]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-xs">
            {t.hero.location}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl text-[46px] font-semibold leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px]"
        >
          {t.hero.title}
          <br />
          <span className="text-white/35">
            {t.hero.titleAccent}
          </span>
        </motion.h1>

        {/* Accent */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "64px" }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-7 h-[2px] bg-[#9B111E]"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-[15px] leading-7 text-white/55 sm:text-base sm:leading-7"
        >
          {t.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
        >
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-3 bg-[#9B111E] px-7 text-xs font-semibold uppercase tracking-[0.13em] transition-all duration-300 hover:bg-[#6E0F18] hover:shadow-[0_15px_50px_rgba(155,17,30,0.22)] sm:h-14"
          >
            {t.hero.request}

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#services"
            className="group inline-flex h-12 items-center justify-center gap-3 border border-white/15 bg-white/[0.02] px-7 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] sm:h-14"
          >
            {t.hero.explore}

            <ChevronDown
              size={17}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </motion.div>

        {/* Small trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/30"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#9B111E]" />
          <span>
            {isArabic
              ? "خدمات فنية احترافية في دبي"
              : "Professional Technical Services in Dubai"}
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          RIGHT — IMAGE
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: isArabic ? -40 : 40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* Outer architectural frame */}
        <div className="absolute -inset-3 border border-white/[0.06] sm:-inset-5" />

        {/* Red accent frame */}
        <div
          className={`absolute -top-3 h-16 w-16 border-t-2 ${
            isArabic
              ? "-left-3 border-l-2"
              : "-right-3 border-r-2"
          } border-[#9B111E] sm:-top-5 ${
            isArabic ? "sm:-left-5" : "sm:-right-5"
          }`}
        />

        {/* Image */}
        <div className="relative aspect-[4/4.5] overflow-hidden bg-[#111] sm:aspect-[4/3.5] lg:aspect-[4/4.2]">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90"
            alt="Modern interior in Dubai"
            className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
          />

          {/* Image overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

          {/* Image label */}
          <div
            className={`absolute bottom-5 ${
              isArabic ? "right-5" : "left-5"
            } sm:bottom-7 ${
              isArabic ? "sm:right-7" : "sm:left-7"
            }`}
          >
            <div className="border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-md">
              <div className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45">
                Al Asrar Al Thahabeya
              </div>

              <div className="mt-1 text-xs font-medium text-white/80">
                Technical Services · Dubai
              </div>
            </div>
          </div>

          {/* Corner mark */}
          <div
            className={`absolute top-5 ${
              isArabic ? "right-5" : "left-5"
            } h-8 w-8 border ${
              isArabic
                ? "border-r-white/40 border-t-white/40 border-b-transparent border-l-transparent"
                : "border-l-white/40 border-t-white/40 border-b-transparent border-r-transparent"
            }`}
          />
        </div>

        {/* Floating service badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className={`absolute -bottom-5 ${
            isArabic ? "-left-3 sm:-left-5" : "-right-3 sm:-right-5"
          } border border-white/10 bg-[#0D0D0D]/95 px-5 py-4 shadow-2xl backdrop-blur-xl`}
        >
          <div className="text-2xl font-semibold leading-none">
            08
          </div>

          <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.2em] text-white/35">
            {t.hero.services}
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* =====================================================
        BOTTOM INFORMATION BAR
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.65 }}
      className="mt-16 grid grid-cols-2 border-t border-white/10 pt-6 sm:mt-20 sm:grid-cols-4 sm:pt-7"
    >
      <div className="border-r border-white/10 pr-5 sm:pr-8">
        <div className="text-xl font-semibold sm:text-2xl">
          08
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
          {t.hero.services}
        </div>
      </div>

      <div className="border-r border-white/10 px-5 sm:px-8">
        <div className="text-xl font-semibold sm:text-2xl">
          UAE
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
          {t.hero.based}
        </div>
      </div>

      <div className="border-r border-white/10 px-5 sm:px-8">
        <div className="text-xl font-semibold sm:text-2xl">
          7–6
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
          {isArabic ? "ساعات العمل" : "Working Hours"}
        </div>
      </div>

      <div className="pl-5 sm:pl-8">
        <div className="text-xl font-semibold sm:text-2xl">
          100%
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
          {t.hero.commitment}
        </div>
      </div>
    </motion.div>

    {/* Scroll indicator */}
    <motion.a
      href="#services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-7 right-4 hidden items-center gap-3 text-[8px] font-medium uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white/60 sm:right-6 sm:flex lg:right-10"
    >
      <span>{isArabic ? "استكشف" : "Explore"}</span>

      <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1">
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-1 w-1 rounded-full bg-white/50"
        />
      </span>
    </motion.a>
  </div>
</section>

{/* =========================================================
    ABOUT — SIGNATURE COMPANY PROFILE
========================================================= */}
<section
  id="about"
  className="relative overflow-hidden border-t border-white/10 bg-[#080808]"
>
  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#9B111E]/[0.035] blur-[140px]" />

    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "90px 90px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-12 flex items-end justify-between gap-6 sm:mb-16"
    >
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#9B111E]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs">
            {t.about.label}
          </span>
        </div>

        <h2
          className={`max-w-3xl text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl ${
            isArabic ? "leading-[1.15]" : ""
          }`}
        >
          {t.about.title}
          <br />
          <span className="text-white/25">
            {t.about.titleAccent}.
          </span>
        </h2>
      </div>

      <div className="hidden shrink-0 items-center gap-3 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
          {isArabic ? "من نحن" : "Who we are"}
        </span>

        <div className="h-px w-12 bg-white/10" />

        <span className="font-mono text-xs text-[#9B111E]">
          01
        </span>
      </div>
    </motion.div>

    {/* =====================================================
        MAIN PROFILE
    ===================================================== */}
    <div
      className={`grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 ${
        isArabic ? "lg:[direction:rtl]" : ""
      }`}
    >

      {/* ===================================================
          IMAGE
      =================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: isArabic ? 35 : -35,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#111] sm:min-h-[540px]"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90"
          alt="Modern interior in Dubai"
          className="absolute inset-0 h-full w-full object-cover grayscale-[20%] transition duration-[1200ms] group-hover:scale-[1.04] group-hover:grayscale-0"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

        <div className="absolute inset-0 bg-[#9B111E]/[0.04] transition duration-500 group-hover:bg-[#9B111E]/[0.08]" />

        {/* Corner frame */}
        <div className="absolute left-5 top-5 h-14 w-14 border-l border-t border-white/25 sm:left-7 sm:top-7 sm:h-20 sm:w-20" />

        <div className="absolute bottom-5 right-5 h-14 w-14 border-b border-r border-white/25 sm:bottom-7 sm:right-7 sm:h-20 sm:w-20" />

        {/* Image label */}
        <div
          className={`absolute bottom-6 sm:bottom-8 ${
            isArabic
              ? "right-6 sm:right-8"
              : "left-6 sm:left-8"
          }`}
        >
          <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Al Asrar Al Thahabeya
          </div>

          <div className="h-px w-10 bg-[#9B111E]" />
        </div>

        {/* Large number */}
        <div
          className={`absolute top-5 font-mono text-[90px] font-bold leading-none text-white/[0.055] sm:top-7 sm:text-[130px] ${
            isArabic
              ? "left-5 sm:left-7"
              : "right-5 sm:right-7"
          }`}
        >
          01
        </div>
      </motion.div>

      {/* ===================================================
          COMPANY CONTENT
      =================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: isArabic ? -35 : 35,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col justify-between border border-white/10 bg-[#0D0D0D] p-6 sm:p-8 lg:p-10"
      >

        {/* Intro */}
        <div>
          <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              {isArabic ? "نبذة عن الشركة" : "Company profile"}
            </span>

            <span className="font-mono text-[10px] text-[#9B111E]">
              UAE / DUBAI
            </span>
          </div>

          <p
            className={`max-w-2xl text-[17px] leading-8 text-white/75 sm:text-xl sm:leading-9 ${
              isArabic ? "leading-[2]" : ""
            }`}
          >
            {t.about.description}
          </p>

          <p
            className={`mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base ${
              isArabic ? "leading-[2]" : ""
            }`}
          >
            {t.about.description2}
          </p>
        </div>

        {/* =================================================
            FEATURES
        ================================================= */}
        <div className="mt-10 border-t border-white/10">
          <div className="grid sm:grid-cols-2">
            {t.about.features.map((item, index) => (
              <div
                key={item}
                className={`group relative flex items-center gap-4 border-b border-white/10 py-5 transition-colors duration-300 hover:bg-white/[0.025] ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-6"
                    : "sm:pl-6"
                }`}
              >
                {/* Number */}
                <span className="w-5 shrink-0 font-mono text-[9px] text-white/20">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[#9B111E]/60 group-hover:bg-[#9B111E]/10">
                  <CheckCircle2
                    size={14}
                    className="text-[#9B111E]"
                  />
                </div>

                <span
                  className={`text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white/90 ${
                    isArabic ? "leading-7" : ""
                  }`}
                >
                  {item}
                </span>

                {/* Hover line */}
                <span
                  className={`absolute bottom-0 h-px w-0 bg-[#9B111E] transition-all duration-500 group-hover:w-10 ${
                    isArabic ? "right-0" : "left-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM META
        ================================================= */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              {isArabic ? "نخدم في" : "Serving"}
            </div>

            <div className="mt-1 text-sm font-medium text-white/70">
              Dubai · UAE
            </div>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              {isArabic ? "مجالنا" : "Specialized in"}
            </div>

            <div className="mt-1 text-sm font-medium text-white/70">
              {isArabic
                ? "الخدمات الفنية والصيانة"
                : "Technical & Maintenance Services"}
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* =====================================================
        BOTTOM STATEMENT
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`mt-8 flex flex-col gap-4 border border-white/10 bg-[#0D0D0D] p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 ${
        isArabic ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9B111E]">
          {isArabic ? "معاييرنا" : "Our standard"}
        </span>

        <p
          className={`mt-2 text-sm text-white/55 sm:text-base ${
            isArabic ? "leading-7" : ""
          }`}
        >
          {isArabic
            ? "جودة في التنفيذ، وضوح في التعامل، والتزام في كل مشروع."
            : "Quality in execution. Clarity in communication. Commitment on every project."}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-px w-10 bg-[#9B111E]" />

        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
          EST. DUBAI
        </span>
      </div>
    </motion.div>

  </div>
</section>

{/* =========================================================
    WHY — SIGNATURE TRUST SYSTEM
========================================================= */}
<section
  className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A]"
>
  {/* Background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute right-[-180px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#9B111E]/[0.04] blur-[150px]" />

    <div
      className="absolute inset-0 opacity-[0.018]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "100px 100px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end"
    >
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#9B111E]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs">
            {t.why.label}
          </span>
        </div>

        <h2
          className={`max-w-3xl text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl ${
            isArabic ? "leading-[1.15]" : ""
          }`}
        >
          {t.why.title}
          <br />
          <span className="text-white/25">
            {t.why.titleAccent}
          </span>
        </h2>
      </div>

      {/* Right meta */}
      <div
        className={`flex items-center gap-4 ${
          isArabic ? "lg:flex-row-reverse" : ""
        }`}
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/20">
          02
        </span>

        <div className="h-px w-14 bg-white/10" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/30">
          {isArabic ? "لماذا نحن" : "Why us"}
        </span>
      </div>
    </motion.div>

    {/* =====================================================
        MAIN LAYOUT
    ===================================================== */}
    <div
      className={`grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10 ${
        isArabic ? "lg:[direction:rtl]" : ""
      }`}
    >

      {/* ===================================================
          LEFT — STATEMENT PANEL
      =================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: isArabic ? 35 : -35,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex min-h-[400px] flex-col justify-between overflow-hidden border border-white/10 bg-[#0D0D0D] p-7 sm:min-h-[470px] sm:p-9 lg:p-10"
      >
        {/* Giant background number */}
        <div
          className={`pointer-events-none absolute top-[-20px] font-mono text-[180px] font-bold leading-none text-white/[0.025] sm:text-[230px] ${
            isArabic ? "left-[-15px]" : "right-[-15px]"
          }`}
        >
          02
        </div>

        {/* Top */}
        <div className="relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/25">
              {isArabic ? "ما يميزنا" : "Our advantage"}
            </span>

            <ShieldCheck
              size={18}
              strokeWidth={1.3}
              className="text-[#9B111E]"
            />
          </div>

          <p
            className={`mt-8 max-w-md text-lg leading-8 text-white/65 sm:text-xl sm:leading-9 ${
              isArabic ? "leading-[2]" : ""
            }`}
          >
            {t.why.description}
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="relative z-10 mt-12">
          <div className="mb-5 h-px w-12 bg-[#9B111E]" />

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <span className="transition-colors group-hover:text-[#D48A91]">
              {t.why.work}
            </span>

            <ArrowRight
              size={15}
              className={`transition-transform duration-300 ${
                isArabic
                  ? "group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />
          </a>
        </div>
      </motion.div>

      {/* ===================================================
          RIGHT — TRUST GRID
      =================================================== */}
      <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
        {[
          {
            icon: ShieldCheck,
            title: t.why.features[0].title,
            text: t.why.features[0].text,
          },
          {
            icon: Clock3,
            title: t.why.features[1].title,
            text: t.why.features[1].text,
          },
          {
            icon: ClipboardCheck,
            title: t.why.features[2].title,
            text: t.why.features[2].text,
          },
          {
            icon: Star,
            title: t.why.features[3].title,
            text: t.why.features[3].text,
          },
        ].map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative min-h-[250px] overflow-hidden bg-[#101010] p-6 sm:p-8 lg:min-h-[285px] lg:p-9"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#9B111E]/0 blur-3xl transition-all duration-700 group-hover:bg-[#9B111E]/10" />

              {/* Number */}
              <div
                className={`absolute top-7 font-mono text-[10px] tracking-[0.2em] text-white/15 ${
                  isArabic ? "left-7" : "right-7"
                }`}
              >
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[#9B111E]/60 group-hover:bg-[#9B111E]/10">
                <Icon
                  size={20}
                  strokeWidth={1.3}
                  className="text-[#9B111E] transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative mt-9">
                <h3
                  className={`text-base font-medium text-white sm:text-lg ${
                    isArabic ? "leading-8" : ""
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-3 max-w-sm text-sm leading-6 text-white/35 transition-colors duration-300 group-hover:text-white/55 ${
                    isArabic ? "leading-7" : ""
                  }`}
                >
                  {feature.text}
                </p>
              </div>

              {/* Bottom line */}
              <div
                className={`absolute bottom-0 h-[2px] w-0 bg-[#9B111E] transition-all duration-500 group-hover:w-full ${
                  isArabic ? "right-0" : "left-0"
                }`}
              />

              {/* Corner */}
              <div
                className={`absolute bottom-5 h-5 w-5 border-white/10 opacity-0 transition-all duration-500 group-hover:opacity-100 ${
                  isArabic
                    ? "left-5 border-b border-l"
                    : "right-5 border-b border-r"
                }`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* =====================================================
        BOTTOM TRUST BAR
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`mt-8 grid border border-white/10 bg-[#0D0D0D] sm:grid-cols-3 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      {[
        {
          number: "08",
          label: isArabic ? "خدمات فنية" : "Technical Services",
        },
        {
          number: "UAE",
          label: isArabic ? "دبي والإمارات" : "Dubai, UAE",
        },
        {
          number: "100%",
          label: isArabic ? "التزام بالجودة" : "Quality Commitment",
        },
      ].map((item, index) => (
        <div
          key={item.label}
          className={`flex items-center gap-4 px-6 py-5 sm:px-8 ${
            index !== 0
              ? "border-t border-white/10 sm:border-l sm:border-t-0"
              : ""
          }`}
        >
          <span className="font-mono text-xl font-semibold text-white/80">
            {item.number}
          </span>

          <div className="h-px w-6 bg-[#9B111E]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
            {item.label}
          </span>
        </div>
      ))}
    </motion.div>

  </div>
</section>

      {/* =========================================================
    SERVICES — SIGNATURE GRID
========================================================= */}
<section
  id="services"
  className="relative overflow-hidden border-t border-white/10 bg-[#080808]"
>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#9B111E]/[0.035] blur-[140px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#9B111E]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:text-xs">
            {t.services.label}
          </span>
        </div>

        <h2 className="max-w-4xl text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
          {t.services.title}
          <br />

          <span className="text-white/25">
            {t.services.titleAccent}
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="max-w-lg text-sm leading-7 text-white/40 sm:text-base">
          {t.services.description}
        </p>

        <div className="mt-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
          <span className="h-1.5 w-1.5 rounded-full bg-[#9B111E]" />
          <span>
            {isArabic
              ? "ثمانية تخصصات • خدمة احترافية"
              : "Eight specialties • Professional service"}
          </span>
        </div>
      </motion.div>
    </div>

    {/* =====================================================
    SERVICES GRID
===================================================== */}
<div className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
  {services.map((service, index) => {
    const Icon = service.icon;

    /*
     * Different image for every service.
     * These can later be replaced with real company project photos.
     */
    const serviceImages = [
      "/services/carpentry.png",
      "/services/cleaning.png",
      "/services/ac.png",
      "/services/tiling.png",
      "/services/ceiling.png",
      "/services/plumbing.png",
      "/services/painting.png",
      "/services/electrical.png",
    ];

    return (
      <a
        key={service.number}
        href={service.href}
        className="group relative block min-h-[330px] overflow-hidden border border-white/10 bg-[#101010] sm:min-h-[360px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: index * 0.06,
          }}
          className="absolute inset-0"
        >
          {/* Image */}
          <img
            src={serviceImages[index]}
            alt={isArabic ? service.arTitle : service.title}
            className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-75 group-hover:grayscale-0"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 transition duration-500 group-hover:via-black/45" />

          {/* Red hover wash */}
          <div className="absolute inset-0 bg-[#9B111E]/0 transition duration-500 group-hover:bg-[#9B111E]/10" />

          {/* Top line */}
          <div
            className={`absolute top-0 h-[2px] w-0 bg-[#9B111E] transition-all duration-500 group-hover:w-full ${
              isArabic ? "right-0" : "left-0"
            }`}
          />

          {/* Number */}
          <div
            className={`absolute top-5 text-[10px] font-medium tracking-[0.25em] text-white/45 sm:top-6 ${
              isArabic ? "right-5" : "left-5"
            }`}
          >
            {service.number}
          </div>

          {/* Icon */}
          <div
            className={`absolute top-5 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/25 backdrop-blur-md transition-all duration-500 group-hover:border-[#9B111E]/60 group-hover:bg-[#9B111E]/80 ${
              isArabic ? "left-5" : "right-5"
            }`}
          >
            <Icon
              size={18}
              strokeWidth={1.3}
              className="text-white/70 transition-colors group-hover:text-white"
            />
          </div>

          {/* Content */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div className="mb-2 h-px w-7 bg-[#9B111E] transition-all duration-500 group-hover:w-12" />

            <h3 className="text-[17px] font-medium leading-6 text-white sm:text-lg">
              {isArabic ? service.arTitle : service.title}
            </h3>

            <p className="mt-2 max-h-0 overflow-hidden text-[12px] leading-5 text-white/65 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 sm:text-[13px]">
              {isArabic ? service.arDescription : service.description}
            </p>

            <div className="mt-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-white/70">
              <span>
                {isArabic ? "عرض تفاصيل الخدمة" : "View service details"}
              </span>

              <ArrowRight
                size={13}
                className={`transition-transform duration-300 ${
                  isArabic
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </div>
          </div>
        </motion.div>
      </a>
    );
  })}
</div>

    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row sm:items-center"
    >
      <div>
        <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25 sm:text-[10px]">
          {t.services.need}
        </div>

        <p className="mt-2 max-w-lg text-sm leading-6 text-white/40">
          {t.services.tell}
        </p>
      </div>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit items-center gap-3 bg-[#9B111E] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#6E0F18] hover:shadow-[0_15px_50px_rgba(155,17,30,0.2)] sm:text-xs"
      >
        {t.services.request}

        <ArrowRight
          size={15}
          className={`transition-transform duration-300 ${
            isArabic
              ? "group-hover:-translate-x-1"
              : "group-hover:translate-x-1"
          }`}
        />
      </a>
    </motion.div>
  </div>
</section>

{/* =========================================================
    LICENSE MODAL
========================================================= */}
      <AnimatePresence>
        {licenseOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setLicenseOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-auto rounded-2xl border border-white/10 bg-[#111] p-3 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setLicenseOpen(false)}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:bg-[#9B111E]"
                aria-label={t.license.close}
              >
                <X size={20} />
              </button>

              <div className="mb-3 px-3 py-3">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Official Company License
                </div>

                <div className="mt-1 text-sm text-white/30">
                  Al Asrar Al Thahabeya Technical Services · Dubai, UAE
                </div>
              </div>

              <div className="overflow-hidden rounded-xl bg-white">
                <img
                  src="/golden-secrets-license.jpg"
                  alt="Al Asrar Al Thahabeya Technical Services Official License"
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
    PROJECTS — SIGNATURE SHOWCASE
========================================================= */}
<section
  id="projects"
  className="relative overflow-hidden border-t border-white/10 bg-[#080808]"
>
  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#9B111E]/[0.025] blur-[150px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
    >
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#9B111E]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs">
            {t.projects.label}
          </span>
        </div>

        <h2
          className={`text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl ${
            isArabic ? "leading-[1.15]" : ""
          }`}
        >
          {t.projects.title}
          <br />
          <span className="text-white/25">
            {t.projects.titleAccent}
          </span>
        </h2>
      </div>

      <div
        className={`max-w-md ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9B111E]">
            03
          </span>

          <div className="h-px w-10 bg-white/10" />
        </div>

        <p className="text-sm leading-7 text-white/35 sm:text-base">
          {t.projects.description}
        </p>
      </div>
    </motion.div>

    {/* =====================================================
        SHOWCASE
    ===================================================== */}
    <div className="relative mt-12 sm:mt-16 lg:mt-20">

      <motion.div
        key={activeProject}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.55,
        }}
        className="relative"
      >

        {/* =================================================
            IMAGE
        ================================================= */}
        <div className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#111] sm:aspect-[16/9] lg:aspect-[2/1]">

          <img
            src={projects[activeProject].image}
            alt={
              isArabic
                ? projects[activeProject].arTitle
                : projects[activeProject].title
            }
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.035]"
          />

          {/* Dark overlays */}
          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

          {/* Subtle red atmosphere */}
          <div className="absolute inset-0 bg-[#9B111E]/[0.025] transition duration-700 group-hover:bg-[#9B111E]/[0.06]" />

          {/* =================================================
              CORNER FRAME
          ================================================= */}
          <div className="absolute left-5 top-5 h-16 w-16 border-l border-t border-white/20 sm:left-8 sm:top-8 sm:h-24 sm:w-24" />

          <div className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-white/20 sm:bottom-8 sm:right-8 sm:h-24 sm:w-24" />

          {/* =================================================
              PROJECT COUNTER
          ================================================= */}
          <div
            className={`absolute top-5 sm:top-8 ${
              isArabic
                ? "left-5 sm:left-8"
                : "right-5 sm:right-8"
            }`}
          >
            <div className="flex items-center gap-3 border border-white/15 bg-black/30 px-3 py-2.5 backdrop-blur-md">
              <span className="font-mono text-[10px] text-white/75">
                {String(activeProject + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-5 bg-white/20" />

              <span className="font-mono text-[10px] text-white/30">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* =================================================
              LARGE BACKGROUND NUMBER
          ================================================= */}
          <div
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-mono text-[150px] font-bold leading-none text-white/[0.035] sm:text-[230px] lg:text-[300px] ${
              isArabic
                ? "left-5 sm:left-10"
                : "right-5 sm:right-10"
            }`}
          >
            {String(activeProject + 1).padStart(2, "0")}
          </div>

          {/* =================================================
              PROJECT CONTENT
          ================================================= */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-5 sm:p-9 lg:p-12 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div className="max-w-4xl">

              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#9B111E]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D48A91] sm:text-[10px]">
                  {isArabic
                    ? projects[activeProject].arCategory
                    : projects[activeProject].category}
                </span>
              </div>

              <h3
                className={`text-[30px] font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl ${
                  isArabic ? "leading-[1.15]" : ""
                }`}
              >
                {isArabic
                  ? projects[activeProject].arTitle
                  : projects[activeProject].title}
              </h3>

              <p
                className={`mt-3 max-w-xl text-[12px] leading-6 text-white/45 sm:mt-4 sm:text-sm ${
                  isArabic ? "leading-7" : ""
                }`}
              >
                {t.projects.workDescription}
              </p>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}
          <div
            dir="ltr"
            className={`absolute bottom-5 z-20 flex gap-2 sm:bottom-8 ${
              isArabic
                ? "left-5 sm:left-8"
                : "right-5 sm:right-8"
            }`}
          >
            <button
              type="button"
              onClick={previousProject}
              className="flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 backdrop-blur-md transition duration-300 hover:border-white hover:bg-[#9B111E] sm:h-12 sm:w-12"
              aria-label={t.projects.previous}
            >
              <ChevronLeft
                size={18}
                strokeWidth={1.4}
              />
            </button>

            <button
              type="button"
              onClick={nextProject}
              className="flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 backdrop-blur-md transition duration-300 hover:border-white hover:bg-[#9B111E] sm:h-12 sm:w-12"
              aria-label={t.projects.next}
            >
              <ChevronRight
                size={18}
                strokeWidth={1.4}
              />
            </button>
          </div>
        </div>

        {/* =================================================
            PROJECT META
        ================================================= */}
        <div
          className={`mt-4 flex flex-col gap-4 border-x border-b border-white/10 bg-[#0D0D0D] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
            isArabic ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              {isArabic ? "المشروع الحالي" : "Current project"}
            </span>

            <div className="h-px w-7 bg-[#9B111E]" />

            <span className="text-xs font-medium text-white/65">
              {isArabic
                ? projects[activeProject].arCategory
                : projects[activeProject].category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveProject(index)}
                className={`h-[2px] transition-all duration-300 ${
                  activeProject === index
                    ? "w-10 bg-[#9B111E] sm:w-14"
                    : "w-5 bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
            {String(activeProject + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>
    </div>

    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 sm:mt-10 sm:flex-row sm:items-center sm:justify-between ${
        isArabic ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div>
        <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25 sm:text-[10px]">
          {t.projects.have}
        </div>

        <p
          className={`mt-2 text-sm text-white/40 ${
            isArabic ? "leading-7" : ""
          }`}
        >
          {t.projects.discuss}
        </p>
      </div>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex w-fit items-center gap-3 bg-[#9B111E] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition duration-300 hover:bg-[#6E0F18] sm:px-6 sm:text-xs ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        {t.projects.start}

        <ArrowRight
          size={15}
          className={`transition-transform duration-300 ${
            isArabic
              ? "group-hover:-translate-x-1"
              : "group-hover:translate-x-1"
          }`}
        />
      </a>
    </motion.div>

  </div>
</section>

{/* =========================================================
    CONTACT — SIGNATURE REQUEST
========================================================= */}
<section
  id="contact"
  className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A]"
>
  {/* Background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#9B111E]/[0.035] blur-[150px]" />

    <div
      className="absolute inset-0 opacity-[0.018]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "100px 100px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
    >
      <div className={isArabic ? "text-right" : "text-left"}>

        <div
          className={`mb-5 flex items-center gap-3 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <span className="h-px w-10 bg-[#9B111E]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs">
            {t.contact.label}
          </span>
        </div>

        <h2
          className={`text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl ${
            isArabic ? "leading-[1.2]" : ""
          }`}
        >
          {t.contact.title}
          <br />

          <span className="text-[#9B111E]">
            {t.contact.titleAccent}
          </span>
        </h2>
      </div>

      <div
        className={`max-w-md ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#9B111E]">
            04
          </span>

          <div className="h-px w-10 bg-white/10" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
            {isArabic ? "ابدأ الآن" : "Get started"}
          </span>
        </div>

        <p
          className={`text-sm leading-7 text-white/35 sm:text-base ${
            isArabic ? "leading-[2]" : ""
          }`}
        >
          {t.contact.description}
        </p>
      </div>
    </motion.div>

    {/* =====================================================
        MAIN GRID
    ===================================================== */}
    <div
      className={`grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 ${
        isArabic ? "lg:[direction:rtl]" : ""
      }`}
    >

      {/* ===================================================
          REQUEST FORM
      =================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: isArabic ? 30 : -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden border border-white/10 bg-[#0D0D0D]"
      >
        {/* Form top accent */}
        <div
          className={`absolute top-0 h-[2px] w-24 bg-[#9B111E] ${
            isArabic ? "right-0" : "left-0"
          }`}
        />

        <div className="p-5 sm:p-8 lg:p-10">

          {/* Form header */}
          <div className="mb-8 flex items-start justify-between gap-5 border-b border-white/10 pb-7">
            <div>
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9B111E]">
                {isArabic ? "طلب عرض سعر" : "Quote request"}
              </div>

              <h3
                className={`text-xl font-semibold text-white sm:text-2xl ${
                  isArabic ? "leading-8" : ""
                }`}
              >
                {t.contact.request}
              </h3>

              <p
                className={`mt-2 max-w-xl text-sm leading-6 text-white/35 ${
                  isArabic ? "leading-7" : ""
                }`}
              >
                {t.contact.formDescription}
              </p>
            </div>

            <div className="hidden h-11 w-11 shrink-0 items-center justify-center border border-white/10 sm:flex">
              <span className="font-mono text-xs text-white/20">
                04
              </span>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const data = new FormData(form);

              const name = data.get("name");
              const phoneNumber = data.get("phone");
              const email = data.get("email");
              const service = data.get("service");
              const message = data.get("message");

              const text = `Hello Al Asrar Al Thahabeya Technical Services,

I would like to request a quote.

Name: ${name}
Phone: ${phoneNumber}
Email: ${email}
Service: ${service}

Project Details:
${message}`;

              window.open(
                `https://wa.me/971505847430?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
            className="space-y-5"
          >

            {/* Name + Phone */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40 sm:text-xs">
                  {t.contact.fullName}
                </label>

                <input
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="h-13 w-full border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#9B111E] focus:bg-white/[0.04]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40 sm:text-xs">
                  {t.contact.phone}
                </label>

                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="050 000 0000"
                  className="h-13 w-full border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#9B111E] focus:bg-white/[0.04]"
                />
              </div>

            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40 sm:text-xs">
                {t.contact.email}
              </label>

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="h-13 w-full border border-white/10 bg-white/[0.025] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#9B111E] focus:bg-white/[0.04]"
              />
            </div>

            {/* Service */}
            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40 sm:text-xs">
                {t.contact.service}
              </label>

              <select
                name="service"
                required
                defaultValue=""
                className="h-13 w-full border border-white/10 bg-[#0D0D0D] px-4 text-sm text-white/65 outline-none transition-all duration-300 focus:border-[#9B111E]"
              >
                <option value="" disabled>
                  {t.contact.select}
                </option>

                <option value="Carpentry & Wood Flooring">
                  {isArabic
                    ? "أعمال النجارة والأرضيات الخشبية"
                    : "Carpentry & Wood Flooring"}
                </option>

                <option value="Building Cleaning">
                  {isArabic
                    ? "خدمات تنظيف المباني"
                    : "Building Cleaning"}
                </option>

                <option value="AC, Ventilation & Air Filtration">
                  {isArabic
                    ? "تركيب وصيانة التكييف والتهوية وأنظمة تنقية الهواء"
                    : "AC, Ventilation & Air Filtration"}
                </option>

                <option value="Floor & Wall Tiling">
                  {isArabic
                    ? "أعمال تبليط الأرضيات والجدران"
                    : "Floor & Wall Tiling"}
                </option>

                <option value="False Ceiling & Light Partitions">
                  {isArabic
                    ? "تركيب الأسقف المستعارة والقواطع الخفيفة"
                    : "False Ceiling & Light Partitions"}
                </option>

                <option value="Plumbing & Sanitary">
                  {isArabic
                    ? "أعمال السباكة والتركيبات الصحية"
                    : "Plumbing & Sanitary"}
                </option>

                <option value="Painting Contracting">
                  {isArabic
                    ? "أعمال الدهانات"
                    : "Painting Contracting"}
                </option>

                <option value="Electrical Repair & Maintenance">
                  {isArabic
                    ? "إصلاح وصيانة التركيبات الكهربائية"
                    : "Electrical Repair & Maintenance"}
                </option>

                <option value="Other">
                  {isArabic ? "خدمة أخرى" : "Other"}
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/40 sm:text-xs">
                {t.contact.message}
              </label>

              <textarea
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="w-full resize-none border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[#9B111E] focus:bg-white/[0.04]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`group flex min-h-[54px] w-full items-center justify-center gap-3 bg-[#9B111E] px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#6E0F18] ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              {t.contact.whatsapp}

              <ArrowRight
                size={16}
                className={`transition-transform duration-300 ${
                  isArabic
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </button>

            <p className="text-center text-[10px] leading-5 text-white/20">
              {isArabic
                ? "سيتم فتح طلبك مباشرة في واتساب."
                : "Your request will open directly in WhatsApp."}
            </p>

          </form>
        </div>
      </motion.div>

      {/* ===================================================
          CONTACT INFO
      =================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: isArabic ? -30 : 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#0D0D0D] p-6 sm:p-8 lg:p-9"
      >

        {/* Giant number */}
        <div
          className={`pointer-events-none absolute top-[-20px] font-mono text-[170px] font-bold leading-none text-white/[0.025] sm:text-[220px] ${
            isArabic ? "left-[-15px]" : "right-[-15px]"
          }`}
        >
          04
        </div>

        <div className="relative z-10">

          {/* Company */}
          <div className="border-b border-white/10 pb-7">
            <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9B111E]">
              {isArabic ? "تواصل مباشر" : "Direct contact"}
            </div>

            <h3
              className={`max-w-sm text-[25px] font-semibold leading-[1.12] text-white sm:text-3xl ${
                isArabic ? "leading-[1.45]" : ""
              }`}
            >
              {t.contact.company}
              <br />
              <span className="text-white/30">
                {t.contact.companyTitle2}
              </span>
            </h3>
          </div>

          {/* Contact items */}
          <div className="mt-8 space-y-6">

            {/* Phone */}
            <a
              href="tel:+971505847430"
              className={`group flex gap-4 ${
                isArabic ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#9B111E] transition-all duration-300 group-hover:border-[#9B111E] group-hover:bg-[#9B111E]/10">
                <Phone
                  size={16}
                  strokeWidth={1.4}
                />
              </div>

              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  {t.contact.call}
                </div>

                <div className="mt-1 text-sm text-white/70 transition-colors group-hover:text-white">
                  050 584 7430
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:alasrar@yahoo.com"
              className={`group flex gap-4 ${
                isArabic ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#9B111E] transition-all duration-300 group-hover:border-[#9B111E] group-hover:bg-[#9B111E]/10">
                <Mail
                  size={16}
                  strokeWidth={1.4}
                />
              </div>

              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  Email
                </div>

                <div className="mt-1 break-all text-sm text-white/70 transition-colors group-hover:text-white">
                  alasrar@yahoo.com
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              className={`flex gap-4 ${
                isArabic ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#9B111E]">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                />
              </div>

              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  {t.contact.address}
                </div>

                <div className="mt-1 text-sm leading-6 text-white/70">
                  P.O. Box 252262
                  <br />
                  Dubai, United Arab Emirates
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =================================================
            WHATSAPP CTA
        ================================================= */}
        <div className="relative z-10 mt-10 border-t border-white/10 pt-7">

          <div className="mb-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
            {t.contact.quick}
          </div>

          <a
            href="https://wa.me/971505847430"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 ${
              isArabic ? "flex-row-reverse justify-end text-right" : ""
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-xs font-bold text-white transition-all duration-300 group-hover:border-[#9B111E] group-hover:bg-[#9B111E]">
              WA
            </div>

            <div className="min-w-0">
              <div className="text-sm font-semibold text-white">
                {t.contact.chat}
              </div>

              <div className="mt-1 text-[10px] text-white/25">
                {isArabic
                  ? "متاح خلال ساعات العمل"
                  : "Available during working hours"}
              </div>
            </div>

            <ArrowRight
              size={16}
              className={`shrink-0 text-white/40 transition-transform duration-300 ${
                isArabic
                  ? "group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />
          </a>
        </div>

      </motion.div>
    </div>

    {/* =====================================================
        QUICK INFO BAR
    ===================================================== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`mt-8 grid border border-white/10 bg-[#0D0D0D] sm:grid-cols-3 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >

      <div className="px-6 py-5 sm:px-7">
        <div className="font-mono text-xl font-semibold text-white/70">
          08
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/25">
          {isArabic ? "خدمات متخصصة" : "Specialized services"}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 sm:border-l sm:border-t-0 sm:px-7">
        <div className="font-mono text-xl font-semibold text-white/70">
          7–6
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/25">
          {isArabic ? "ساعات العمل" : "Working hours"}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 sm:border-l sm:border-t-0 sm:px-7">
        <div className="font-mono text-xl font-semibold text-white/70">
          UAE
        </div>

        <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/25">
          {isArabic ? "دبي والإمارات" : "Dubai, UAE"}
        </div>
      </div>

    </motion.div>

  </div>
</section>

{/* =========================================================
    FOOTER — SIGNATURE
========================================================= */}
<footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">

  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#9B111E]/[0.025] blur-[140px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

    {/* =====================================================
        TOP CTA
    ===================================================== */}
    <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">

      <div
        className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${
          isArabic ? "lg:flex-row-reverse" : ""
        }`}
      >

        <div className={isArabic ? "text-right" : "text-left"}>

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#9B111E]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35 sm:text-xs">
              {isArabic ? "هل لديك مشروع؟" : "Have a project?"}
            </span>
          </div>

          <h2
            className={`max-w-3xl text-[38px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl ${
              isArabic ? "leading-[1.25]" : ""
            }`}
          >
            {isArabic
              ? "دعنا نبني شيئًا"
              : "Let’s build something"}
            <br />
            <span className="text-white/25">
              {isArabic ? "يستحق التنفيذ." : "worth building."}
            </span>
          </h2>

        </div>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex w-fit items-center gap-4 bg-[#9B111E] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#6E0F18] sm:px-7 sm:py-4 sm:text-xs ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          {isArabic ? "تواصل معنا" : "Start a conversation"}

          <ArrowRight
            size={16}
            className={`transition-transform duration-300 ${
              isArabic
                ? "group-hover:-translate-x-1"
                : "group-hover:translate-x-1"
            }`}
          />
        </a>

      </div>
    </div>

    {/* =====================================================
        MAIN FOOTER
    ===================================================== */}
    <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr] lg:gap-10">

      {/* ===================================================
          BRAND
      =================================================== */}
      <div className={isArabic ? "text-right" : "text-left"}>

        <div
          className={`flex items-center gap-3 ${
            isArabic ? "flex-row-reverse justify-end" : ""
          }`}
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white">
            <Image
              src="/golden-secrets-logo.jpg"
              alt="Al Asrar Al Thahabeya Technical Services"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.14em] text-white sm:text-sm">
              {t.contact.company}
            </div>

            <div className="mt-1 text-[8px] font-medium tracking-[0.25em] text-white/25">
              {isArabic
                ? "الخدمات الفنية"
                : "TECHNICAL SERVICES"}
            </div>
          </div>
        </div>

        <p
          className={`mt-6 max-w-md text-sm leading-7 text-white/35 ${
            isArabic ? "mr-auto leading-[2]" : ""
          }`}
        >
          {t.footer.description}
        </p>

        {/* Licensed */}
        <div
          className={`mt-7 border-t border-white/[0.07] pt-5 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9B111E]" />

            <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
              {isArabic
                ? "شركة خدمات فنية مرخصة في دبي"
                : "Licensed Technical Services Company in Dubai"}
            </span>
          </div>
        </div>

      </div>

      {/* ===================================================
          CONTACT
      =================================================== */}
      <div className={isArabic ? "text-right" : "text-left"}>

        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-xs">
          {t.footer.contact}
        </div>

        <div className="space-y-4">

          <a
            href={`tel:${phone}`}
            className={`group flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white ${
              isArabic ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <Phone
              size={15}
              strokeWidth={1.4}
              className="text-white/25 transition-colors group-hover:text-[#9B111E]"
            />

            <span>050 584 7430</span>
          </a>

          <a
            href="mailto:alasrar@yahoo.com"
            className={`group flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white ${
              isArabic ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <Mail
              size={15}
              strokeWidth={1.4}
              className="text-white/25 transition-colors group-hover:text-[#9B111E]"
            />

            <span className="break-all">
              alasrar@yahoo.com
            </span>
          </a>

          <div
            className={`flex items-start gap-3 text-sm text-white/40 ${
              isArabic ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <MapPin
              size={15}
              strokeWidth={1.4}
              className="mt-0.5 shrink-0 text-white/25"
            />

            <span className="leading-6">
              P.O. Box 252262
              <br />
              Dubai, UAE
            </span>
          </div>

        </div>
      </div>

      {/* ===================================================
          WORKING HOURS
      =================================================== */}
      <div className={isArabic ? "text-right" : "text-left"}>

        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-xs">
          {t.footer.hours}
        </div>

        <div className="space-y-5">

          <div
            className={`flex items-start gap-3 ${
              isArabic ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <Clock3
              size={15}
              strokeWidth={1.4}
              className="mt-0.5 shrink-0 text-white/25"
            />

            <div>
              <div className="text-sm text-white/60">
                {t.footer.workingDays}
              </div>

              <div className="mt-1 text-xs text-white/30">
                {t.footer.workingTime}
              </div>
            </div>
          </div>

          <div className="border-l border-[#9B111E] pl-3">
            <span className="text-xs text-[#D48A91]">
              {t.footer.closed}
            </span>
          </div>

        </div>
      </div>

      {/* ===================================================
          SOCIAL
      =================================================== */}
      <div className={isArabic ? "text-right" : "text-left"}>

        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-xs">
          {isArabic ? "تابعنا" : "Follow us"}
        </div>

        <div
          className={`flex gap-3 ${
            isArabic ? "justify-end" : ""
          }`}
        >

          {/* Instagram */}
          <a
            href="https://www.instagram.com/engr.zohair.auklla/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group flex h-11 w-11 items-center justify-center border border-white/10 text-white/35 transition-all duration-300 hover:border-[#9B111E] hover:bg-[#9B111E]/10 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@alasrar_althabya?_r=1&_t=ZS-99S6x1qX8L2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="group flex h-11 w-11 items-center justify-center border border-white/10 text-white/35 transition-all duration-300 hover:border-[#9B111E] hover:bg-[#9B111E]/10 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
            >
              <path d="M16.5 3c.3 1.7 1.3 3.1 3 3.8v3.1c-1.3-.1-2.6-.5-3.7-1.2v6.2c0 4.1-2.6 6.1-5.8 6.1-3 0-5.5-2-5.5-5.2 0-3.4 2.7-5.5 6.1-5.5.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.5 0-2.7.9-2.7 2.4 0 1.4 1 2.3 2.3 2.3 1.5 0 2.5-.9 2.5-2.8V3h3.8z" />
            </svg>
          </a>

        </div>

        <p
          className={`mt-5 max-w-xs text-[11px] leading-5 text-white/25 ${
            isArabic ? "mr-auto" : ""
          }`}
        >
          {t.footer.social}
        </p>

      </div>
    </div>

    {/* =====================================================
        BOTTOM BAR
    ===================================================== */}
    <div
      className={`flex flex-col gap-5 border-t border-white/10 py-6 text-[9px] uppercase tracking-[0.16em] text-white/20 sm:flex-row sm:items-center sm:justify-between sm:text-[10px] ${
        isArabic ? "sm:flex-row-reverse" : ""
      }`}
    >

      <span>
        © {new Date().getFullYear()} Al Asrar Al Thahabeya Technical Services
      </span>

      <div
        className={`flex items-center gap-3 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <span className="h-1 w-1 rounded-full bg-[#9B111E]" />

        <span>
          {t.footer.uae}
        </span>

        <span className="text-white/10">•</span>

        <span>
          {isArabic ? "دبي" : "Dubai"}
        </span>
      </div>

    </div>

  </div>
</footer>

{/* =========================================================
    FLOATING WHATSAPP
========================================================= */}
<a
  href="https://wa.me/971505847430"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/20 sm:bottom-8 sm:right-8"
>
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 fill-current transition-transform duration-300 group-hover:rotate-6"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.26-1.64a11.9 11.9 0 0 0 5.76 1.48h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.46-8.44ZM12.06 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.9 9.9 0 1 1 8.36 4.61Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>

  <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-white/10 bg-[#111111] px-3 py-2 text-xs font-medium text-white shadow-xl sm:block sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
    {isArabic
      ? "تواصل معنا عبر واتساب"
      : "Chat on WhatsApp"}
  </span>
</a>
      </motion.div>
    </AnimatePresence>
</main>
);
}