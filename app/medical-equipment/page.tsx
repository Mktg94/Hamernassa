"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import Badge from "@/components/shared/badge";
import { medicalEquipmentProducts, medicalEquipmentCategories } from "@/data/products";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { Search, Package, ArrowRight, X } from "lucide-react";

interface QuoteModalProps {
  product: typeof medicalEquipmentProducts[0] | null;
  onClose: () => void;
}

function QuoteModal({ product, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", quantity: "", message: "" });
    }, 2000);
  };

  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Request Quote</h3>
            <p className="text-sm text-slate-500">{product.name}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Quote Request Submitted!</h4>
              <p className="text-slate-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="+251..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                  <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="Your organization" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                <input type="text" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="e.g., 5 units" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none" placeholder="Additional requirements..." />
              </div>

              <button type="submit" className="w-full py-3 bg-gradient-to-r from-brand-800 to-brand-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                Submit Quote Request
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MedicalEquipmentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof medicalEquipmentProducts[0] | null>(null);

  const filteredProducts = useMemo(() => {
    return medicalEquipmentProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryCount = (category: string) => {
    if (category === "All") return medicalEquipmentProducts.length;
    return medicalEquipmentProducts.filter((p) => p.category === category).length;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Our Products
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Medical Equipment
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-300 max-w-2xl mx-auto">
            State-of-the-art diagnostic, therapeutic, and monitoring equipment for healthcare facilities.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="bg-white rounded-2xl p-4 mb-8 border border-slate-100 shadow-soft">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" placeholder="Search equipment..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" />
              </div>

              <div className="hidden lg:flex items-center gap-2 overflow-x-auto">
                {medicalEquipmentCategories.map((category) => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${selectedCategory === category ? "bg-brand-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                    {category} ({getCategoryCount(category)})
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:hidden mt-4 flex gap-2 overflow-x-auto pb-2">
              {medicalEquipmentCategories.slice(0, 5).map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${selectedCategory === category ? "bg-brand-800 text-white" : "bg-slate-100 text-slate-600"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-brand-50 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-brand-100/50 flex items-center justify-center">
                    <Package className="w-10 h-10 text-brand-400" />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.featured && <Badge variant="featured">Featured</Badge>}
                    {product.new && <Badge variant="new">New</Badge>}
                  </div>
                </div>

                <div className="p-6">
                  <Badge className="mb-3">{product.category}</Badge>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.description}</p>
                  <button onClick={() => setSelectedProduct(product)} className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-brand-800 hover:text-white transition-colors">
                    Request Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No equipment found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {selectedProduct && <QuoteModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </>
  );
}