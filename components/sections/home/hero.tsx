"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-float delay-3000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-dots opacity-30" />

        {/* Floating Particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-float delay-1000" />
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-brand-300/30 rounded-full animate-float delay-2000" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-float delay-500" />
        <div className="absolute top-60 right-1/3 w-4 h-4 bg-emerald-300/20 rounded-full animate-float delay-1500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">Ethiopia&apos;s Trusted Healthcare Partner</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Trusted Pharmaceutical & Medical Equipment
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
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Glassmorphic Card */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-500/20 rounded-full blur-xl" />

              {/* Stats Grid */}
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

              {/* Bottom Decoration */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-1 bg-linear-to-r from-emerald-400 to-brand-500 rounded-full" />
                <p className="text-sm text-slate-300">Serving Ethiopia Since Day One</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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