"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import AnimatedSection from "@/components/shared/animated-section";
import Badge from "@/components/shared/badge";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { teamMembers } from "@/data/team";
import { Target, Eye, ArrowRight, Users, Award, Globe, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4"
            >
              About HPP
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Our Story, Mission & Vision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300"
            >
              Building a healthier Ethiopia through reliable pharmaceutical
              and medical equipment supply solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <AnimatedSection className="bg-gradient-to-br from-brand-50 to-white rounded-3xl p-8 lg:p-12 border border-brand-100">
              <div className="w-14 h-14 rounded-2xl bg-brand-800 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Hamernassa Pharmaceutical visions to be one of the five leading, strong, vibrant,
                competitive and socially responsible Ethiopian Pharmaceutical Company in East Africa.
              </p>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection delay={0.1} className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-12 border border-emerald-100">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Expand healthcare access across Ethiopia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Provide quality and safe pharmaceutical products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Deliver competitive healthcare solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Support the healthcare sector with excellence</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Objectives"
            title="What We Strive For"
            description="Our strategic objectives guide everything we do at HPP."
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏥", title: "Biomedical Equipment", desc: "Providing state-of-the-art medical equipment to healthcare facilities" },
              { icon: "💊", title: "Quality Medicines", desc: "Ensuring access to safe and effective pharmaceutical products" },
              { icon: "📦", title: "Medical Supplies", desc: "Delivering comprehensive medical supply solutions" },
              { icon: "🤝", title: "Healthcare Business", desc: "Participating in healthcare-related business activities" },
            ].map((objective, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-shadow h-full">
                  <div className="text-4xl mb-4">{objective.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{objective.title}</h3>
                  <p className="text-sm text-slate-600">{objective.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Team"
            title="Leadership"
            description="Meet the dedicated professionals driving HPP's mission forward."
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100 hover:border-brand-200 transition-all duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-100 to-emerald-50 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl font-bold text-brand-800">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium text-center mb-3">{member.position}</p>
                  <p className="text-sm text-slate-600 text-center">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Foundation"
            title="Core Values"
            description="The principles that guide every decision and action at HPP."
            light
            className="mb-16"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Operating with honesty and transparency in all our dealings" },
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards in everything we do" },
              { icon: Users, title: "Partnership", desc: "Building lasting relationships with our clients and suppliers" },
              { icon: Globe, title: "Accessibility", desc: "Making quality healthcare products available across Ethiopia" },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <value.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-800 to-brand-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-lg text-slate-200 mb-8">
            Contact us to discuss how we can support your healthcare facility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-800 font-bold rounded-xl hover:bg-slate-50 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}