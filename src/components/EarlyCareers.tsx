import React from "react";
import { GraduationCap, ArrowRight, CheckCircle2, Award, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import ReusableCard from "@/components/primitives/ReusableCard";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export const EarlyCareers: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen selection:bg-[#f97316]/30 selection:text-white select-none">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#f97316]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-6">
          <Eyebrow index="001" label="ELEVATE FELLOWSHIP PROGRAM" />

          <h1 className="font-display text-2xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-[0.95] break-words max-w-4xl">
            GREVYA ELEVATE <br />
            <GradientText className="inline">EARLY CAREER FELLOWSHIP</GradientText>
          </h1>

          <p className="font-sans text-sm sm:text-xl text-[#a1a1a1] max-w-2xl leading-relaxed font-normal">
            A fast-track engineering fellowship designed for ambitious computer science graduates, self-taught developers, and AI researchers.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 space-y-12">
          
          <RevealOnScroll delay={0.1} direction="up">
            <ReusableCard variant="elevated" className="p-6 sm:p-10 border-white/10 bg-[#131313]/95 shadow-2xl space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4 border-b border-white/10 pb-6">
                <span className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.18em]">
                  PROGRAM HIGHLIGHTS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                  6-Month Production Immersion
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
                  Fellows work directly alongside senior Grevya software architects on client production codebases, multi-agent LLM systems, and vector database architectures.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 font-sans text-xs">
                <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-1.5">
                  <div className="text-[#f97316] font-bold font-mono text-xs uppercase">DIRECT MENTORSHIP</div>
                  <p className="text-[#a1a1a1]">1-on-1 weekly code reviews and architecture pair programming with lead engineers.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-1.5">
                  <div className="text-[#f97316] font-bold font-mono text-xs uppercase">FULL-TIME CONVERSION</div>
                  <p className="text-[#a1a1a1]">High-performing fellows receive immediate full-time Grevya engineering offers upon completion.</p>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <a
                  href="mailto:elevate@grevya.com?subject=Application for Grevya Elevate Fellowship"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all shadow-accent-glow"
                >
                  <span>Apply For Fellowship</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ReusableCard>
          </RevealOnScroll>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarlyCareers;
