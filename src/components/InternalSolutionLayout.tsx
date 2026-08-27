import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import Pill from "@/components/primitives/Pill";
import ReusableCard from "@/components/primitives/ReusableCard";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { SolutionConfig } from "./solutions/SolutionConfig";
import { SolutionArchitectureConsole } from "./solutions/SolutionArchitectureConsole";
import { SolutionUseCaseMatrix } from "./solutions/SolutionUseCaseMatrix";

import AgenticVisualizer from "./solutions/visualizers/AgenticVisualizer";
import DataAnalyticsVisualizer from "./solutions/visualizers/DataAnalyticsVisualizer";
import ContentGenVisualizer from "./solutions/visualizers/ContentGenVisualizer";
import RAGVisualizer from "./solutions/visualizers/RAGVisualizer";

export const InternalSolutionLayout: React.FC<{ config: SolutionConfig }> = ({ config }) => {
  const [activeCapIdx, setActiveCapIdx] = useState<number>(0);
  const activeCap = config.capabilities[activeCapIdx] || config.capabilities[0];
  const CapIcon = activeCap.icon;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderSolutionVisualizer = () => {
    switch (config.slug) {
      case "agentic-ai":
        return <AgenticVisualizer />;
      case "data-analytics":
        return <DataAnalyticsVisualizer />;
      case "ai-content-generation":
        return <ContentGenVisualizer />;
      case "rag-application":
        return <RAGVisualizer />;
      default:
        return <AgenticVisualizer />;
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen selection:bg-[#f97316]/30 selection:text-white select-none">
      
      {/* Navigation Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-28 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#f97316]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131313] border border-white/10 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-[#f97316]">
                <Sparkles className="h-3.5 w-3.5 text-[#f97316]" />
                <span>{config.badge}</span>
              </div>

              <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-[0.98] break-normal">
                {config.title}{" "}
                <GradientText className="inline">{config.titleHighlight}</GradientText>
              </h1>

              <p className="font-sans text-sm sm:text-xl text-[#a1a1a1] max-w-2xl font-normal leading-relaxed">
                {config.tagline}
              </p>

              <p className="font-sans text-xs sm:text-base text-[#6b6b6b] max-w-2xl leading-relaxed">
                {config.subhead}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-3 h-13 sm:h-14 px-7 sm:px-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all shadow-accent-glow"
                >
                  <span>Discuss Your Workflow</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="#architecture"
                  className="inline-flex items-center justify-center gap-2 h-13 sm:h-14 px-7 sm:px-8 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all"
                >
                  <span>Explore Architecture</span>
                </a>
              </div>

              {/* Bullet Pills */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {config.heroBullets.map((bullet, i) => (
                  <Pill key={i} variant="default" size="sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#f97316] inline mr-1.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </Pill>
                ))}
              </div>
            </div>

            {/* Right Column: Solution-Specific Visualizer */}
            <div className="lg:col-span-6">
              {renderSolutionVisualizer()}
            </div>

          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="py-16 sm:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 space-y-10">
          <RevealOnScroll delay={0.1} direction="up">
            <div className="text-left space-y-2.5 max-w-3xl">
              <Eyebrow label="ENGINEERING CAPABILITIES" />
              <h2 className="font-display text-2xl sm:text-5xl font-extrabold uppercase text-white">
                Enterprise Capabilities
              </h2>
              <p className="font-sans text-xs sm:text-base text-[#a1a1a1] max-w-2xl">
                Modules engineered for deterministic performance and auditability.
              </p>
            </div>
          </RevealOnScroll>

          {/* Interactive Capability Inspector Workspace */}
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left: Capability Track Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {config.capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const isSelected = activeCapIdx === idx;
                return (
                  <button
                    key={cap.title}
                    onClick={() => setActiveCapIdx(idx)}
                    onMouseEnter={() => setActiveCapIdx(idx)}
                    onFocus={() => setActiveCapIdx(idx)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all flex items-center justify-between focus:outline-none ${
                      isSelected
                        ? "bg-[#131313] border-[#f97316] text-white shadow-md border-l-4"
                        : "bg-[#131313]/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isSelected ? "text-[#f97316]" : "text-slate-400"}`} />
                      <span className="text-xs font-mono font-bold uppercase truncate">{cap.title}</span>
                    </div>
                    <ArrowRight className={`h-4 w-4 flex-shrink-0 ${isSelected ? "text-[#f97316]" : "opacity-0"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Active Capability Inspector Display Window */}
            <div className="lg:col-span-7 bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-5 sm:p-8 space-y-4 shadow-2xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="p-2 rounded-xl bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 flex-shrink-0">
                      <CapIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white truncate">
                      {activeCap.title}
                    </h3>
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                    ACTIVE
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
                  {activeCap.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-300">
                <span>Enterprise Architecture Integration</span>
                <span className="text-[#f97316] font-bold">PRODUCTION READY</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Architecture & Governance Console Section */}
      <section id="architecture" className="py-16 sm:py-28 bg-[#131313] border-y border-white/10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 space-y-10">
          <RevealOnScroll delay={0.1} direction="up">
            <div className="text-left space-y-2.5 max-w-3xl">
              <Eyebrow label="GOVERNANCE & RELIABILITY" />
              <h2 className="font-display text-2xl sm:text-5xl font-extrabold uppercase text-white">
                Architecture & Security Controls
              </h2>
              <p className="font-sans text-xs sm:text-base text-[#a1a1a1] max-w-2xl">
                Governance, data isolation, and runtime guardrails built into every layer.
              </p>
            </div>
          </RevealOnScroll>

          <SolutionArchitectureConsole layers={config.governanceLayers} />
        </div>
      </section>

      {/* Production Use Case Matrix Section */}
      <section className="py-16 sm:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 space-y-10">
          <RevealOnScroll delay={0.1} direction="up">
            <div className="text-left space-y-2.5 max-w-3xl">
              <Eyebrow label="PRODUCTION DEPLOYMENTS" />
              <h2 className="font-display text-2xl sm:text-5xl font-extrabold uppercase text-white">
                Target Use Cases
              </h2>
            </div>
          </RevealOnScroll>

          <SolutionUseCaseMatrix useCases={config.useCases} />
        </div>
      </section>

      {/* Conversion Callout Banner */}
      <section className="py-16 sm:py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 sm:p-10 rounded-[20px] sm:rounded-[24px] bg-[#131313]/90 backdrop-blur-2xl border border-white/12 text-center space-y-5 shadow-2xl">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white">
              Design Your AI Workflow With Grevya
            </h2>
            <p className="font-sans text-xs sm:text-base text-[#a1a1a1] max-w-2xl mx-auto">
              Consult directly with Grevya software architects to evaluate feasibility and deployment timelines.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 h-13 sm:h-14 px-7 sm:px-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all shadow-accent-glow"
            >
              <span>Book Technical Review</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default InternalSolutionLayout;
