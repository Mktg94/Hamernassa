"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/shared/section-header";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { manufacturerPartners, certificationPartners } from "@/data/partners";

/** Renders a partner logo or falls back to styled initials */
function PartnerLogo({
  name,
  logo,
  size = "md",
}: {
  name: string;
  logo?: string | null;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-10 w-28" : "h-12 w-36";

  if (logo) {
    return (
      <div className={`relative ${dim} flex items-center justify-center`}>
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>
    );
  }

  // Fallback — styled initials badge
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
        <span className="text-brand-800 font-bold text-base">
          {name.substring(0, 2).toUpperCase()}
        </span>
      </div>
      <p className="text-xs font-semibold text-slate-600 text-center leading-tight max-w-[80px]">
        {name}
      </p>
    </div>
  );
}

export default function PartnersPreview() {
  // Show top 6 manufacturers + all certifications/regulatory
  const featured = [...manufacturerPartners.slice(0, 6), ...certificationPartners];

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Network"
          title="Trusted by Industry Leaders"
          description="We partner with the world's leading pharmaceutical manufacturers and certification bodies."
          className="mb-16"
        />

        {/* Partner logo grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {featured.map((partner) => (
            <motion.div
              key={partner.id}
              variants={fadeInUp}
              className="group relative bg-linear-to-br from-slate-50 to-white rounded-xl p-5 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[110px]"
            >
              <PartnerLogo name={partner.name} logo={partner.logo} />

              {/* Partner name shown below logo only when logo exists */}
              {partner.logo && (
                <p className="mt-2.5 text-xs font-semibold text-slate-500 text-center">
                  {partner.name}
                </p>
              )}

              {/* Hover shimmer */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
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
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}