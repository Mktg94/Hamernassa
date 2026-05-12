"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import AnimatedSection from "@/components/shared/animated-section";
import Badge from "@/components/shared/badge";
import Link from "next/link";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { getRecentNews } from "@/data/news";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function NewsPreview() {
  const recentNews = getRecentNews(3);

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 58, 138, 0.03) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Latest Updates"
          title="News & Insights"
          description="Stay informed about healthcare industry trends, company updates, and medical technology advancements."
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {recentNews.map((article, index) => (
            <motion.article
              key={article.id}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200 shadow-soft hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-brand-100 to-emerald-50 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-200/50 flex items-center justify-center">
                  <span className="text-2xl">📰</span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="new">{article.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-700 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center gap-2 text-brand-700 font-semibold text-sm group-hover:text-emerald-600 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-800 to-brand-700 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}