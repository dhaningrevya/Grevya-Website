import React, { useState } from "react";
import { ArrowRight, Cpu, Layers, ShieldCheck, CheckCircle2, Terminal, Activity, Database, Sparkles, Network } from "lucide-react";
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

interface CommandModule {
  id: string;
  stepNumber: string;
  label: string;
  title: string;
  desc: string;
  status: string;
  icon: React.ComponentType<any>;
  signals: string[];
}

const commandModules: CommandModule[] = [
  {
    id: "input",
    stepNumber: "01",
    label: "INPUT",
    title: "Task Intent Ingestion",
    desc: "Ingests enterprise multi-source data streams, user intent payloads, and API parameters.",
    status: "INGESTED",
    icon: Network,
    signals: ["Data Isolation Protocol Active", "Air-Gapped Ingestion Ready", "Zero Data Leakage Check OK"]
  },
  {
    id: "intelligence",
    stepNumber: "02",
    label: "INTELLIGENCE",
    title: "RAG & Knowledge Retrieval",
    desc: "Indexes enterprise document databases with hybrid dense-sparse vector search.",
    status: "RETRIEVED",
    icon: Database,
    signals: ["Hybrid Vector Indexing Active", "Reranking Models Connected", "Schema-Grounded Citations"]
  },
  {
    id: "reasoning",
    stepNumber: "03",
    label: "REASONING",
    title: "Multi-Agent Orchestration",
    desc: "Executes structured multi-step reasoning algorithms and autonomous agent handoffs.",
    status: "EXECUTING",
    icon: Terminal,
    signals: ["Agent Execution Mesh Live", "Reasoning Output Validated", "Recursive Logic Check OK"]
  },
  {
    id: "validation",
    stepNumber: "04",
    label: "VALIDATION",
    title: "Runtime Guardrail Filter",
    desc: "Validates intermediate outputs against strict JSON schema rules and safety constraints.",
    status: "ENFORCED",
    icon: ShieldCheck,
    signals: ["JSON Schema Verification Active", "Compliance Guardrails Hooked", "Deterministic Formatting"]
  },
  {
    id: "outcome",
    stepNumber: "05",
    label: "OUTCOME",
    title: "Deterministic Dispatch",
    desc: "Dispatches audited action payloads directly to enterprise software endpoints.",
    status: "DISPATCHED",
    icon: Sparkles,
    signals: ["Enterprise Action Dispatched", "Full Lineage Trace Logged", "Audit Signal Confirmed"]
  }
];

