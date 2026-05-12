"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Send, CheckCircle, Building2, User, Phone,
  Mail, Package, FileText, Loader2, AlertCircle,
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emptyForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  productInterest: "pharmaceuticals",
  quantity: "",
  message: "",
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (field: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData(emptyForm);
          onClose();
        }, 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-linear-to-r from-brand-900 to-brand-700 px-6 py-5 rounded-t-2xl z-10">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/25 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <h2 className="text-xl font-bold text-white">Request a Quote</h2>
              <p className="text-blue-200 text-xs mt-0.5">
                Submit your details and we&apos;ll respond within 24 hours.
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Request Submitted!</h3>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Thank you! Our team will review your request and contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                        <User className="w-3 h-3" /> Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={update("name")}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                        <Building2 className="w-3 h-3" /> Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={update("company")}
                        className={inputClass}
                        placeholder="Hospital, clinic, pharmacy…"
                      />
                    </div>
                  </div>

                  {/* Phone + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                        <Phone className="w-3 h-3" /> Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={update("phone")}
                        className={inputClass}
                        placeholder="+251 9XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                        <Mail className="w-3 h-3" /> Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={update("email")}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      <Package className="w-3 h-3" /> Product Interest *
                    </label>
                    <select
                      required
                      value={formData.productInterest}
                      onChange={update("productInterest")}
                      className={inputClass + " bg-white cursor-pointer"}
                    >
                      <option value="pharmaceuticals">Pharmaceuticals</option>
                      <option value="medical-equipment">Medical Equipment</option>
                      <option value="both">Pharmaceuticals &amp; Medical Equipment</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  {/* Quantity/Details */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      <FileText className="w-3 h-3" /> Product Details / Quantity
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={update("quantity")}
                      className={inputClass}
                      placeholder="e.g., Paracetamol 500mg × 10,000 units"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={update("message")}
                      className={inputClass + " resize-none"}
                      placeholder="Delivery timeline, special requirements, etc."
                    />
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 bg-linear-to-r from-brand-900 to-brand-700 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
