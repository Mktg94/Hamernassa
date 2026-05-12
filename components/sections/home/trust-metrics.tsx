"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/shared/animated-counter";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { trustMetrics } from "@/lib/site";

const stats = [
  { value: 150, suffix: "+", label: "Healthcare Partners", icon: "🏥" },
  { value: 500, suffix: "+", label: "Product Categories", icon: "💊" },
  { value: 12, suffix: "", label: "Regions Coverage", icon: "🗺️" },
  { value: 100, suffix: "%", label: "Compliance Standards", icon: "✓" },
];

export default function TrustMetrics() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-700 to-emerald-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl lg:text-4xl font-bold text-slate-900">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} textClassName="text-3xl lg:text-4xl font-bold" />
                </span>
              </div>

              {/* Label */}
              <p className="text-sm lg:text-base text-slate-600 font-medium">
                {stat.label}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-3 right-3 w-8 h-8 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}