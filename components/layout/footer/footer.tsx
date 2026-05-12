import Link from "next/link";
import { Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const brandGradient = "bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-emerald-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                  <span className="font-bold text-xl text-white">HPP</span>
                  <p className="text-xs text-slate-400">Pharmaceuticals PLC</p>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Advancing healthcare through reliable pharmaceutical and medical equipment supply solutions across Ethiopia.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-700 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-700 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-xs font-bold">f</span>
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-700 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="text-white font-semibold mb-5">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-5">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-800/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {siteConfig.contact.address},<br />
                    {siteConfig.contact.city}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-800/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-800/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}