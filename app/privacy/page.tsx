"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Your Privacy Matters
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300"
            >
              Learn how we collect, use, and protect your personal information
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We collect information you provide directly to us, including your name, email address, phone number,
                and any other information you choose to provide when contacting us or using our services. We also
                automatically collect certain information when you visit our website.
              </p>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to communicate
                with you about our products and services, and to comply with legal obligations. We may also use
                your information to respond to your inquiries and fulfill your requests.
              </p>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Data Protection</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. We use industry-standard security
                measures to safeguard your data.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h2>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span>contact@hamernassa.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span>+212 5XX-XXXXXX</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span>Casablanca, Morocco</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm text-center">
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}