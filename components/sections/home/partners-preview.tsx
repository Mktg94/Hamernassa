"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import AnimatedSection from "@/components/shared/animated-section";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { manufacturerPartners, certificationPartners } from "@/data/partners";

export default function PartnersPreview() {
  const allPartners = [...manufacturerPartners.slice(0, 6), ...certificationPartners.slice(0, 3)];

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Network"
          title="Trusted by Industry Leaders"
          description="We partner with the world's leading pharmaceutical manufacturers and certification bodies."
          className="mb-16"
        />

        {/* Partner Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {allPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Logo Placeholder */}
              <div className="h-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-brand-100 flex items-center justify-center mb-2">
                    <span className="text-brand-800 font-bold text-lg">
                      {partner.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{partner.name}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/partners"
            className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-emerald-600 transition-colors group"
          >
            View All Partners
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}