export const Hero: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>("reasoning");
  const shouldReduceMotion = useReducedMotion();

  const activeIdx = commandModules.findIndex((m) => m.id === activeModuleId);
  const activeModule = commandModules[activeIdx] || commandModules[2];

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
    <section className="relative min-h-screen pt-36 sm:pt-40 lg:pt-44 xl:pt-48 pb-20 lg:pb-32 bg-[#0a0a0a] text-[#fafafa] overflow-hidden flex items-center select-none">
      {/* Background Atmosphere & Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      
      {/* Ambient Gradient Aura */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-br from-[#f97316]/12 via-[#ef4444]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#fb923c]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Display Typography & Dominant Headline */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left relative z-10">
            
            {/* 1. Eyebrow */}
            <motion.div {...getMotionProps(0.05)}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 relative flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]" />
                </span>
                <Eyebrow
                  index="001"
                  label="ENTERPRISE AI SYSTEMS & SOFTWARE ENGINEERING"
                  className="text-xs"
                />
              </div>
            </motion.div>

            {/* 2. Headline (Deliberate Line Composition, Zero Column Overlap, Syne Display Scale) */}
            <HeadingReveal as="h1" delay={0.15} className="font-display text-2.5xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[60px] font-extrabold uppercase text-[#fafafa] tracking-tight leading-[1.02] break-normal max-w-full">
              Transforming <br className="hidden sm:inline" />
              Businesses Through <br className="hidden sm:inline" />
              <GradientText className="inline">Intelligent AI Automation</GradientText>
            </HeadingReveal>

            {/* 3. Subtitle */}
            <motion.div {...getMotionProps(0.25)}>
              <p className="font-sans text-[#a1a1a1] text-sm sm:text-xl font-normal leading-relaxed max-w-2xl">
                Grevya delivers production AI/ML platforms, agentic workflow engines, and scalable enterprise software solutions engineered for operational efficiency.
              </p>
            </motion.div>

            {/* 4. Action Buttons */}
            <motion.div {...getMotionProps(0.35)}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <MagneticButton maxDistance={3}>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center justify-center gap-3 h-13 sm:h-14 px-7 sm:px-10 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                  >
                    <span>Schedule Technical Review</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </MagneticButton>

                <button
                  onClick={() => scrollToSection("products")}
                  className="inline-flex items-center justify-center gap-2 h-13 sm:h-14 px-7 sm:px-10 rounded-full bg-[#131313] hover:bg-[#1a1a1a] border border-white/15 hover:border-white/30 text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none"
                >
                  <span>Explore Products</span>
                </button>
              </div>
            </motion.div>

            {/* 5. Capability Domains */}
            <motion.div {...getMotionProps(0.45)}>
              <div className="pt-6 border-t border-white/10 space-y-2.5">
                <div className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#6b6b6b]">
                  Core Capability Domains
                </div>
                <div className="flex flex-wrap gap-2">
                  {techCategories.map((cat, i) => (
                    <Pill key={i} variant="default" size="sm">
                      {cat}
                    </Pill>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Anchor — ENTERPRISE AI COMMAND CONSOLE */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div {...getMotionProps(0.3)}>
              <div className="p-5 sm:p-7 rounded-[20px] sm:rounded-[24px] bg-[#131313]/95 backdrop-blur-2xl border border-white/12 shadow-2xl space-y-5 sm:space-y-6 relative overflow-hidden group">
                
                {/* Command Center Title Header Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Grevya AI Operations
                      </div>
                      <div className="text-[9px] text-[#6b6b6b] uppercase tracking-widest font-mono">
                        Command Console
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] sm:text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </div>
                </div>

                {/* Connected Execution Pipeline Track */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2.5 font-mono text-[10px]">
                  <div className="flex items-center justify-between text-[9px] text-[#6b6b6b] uppercase">
                    <span>Execution Flow</span>
                    <span className="text-[#f97316]">Stage {activeIdx + 1} of 5</span>
                  </div>

                  <div className="flex items-center justify-between gap-1">
                    {commandModules.map((mod, i) => {
                      const isCompleted = i <= activeIdx;
                      const isCurrent = i === activeIdx;
                      return (
                        <React.Fragment key={mod.id}>
                          <button
                            onClick={() => setActiveModuleId(mod.id)}
                            onMouseEnter={() => setActiveModuleId(mod.id)}
                            onFocus={() => setActiveModuleId(mod.id)}
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center font-bold text-[9px] sm:text-[10px] transition-all focus:outline-none ${
                              isCurrent
                                ? "bg-[#f97316] text-white border-[#f97316] ring-2 ring-[#f97316]/30 shadow-md"
                                : isCompleted
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                                : "bg-white/5 text-[#6b6b6b] border-white/10"
                            }`}
                          >
                            {i + 1}
                          </button>
                          {i < commandModules.length - 1 && (
                            <div className={`flex-1 h-[2px] transition-colors duration-300 ${i < activeIdx ? "bg-emerald-400" : "bg-white/10"}`} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Module Selector Bar */}
                <div className="flex items-center gap-1 bg-[#0a0a0a]/80 backdrop-blur-md p-1 rounded-xl border border-white/10 overflow-x-auto">
                  {commandModules.map((mod) => {
                    const isModActive = activeModuleId === mod.id;
                    return (
                      <button
                        key={mod.id}
                        onClick={() => setActiveModuleId(mod.id)}
                        onMouseEnter={() => setActiveModuleId(mod.id)}
                        onFocus={() => setActiveModuleId(mod.id)}
                        className={`px-2.5 py-1.5 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none ${
                          isModActive
                            ? "bg-[#f97316] text-white shadow-md border-b-2 border-white"
                            : "text-[#a1a1a1] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {mod.label}
                      </button>
                    );
                  })}
                </div>

                {/* Active Inspector Display Window */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2">
                      <activeModule.icon className="h-4 w-4 text-[#f97316]" />
                      <span className="text-xs font-mono font-bold text-white uppercase truncate max-w-[160px] sm:max-w-[200px]">
                        {activeModule.title}
                      </span>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {activeModule.status}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed min-h-[36px]">
                    {activeModule.desc}
                  </p>

                  {/* Operational Audit Signals Checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5 font-sans text-xs text-slate-200">
                    <div className="text-[8px] sm:text-[9px] font-mono text-[#6b6b6b] uppercase tracking-wider mb-1">
                      System Audit Signals
                    </div>
                    {activeModule.signals?.map((sig, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{sig}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Qualitative System Badges Strip */}
                <div className="pt-2 border-t border-white/10 grid grid-cols-3 gap-1.5 text-center font-mono text-[8px] sm:text-[9px] uppercase tracking-wider">
                  <div className="p-1.5 rounded-lg bg-[#0a0a0a]/90 border border-white/5 text-slate-300 font-semibold truncate">
                    GROUNDED
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#0a0a0a]/90 border border-white/5 text-[#f97316] font-semibold truncate">
                    GOVERNED
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#0a0a0a]/90 border border-white/5 text-slate-300 font-semibold truncate">
                    OVERSIGHT
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
