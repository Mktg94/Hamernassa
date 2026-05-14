"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/shared/section-header";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { ShieldCheck, Truck, FileCheck, DollarSign, HeadphonesIcon, Handshake } from "lucide-react";

// ─── Cloudinary-fetch slider images ─────────────────────────────────────────
// Images are pulled from Unsplash & served through the Cloudinary CDN with
// automatic quality + format optimisation.
const CLOUD = "draoyxmtm";
const cf = (photoId: string) =>
  `https://res.cloudinary.com/${CLOUD}/image/fetch/q_auto,f_auto,w_1920,h_1080,c_fill,g_center/https://images.unsplash.com/${photoId}?w=1920&q=85`;

const sliderImages = [
  // Diagnostic — ultrasound transducer probe head (object only)
  { id: "photo-1551190822-a9333d879b1f", label: "Diagnostic Equipment" },
  // ICU — IV drip bag & infusion line hanging (no person)
  { id: "photo-1583912267382-49a82d19bd94", label: "ICU Equipment" },
  // Surgical — stainless steel instruments laid out on a tray
  { id: "photo-1551601651-2a8555f1a136", label: "Surgical Devices" },
  // Monitoring — ECG heart rate monitor screen closeup
  { id: "photo-1559757148-5c350d0d3c56", label: "Monitoring Equipment" },
  // Emergency — defibrillator / AED device (object only)
  { id: "photo-1504813184591-01572f98c85f", label: "Emergency Equipment" },
  // Respiratory — mechanical ventilator machine
  { id: "photo-1585771724684-38269d6639fd", label: "Respiratory Equipment" },
  // Laboratory — borosilicate flasks & test tubes (no people)
  { id: "photo-1518152006812-edab29b069ac", label: "Laboratory Equipment" },
  // Pharmaceuticals — coloured capsules / pill tablets closeup
  { id: "photo-1471864190281-a93a3070b6de", label: "Pharmaceuticals – Pills" },
  // Tablets & Syrups — medicine blister packs & amber bottles
  { id: "photo-1587854692152-cbe660dbde88", label: "Tablets & Syrups" },
];

// ─── Feature cards (unchanged content) ──────────────────────────────────────
const features = [
  {
    title: "Quality Assurance",
    description: "Rigorous quality control meeting EFDA and international GMP standards for every product.",
    icon: ShieldCheck,
    accent: "from-emerald-500 to-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Reliable Supply Chain",
    description: "Efficient logistics network ensuring timely delivery across all Ethiopian regions.",
    icon: Truck,
    accent: "from-brand-500 to-brand-400",
    glow: "group-hover:shadow-brand-500/20",
  },
  {
    title: "Regulatory Compliance",
    description: "Full compliance with Ethiopian pharmaceutical regulations and international standards.",
    icon: FileCheck,
    accent: "from-slate-400 to-slate-300",
    glow: "group-hover:shadow-slate-400/20",
  },
  {
    title: "Competitive Pricing",
    description: "Strategic partnerships enabling competitive pricing for healthcare providers.",
    icon: DollarSign,
    accent: "from-amber-500 to-amber-400",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    title: "Technical Support",
    description: "Expert technical assistance and after-sales support for all equipment.",
    icon: HeadphonesIcon,
    accent: "from-violet-500 to-violet-400",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    title: "Trusted Partnerships",
    description: "Long-standing relationships with leading global pharmaceutical manufacturers.",
    icon: Handshake,
    accent: "from-cyan-500 to-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
  },
];

const AUTO_CYCLE_MS = 3500;

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, AUTO_CYCLE_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden min-h-[680px]">

      {/* ── Background image slider ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          {sliderImages.map((img, i) =>
            activeIndex === i ? (
              <motion.div
                key={`bg-${i}`}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <Image
                  src={cf(img.id)}
                  alt={img.label}
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Dark overlay — keeps cards & text readable */}
        <div className="absolute inset-0 bg-slate-900/78" />

        {/* Subtle colour vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 via-transparent to-slate-900/60" />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Foreground content ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          subtitle="Why Choose Us"
          title="The Hamernassa Advantage"
          description="Partner with a company that understands the unique challenges of Ethiopian healthcare delivery."
          light
          className="mb-16"
        />

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group relative bg-white/8 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/25 transition-all duration-300 hover:bg-white/12 hover:-translate-y-1 hover:shadow-xl ${feature.glow}`}
            >
              {/* Gradient icon badge */}
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.accent} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Top-right corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-bl ${feature.accent} opacity-0 group-hover:opacity-10 rounded-bl-3xl rounded-tr-2xl transition-opacity duration-300`} />

              {/* Bottom active bar */}
              <div className={`absolute bottom-0 left-6 right-6 h-px bg-linear-to-r ${feature.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full`} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Slider controls ─────────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center gap-3">

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); startTimer(); }}
                aria-label={`View ${sliderImages[i].label}`}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  activeIndex === i ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/55"
                }`}
              />
            ))}
          </div>

          {/* Active image label */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`label-${activeIndex}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="text-white/40 text-xs font-medium tracking-widest uppercase"
            >
              {sliderImages[activeIndex].label}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}