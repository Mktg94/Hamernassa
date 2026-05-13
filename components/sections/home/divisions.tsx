"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/shared/section-header";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Cloudinary fetch delivery — images are pulled from Unsplash and
// served through the user's Cloudinary CDN with auto quality & format.
const CLOUD = "draoyxmtm";
const cfetch = (photoId: string) =>
  `https://res.cloudinary.com/${CLOUD}/image/fetch/q_auto,f_auto,w_1920,h_1080,c_fill,g_center/https://images.unsplash.com/${photoId}?w=1920&q=85`;

const divisions = [
  {
    title: "Pharmaceuticals",
    description:
      "Comprehensive range of prescription medicines, OTC products, and specialty medications from certified international manufacturers.",
    icon: "💊",
    href: "/pharmaceuticals",
    cardGradient: "from-brand-700 to-brand-600",
    overlayGradient: "from-brand-900/85 via-brand-800/50 to-brand-900/75",
    accentColor: "border-brand-400/60",
    // Medicine bottles & blister packs — no people
    image: cfetch("photo-1587854692152-cbe660dbde88"),
  },
  {
    title: "Medical Equipment",
    description:
      "State-of-the-art diagnostic, therapeutic, and monitoring equipment for hospitals, clinics, and healthcare centers.",
    icon: "🏥",
    href: "/medical-equipment",
    cardGradient: "from-emerald-600 to-emerald-500",
    overlayGradient: "from-emerald-900/85 via-emerald-800/50 to-slate-900/75",
    accentColor: "border-emerald-400/60",
    // Stainless steel surgical instruments on a tray — no people
    image: cfetch("photo-1551601651-2a8555f1a136"),
  },
  {
    title: "Biomedical Solutions",
    description:
      "Integrated biomedical equipment maintenance, calibration, and technical support services for optimal performance.",
    icon: "⚙️",
    href: "/medical-equipment",
    cardGradient: "from-slate-700 to-slate-600",
    overlayGradient: "from-slate-900/85 via-slate-800/50 to-slate-900/75",
    accentColor: "border-slate-400/60",
    // Borosilicate lab flasks & glassware — no people
    image: cfetch("photo-1518152006812-edab29b069ac"),
  },
  {
    title: "Healthcare Supply",
    description:
      "Reliable supply chain solutions ensuring timely delivery of essential healthcare products across Ethiopia.",
    icon: "🚚",
    href: "/contact",
    cardGradient: "from-brand-800 to-brand-700",
    overlayGradient: "from-brand-900/85 via-brand-900/50 to-slate-900/75",
    accentColor: "border-brand-300/60",
    // Coloured pill capsules arranged — products, no people
    image: cfetch("photo-1471864190281-a93a3070b6de"),
  },
];

const AUTO_CYCLE_MS = 4000;

export default function Divisions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % divisions.length);
    }, AUTO_CYCLE_MS);
  }, []);

  // Start auto-cycle; pause while a card is hovered
  useEffect(() => {
    if (hoveredIndex === null) {
      startTimer();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hoveredIndex, startTimer]);

  const handleHoverEnter = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(index);
  };

  const handleHoverLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden min-h-[680px]">
      {/* ── Background image slider ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          {divisions.map((div, i) =>
            activeIndex === i ? (
              <motion.div
                key={`bg-${i}`}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
              >
                <Image
                  src={div.image}
                  alt={div.title}
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Static dark base so text is always readable on first paint */}
        <div className="absolute inset-0 bg-slate-900/30" />

        {/* Dynamic colour-tinted overlay that follows activeIndex */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`overlay-${activeIndex}`}
            className={cn(
              "absolute inset-0 bg-linear-to-br",
              divisions[activeIndex].overlayGradient
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        </AnimatePresence>

        {/* Subtle noise / grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Foreground content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header – white text on dark background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Business Divisions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            From pharmaceutical imports to medical equipment supply, we provide
            end-to-end healthcare solutions tailored to Ethiopian healthcare
            providers.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onMouseEnter={() => handleHoverEnter(index)}
              onMouseLeave={handleHoverLeave}
              className={cn(
                "group relative rounded-2xl p-6 lg:p-7 cursor-pointer",
                "bg-white/10 backdrop-blur-md border transition-all duration-400",
                "hover:bg-white/18 hover:-translate-y-2 hover:shadow-2xl",
                activeIndex === index
                  ? cn("border-white/40 shadow-xl scale-[1.02]", division.accentColor)
                  : "border-white/15 shadow-lg"
              )}
            >
              {/* Active indicator top bar */}
              <div
                className={cn(
                  "absolute top-0 left-6 right-6 h-0.5 rounded-full bg-linear-to-r transition-all duration-500",
                  division.cardGradient,
                  activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
              />

              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl bg-linear-to-br flex items-center justify-center text-2xl mb-5",
                  "shadow-lg transition-transform duration-300 group-hover:scale-110",
                  division.cardGradient
                )}
              >
                {division.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2.5">
                {division.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                {division.description}
              </p>

              {/* Link */}
              <Link
                href={division.href}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-semibold text-sm transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Bottom glow on active */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 transition-opacity duration-400 pointer-events-none",
                  division.cardGradient,
                  activeIndex === index ? "opacity-8" : "group-hover:opacity-5"
                )}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Dot / pill indicators ── */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {divisions.map((div, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                startTimer();
              }}
              aria-label={`View ${div.title}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400",
                activeIndex === i
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/35 hover:bg-white/60"
              )}
            />
          ))}
        </div>

        {/* Active division label */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`label-${activeIndex}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-center text-white/50 text-xs font-medium tracking-wider uppercase mt-3"
          >
            {divisions[activeIndex].title}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}