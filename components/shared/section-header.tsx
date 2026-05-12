"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  light = false,
  className
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span className={cn(
          "inline-block text-sm font-semibold tracking-wider uppercase mb-3",
          light ? "text-emerald-400" : "text-emerald-600"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
        light ? "text-white" : "text-slate-900"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-lg leading-relaxed",
          light ? "text-slate-300" : "text-slate-600"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}