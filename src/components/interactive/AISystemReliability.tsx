import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { Cpu, Terminal, ShieldCheck, CheckCircle2, RefreshCw, Eye, Users, ArrowDown, Activity } from "lucide-react";

interface ReliabilityLayer {
  id: string;
  name: string;
  scope: string;
  desc: string;
  status: string;
  icon: React.ComponentType<any>;
  auditSignal: string;
}

const reliabilityLayers: ReliabilityLayer[] = [
  {
    id: "orchestration",
    name: "Model Orchestration",
    scope: "Semantic Routing",
    desc: "Routes model execution according to task requirements and dynamic model fallback paths.",
    status: "CONNECTED",
    icon: Cpu,
    auditSignal: "Dynamic Endpoint Routing Active"
  },
  {
    id: "reasoning",
    name: "Reasoning Engine",
    scope: "Multi-Step Logic",
    desc: "Executes structured prompt logic, multi-step reasoning verification, and multi-agent consensus.",
    status: "ACTIVE",
    icon: Terminal,
    auditSignal: "Reasoning Output Validated"
  },
  {
    id: "validation",
    name: "Active Validation",
    scope: "Schema Guardrails",
    desc: "Validates structured outputs against system schemas before downstream execution.",
    status: "ENFORCED",
    icon: ShieldCheck,
    auditSignal: "Strict JSON Schema Alignment"
  },
  {
    id: "observability",
    name: "Observability Tracing",
    scope: "Execution Logs",
    desc: "Traces execution nodes and parameters via structured execution logs for complete auditability.",
    status: "LIVE",
    icon: Eye,
    auditSignal: "Observability Trace Active"
  },
  {
    id: "recovery",
    name: "Fail-Safe Recovery",
    scope: "Fallback Protocol",
    desc: "Provides controlled recovery paths and replica failovers when execution conditions fail.",
    status: "READY",
    icon: RefreshCw,
    auditSignal: "Automated Retry Routing Ready"
  },
  {
    id: "oversight",
    name: "Human Oversight",
    scope: "Approval Hooks",
    desc: "Exposes approval checkpoints for regulated domain operations and human-in-the-loop triggers.",
    status: "HOOKED",
    icon: Users,
    auditSignal: "Human Checkpoint Interceptor Live"
  }
];

export const AISystemReliability: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("orchestration");
  const shouldReduceMotion = useReducedMotion();

  const activeLayer = reliabilityLayers.find((l) => l.id === activeLayerId) || reliabilityLayers[0];

  return (
    <section id="reliability" className="py-20 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative border-t border-white/10 overflow-hidden select-none">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-12 sm:space-y-16">
        
        {/* Section Wayfinding Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <Eyebrow index="004" label="AI SYSTEMS / RELIABILITY CONTROL" />
            <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95] break-words">
              ENGINEERED FOR <br />
              <GradientText className="inline">RELIABILITY</GradientText>
            </h2>
            <p className="font-sans text-[#a1a1a1] text-sm sm:text-xl font-normal leading-relaxed max-w-2xl">
              We design deterministic system architectures that eliminate hallucination risks, handle API downtime gracefully, and enforce security guardrails at runtime.
            </p>
          </div>
        </RevealOnScroll>

        {/* Reliability Layers Architectural Mesh Workspace */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Stacked Layer Controls */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider mb-2 flex justify-between">
              <span>Execution Layers</span>
              <span className="text-[#f97316]">Select Layer to Inspect</span>
            </div>

            {reliabilityLayers.map((layer, index) => {
              const isSelected = activeLayerId === layer.id;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  onMouseEnter={() => setActiveLayerId(layer.id)}
                  onFocus={() => setActiveLayerId(layer.id)}
                  className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between gap-3 focus:outline-none ${
                    isSelected
                      ? "bg-[#131313] border-[#f97316] text-white shadow-2xl border-l-4"
                      : "bg-[#131313]/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className={`p-2 rounded-lg ${isSelected ? "bg-[#f97316]/10 text-[#f97316]" : "bg-white/5 text-slate-400"} flex-shrink-0`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[9px] font-mono text-[#6b6b6b] uppercase">{layer.scope}</div>
                      <div className={`text-xs sm:text-sm font-display font-bold uppercase truncate ${isSelected ? "text-white" : "text-slate-300"}`}>
                        {layer.name}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[8px] sm:text-[9px] font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                    isSelected
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-white/5 text-slate-400"
                  }`}>
                    {layer.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Audit Inspector Display Window */}
          <div className="lg:col-span-6 bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-5 sm:p-8 space-y-5 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5 truncate">
                  <div className="p-2.5 rounded-xl bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 flex-shrink-0">
                    <activeLayer.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white truncate">
                    {activeLayer.name}
                  </h3>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                  {activeLayer.status}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
                {activeLayer.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-1 font-mono text-[10px]">
                <div className="text-[#6b6b6b] uppercase">Active Audit Signal</div>
                <div className="text-emerald-400 font-bold flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{activeLayer.auditSignal}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-300">
              <span>Architecture Governance State</span>
              <span className="text-[#f97316] font-bold">PRODUCTION VERIFIED</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AISystemReliability;
