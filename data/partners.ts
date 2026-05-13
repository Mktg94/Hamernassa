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
    logo: "/images/Who.svg",
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
    name: "Dawei",
    type: "manufacturer",
    description: "Dawei is a leading medical device manufacturer in China, providing professional ultrasound machines, ECG devices, and patient monitors for healthcare needs.",
    logo: "/images/dawei.svg",
  },
  {
    id: "partner-005",
    name: "Mindray",
    type: "manufacturer",
    description: "Mindray is a innovative global provider of medical devices and solutions. Discover our voyage of healthcare from China to the world.",
    logo: "/images/mindray.svg",
  },
  {
    id: "partner-006",
    name: "Sun Pharma",
    type: "manufacturer",
    description: "India's largest pharmaceutical company.",
    logo: "/images/sun-pharma.svg",
  },
  {
    id: "partner-007",
    name: "Samsung",
    type: "manufacturer",
    description: "Global leader in medical imaging & healthcare technology.",
    logo: "/images/samsung.svg",
  },
  {
    id: "partner-008",
    name: "Sandoz",
    type: "manufacturer",
    description: "Novartis generic pharmaceuticals division.",
    logo: "/images/sandoz.svg",
  },

  // Medical Equipment Manufacturers
  {
    id: "partner-009",
    name: "Philips Healthcare",
    type: "manufacturer",
    description: "Global leader in medical technology.",
    logo: "/images/philips.svg",
  },
  {
    id: "partner-010",
    name: "Siemens Healthineers",
    type: "manufacturer",
    description: "Leading medical imaging and laboratory diagnostics.",
    logo: "/images/siemens.svg",
  },
  {
    id: "partner-011",
    name: "GE Healthcare",
    type: "manufacturer",
    description: "Innovative medical technology solutions.",
    logo: "/images/GE_HealthCare.png",
  },
  {
    id: "partner-012",
    name: "Sinocare INC",
    type: "manufacturer",
    description: "A leading global medical technology company founded in 2002 that specializes in rapid diabetes management tools and chronic disease monitoring.",
    logo: "/images/sinocare.svg",
  },
  {
    id: "partner-013",
    name: "Chison",
    type: "manufacturer",
    description: "Founded in 1996, CHISON is one of the world's leading manufacturers for ultrasound systems. In its 30 years of history.",
    logo: "/images/chison.svg",
  },
  {
    id: "partner-014",
    name: "Edan",
    type: "manufacturer",
    description: "As a healthcare company, Edan dedicates to provide phenomenal medical devices and healthcare solutions to the world.",
    logo: "/images/edan.svg",
  },
  {
    id: "partner-015",
    name: "Sonoscape",
    type: "manufacturer",
    description: "A medical manufacturer of trolley and portable ultrasound systems and high-definition endoscopy systems.",
    logo: "/images/sonoscape.svg",
  },
  {
    id: "partner-016",
    name: "Zybio INC",
    type: "manufacturer",
    description: "A national high tech enterprise founded in 2008, one of the leading Chinese medical company.",
    logo: "/images/zybio.svg",
  },

  // Healthcare Partners
  {
    id: "partner-017",
    name: "Ministry of Health Ethiopia",
    type: "supplier",
    description: "Government healthcare partnership",
    logo: null,
  },
  {
    id: "partner-018",
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