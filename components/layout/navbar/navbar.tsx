"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/site";
import QuoteModal from "@/components/shared/quote-modal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const hasDropdown = (label: string) =>
    label === "Products" || label === "Resources";

  const openQuote = () => {
    setIsMobileMenuOpen(false);
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-100 py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow overflow-hidden">
                <Image
                  src="/images/hlogo.svg"
                  alt="Hamernassa Logo"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                />
              </div>
              <div className="hidden sm:block leading-tight">
                <span className={cn(
                  "block font-bold text-2xl tracking-tight transition-colors",
                  isScrolled ? "text-slate-900" : "text-white"
                )}>
                  Hamernassa
                </span>
                <span className={cn(
                  "block text-sm font-medium transition-colors",
                  isScrolled ? "text-slate-400" : "text-white/70"
                )}>
                  Pharmaceuticals plc
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation Links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navigationLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasDropdown(link.label) && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap",
                      isScrolled
                        ? "text-slate-600 hover:bg-slate-100 hover:text-brand-700"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {link.label}
                    {hasDropdown(link.label) && (
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={openQuote}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-linear-to-r from-brand-800 to-brand-700 text-white shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.97] transition-all duration-150 whitespace-nowrap"
              >
                Request Quote
              </button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled ? "hover:bg-slate-100 text-slate-700" : "hover:bg-white/10 text-white"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl z-50 lg:hidden overflow-y-auto flex flex-col"
            >
              <div className="p-5 flex-1">
                {/* Panel header */}
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-14 h-14 relative rounded-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/hlogo.svg"
                        alt="Hamernassa Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="leading-tight">
                      <span className="block font-bold text-lg text-slate-900">Hamernassa</span>
                      <span className="block text-xs text-slate-400">Pharmaceuticals plc</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="space-y-0.5">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-brand-700 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile footer actions */}
              <div className="p-5 border-t border-slate-100 space-y-3">
                <button
                  onClick={openQuote}
                  className="w-full py-3 text-center text-sm font-semibold bg-linear-to-r from-brand-800 to-brand-700 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Request Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Quote Modal ── */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}