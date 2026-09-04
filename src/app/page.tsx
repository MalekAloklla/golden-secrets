"use client";

import Image from "next/image";
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
      follow: "Follow Us",
      description:
        "Professional technical services and property maintenance solutions in Dubai, UAE.",
      social:
        "Follow Al Asrar Al Thahabeya Technical Services on Instagram & TikTok.",
      uae: "Dubai · United Arab Emirates",
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
      follow: "تابعنا",
      description:
        "خدمات فنية احترافية وحلول متكاملة لصيانة العقارات في دبي، الإمارات.",
      social:
        "تابع الأسرار الذهبية للخدمات الفنية على إنستغرام وتيك توك.",
      uae: "دبي · الإمارات العربية المتحدة",
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

            <a
              href="#license"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {t.nav.license}
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
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center overflow-hidden md:min-h-screen"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />

        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#9B111E]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-24 lg:px-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#9B111E]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                {t.hero.location}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[42px] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl"
            >
              {t.hero.title}
              <br />
              <span className="text-white/50">{t.hero.titleAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-[15px] leading-6 text-white/60 sm:mt-7 sm:text-lg sm:leading-7"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row"
            >
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-3 bg-[#9B111E] px-6 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-[#6E0F18] sm:h-auto sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-wider"
              >
                {t.hero.request}
                <ArrowRight size={17} />
              </a>

              <a
                href="#services"
                className="inline-flex h-12 w-full items-center justify-center gap-3 border border-white/15 bg-black/20 px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/30 hover:bg-white/5 sm:h-auto sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-wider"
              >
                {t.hero.explore}
                <ChevronDown size={17} />
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid max-w-3xl grid-cols-2 border-t border-white/15 pt-6 sm:mt-24 sm:grid-cols-4 sm:pt-7"
          >
            <div className="border-r border-white/10 pr-5">
              <div className="text-2xl font-semibold">08</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                {t.hero.services}
              </div>
            </div>

            <div className="border-r border-white/10 px-5">
              <div className="text-2xl font-semibold">UAE</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                {t.hero.based}
              </div>
            </div>

            <div className="border-r border-white/10 px-5">
              <div className="text-2xl font-semibold">24/7</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                {t.hero.support}
              </div>
            </div>

            <div className="pl-5">
              <div className="text-2xl font-semibold">100%</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                {t.hero.commitment}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
    ABOUT
========================================================= */}
<section
  id="about"
  className="border-t border-white/10 bg-[#080808]"
>
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
    <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
      
      {/* Heading */}
      <div>
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="h-px w-7 bg-[#9B111E] sm:w-8" />

          <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
            {t.about.label}
          </span>
        </div>

        <h2 className="text-[36px] font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {t.about.title}
          <br />
          <span className="text-white/40">
            {t.about.titleAccent}.
          </span>
        </h2>
      </div>

      {/* Content */}
      <div>
        <p className="text-[16px] leading-7 text-white/65 sm:text-lg sm:leading-8">
          {t.about.description}
        </p>

        <p className="mt-5 text-sm leading-7 text-white/40 sm:mt-6 sm:text-base">
          {t.about.description2}
        </p>

        {/* Features */}
        <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-4">
          {t.about.features.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-[#9B111E]"
              />

              <span className="text-sm leading-6 text-white/65">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* =========================================================
    WHY GOLDEN SECRETS
========================================================= */}
<section className="border-t border-white/10 bg-[#080808]">
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
    <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
      
      {/* Intro */}
      <div className="lg:sticky lg:top-32">
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="h-px w-7 bg-[#9B111E] sm:w-8" />

          <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
            {t.why.label}
          </span>
        </div>

        <h2 className="text-[36px] font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {t.why.title}
          <br />
          <span className="text-white/35">
            {t.why.titleAccent}
          </span>
        </h2>

        <p className="mt-6 max-w-md text-sm leading-7 text-white/40 sm:mt-7">
          {t.why.description}
        </p>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:text-[#9B111E] sm:mt-8 sm:text-xs sm:tracking-[0.18em]"
        >
          {t.why.work}
          <ArrowRight size={15} />
        </a>
      </div>

      {/* Features */}
      <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group min-h-[210px] border-b border-r border-white/10 p-6 transition hover:bg-white/[0.025] sm:min-h-[240px] sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/10 transition group-hover:border-[#9B111E]/50">
                <Icon
                  size={20}
                  strokeWidth={1.4}
                  className="text-[#9B111E]"
                />
              </div>

              <h3 className="mt-7 text-base font-medium sm:mt-10 sm:text-lg">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40 sm:mt-4">
                {feature.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* =========================================================
    SERVICES
========================================================= */}
<section
  id="services"
  className="border-t border-white/10 bg-[#0C0C0C]"
>
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

    {/* Header */}
    <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-10">
      <div>
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="h-px w-7 bg-[#9B111E] sm:w-8" />

          <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
            {t.services.label}
          </span>
        </div>

        <h2 className="max-w-3xl text-[36px] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
          {t.services.title}
          <br />
          <span className="text-white/30">
            {t.services.titleAccent}
          </span>
        </h2>
      </div>

      <p className="max-w-xl text-sm leading-7 text-white/40">
        {t.services.description}
      </p>
    </div>

    {/* Services List */}
    <div className="mt-12 border-t border-white/10 sm:mt-16 lg:mt-20">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.04,
            }}
            className="group relative grid min-h-[155px] grid-cols-[42px_1fr_48px] items-center gap-3 overflow-hidden border-b border-white/10 px-1 transition duration-500 sm:grid-cols-[70px_1fr_auto] sm:gap-6 sm:px-4 lg:grid-cols-[120px_1fr_80px] lg:gap-8 lg:px-5"
          >

            {/* Hover Background */}
            <div className="absolute inset-0 -z-0 -translate-x-[101%] bg-[#9B111E] transition-transform duration-500 ease-out group-hover:translate-x-0" />

            {/* Number */}
            <div className="relative z-10">
              <span className="text-xs tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-white/60 sm:text-sm sm:tracking-[0.2em]">
                {service.number}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 py-7 sm:py-8">
              <h3 className="text-[16px] font-medium leading-6 transition-colors duration-300 group-hover:text-white sm:text-2xl sm:leading-normal lg:text-3xl">
                {isArabic ? service.arTitle : service.title}
              </h3>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-white/35 transition-colors duration-300 group-hover:text-white/75 sm:mt-3 sm:text-sm">
                {isArabic
                  ? service.arDescription
                  : service.description}
              </p>
            </div>

            {/* Icon */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10 sm:h-12 sm:w-12">
              <Icon
                size={19}
                strokeWidth={1.4}
                className="text-white/35 transition-colors duration-300 group-hover:text-white sm:size-5"
              />
            </div>

            {/* Desktop Arrow */}
            <div
              className={`absolute top-1/2 hidden -translate-y-1/2 lg:block ${
                isArabic ? "left-5" : "right-5"
              }`}
              dir="ltr"
            >
              <ArrowRight
                size={20}
                className={`opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                  isArabic
                    ? "translate-x-2"
                    : "-translate-x-2"
                }`}
              />
            </div>
          </motion.a>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-7 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
      <div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/25 sm:text-xs sm:tracking-[0.2em]">
          {t.services.need}
        </span>

        <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
          {t.services.tell}
        </p>
      </div>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:text-[#9B111E] sm:text-xs sm:tracking-[0.18em]"
      >
        {t.services.request}
        <ArrowRight size={16} />
      </a>
    </div>
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
    PROJECTS
========================================================= */}
<section
  id="projects"
  className="border-t border-white/10 bg-[#080808]"
>
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">

    {/* Header */}
    <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end md:gap-8">
      <div>
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span className="h-px w-7 bg-[#9B111E] sm:w-8" />

          <span className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
            {t.projects.label}
          </span>
        </div>

        <h2 className="text-[36px] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
          {t.projects.title}
          <br />
          <span className="text-white/30">
            {t.projects.titleAccent}
          </span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-7 text-white/40">
        {t.projects.description}
      </p>
    </div>

    {/* Slider */}
    <div className="relative mt-12 sm:mt-16 lg:mt-20">
      <motion.div
        key={activeProject}
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="group relative aspect-[4/5] min-h-[480px] overflow-hidden bg-[#111] sm:aspect-[16/9] sm:min-h-[560px]"
      >
        <img
          src={projects[activeProject].image}
          alt={projects[activeProject].title}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.02]"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

        {/* Number */}
        <div className="absolute left-5 top-5 sm:left-10 sm:top-10">
          <span className="text-[10px] tracking-[0.25em] text-white/65 sm:text-xs sm:tracking-[0.3em]">
            {String(activeProject + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-5 sm:p-10 lg:p-12 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div className="max-w-3xl">
            <div className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#D1A1A6] sm:mb-3 sm:text-[10px] sm:tracking-[0.3em]">
              {isArabic
                ? projects[activeProject].arCategory
                : projects[activeProject].category}
            </div>

            <h3 className="text-[28px] font-medium leading-tight tracking-tight sm:text-5xl">
              {isArabic
                ? projects[activeProject].arTitle
                : projects[activeProject].title}
            </h3>

            <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/55 sm:mt-4 sm:text-sm">
              {t.projects.workDescription}
            </p>
          </div>
        </div>

        {/* Arrows */}
        <div
          dir="ltr"
          className={`absolute bottom-5 z-20 flex gap-2 sm:bottom-10 ${
            isArabic
              ? "left-5 sm:left-10"
              : "right-5 sm:right-10"
          }`}
        >
          <button
            type="button"
            onClick={previousProject}
            className="flex h-11 w-11 items-center justify-center border border-white/25 bg-black/30 backdrop-blur-sm transition duration-300 hover:border-white hover:bg-[#9B111E] sm:h-12 sm:w-12"
            aria-label={t.projects.previous}
          >
            <ChevronLeft
              size={19}
              strokeWidth={1.5}
            />
          </button>

          <button
            type="button"
            onClick={nextProject}
            className="flex h-11 w-11 items-center justify-center border border-white/25 bg-black/30 backdrop-blur-sm transition duration-300 hover:border-white hover:bg-[#9B111E] sm:h-12 sm:w-12"
            aria-label={t.projects.next}
          >
            <ChevronRight
              size={19}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </motion.div>

      {/* Indicators */}
      <div className="mt-4 flex items-center justify-between gap-4 sm:mt-5">
        <div className="flex gap-1.5 sm:gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveProject(index)}
              className={`h-1 transition-all duration-300 ${
                activeProject === index
                  ? "w-9 bg-[#9B111E] sm:w-12"
                  : "w-5 bg-white/15 hover:bg-white/30 sm:w-6"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <span className="text-[9px] uppercase tracking-[0.18em] text-white/25 sm:text-[10px] sm:tracking-[0.2em]">
          {activeProject + 1} — {projects.length}
        </span>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:mt-10 sm:flex-row sm:items-center sm:pt-8">
      <div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/25 sm:text-xs sm:tracking-[0.2em]">
          {t.projects.have}
        </span>

        <p className="mt-2 text-sm leading-6 text-white/45">
          {t.projects.discuss}
        </p>
      </div>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#9B111E] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition hover:bg-[#6E0F18] sm:px-6 sm:text-xs sm:tracking-[0.15em]"
      >
        {t.projects.start}
        <ArrowRight size={15} />
      </a>
    </div>
  </div>
</section>

{/* =========================================================
    LICENSE / TRUST
========================================================= */}
<section
  id="license"
  className="border-y border-white/10 bg-[#0B0B0B]"
>
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
    <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr]">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#9B111E]/30 bg-[#9B111E]/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#D48A91] sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
          <ShieldCheck size={14} />
          {t.license.badge}
        </div>

        {/* Title */}
        <h2 className="max-w-xl text-[36px] font-semibold leading-[1.08] text-white sm:text-5xl">
          {t.license.title}
          <span className="block text-white/35">
            {t.license.titleAccent}
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/55 sm:mt-6 sm:text-base sm:leading-8">
          {t.license.description}
        </p>

        {/* Stats */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="text-2xl font-semibold text-white">
              08
            </div>

            <div className="mt-1 text-[11px] leading-5 text-white/40 sm:text-xs">
              {t.license.activities}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="text-2xl font-semibold text-white">
              100%
            </div>

            <div className="mt-1 text-[11px] leading-5 text-white/40 sm:text-xs">
              {t.license.active}
            </div>
          </div>

          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:col-span-1 sm:p-5">
            <div className="text-2xl font-semibold text-white">
              Dubai
            </div>

            <div className="mt-1 text-[11px] leading-5 text-white/40 sm:text-xs">
              {t.license.uae}
            </div>
          </div>

        </div>

        {/* Registered Business */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#9B111E]/20 bg-[#9B111E]/5 p-4 sm:mt-8 sm:gap-4 sm:p-5">

          <div className="shrink-0 rounded-xl bg-[#9B111E]/15 p-2.5 text-[#D48A91] sm:p-3">
            <CheckCircle2 size={20} />
          </div>

          <div className="min-w-0">
            <div className="text-sm font-semibold text-white sm:text-base">
              {t.license.business}
            </div>

            <p className="mt-1 text-[13px] leading-6 text-white/45 sm:text-sm">
              {t.license.registered}
            </p>
          </div>

        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute -inset-4 rounded-[1.5rem] bg-[#9B111E]/10 blur-3xl sm:-inset-6 sm:rounded-[2rem]" />

        {/* License Card */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111] p-2.5 shadow-2xl sm:rounded-[2rem] sm:p-3">

          {/* Card Header */}
          <div className="flex items-center justify-between gap-4 px-2.5 py-3 sm:px-3 sm:py-3">

            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 sm:text-xs sm:tracking-[0.18em]">
                {t.license.company}
              </div>

              <div className="mt-1 truncate text-xs text-white/30 sm:text-sm">
                Al Asrar Al Thahabeya Technical Services
              </div>
            </div>

            <ShieldCheck
              className="shrink-0 text-[#9B111E]"
              size={22}
            />
          </div>

          {/* License Image */}
          <button
            type="button"
            onClick={() => setLicenseOpen(true)}
            className="group relative block w-full overflow-hidden rounded-xl bg-white text-left sm:rounded-2xl"
            aria-label={t.license.view}
          >
            <img
              src="/golden-secrets-license.jpg"
              alt="Al Asrar Al Thahabeya Technical Services License"
              className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.015]"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/35">
              <div className="flex translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.13em] opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.15em]">
                <Maximize2 size={14} />
                {t.license.view}
              </div>
            </div>
          </button>

          {/* Card Footer */}
          <div className="flex items-center justify-between gap-4 px-2.5 py-3.5 sm:px-3 sm:py-4">

            <span className="text-[11px] text-white/35 sm:text-xs">
              Dubai, UAE
            </span>

            <button
              type="button"
              onClick={() => setLicenseOpen(true)}
              className="text-[11px] font-medium text-[#D48A91] transition hover:text-white sm:text-xs"
            >
              {t.license.view}
            </button>

          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

{/* =========================================================
    CONTACT / REQUEST A QUOTE
========================================================= */}
<section
  id="contact"
  className="border-t border-white/10 bg-[#0a0a0a]"
>
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

    {/* Heading */}
    <div className="mb-10 max-w-3xl sm:mb-14">
      <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9B111E] sm:text-xs sm:tracking-[0.22em]">
        <span className="h-px w-7 bg-[#9B111E] sm:w-8" />
        {t.contact.label}
      </div>

      <h2 className="text-[36px] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
        {t.contact.title}
        <span className="text-[#9B111E]">
          {" "}
          {t.contact.titleAccent}
        </span>
      </h2>

      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/45 sm:mt-5 sm:text-base">
        {t.contact.description}
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">

      {/* =====================================================
          FORM
      ===================================================== */}
      <div className="border border-white/10 bg-white/[0.02] p-5 sm:p-8">

        <div className="mb-7 sm:mb-8">
          <h3 className="text-xl font-semibold text-white">
            {t.contact.request}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/40">
            {t.contact.formDescription}
          </p>
        </div>

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
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-xs sm:tracking-[0.15em]">
                {t.contact.fullName}
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder={t.contact.namePlaceholder}
                className="h-12 w-full border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#9B111E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-xs sm:tracking-[0.15em]">
                {t.contact.phone}
              </label>

              <input
                name="phone"
                type="tel"
                required
                placeholder="050 000 0000"
                className="h-12 w-full border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#9B111E]"
              />
            </div>

          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-xs sm:tracking-[0.15em]">
              {t.contact.email}
            </label>

            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="h-12 w-full border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#9B111E]"
            />
          </div>

          {/* Service */}
          <div>
            <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-xs sm:tracking-[0.15em]">
              {t.contact.service}
            </label>

            <select
              name="service"
              required
              defaultValue=""
              className="h-12 w-full border border-white/10 bg-[#0d0d0d] px-4 text-sm text-white/70 outline-none transition focus:border-[#9B111E]"
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
            <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-xs sm:tracking-[0.15em]">
              {t.contact.message}
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              className="w-full resize-none border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#9B111E]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group flex min-h-[52px] w-full items-center justify-center gap-3 bg-[#9B111E] px-5 text-[13px] font-semibold text-white transition hover:bg-[#7f0e19] sm:px-6 sm:text-sm"
          >
            {t.contact.whatsapp}

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="text-center text-[10px] leading-5 text-white/25 sm:text-[11px]">
            {isArabic
              ? "سيتم فتح طلبك مباشرة في واتساب."
              : "Your request will open directly in WhatsApp."}
          </p>

        </form>
      </div>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}
      <div className="flex flex-col justify-between border border-white/10 bg-[#0d0d0d] p-5 sm:p-8">

        <div>

          {/* Company */}
          <div className="mb-8 sm:mb-10">
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35 sm:text-xs sm:tracking-[0.2em]">
              {t.contact.company}
            </div>

            <h3 className="text-[24px] font-semibold leading-[1.15] text-white sm:text-2xl">
              {t.contact.company}
              <br />
              {t.contact.companyTitle2}
            </h3>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">

            {/* Phone */}
            <a
              href="tel:+971505847430"
              className="group flex gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#9B111E] transition group-hover:border-[#9B111E]">
                <Phone className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                  {t.contact.call}
                </div>

                <div className="mt-1 text-sm text-white/75 transition group-hover:text-white">
                  050 584 7430
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:alasrar@yahoo.com"
              className="group flex gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#9B111E] transition group-hover:border-[#9B111E]">
                <Mail className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                  Email
                </div>

                <div className="mt-1 break-all text-sm text-white/75 transition group-hover:text-white">
                  alasrar@yahoo.com
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-[#9B111E]">
                <MapPin className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                  {t.contact.address}
                </div>

                <div className="mt-1 text-sm leading-6 text-white/75">
                  P.O. Box 252262
                  <br />
                  Dubai, United Arab Emirates
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 border-t border-white/10 pt-7 sm:mt-12 sm:pt-8">

          <div className="mb-4 text-[10px] uppercase tracking-[0.16em] text-white/30 sm:text-xs sm:tracking-[0.18em]">
            {t.contact.quick}
          </div>

          <a
            href="https://wa.me/971505847430"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex max-w-full items-center gap-3 text-sm font-semibold text-white"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 transition group-hover:border-[#9B111E] group-hover:bg-[#9B111E]">
              <span className="text-xs font-bold">
                WA
              </span>
            </span>

            <span className="min-w-0">
              {t.contact.chat}
            </span>

            <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
          </a>

        </div>

      </div>
    </div>
  </div>
</section>

{/* =========================================================
    FOOTER
========================================================= */}
<footer className="border-t border-white/10 bg-[#050505]">
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">

    <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8 lg:gap-12">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white">
            <Image
              src="/golden-secrets-logo.jpg"
              alt="Golden Secrets"
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>

          <div className="min-w-0">
            <div className="text-xs font-semibold tracking-[0.16em] sm:tracking-[0.18em]">
              {t.contact.company}
            </div>

            <div className="mt-1 text-[8px] tracking-[0.22em] text-white/30 sm:tracking-[0.25em]">
              {isArabic ? "الخدمات الفنية" : "TECHNICAL SERVICES"}
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-sm text-[13px] leading-6 text-white/35 sm:mt-6 sm:text-sm">
          {t.footer.description}
        </p>
      </div>

      {/* Contact */}
      <div>
        <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
          {t.footer.contact}
        </div>

        <div className="space-y-4 text-[13px] text-white/40 sm:text-sm">

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 transition hover:text-white"
          >
            <Phone size={15} className="shrink-0" />
            <span>050 584 7430</span>
          </a>

          <a
            href="mailto:alasrar@yahoo.com"
            className="flex min-w-0 items-center gap-3 transition hover:text-white"
          >
            <Mail size={15} className="shrink-0" />
            <span className="break-all">alasrar@yahoo.com</span>
          </a>

          <div className="flex items-start gap-3">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <span className="leading-6">
              P.O. Box 252262
              <br className="sm:hidden" />
              <span className="sm:inline">, </span>
              Dubai, UAE
            </span>
          </div>

        </div>
      </div>

      {/* Social */}
      <div>
        <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
          {isArabic ? "تابعنا" : "Follow Us"}
        </div>

        <div className="flex gap-3">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/engr.zohair.auklla/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-white/40 transition duration-300 hover:border-[#9B111E] hover:bg-[#9B111E]/10 hover:text-white"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
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
            className="group flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 text-white/40 transition duration-300 hover:border-[#9B111E] hover:bg-[#9B111E]/10 hover:text-white"
            aria-label="TikTok"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
            >
              <path d="M16.5 3c.3 1.7 1.3 3.1 3 3.8v3.1c-1.3-.1-2.6-.5-3.7-1.2v6.2c0 4.1-2.6 6.1-5.8 6.1-3 0-5.5-2-5.5-5.2 0-3.4 2.7-5.5 6.1-5.5.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.5 0-2.7.9-2.7 2.4 0 1.4 1 2.3 2.3 2.3 1.5 0 2.5-.9 2.5-2.8V3h3.8z" />
            </svg>
          </a>

        </div>

        <p className="mt-4 max-w-xs text-[11px] leading-5 text-white/25 sm:text-xs">
          {t.footer.social}
        </p>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.15em] text-white/20 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-6 sm:text-[10px] sm:tracking-[0.18em]">
      <span>
        © {new Date().getFullYear()} Al Asrar Al Thahabeya Technical Services
      </span>

      <span>{t.footer.uae}</span>
    </div>

  </div>
</footer>

{/* Floating WhatsApp Button */}
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
    {isArabic ? "تواصل معنا عبر واتساب" : "Chat on WhatsApp"}
  </span>
</a>
      </motion.div>
    </AnimatePresence>
</main>
);
}