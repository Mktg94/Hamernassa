"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import AnimatedSection from "@/components/shared/animated-section";
import Badge from "@/components/shared/badge";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { Shield, CheckCircle, Thermometer, Lock, FileCheck, Truck, Database, Award } from "lucide-react";

const standards = [
  {
    icon: Shield,
    title: "EFDA Compliance",
    description: "Full compliance with Ethiopian Food, Medicine and Health Care Administration and Control Authority regulations and guidelines.",
    color: "from-brand-700 to-brand-600"
  },
  {
    icon: Award,
    title: "GMP Standards",
    description: "Adherence to Good Manufacturing Practice standards ensuring product quality and safety at every stage.",
    color: "from-emerald-600 to-emerald-500"
  },
  {
    icon: CheckCircle,
    title: "ISO Certification",
    description: "ISO 9001:2015 certified quality management system for consistent excellence in our operations.",
    color: "from-slate-700 to-slate-600"
  },
  {
    icon: Database,
    title: "Batch Traceability",
    description: "Complete batch-level traceability from manufacturer to end-user, enabling rapid response to any quality concerns.",
    color: "from-brand-800 to-brand-700"
  }
];

const processes = [
  {
    title: "Supplier Verification",
    description: "Rigorous evaluation and approval process for all suppliers, including facility audits, certification verification, and performance monitoring.",
    icon: Lock
  },
  {
    title: "Product Verification",
    description: "Comprehensive testing and certification of all products before release, including batch testing, stability studies, and certificate of analysis verification.",
    icon: FileCheck
  },
  {
    title: "Temperature-Controlled Storage",
    description: "Climate-controlled warehouses maintaining WHO-recommended storage conditions (15-25°C) with 24/7 monitoring and backup power systems.",
    icon: Thermometer
  },
  {
    title: "Secure Distribution",
    description: "Specialized cold chain logistics with temperature monitoring throughout transportation, ensuring product integrity from warehouse to delivery.",
    icon: Truck
  }
];

export default function QualityAssurancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-b from-brand-950 via-brand-900 to-brand-800">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Our Commitment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Quality Assurance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto"
          >
            At HPP, quality is not just a priority—it is the foundation of everything we do.
            Our comprehensive quality assurance program ensures that every product meets
            the highest standards of safety, efficacy, and reliability.
          </motion.p>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Standards"
            title="Compliance & Certifications"
            description="We maintain the highest standards of quality and compliance in all our operations."
            className="mb-16"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${standard.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                  <standard.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{standard.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Process"
            title="Quality at Every Step"
            description="From sourcing to delivery, our quality assurance covers the entire supply chain."
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                      <process.icon className="w-6 h-6 text-brand-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader
            subtitle="Our Promise"
            title="Quality Commitment"
            description="We are committed to ensuring that every product we supply meets the highest standards of quality and safety. Our quality assurance team continuously monitors and improves our processes to maintain this commitment."
            light
            className="mb-12"
          />

          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "100%", label: "Compliance Rate" },
              { value: "24/7", label: "Monitoring" },
              { value: "100%", label: "Batch Traceability" }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{stat.value}</p>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-brand-800 to-brand-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions About Our Quality Standards?</h2>
          <p className="text-lg text-slate-200 mb-8">Our quality team is ready to address any concerns and provide detailed documentation.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-800 font-bold rounded-xl hover:bg-slate-50 transition-all">
            Contact Quality Team
          </a>
        </div>
      </section>
    </>
  );
}