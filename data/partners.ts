import type { Partner } from "@/types";

export const partners: Partner[] = [
  // Regulatory & Certification Bodies
  {
    id: "partner-001",
    name: "EFDA",
    type: "regulatory",
    description: "Ethiopian Food, Medicine and Health Care Administration and Control Authority",
    logo: "/images/efda.svg",
  },
  {
    id: "partner-002",
    name: "WHO",
    type: "certification",
    description: "World Health Organization GMP Compliance",
    logo: null,
  },
  {
    id: "partner-003",
    name: "ISO 9001",
    type: "certification",
    description: "International Organization for Standardization Quality Certification",
    logo: "/images/iso-9001.svg",
  },

  // Pharmaceutical Manufacturers
  {
    id: "partner-004",
    name: "Cipla",
    type: "manufacturer",
    description: "Leading Indian pharmaceutical manufacturer",
    logo: null,
  },
  {
    id: "partner-005",
    name: "Mylan",
    type: "manufacturer",
    description: "Global generic pharmaceutical company",
    logo: null,
  },
  {
    id: "partner-006",
    name: "Sun Pharma",
    type: "manufacturer",
    description: "India's largest pharmaceutical company",
    logo: "/images/sun-pharma.svg",
  },
  {
    // Lupin replaced by Samsung
    id: "partner-007",
    name: "Samsung",
    type: "manufacturer",
    description: "Global leader in medical imaging & healthcare technology",
    logo: "/images/samsung.svg",
  },
  {
    id: "partner-008",
    name: "Sandoz",
    type: "manufacturer",
    description: "Novartis generic pharmaceuticals division",
    logo: "/images/sandoz.svg",
  },

  // Medical Equipment Manufacturers
  {
    id: "partner-009",
    name: "Philips Healthcare",
    type: "manufacturer",
    description: "Global leader in medical technology",
    logo: null,
  },
  {
    id: "partner-010",
    name: "Siemens Healthineers",
    type: "manufacturer",
    description: "Leading medical imaging and laboratory diagnostics",
    logo: null,
  },
  {
    id: "partner-011",
    name: "GE Healthcare",
    type: "manufacturer",
    description: "Innovative medical technology solutions",
    logo: null,
  },
  {
    id: "partner-012",
    name: "Medtronic",
    type: "manufacturer",
    description: "Global leader in medical devices",
    logo: null,
  },

  // Healthcare Partners
  {
    id: "partner-013",
    name: "Ministry of Health Ethiopia",
    type: "supplier",
    description: "Government healthcare partnership",
    logo: null,
  },
  {
    id: "partner-014",
    name: "Ethiopian Medical Association",
    type: "supplier",
    description: "Professional healthcare network",
    logo: null,
  },
];

export const getPartnersByType = (type: Partner["type"]): Partner[] => {
  return partners.filter((p) => p.type === type);
};

export const manufacturerPartners = partners.filter(
  (p) => p.type === "manufacturer"
);
export const certificationPartners = partners.filter(
  (p) => p.type === "certification" || p.type === "regulatory"
);