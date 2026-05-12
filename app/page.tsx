import type { Metadata } from "next";
import Hero from "@/components/sections/home/hero";
import TrustMetrics from "@/components/sections/home/trust-metrics";
import AboutPreview from "@/components/sections/home/about-preview";
import Divisions from "@/components/sections/home/divisions";
import Features from "@/components/sections/home/features";
import PartnersPreview from "@/components/sections/home/partners-preview";
import NewsPreview from "@/components/sections/home/news-preview";
import CTASection from "@/components/sections/home/cta-section";

export const metadata: Metadata = {
  title: "Hamernassa Pharmaceuticals PLC | Trusted Healthcare Solutions in Ethiopia",
  description: "Your trusted partner for pharmaceutical imports and medical equipment supply in Ethiopia. Quality medicines, biomedical equipment, and reliable healthcare solutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <AboutPreview />
      <Divisions />
      <Features />
      <PartnersPreview />
      <NewsPreview />
      <CTASection />
    </>
  );
}