"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900" />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Heading */}
          <motion.span
            variants={fadeInUp}
            className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Get Started Today
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Partner with HPP?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Whether you're a hospital, clinic, pharmacy, or healthcare organization,
            we're here to support your mission with quality products and reliable service.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              href="/contact#quote"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-900 font-bold rounded-xl hover:bg-slate-50 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              Become a Partner
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8"
          >
            <a
              href="tel:+251930338803"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">+251 930 33 88 03</span>
            </a>
            <a
              href="mailto:info@Hamernassa.com"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">info@Hamernassa.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}