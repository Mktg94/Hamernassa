"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const hasDropdown = (label: string) => {
    return label === "Products" || label === "Resources";
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-800 to-emerald-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="hidden sm:block">
                <span className={cn(
                  "font-semibold text-lg transition-colors",
                  isScrolled ? "text-slate-900" : "text-white"
                )}>
                  HPP
                </span>
                <p className={cn(
                  "text-xs font-medium transition-colors -mt-0.5",
                  isScrolled ? "text-slate-500" : "text-white/80"
                )}>
                  Pharmaceuticals
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
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
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isScrolled
                        ? "text-slate-700 hover:bg-slate-100 hover:text-brand-700"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {link.label}
                    {hasDropdown(link.label) && (
                      <ChevronDown className="inline-block w-3.5 h-3.5 ml-1" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA & Contact */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  isScrolled ? "text-slate-600 hover:text-brand-700" : "text-white/90 hover:text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
              <Link
                href="/contact#quote"
                className={cn(
                  "px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
                  "bg-gradient-to-r from-brand-800 to-brand-700 text-white",
                  "hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                )}
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled ? "hover:bg-slate-100" : "hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={cn("w-6 h-6", isScrolled ? "text-slate-700" : "text-white")} />
              ) : (
                <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-700" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-800 to-emerald-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">H</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">HPP</span>
                      <p className="text-xs text-slate-500">Pharmaceuticals</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1 mb-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-brand-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Contact Button */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 px-4 py-3 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-600" />
                    <span className="font-medium">{siteConfig.contact.phone}</span>
                  </a>
                  <Link
                    href="/contact#quote"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-5 py-3.5 text-center font-semibold bg-gradient-to-r from-brand-800 to-brand-700 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}