import React from "react";
import { Shield, ArrowRight, Lock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import ReusableCard from "@/components/primitives/ReusableCard";

export const Privacy: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen selection:bg-[#f97316]/30 selection:text-white select-none">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />

        <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-4">
          <Eyebrow index="001" label="DATA GOVERNANCE & PRIVACY" />

          <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-[0.95] break-words max-w-4xl">
            PRIVACY POLICY & <br />
            <GradientText className="inline">DATA PROTECTION POLICY</GradientText>
          </h1>

          <p className="font-sans text-xs sm:text-base text-[#a1a1a1] max-w-2xl font-normal">
            Last Updated: August 2026. Operational data governance standards at Grevya Technologies.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
          <ReusableCard variant="elevated" className="p-6 sm:p-10 border-white/10 bg-[#131313]/95 shadow-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">1. Data Isolation Protocol</h2>
              <p>Grevya Technologies Pvt Ltd processes enterprise customer data under strict zero-retention mandates. Customer data ingested into custom AI solutions or vector indexes is isolated per workspace and never utilized for public LLM model training.</p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">2. Technical & Organizational Security</h2>
              <p>We implement end-to-end TLS 1.3 encryption in transit and AES-256 encryption at rest. Enterprise infrastructure components are hosted within SOC2-compliant data centers.</p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">3. Contact Information</h2>
              <p>For data privacy queries or audit requests, contact our security leads at <a href="mailto:info@grevya.com" className="text-[#f97316] underline">info@grevya.com</a>.</p>
            </div>
          </ReusableCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
