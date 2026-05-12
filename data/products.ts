import type { Product } from "@/types";

export const pharmaceuticalProducts: Product[] = [
  {
    id: "pharma-001",
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    description: "Broad-spectrum penicillin antibiotic for treating bacterial infections including respiratory, urinary, and skin infections.",
    image: "/images/products/amoxicillin.jpg",
    featured: true,
    type: "pharmaceutical"
  },
  {
    id: "pharma-002",
    name: "Metformin 850mg",
    category: "Antidiabetic",
    description: "First-line medication for type 2 diabetes management. Helps control blood sugar levels effectively.",
    image: "/images/products/metformin.jpg",
    featured: true,
    type: "pharmaceutical"
  },
  {
    id: "pharma-003",
    name: "Omeprazole 20mg",
    category: "Gastrointestinal",
    description: "Proton pump inhibitor for treating acid reflux, GERD, and peptic ulcers.",
    image: "/images/products/omeprazole.jpg",
    type: "pharmaceutical"
  },
  {
    id: "pharma-004",
    name: "Amlodipine 5mg",
    category: "Cardiovascular",
    description: "Calcium channel blocker for managing hypertension and angina.",
    image: "/images/products/amlodipine.jpg",
    featured: true,
    type: "pharmaceutical"
  },
  {
    id: "pharma-005",
    name: "Ciprofloxacin 500mg",
    category: "Antibiotics",
    description: "Fluoroquinolone antibiotic for treating complex urinary tract infections and respiratory conditions.",
    image: "/images/products/ciprofloxacin.jpg",
    type: "pharmaceutical"
  },
  {
    id: "pharma-006",
    name: "Metronidazole 400mg",
    category: "Antiparasitic",
    description: "Effective treatment for anaerobic bacterial infections and parasitic diseases.",
    image: "/images/products/metronidazole.jpg",
    type: "pharmaceutical"
  },
  {
    id: "pharma-007",
    name: "Lisinopril 10mg",
    category: "Cardiovascular",
    description: "ACE inhibitor for treating high blood pressure and heart failure.",
    image: "/images/products/lisinopril.jpg",
    type: "pharmaceutical"
  },
  {
    id: "pharma-008",
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    description: "Analgesic and antipyretic for mild to moderate pain and fever reduction.",
    image: "/images/products/paracetamol.jpg",
    featured: true,
    type: "pharmaceutical"
  },
  {
    id: "pharma-009",
    name: "Azithromycin 250mg",
    category: "Antibiotics",
    description: "Macrolide antibiotic for respiratory infections, skin infections, and STIs.",
    image: "/images/products/azithromycin.jpg",
    new: true,
    type: "pharmaceutical"
  },
  {
    id: "pharma-010",
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    description: "NSAID for inflammation, pain, and fever management.",
    image: "/images/products/ibuprofen.jpg",
    type: "pharmaceutical"
  },
  {
    id: "pharma-011",
    name: "Cetirizine 10mg",
    category: "Antihistamine",
    description: "Second-generation antihistamine for allergic rhinitis and urticaria.",
    image: "/images/products/cetirizine.jpg",
    type: "pharmaceutical"
  },
  {
    id: "pharma-012",
    name: "Diclofenac 50mg",
    category: "Pain Relief",
    description: "NSAID with potent anti-inflammatory properties for arthritis and acute pain.",
    image: "/images/products/diclofenac.jpg",
    type: "pharmaceutical"
  },
];

export const pharmaceuticalCategories = [
  "All",
  "Antibiotics",
  "Antidiabetic",
  "Cardiovascular",
  "Pain Relief",
  "Gastrointestinal",
  "Antiparasitic",
  "Antihistamine",
  "Respiratory",
  "Dermatological",
];

export const getProductCategories = (type: "pharmaceutical" | "medical-equipment"): string[] => {
  if (type === "pharmaceutical") {
    return pharmaceuticalCategories;
  }
  return medicalEquipmentCategories;
};

