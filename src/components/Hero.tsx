import React from "react";
import { ArrowRight, Cpu, Layers, ShieldCheck, CheckCircle2, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import Pill from "@/components/primitives/Pill";
import HeadingReveal from "@/components/primitives/HeadingReveal";
import MagneticButton from "@/components/interaction/MagneticButton";

const techCategories = [
  "AI SYSTEMS",
  "SOFTWARE ENGINEERING",
  "DATA PIPELINES",
  "ENTERPRISE AUTOMATION",
];

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getMotionProps = (delay: number) => {
    if (shouldReduceMotion) {
      return { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } };
    }
    return {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
    };
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#0a0a0a] text-[#fafafa] overflow-hidden flex items-center">
      {/* Background Atmosphere & Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      
      {/* Ambient Gradient Aura (Right hand glow) */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-br from-[#f97316]/12 via-[#ef4444]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#fb923c]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Left Decorative Hatch Mark */}
      <div className="absolute top-28 left-8 hidden lg:flex flex-col gap-1.5 opacity-30 pointer-events-none">
        <div className="w-8 h-[2px] bg-[#f97316]" />
        <div className="w-5 h-[2px] bg-white/40" />
        <div className="w-3 h-[2px] bg-white/20" />
      </div>

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Heavy Display Typography & Narrative */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10 text-left">
            
            {/* 1. Eyebrow with Index */}
            <motion.div {...getMotionProps(0.05)}>
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]" />
                </span>
                <Eyebrow
                  index="001"
                  label="ENTERPRISE AI SYSTEMS & SOFTWARE ENGINEERING"
                  className="text-xs sm:text-sm"
                />
              </div>
            </motion.div>

            {/* 2. Giant Hero Headline with HeadingReveal */}
            <HeadingReveal as="h1" delay={0.15} className="font-display text-5xl sm:text-7xl lg:text-7xl xl:text-[92px] font-extrabold uppercase text-[#fafafa] tracking-tighter leading-[0.88] max-w-5xl">
              Transforming Businesses Through{" "}
              <GradientText className="inline">Intelligent AI Automation</GradientText>
            </HeadingReveal>

            {/* 3. Supporting Copy */}
            <motion.div {...getMotionProps(0.25)}>
              <p className="font-sans text-[#a1a1a1] text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
                Grevya delivers production AI/ML platforms, agentic workflow engines, and scalable enterprise software solutions engineered for operational efficiency.
              </p>
            </motion.div>

            {/* 4. High Impact CTAs with MagneticButton */}
            <motion.div {...getMotionProps(0.35)}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <MagneticButton maxDistance={3}>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center justify-center gap-3 h-14 px-8 sm:px-10 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                  >
                    <span>Schedule Technical Review</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </MagneticButton>

                <button
                  onClick={() => scrollToSection("products")}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 sm:px-10 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/15 hover:border-white/30 text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.01] focus:outline-none"
                >
                  <span>Explore Products</span>
                </button>
              </div>
            </motion.div>

            {/* 5. Core Capability Domain Pills */}
            <motion.div {...getMotionProps(0.45)}>
              <div className="pt-8 border-t border-white/10 space-y-3">
                <div className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">
                  Core Capability Domains
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {techCategories.map((cat, i) => (
                    <Pill key={i} variant="default" size="sm">
                      {cat}
                    </Pill>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Floating Offset Staggered Visual Architecture Collage */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div {...getMotionProps(0.3)}>
              <div className="relative space-y-4 sm:space-y-6">
                
                {/* Visual Card 1: Top Floating Engine Badge (Offset Left) */}
                <div className="p-5 rounded-[24px] bg-[#131313]/90 backdrop-blur-xl border border-white/12 shadow-2xl space-y-3 transform lg:-translate-x-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                        <Cpu className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-display uppercase tracking-wide">
                          Model Engine & LLM Ops
                        </div>
                        <div className="text-xs text-[#a1a1a1]">Production Agent Execution</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#f97316]/15 text-[#fb923c] border border-[#f97316]/30">
                      V2.4 ACTIVE
                    </span>
                  </div>
                </div>

                {/* Visual Card 2: Central Architecture Canvas (Offset Right) */}
                <div className="p-6 sm:p-7 rounded-[24px] bg-[#131313]/95 backdrop-blur-2xl border border-[#f97316]/40 shadow-2xl space-y-5 transform lg:translate-x-3 transition-transform duration-300 hover:-translate-y-1">
                  
                  {/* Canvas Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#f97316]" />
                      <span className="text-white font-sans text-xs font-bold uppercase tracking-wider">
                        Grevya Architecture Canvas
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SYSTEM ONLINE
                    </span>
                  </div>

                  {/* Architecture Feature Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-[16px] bg-[#1a1a1a] border border-white/10 space-y-1.5">
                      <div className="flex items-center gap-2 text-[#fb923c]">
                        <Layers className="h-4 w-4" />
                        <span className="text-xs font-bold text-white font-sans uppercase">Agentic Mesh</span>
                      </div>
                      <p className="text-[11px] text-[#a1a1a1]">Autonomous multi-agent orchestration</p>
                    </div>

                    <div className="p-3.5 rounded-[16px] bg-[#1a1a1a] border border-white/10 space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-xs font-bold text-white font-sans uppercase">Guardrails</span>
                      </div>
                      <p className="text-[11px] text-[#a1a1a1]">Enterprise security & data isolation</p>
                    </div>
                  </div>

                  {/* Execution Log Snippet */}
                  <div className="p-4 rounded-[16px] bg-[#0a0a0a] border border-white/10 space-y-2 font-mono text-xs">
                    <div className="text-[10px] text-[#6b6b6b] uppercase tracking-wider border-b border-white/5 pb-1 flex justify-between">
                      <span>PIPELINE DISPATCH</span>
                      <span className="text-[#f97316]">LATENCY: 12ms</span>
                    </div>
                    <div className="space-y-1.5 text-[11px] font-sans">
                      <div className="flex justify-between items-center text-[#a1a1a1]">
                        <span>1. Vector Embedding Lookup</span>
                        <span className="font-mono text-xs text-[#a1a1a1]">OK</span>
                      </div>
                      <div className="flex justify-between items-center text-[#a1a1a1]">
                        <span>2. Schema Validation Engine</span>
                        <span className="font-mono text-xs text-[#a1a1a1]">OK</span>
                      </div>
                      <div className="flex justify-between items-center text-white font-medium">
                        <span>3. Multi-Agent Output Consensus</span>
                        <span className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> VERIFIED
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Visual Card 3: Bottom Metric Strip (Offset Left) */}
                <div className="p-4 sm:p-5 rounded-[24px] bg-[#131313]/90 backdrop-blur-xl border border-white/12 shadow-2xl grid grid-cols-3 gap-2 text-center font-sans transform lg:-translate-x-2 transition-transform duration-300 hover:-translate-y-1">
                  <div>
                    <div className="text-sm font-extrabold text-white uppercase font-display">99.9%</div>
                    <div className="text-[10px] text-[#a1a1a1] uppercase tracking-wider">Reliability</div>
                  </div>
                  <div className="border-x border-white/10">
                    <div className="text-sm font-extrabold text-[#fb923c] uppercase font-display">Zero Hype</div>
                    <div className="text-[10px] text-[#a1a1a1] uppercase tracking-wider">Deterministic</div>
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white uppercase font-display">Sub-50ms</div>
                    <div className="text-[10px] text-[#a1a1a1] uppercase tracking-wider">Execution</div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
