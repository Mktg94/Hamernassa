"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-glass",
        hover && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}