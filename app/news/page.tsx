"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import Badge from "@/components/shared/badge";
import { newsArticles, newsCategories } from "@/data/news";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Updates
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            News & Insights
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-300 max-w-2xl mx-auto">
            Stay informed about healthcare industry trends, company updates, and medical technology advancements.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {newsCategories.map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${selectedCategory === category ? "bg-brand-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          {filteredNews.length > 0 && (
            <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={fadeInUp} className="mb-12">
              <Link href={`/news/${filteredNews[0].id}`} className="group block bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto bg-gradient-to-br from-brand-100 to-emerald-50 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-brand-200/50 flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="featured" className="w-fit mb-4">Featured</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-700 transition-colors">{filteredNews[0].title}</h2>
                    <p className="text-slate-600 mb-6 line-clamp-3">{filteredNews[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(filteredNews[0].publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                      <div className="flex items-center gap-1"><User className="w-4 h-4" />{filteredNews[0].author}</div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-brand-700 font-semibold group-hover:text-emerald-600 transition-colors">
                      Read Article<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Other Articles */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((article) => (
              <motion.article key={article.id} variants={fadeInUp}>
                <Link href={`/news/${article.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all h-full">
                  <div className="relative h-48 bg-gradient-to-br from-brand-50 to-emerald-50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-200/50 flex items-center justify-center">
                      <span className="text-2xl">📰</span>
                    </div>
                    <div className="absolute top-4 left-4"><Badge>{article.category}</Badge></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-700 transition-colors">{article.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-brand-700 font-medium text-sm group-hover:text-emerald-600 transition-colors">
                      Read More<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4"><Search className="w-8 h-8 text-slate-400" /></div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}