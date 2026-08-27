import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { Sparkles, Database, Terminal, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface IntelligenceNode {
  id: string;
  name: string;
  category: string;
  desc: string;
  input: string;
  output: string;
}

const intelligenceNodes: IntelligenceNode[] = [
  {
    id: "unstructured-input",
    name: "Raw Unstructured Input",
    category: "INGESTION",
    desc: "Ingests raw audio streams, PDF RFPs, patient triage files, or unstructured text documents.",
    input: "Raw Audio / PDF / JSON Telemetry Payload",
    output: "Clean Normalized Context Buffer"
  },
  {
    id: "knowledge-vector",
    name: "Hybrid Vector Index",
    category: "INTELLIGENCE",
    desc: "Queries enterprise document databases via hybrid dense-sparse vector search and keyword reranking.",
    input: "Dense Embedding Query (+ Filter ACL)",
    output: "Top-K Grounded Citation Chunks"
  },
  {
    id: "multi-agent-reasoning",
    name: "Multi-Agent Mesh",
    category: "REASONING",
    desc: "Executes structured multi-step reasoning algorithms across specialized candidate, triage, or content agents.",
    input: "Typed Task Intent + Grounded Context",
    output: "Validated Intermediate Reasoning State"
  },
  {
    id: "runtime-guardrail",
    name: "JSON Guardrail Filter",
    category: "VALIDATION",
    desc: "Enforces zero-hallucination compliance by testing output against strict JSON schemas before endpoint dispatch.",
    input: "Agent Response Payload",
    output: "Audited Deterministic System Mutation"
  }
];

export const AIIntelligenceCanvas: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("multi-agent-reasoning");
  const shouldReduceMotion = useReducedMotion();

  const activeNode = intelligenceNodes.find((n) => n.id === selectedNodeId) || intelligenceNodes[2];

  return (
    <section id="canvas" className="py-20 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative border-t border-white/10 overflow-hidden select-none">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-12 sm:space-y-16">
        
        {/* Section Wayfinding Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <Eyebrow index="006" label="SYSTEM ARCHITECTURE CANVAS / INTELLIGENCE ENGINE" />
            <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95] break-words">
              SIGNATURE INTELLIGENCE <br />
              <GradientText className="inline">SYSTEM CANVAS</GradientText>
            </h2>
            <p className="font-sans text-[#a1a1a1] text-sm sm:text-xl font-normal leading-relaxed max-w-2xl">
              Inspect the underlying technical nodes that power Grevya's enterprise AI systems.
            </p>
          </div>
        </RevealOnScroll>

        {/* Spatial Node Mesh Canvas Workspace */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left: Transformation Pipeline Nodes */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider mb-2 flex justify-between">
              <span>Pipeline Nodes</span>
              <span className="text-[#f97316]">Select Node</span>
            </div>

            {intelligenceNodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  onMouseEnter={() => setSelectedNodeId(node.id)}
                  onFocus={() => setSelectedNodeId(node.id)}
                  className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between gap-3 focus:outline-none ${
                    isSelected
                      ? "bg-[#131313] border-[#f97316] text-white shadow-2xl border-l-4"
                      : "bg-[#131313]/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="truncate">
                    <div className="text-[9px] font-mono text-[#f97316] uppercase">{node.category}</div>
                    <div className={`text-xs sm:text-sm font-display font-bold uppercase truncate ${isSelected ? "text-white" : "text-slate-300"}`}>
                      {node.name}
                    </div>
                  </div>

                  <ArrowRight className={`h-4 w-4 flex-shrink-0 ${isSelected ? "text-[#f97316]" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Node Inspector Display Window */}
          <div className="lg:col-span-6 bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-5 sm:p-8 space-y-5 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <span className="text-[#f97316] font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                  {activeNode.category} NODE INSPECTOR
                </span>
                <span className="text-[9px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  NODE ACTIVE
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-2xl font-bold uppercase text-white">
                {activeNode.name}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
                {activeNode.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/5 font-mono text-[10px]">
                <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-1">
                  <span className="text-[#6b6b6b] uppercase">Node Input Parameter:</span>
                  <div className="text-slate-200 font-bold">{activeNode.input}</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-1">
                  <span className="text-[#6b6b6b] uppercase">Node Output Target:</span>
                  <div className="text-emerald-400 font-bold">{activeNode.output}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-300">
              <span>Canvas Architecture Trace</span>
              <span className="text-[#f97316] font-bold">DETERMINISTIC VERIFIED</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AIIntelligenceCanvas;
