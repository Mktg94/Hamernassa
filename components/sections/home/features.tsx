"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import AnimatedSection from "@/components/shared/animated-section";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { ShieldCheck, Truck, FileCheck, DollarSign, HeadphonesIcon, Handshake } from "lucide-react";

const features = [
  {
    title: "Quality Assurance",
    description: "Rigorous quality control meeting EFDA and international GMP standards for every product.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Reliable Supply Chain",
    description: "Efficient logistics network ensuring timely delivery across all Ethiopian regions.",
    icon: Truck,
    color: "text-brand-700",
    bgColor: "bg-brand-50"
  },
  {
    title: "Regulatory Compliance",
    description: "Full compliance with Ethiopian pharmaceutical regulations and international standards.",
    icon: FileCheck,
    color: "text-slate-700",
    bgColor: "bg-slate-50"
  },
  {
    title: "Competitive Pricing",
    description: "Strategic partnerships enabling competitive pricing for healthcare providers.",
    icon: DollarSign,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  },
  {
    title: "Technical Support",
    description: "Expert technical assistance and after-sales support for all equipment.",
    icon: HeadphonesIcon,
    color: "text-violet-600",
    bgColor: "bg-violet-50"
  },
  {
    title: "Trusted Partnerships",
    description: "Long-standing relationships with leading global pharmaceutical manufacturers.",
    icon: Handshake,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50"
  }
];

export default function Features() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The HPP Advantage"
          description="Partner with a company that understands the unique challenges of Ethiopian healthcare delivery."
          light
          className="mb-16"
        />

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
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:bg-slate-800"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}