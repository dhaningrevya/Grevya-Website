import React, { useState } from "react";
import { ShieldCheck, Cpu, Zap, ArrowRight, CheckCircle2, Target, Award } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import Pill from "@/components/primitives/Pill";
import { Link } from "react-router-dom";

const engineeringPrinciples = [
  {
    id: "purpose",
    numeral: "01",
    label: "PURPOSE",
    title: "Engineering Mission",
    desc: "Grevya bridges the gap between experimental AI research and mission-critical enterprise software. We deliver deterministic system architectures that eliminate hallucination risks, handle API downtime gracefully, and enforce security guardrails at runtime.",
    bullets: ["Production AI/ML System Deployment", "Enterprise Security & Isolation", "Deterministic Workflow Routing"]
  },
  {
    id: "horizon",
    numeral: "02",
    label: "HORIZON",
    title: "Long-Term Vision",
    desc: "We envision an enterprise landscape powered by autonomous, governed AI systems that seamlessly orchestrate complex workflows while maintaining absolute human oversight and compliance.",
    bullets: ["Autonomous Agent Orchestration", "Governed AI System Integration", "Air-Gapped Data Retention"]
  },
  {
    id: "philosophy",
    numeral: "03",
    label: "PHILOSOPHY",
    title: "Engineering Principles",
    desc: "Zero hype, zero fluff. We measure our work by deployed system stability, verifiable data isolation, and operational efficiency rather than slide deck prototypes.",
    bullets: ["Schema-Grounded Executions", "Verifiable Audit Lineage", "Human-in-the-Loop Safeguards"]
  }
];

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("purpose");

  const activePrinciple = engineeringPrinciples.find((p) => p.id === activeTab) || engineeringPrinciples[0];

  return (
    <section id="about" className="py-20 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative overflow-hidden select-none border-t border-white/10">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#f97316]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-12 sm:space-y-16">
        
        {/* Hero Section Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <Eyebrow index="002" label="BRAND STATEMENT & ENGINEERING STORY" />
            <h1 className="font-display text-2xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95] break-words">
              Engineering Precision. <br />
              <GradientText className="inline">Built for Enterprise Scale.</GradientText>
            </h1>
            <p className="font-sans text-[#a1a1a1] text-sm sm:text-xl font-normal leading-relaxed max-w-3xl">
              Grevya is an AI-first software engineering consultancy and product development studio. We build production software systems that transform business operations.
            </p>
          </div>
        </RevealOnScroll>

        {/* Interactive Engineering Principles Workspace */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: Principle Track Controls */}
          <div className="lg:col-span-5 space-y-2.5">
            {engineeringPrinciples.map((pr) => {
              const isSelected = activeTab === pr.id;
              return (
                <button
                  key={pr.id}
                  onClick={() => setActiveTab(pr.id)}
                  onMouseEnter={() => setActiveTab(pr.id)}
                  onFocus={() => setActiveTab(pr.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? "bg-[#131313] border-[#f97316] text-white shadow-2xl border-l-4"
                      : "bg-[#131313]/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-[#f97316] uppercase tracking-[0.2em] mb-1">
                    {pr.numeral} / {pr.label}
                  </div>
                  <div className={`text-sm sm:text-base font-display font-bold uppercase tracking-wide ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {pr.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Principle Detail Inspector */}
          <div className="lg:col-span-7 bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-5 sm:p-8 space-y-5 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <span className="text-[#f97316] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                  {activePrinciple.label} INSPECTOR
                </span>
                <span className="text-[9px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  VERIFIED PRINCIPLE
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                {activePrinciple.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
                {activePrinciple.desc}
              </p>

              {/* Core Pillars Checklist */}
              <div className="space-y-2 pt-2 border-t border-white/5 font-sans text-xs">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider mb-1">
                  Key Operational Pillars
                </div>
                {activePrinciple.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f97316] flex-shrink-0" />
                    <span className="text-xs">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualitative Positioning Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-[#6b6b6b] uppercase text-[9px] sm:text-[10px]">Philosophy</span>
              <span className="text-[#f97316] font-bold text-[9px] sm:text-[10px]">"ZERO HYPE. DETERMINISTIC."</span>
            </div>

          </div>

        </div>

        {/* Action Banner */}
        <div className="p-6 sm:p-10 rounded-[20px] sm:rounded-[24px] bg-[#131313]/90 backdrop-blur-2xl border border-white/12 text-center space-y-5 shadow-2xl max-w-4xl mx-auto">
          <h3 className="font-display text-xl sm:text-4xl font-extrabold uppercase text-white">
            Explore Grevya AI Platform Products
          </h3>
          <p className="font-sans text-xs sm:text-base text-[#a1a1a1] max-w-2xl mx-auto">
            Discover our proprietary AI systems, RAG platforms, and custom software engineering solutions.
          </p>
          <div className="flex justify-center">
            <Link
              to="/#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all shadow-accent-glow"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
