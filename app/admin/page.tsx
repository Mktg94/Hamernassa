"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import Badge from "@/components/shared/badge";
import { pharmaceuticalProducts, medicalEquipmentProducts } from "@/data/products";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import { Package, Plus, Edit, Trash2, Search, X, CheckCircle, ArrowRight, Save } from "lucide-react";
import type { Product } from "@/types";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    ...pharmaceuticalProducts,
    ...medicalEquipmentProducts,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "pharmaceutical" | "medical-equipment">("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    description: "",
    type: "pharmaceutical" as "pharmaceutical" | "medical-equipment",
    featured: false,
    new: true,
  });
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || product.type === filterType;
    return matchesSearch && matchesType;
  });

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      subcategory: "",
      description: "",
      type: "pharmaceutical",
      featured: false,
      new: true,
    });
    setEditingProduct(null);
  };

  const handleAddProduct = () => {
    if (!formData.name || !formData.category || !formData.description) {
      showNotification("error", "Please fill in all required fields");
      return;
    }

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      ...formData,
    };

    setProducts([...products, newProduct]);
    setShowAddModal(false);
    resetForm();
    showNotification("success", "Product added successfully!");
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      subcategory: product.subcategory || "",
      description: product.description,
      type: product.type,
      featured: product.featured || false,
      new: product.new || false,
    });
    setShowAddModal(true);
  };

  const handleUpdateProduct = () => {
    if (!editingProduct || !formData.name || !formData.category || !formData.description) {
      showNotification("error", "Please fill in all required fields");
      return;
    }

    setProducts(products.map((p) =>
      p.id === editingProduct.id
        ? { ...p, ...formData }
        : p
    ));
    setShowAddModal(false);
    resetForm();
    showNotification("success", "Product updated successfully!");
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== productId));
      showNotification("success", "Product deleted successfully!");
    }
  };

  return (
    <>
      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-24 right-4 z-50 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 ${
            notification.type === "success"
              ? "bg-emerald-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">{notification.message}</span>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Product Management</h1>
              <p className="text-slate-300">Manage your pharmaceutical and medical equipment inventory</p>
            </div>
            <button
              onClick={() => {
                resetForm();
                setShowAddModal(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-800 font-semibold rounded-xl hover:bg-slate-50 transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white rounded-2xl p-4 mb-8 border border-slate-100 shadow-soft">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    filterType === "all"
                      ? "bg-brand-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All ({products.length})
                </button>
                <button
                  onClick={() => setFilterType("pharmaceutical")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    filterType === "pharmaceutical"
                      ? "bg-brand-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Pharmaceuticals ({products.filter(p => p.type === "pharmaceutical").length})
                </button>
                <button
                  onClick={() => setFilterType("medical-equipment")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    filterType === "medical-equipment"
                      ? "bg-brand-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Medical Equipment ({products.filter(p => p.type === "medical-equipment").length})
                </button>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-emerald-50 flex items-center justify-center flex-shrink-0">
                            <Package className="w-6 h-6 text-brand-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{product.name}</p>
                            <p className="text-sm text-slate-500 line-clamp-1">{product.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge>{product.category}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-medium ${
                          product.type === "pharmaceutical" ? "text-brand-700" : "text-emerald-600"
                        }`}>
                          {product.type === "pharmaceutical" ? "Pharmaceutical" : "Medical Equipment"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {product.featured && <Badge variant="featured">Featured</Badge>}
                          {product.new && <Badge variant="new">New</Badge>}
                          {!product.featured && !product.new && <Badge variant="default">Active</Badge>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600 hover:text-brand-700"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors text-slate-600 hover:text-red-600"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria, or add a new product.</p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-100 text-center">
              <p className="text-3xl font-bold text-brand-800 mb-1">{products.length}</p>
              <p className="text-sm text-slate-600">Total Products</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 text-center">
              <p className="text-3xl font-bold text-brand-700 mb-1">{products.filter(p => p.type === "pharmaceutical").length}</p>
              <p className="text-sm text-slate-600">Pharmaceuticals</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 text-center">
              <p className="text-3xl font-bold text-emerald-600 mb-1">{products.filter(p => p.type === "medical-equipment").length}</p>
              <p className="text-sm text-slate-600">Medical Equipment</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 text-center">
              <p className="text-3xl font-bold text-amber-600 mb-1">{products.filter(p => p.featured).length}</p>
              <p className="text-sm text-slate-600">Featured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setShowAddModal(false);
            resetForm();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{editingProduct ? "Edit Product" : "Add New Product"}</h3>
                <p className="text-sm text-slate-500">{editingProduct ? "Update product information" : "Fill in the product details"}</p>
              </div>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  placeholder="e.g., Amoxicillin 500mg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as "pharmaceutical" | "medical-equipment" })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  >
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="medical-equipment">Medical Equipment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Category *</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    placeholder="e.g., Antibiotics"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description *</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none"
                  placeholder="Product description..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subcategory</label>
                  <input
                    type="text"
                    value={formData.subcategory}
                    onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    placeholder="Optional subcategory"
                  />
                </div>
                <div className="flex items-center gap-4 pt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-5 h-5 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
                    />
                    <span className="text-sm font-medium text-slate-700">Featured</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.new}
                      onChange={(e) => setFormData({ ...formData, new: e.target.checked })}
                      className="w-5 h-5 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
                    />
                    <span className="text-sm font-medium text-slate-700">New</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  className="flex-1 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                  className="flex-1 py-3 bg-gradient-to-r from-brand-800 to-brand-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}