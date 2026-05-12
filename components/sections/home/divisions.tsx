"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import AnimatedSection from "@/components/shared/animated-section";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const divisions = [
  {
    title: "Pharmaceuticals",
    description: "Comprehensive range of prescription medicines, OTC products, and specialty medications from certified international manufacturers.",
    icon: "💊",
    href: "/pharmaceuticals",
    color: "from-brand-700 to-brand-600"
  },
  {
    title: "Medical Equipment",
    description: "State-of-the-art diagnostic, therapeutic, and monitoring equipment for hospitals, clinics, and healthcare centers.",
    icon: "🏥",
    href: "/medical-equipment",
    color: "from-emerald-600 to-emerald-500"
  },
  {
    title: "Biomedical Solutions",
    description: "Integrated biomedical equipment maintenance, calibration, and technical support services for optimal performance.",
    icon: "⚙️",
    href: "/medical-equipment",
    color: "from-slate-700 to-slate-600"
  },
  {
    title: "Healthcare Supply",
    description: "Reliable supply chain solutions ensuring timely delivery of essential healthcare products across Ethiopia.",
    icon: "🚚",
    href: "/contact",
    color: "from-brand-800 to-brand-700"
  }
];

export default function Divisions() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 58, 138, 0.05) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Business Divisions"
          title="Comprehensive Healthcare Solutions"
          description="From pharmaceutical imports to medical equipment supply, we provide end-to-end healthcare solutions tailored to Ethiopian healthcare providers."
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-transparent shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1"
            >
              {/* Gradient Accent */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${division.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                {division.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {division.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {division.description}
              </p>

              {/* Link */}
              <Link
                href={division.href}
                className="inline-flex items-center gap-2 text-brand-700 font-semibold text-sm group-hover:text-emerald-600 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Bottom Border Accent */}
              <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${division.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}