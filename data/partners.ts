import type { Partner } from "@/types";

export const partners: Partner[] = [
  // Regulatory & Certification Bodies
  {
    id: "partner-001",
    name: "EFDA",
    type: "regulatory",
    description: "Ethiopian Food, Medicine and Health Care Administration and Control Authority"
  },
  {
    id: "partner-002",
    name: "WHO",
    type: "certification",
    description: "World Health Organization GMP Compliance"
  },
  {
    id: "partner-003",
    name: "ISO 9001",
    type: "certification",
    description: "International Organization for Standardization Quality Certification"
  },

  // Pharmaceutical Manufacturers
  {
    id: "partner-004",
    name: "Cipla",
    type: "manufacturer",
    description: "Leading Indian pharmaceutical manufacturer"
  },
  {
    id: "partner-005",
    name: "Mylan",
    type: "manufacturer",
    description: "Global generic pharmaceutical company"
  },
  {
    id: "partner-006",
    name: "Sun Pharma",
    type: "manufacturer",
    description: "India's largest pharmaceutical company"
  },
  {
    id: "partner-007",
    name: "Lupin",
    type: "manufacturer",
    description: "Multinational pharmaceutical company"
  },
  {
    id: "partner-008",
    name: "Sandoz",
    type: "manufacturer",
    description: "Novartis generic pharmaceuticals division"
  },

  // Medical Equipment Manufacturers
  {
    id: "partner-009",
    name: "Philips Healthcare",
    type: "manufacturer",
    description: "Global leader in medical technology"
  },
  {
    id: "partner-010",
    name: "Siemens Healthineers",
    type: "manufacturer",
    description: "Leading medical imaging and laboratory diagnostics"
  },
  {
    id: "partner-011",
    name: "GE Healthcare",
    type: "manufacturer",
    description: "Innovative medical technology solutions"
  },
  {
    id: "partner-012",
    name: "Medtronic",
    type: "manufacturer",
    description: "Global leader in medical devices"
  },

  // Healthcare Partners
  {
    id: "partner-013",
    name: "Ministry of Health Ethiopia",
    type: "supplier",
    description: "Government healthcare partnership"
  },
  {
    id: "partner-014",
    name: "Ethiopian Medical Association",
    type: "supplier",
    description: "Professional healthcare network"
  },
];

export const getPartnersByType = (type: Partner["type"]): Partner[] => {
  return partners.filter(p => p.type === type);
};

export const manufacturerPartners = partners.filter(p => p.type === "manufacturer");
export const certificationPartners = partners.filter(p => p.type === "certification" || p.type === "regulatory");