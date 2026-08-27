import React from "react";
import { FileText, ArrowRight, ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import ReusableCard from "@/components/primitives/ReusableCard";

export const Terms: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen selection:bg-[#f97316]/30 selection:text-white select-none">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />

        <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-4">
          <Eyebrow index="001" label="TERMS OF SERVICE" />

          <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-[0.95] break-words max-w-4xl">
            TERMS OF SERVICE & <br />
            <GradientText className="inline">COMMERCIAL GOVERNANCE</GradientText>
          </h1>

          <p className="font-sans text-xs sm:text-base text-[#a1a1a1] max-w-2xl font-normal">
            Last Updated: August 2026. Standard commercial engagement terms for Grevya software services.
          </p>
        </div>
      </section>

      {/* Terms Details */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
          <ReusableCard variant="elevated" className="p-6 sm:p-10 border-white/10 bg-[#131313]/95 shadow-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">1. Provision of Engineering Services</h2>
              <p>Grevya Technologies Pvt Ltd agrees to provide software development, AI model deployment, and consulting services as specified under individual Master Services Agreements (MSA) and Statements of Work (SOW).</p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">2. Intellectual Property Rights</h2>
              <p>Unless explicitly agreed otherwise in a signed SOW, all custom deliverables created for enterprise clients transfer to client ownership upon full payment of agreed project milestones.</p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">3. Governing Law</h2>
              <p>These terms are governed by the laws of India, with legal jurisdiction in Coimbatore, Tamil Nadu.</p>
            </div>
          </ReusableCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
