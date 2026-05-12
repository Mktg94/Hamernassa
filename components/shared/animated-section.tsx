"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeInUp" | "scaleIn" | "slideInLeft" | "slideInRight";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "fadeInUp"
}: AnimatedSectionProps) {
  const variants = {
    fadeInUp,
    scaleIn: fadeInUp, // Using fadeInUp as it includes scale
    slideInLeft: fadeInUp,
    slideInRight: fadeInUp,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}