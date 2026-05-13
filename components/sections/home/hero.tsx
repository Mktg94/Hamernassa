"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";

// Local images from public/images — no external API needed
const heroSlides = [
  { src: "/images/chemistry_analyzer.webp",  label: "Chemistry Analyzer" },
  { src: "/images/digital_autoclave.webp",   label: "Digital Autoclave" },
  { src: "/images/portable_centrifuge.webp", label: "Portable Centrifuge" },
  { src: "/images/operating_room.webp",      label: "Operating Room Equipment" },
  { src: "/images/suction2.webp",            label: "Suction Equipment" },
];

const AUTO_MS = 5000;

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx((p) => (p + 1) % heroSlides.length);
    }, AUTO_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background image slider ───────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          {heroSlides.map((slide, i) =>
            activeIdx === i ? (
              <motion.div
                key={`hero-bg-${i}`}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Dark gradient overlay — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/92 via-brand-900/80 to-brand-900/50" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-32 lg:pt-56 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-white">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Trusted Pharmaceutical &amp; Medical Equipment
              <span className="block mt-2 bg-linear-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Import Solutions
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
            >
              Serving healthcare providers across Ethiopia with quality medicines,
              biomedical equipment, and reliable healthcare supply partnerships.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/pharmaceuticals"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-900 font-semibold rounded-xl hover:bg-slate-50 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Become a Partner
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Certified</p>
                  <p className="text-sm font-semibold text-white">EFDA Approved</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Nationwide</p>
                  <p className="text-sm font-semibold text-white">Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Quality</p>
                  <p className="text-sm font-semibold text-white">ISO Standards</p>
                </div>
              </div>
            </motion.div>

            {/* Slide indicator + label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 mt-8"
            >
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIdx(i); startTimer(); }}
                  aria-label={heroSlides[i].label}
                  className={`h-1 rounded-full transition-all duration-400 ${
                    activeIdx === i ? "w-8 bg-emerald-400" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`lbl-${activeIdx}`}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/40 text-xs font-medium tracking-wider uppercase ml-1"
                >
                  {heroSlides[activeIdx].label}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right — Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-500/20 rounded-full blur-xl" />

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold text-white mb-1">150+</p>
                  <p className="text-sm text-slate-300">Healthcare Partners</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold text-white mb-1">500+</p>
                  <p className="text-sm text-slate-300">Products</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-400 mb-1">12</p>
                  <p className="text-sm text-slate-300">Regions Covered</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-sm text-slate-300">Compliance</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-1 bg-linear-to-r from-emerald-400 to-brand-500 rounded-full" />
                <p className="text-sm text-slate-300">Serving Ethiopia Since Day One</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}