export const medicalEquipmentProducts: Product[] = [
  {
    id: "med-001",
    name: "Digital Blood Pressure Monitor",
    category: "Diagnostic Equipment",
    description: "Automatic upper arm blood pressure monitor with large LCD display and memory function.",
    image: "/images/products/bp-monitor.jpg",
    featured: true,
    type: "medical-equipment"
  },
  {
    id: "med-002",
    name: "Pulse Oximeter",
    category: "Diagnostic Equipment",
    description: "Fingertip pulse oximeter for measuring SpO2 and pulse rate with portable design.",
    image: "/images/products/pulse-oximeter.jpg",
    featured: true,
    type: "medical-equipment"
  },
  {
    id: "med-003",
    name: "ECG Machine",
    category: "Diagnostic Equipment",
    description: "12-lead electrocardiograph with digital display and printing capabilities.",
    image: "/images/products/ecg-machine.jpg",
    featured: true,
    type: "medical-equipment"
  },
  {
    id: "med-004",
    name: "Patient Monitor",
    category: "Monitoring Equipment",
    description: "Multi-parameter vital signs monitor for ICU and emergency settings.",
    image: "/images/products/patient-monitor.jpg",
    type: "medical-equipment"
  },
  {
    id: "med-005",
    name: "Infusion Pump",
    category: "ICU Equipment",
    description: "Precision infusion pump with programmable flow rates and safety alerts.",
    image: "/images/products/infusion-pump.jpg",
    new: true,
    type: "medical-equipment"
  },
  {
    id: "med-006",
    name: "Surgical LED Light",
    category: "Surgical Devices",
    description: "Adjustable LED surgical light with shadow-free illumination and long lifespan.",
    image: "/images/products/surgical-light.jpg",
    type: "medical-equipment"
  },
  {
    id: "med-007",
    name: "Anesthesia Machine",
    category: "Surgical Devices",
    description: "Advanced anesthesia workstation with integrated monitoring.",
    image: "/images/products/anesthesia-machine.jpg",
    featured: true,
    type: "medical-equipment"
  },
  {
    id: "med-008",
    name: "Ventilator",
    category: "ICU Equipment",
    description: "ICU ventilator with multiple ventilation modes and smart alarms.",
    image: "/images/products/ventilator.jpg",
    type: "medical-equipment"
  },
  {
    id: "med-009",
    name: "Defibrillator",
    category: "Emergency Equipment",
    description: "AED/defibrillator with biphasic waveform and real-time CPR guidance.",
    image: "/images/products/defibrillator.jpg",
    new: true,
    type: "medical-equipment"
  },
  {
    id: "med-010",
    name: "Ultrasound Scanner",
    category: "Diagnostic Equipment",
    description: "Portable color Doppler ultrasound system for various clinical applications.",
    image: "/images/products/ultrasound.jpg",
    featured: true,
    type: "medical-equipment"
  },
  {
    id: "med-011",
    name: "Nebulizer",
    category: "Respiratory Equipment",
    description: "Compact nebulizer for asthma and respiratory therapy.",
    image: "/images/products/nebulizer.jpg",
    type: "medical-equipment"
  },
  {
    id: "med-012",
    name: "Hospital Bed",
    category: "Furniture",
    description: "Electric adjustable hospital bed with side rails and control panel.",
    image: "/images/products/hospital-bed.jpg",
    type: "medical-equipment"
  },
];

export const medicalEquipmentCategories = [
  "All",
  "Diagnostic Equipment",
  "ICU Equipment",
  "Surgical Devices",
  "Monitoring Equipment",
  "Emergency Equipment",
  "Respiratory Equipment",
  "Furniture",
  "Laboratory Equipment",
];

export const getFeaturedProducts = (type: "pharmaceutical" | "medical-equipment"): Product[] => {
  const products = type === "pharmaceutical" ? pharmaceuticalProducts : medicalEquipmentProducts;
  return products.filter(p => p.featured);
};

export const getNewProducts = (type: "pharmaceutical" | "medical-equipment"): Product[] => {
  const products = type === "pharmaceutical" ? pharmaceuticalProducts : medicalEquipmentProducts;
  return products.filter(p => p.new);
};

export const getProductsByCategory = (
  type: "pharmaceutical" | "medical-equipment",
  category: string
): Product[] => {
  const products = type === "pharmaceutical" ? pharmaceuticalProducts : medicalEquipmentProducts;
  if (category === "All") return products;
  return products.filter(p => p.category === category);
};

export const getProductById = (
  type: "pharmaceutical" | "medical-equipment",
  id: string
): Product | undefined => {
  const products = type === "pharmaceutical" ? pharmaceuticalProducts : medicalEquipmentProducts;
  return products.find(p => p.id === id);
};