"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/shared/section-header";
import AnimatedSection from "@/components/shared/animated-section";
import Badge from "@/components/shared/badge";
import { manufacturerPartners, certificationPartners } from "@/data/partners";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { Handshake, Users, Building, ArrowRight, X, CheckCircle } from "lucide-react";

/** Renders an SVG logo or falls back to styled initials */
function PartnerLogo({ name, logo }: { name: string; logo?: string | null }) {
  if (logo) {
    return (
      <div className="relative h-14 w-40 flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="180px"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center">
        <span className="text-brand-800 font-bold text-lg">
          {name.substring(0, 2).toUpperCase()}
        </span>
      </div>
      <p className="text-xs font-semibold text-slate-600 text-center leading-tight max-w-[90px]">
        {name}
      </p>
    </div>
  );
}

export default function PartnersPage() {
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowPartnerForm(false);
      setSubmitted(false);
      setFormData({ companyName: "", contactPerson: "", email: "", phone: "", partnershipType: "", message: "" });
    }, 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-b from-brand-950 via-brand-900 to-brand-800">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Collaboration
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Partners & Partnerships
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-300 max-w-2xl mx-auto">
            Building strategic partnerships with leading pharmaceutical manufacturers and equipment suppliers worldwide.
          </motion.p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Partnership Opportunities" title="Work With Us" description="We welcome partnerships with manufacturers, suppliers, and healthcare organizations." className="mb-16" />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection>
              <div className="bg-linear-to-br from-brand-50 to-white rounded-2xl p-8 border border-brand-100 h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-800 flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Manufacturer Partners</h3>
                <p className="text-slate-600 mb-4">Pharmaceutical and medical equipment manufacturers seeking distribution in Ethiopia.</p>
                <ul className="text-left space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Exclusive distribution rights</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Marketing support</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Regulatory assistance</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-linear-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Supplier Network</h3>
                <p className="text-slate-600 mb-4">Local and international suppliers looking to expand their reach.</p>
                <ul className="text-left space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Reliable payment terms</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Long-term contracts</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Volume commitments</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-linear-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-700 flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Alliances</h3>
                <p className="text-slate-600 mb-4">Healthcare organizations and institutions seeking reliable supply partners.</p>
                <ul className="text-left space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Bulk pricing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Priority fulfillment</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Technical support</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manufacturer Partners */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Network" title="Manufacturer Partners" description="We partner with leading pharmaceutical and medical equipment manufacturers worldwide." className="mb-16" />

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {manufacturerPartners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={fadeInUp}
                className="group bg-white rounded-xl p-6 border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                {/* Logo or initials */}
                <div className="h-20 flex items-center justify-center mb-3">
                  <PartnerLogo name={partner.name} logo={partner.logo} />
                </div>

                {/* Name only shown separately when logo is present (initials fallback already includes name) */}
                {partner.logo && (
                  <p className="font-semibold text-slate-800 text-sm mb-1">{partner.name}</p>
                )}

                <p className="text-xs text-slate-500 leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Compliance" title="Certifications & Approvals" description="Our partnerships and certifications demonstrate our commitment to quality and regulatory compliance." className="mb-16" />

          <div className="grid md:grid-cols-3 gap-8">
            {certificationPartners.map((cert) => (
              <AnimatedSection key={cert.id}>
                <div className="bg-linear-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 text-center flex flex-col items-center">
                  {/* Logo or medal icon */}
                  <div className="h-20 flex items-center justify-center mb-4">
                    {cert.logo ? (
                      <div className="relative h-16 w-44">
                        <Image
                          src={cert.logo}
                          alt={`${cert.name} logo`}
                          fill
                          className="object-contain"
                          sizes="200px"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                        <span className="text-2xl">🏅</span>
                      </div>
                    )}
                  </div>
                  <Badge variant="success" className="mb-4">{cert.type.toUpperCase()}</Badge>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.name}</h3>
                  <p className="text-sm text-slate-600">{cert.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form CTA */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-brand-900 via-brand-800 to-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg text-slate-300 mb-8">Ready to join our network of trusted partners? Submit your inquiry and we&apos;ll be in touch.</p>
          <button onClick={() => setShowPartnerForm(true)} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-800 font-bold rounded-xl hover:bg-slate-50 transition-all">
            Partnership Inquiry
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Partner Form Modal */}
      {showPartnerForm && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowPartnerForm(false)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Partnership Inquiry</h3>
                <p className="text-sm text-slate-500">Tell us about your organization</p>
              </div>
              <button onClick={() => setShowPartnerForm(false)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><X className="w-5 h-5 text-slate-500" /></button>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-emerald-600" /></div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Inquiry Submitted!</h4>
                  <p className="text-slate-600">Our partnerships team will contact you within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                    <input type="text" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Your company" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person *</label>
                      <input type="text" required value={formData.contactPerson} onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="email@company.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="+251..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Partnership Type *</label>
                    <select required value={formData.partnershipType} onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none">
                      <option value="">Select type</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="supplier">Supplier</option>
                      <option value="healthcare">Healthcare Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none" placeholder="Tell us about your products or services..." />
                  </div>

                  <button type="submit" className="w-full py-3 bg-linear-to-r from-brand-800 to-brand-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all">Submit Inquiry</button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}