import type { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    id: "news-001",
    title: "HPP Expands Partnership with Leading European Pharmaceutical Manufacturers",
    excerpt: "Hamernassa Pharmaceuticals strengthens its supply chain with new agreements with top-tier European drug manufacturers.",
    content: `We are pleased to announce the expansion of our partnership network with several leading European pharmaceutical manufacturers. This strategic move reinforces our commitment to providing high-quality medicines to healthcare providers across Ethiopia.

The new partnerships include agreements with manufacturers specializing in cardiovascular medications, antibiotics, and specialty drugs. These collaborations will enable us to offer a broader range of essential medicines while maintaining our stringent quality standards.

"Our goal is to ensure that healthcare facilities across Ethiopia have access to world-class pharmaceutical products," said our CEO. "These partnerships represent a significant milestone in our mission to advance healthcare through reliable supply solutions."

The expansion includes:
- Enhanced supply chain resilience
- Broader product portfolio
- Improved delivery timelines
- Competitive pricing for healthcare providers`,
    category: "Partnership",
    image: "/images/news/partnership.jpg",
    publishedAt: "2026-04-15",
    author: "Hamernassa Communications"
  },
  {
    id: "news-002",
    title: "New Medical Equipment Division Launches with Advanced Diagnostic Solutions",
    excerpt: "Hamernassa introduces cutting-edge diagnostic and monitoring equipment to Ethiopian healthcare facilities.",
    content: `In response to the growing demand for advanced medical equipment in Ethiopia, Hamernassa Pharmaceuticals has officially launched its comprehensive Medical Equipment Division. This new division will focus on supplying state-of-the-art diagnostic, therapeutic, and monitoring equipment to hospitals, clinics, and healthcare centers nationwide.

The launch marks a significant expansion of our service offerings, enabling us to provide integrated healthcare solutions under one roof. Our new equipment portfolio includes:

- Digital diagnostic imaging systems
- Patient monitoring solutions
- ICU equipment and ventilators
- Surgical instruments and lighting
- Laboratory diagnostic equipment

All equipment comes with comprehensive installation, training, and after-sales support to ensure optimal utilization in healthcare settings.`,
    category: "Product Launch",
    image: "/images/news/equipment-launch.jpg",
    publishedAt: "2026-03-28",
    author: "Product Team"
  },
  {
    id: "news-003",
    title: "Quality Assurance: Our Commitment to Pharmaceutical Excellence",
    excerpt: "Understanding HPP's comprehensive quality control measures and compliance standards.",
    content: `At Hamernassa Pharmaceuticals, quality is not just a priority—it's our foundation. Our quality assurance program encompasses every step of the supply chain, from sourcing to delivery.

Our comprehensive approach includes:
- Stringent supplier verification and approval processes
- Temperature-controlled storage and transportation
- Batch-level traceability for all products
- Regular audits and compliance checks
- Staff training on Good Distribution Practices

We are proud to maintain 100% compliance with Ethiopian Food, Medicine and Health Care Administration and Control Authority (EFDA) standards, as well as international GMP guidelines.

Our quality team conducts regular inspections and maintains detailed documentation to ensure every product meets the highest standards of safety and efficacy.`,
    category: "Quality",
    image: "/images/news/quality.jpg",
    publishedAt: "2026-03-10",
    author: "Quality Team"
  },
  {
    id: "news-004",
    title: "Supporting Ethiopian Healthcare: A Year in Review",
    excerpt: "Highlights of Hamernassa's contributions to healthcare infrastructure and patient care in 2025.",
    content: `2025 was a landmark year for Hamernassa Pharmaceuticals in our mission to support Ethiopian healthcare. Through strategic partnerships and unwavering commitment to quality, we achieved several significant milestones.

Key achievements include:
- Served over 200 healthcare facilities nationwide
- Expanded product portfolio by 40%
- Reduced average delivery time by 25%
- Launched new customer support channels
- Implemented digital inventory management

These accomplishments reflect our dedication to being a reliable healthcare partner. Looking ahead, we remain committed to expanding access to quality medicines and medical equipment across Ethiopia.`,
    category: "Company News",
    image: "/images/news/year-review.jpg",
    publishedAt: "2026-01-15",
    author: "Corporate Communications"
  },
  {
    id: "news-005",
    title: "Understanding the Pharmaceutical Supply Chain: From Manufacturer to Facility",
    excerpt: "A comprehensive guide to how HPP ensures reliable and timely pharmaceutical delivery.",
    content: `The pharmaceutical supply chain is complex, involving multiple stages of manufacturing, testing, storage, and distribution. At Hamernassa Pharmaceuticals, we have developed a robust system that ensures product integrity from source to destination.

Our supply chain process includes:
1. Supplier Selection: Rigorous evaluation of manufacturers based on quality, reliability, and compliance records
2. Product Verification: Batch testing and certification before release
3. Storage: Climate-controlled warehouses maintaining WHO standards
4. Transportation: Specialized logistics with temperature monitoring
5. Last-Mile Delivery: Reliable distribution to healthcare facilities

This comprehensive approach allows us to guarantee product quality and availability, supporting healthcare providers in their mission to deliver excellent patient care.`,
    category: "Education",
    image: "/images/news/supply-chain.jpg",
    publishedAt: "2025-12-20",
    author: "Operations Team"
  },
];

export const getNewsById = (id: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
  if (category === "All") return newsArticles;
  return newsArticles.filter(article => article.category === category);
};

export const getRecentNews = (limit: number = 3): NewsArticle[] => {
  return newsArticles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const newsCategories = [
  "All",
  "Company News",
  "Partnership",
  "Product Launch",
  "Quality",
  "Education",
];