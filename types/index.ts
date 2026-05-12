export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  image?: string;
  featured?: boolean;
  new?: boolean;
  type: "pharmaceutical" | "medical-equipment";
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;
  publishedAt: string;
  author: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  type: "manufacturer" | "supplier" | "regulatory" | "certification";
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  image?: string;
}

export interface QuoteRequest {
  id?: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  productInterest: string;
  quantity?: string;
  message?: string;
  status?: "pending" | "reviewed" | "responded" | "closed";
  createdAt: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: "general" | "quote" | "partnership" | "feedback";
}

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  image?: string;
  featured: boolean;
  new: boolean;
  type: "pharmaceutical" | "medical-equipment";
  createdAt: string;
  updatedAt: string;
}