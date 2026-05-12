"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function AboutPreview() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative bg-gradient-to-br from-brand-100 to-emerald-50 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-brand-800 to-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-white font-bold text-4xl">H</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">HPP</h3>
                  <p className="text-slate-600">Pharmaceuticals PLC</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-200/50 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-200/50 rounded-full blur-xl" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="text-sm text-slate-500">Compliance Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-emerald-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Story
            </motion.span>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building a Healthier Ethiopia
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Hamernassa Pharmaceuticals began its journey with three dedicated professionals
                and a single product line. Today, the company continues expanding its healthcare
                solutions portfolio with a vision to become one of East Africa's leading
                pharmaceutical and medical equipment suppliers.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Our commitment to quality, reliability, and customer service has earned us
                the trust of healthcare providers across Ethiopia. We source our products from
                certified international manufacturers and maintain rigorous quality standards
                at every step of our supply chain.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <p className="text-3xl font-bold text-brand-800 mb-1">150+</p>
                  <p className="text-sm text-slate-600">Healthcare Partners</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-800 mb-1">500+</p>
                  <p className="text-sm text-slate-600">Products Available</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-emerald-600 transition-colors group"
              >
                Learn More About Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}