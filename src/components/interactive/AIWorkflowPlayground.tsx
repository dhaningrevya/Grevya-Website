import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { Workflow, Play, CheckCircle2, Shield, Network, Terminal, Database, Sparkles } from "lucide-react";

interface WorkflowStage {
  id: string;
  stepNum: string;
  name: string;
  subhead: string;
  desc: string;
  status: string;
  auditCheck: string;
}

const workflowStages: WorkflowStage[] = [
  {
    id: "ingestion",
    stepNum: "01",
    name: "Data & Request Ingestion",
    subhead: "Multi-Source Payload Parsing",
    desc: "Ingests raw enterprise inputs, API webhooks, document attachments, or database triggers into isolated execution context.",
    status: "INGESTED",
    auditCheck: "Payload Type & Security Check Passed"
  },
  {
    id: "retrieval",
    stepNum: "02",
    name: "Vector Knowledge Retrieval",
    subhead: "Dense-Sparse Hybrid RAG",
    desc: "Queries enterprise document vector indices with hybrid dense embeddings and keyword reranking to pull grounded context.",
    status: "CONTEXT READY",
    auditCheck: "Schema Citations Bound & Verified"
  },
  {
    id: "orchestration",
    stepNum: "03",
    name: "Multi-Agent Logic Routing",
    subhead: "State Mesh Execution",
    desc: "Executes agent handoffs across specialist nodes (Recruitment, Triage, RFP, Audio) with strictly typed state isolation.",
    status: "EXECUTING",
    auditCheck: "Agent State Handoff Confirmed"
  },
  {
    id: "guardrails",
    stepNum: "04",
    name: "Schema Guardrail Verification",
    subhead: "Determinism & Safety Filter",
    desc: "Validates agent JSON parameters and response content against strict JSON schemas before external endpoint dispatch.",
    status: "GUARDED",
    auditCheck: "Zero Hallucination Guardrail OK"
  },
  {
    id: "dispatch",
    stepNum: "05",
    name: "Enterprise Action Dispatch",
    subhead: "Audited System Mutation",
    desc: "Dispatches audited action payloads directly to enterprise software endpoints, ERP systems, or notification hubs.",
    status: "DISPATCHED",
    auditCheck: "100% Audit Lineage Logged"
  }
];

export const AIWorkflowPlayground: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>("orchestration");
  const shouldReduceMotion = useReducedMotion();

  const activeIdx = workflowStages.findIndex((s) => s.id === activeStageId);
  const activeStage = workflowStages[activeIdx] || workflowStages[2];

  return (
    <section id="workflow-lab" className="py-20 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative border-t border-white/10 overflow-hidden select-none">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-12 sm:space-y-16">
        
        {/* Section Wayfinding Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <Eyebrow index="005" label="INTERACTIVE SYSTEM PIPELINE / WORKFLOW LAB" />
            <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95] break-words">
              ENTERPRISE WORKFLOW <br />
              <GradientText className="inline">PLAYGROUND</GradientText>
            </h2>
            <p className="font-sans text-[#a1a1a1] text-sm sm:text-xl font-normal leading-relaxed max-w-2xl">
              Trace how Grevya transforms unstructured enterprise inputs into deterministic, audited operational outcomes.
            </p>
          </div>
        </RevealOnScroll>

        {/* Workflow Lab Interactive Workspace */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Step Progress Bar Track */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#131313]/90 backdrop-blur-2xl border border-white/12 space-y-3 font-mono text-xs shadow-2xl">
            <div className="flex items-center justify-between text-[10px] text-[#6b6b6b] uppercase">
              <span>Pipeline Stage Track</span>
              <span className="text-[#f97316]">Active: Stage {activeIdx + 1} of 5</span>
            </div>

            <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1">
              {workflowStages.map((stg, i) => {
                const isCompleted = i <= activeIdx;
                const isCurrent = i === activeIdx;
                return (
                  <React.Fragment key={stg.id}>
                    <button
                      onClick={() => setActiveStageId(stg.id)}
                      className={`px-3 py-2 rounded-xl text-left transition-all whitespace-nowrap focus:outline-none flex items-center gap-2 border ${
                        isCurrent
                          ? "bg-[#f97316] text-white border-[#f97316] shadow-md"
                          : isCompleted
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-white/5 text-[#a1a1a1] border-white/10"
                      }`}
                    >
                      <span className="text-[10px] font-bold">{stg.stepNum}</span>
                      <span className="text-xs font-bold font-display uppercase">{stg.name.split(" ")[0]}</span>
                    </button>
                    {i < workflowStages.length - 1 && (
                      <div className={`w-3 sm:w-6 h-[2px] flex-shrink-0 ${i < activeIdx ? "bg-emerald-400" : "bg-white/10"}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Active Stage Inspector Readout Card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#131313]/90 backdrop-blur-2xl border border-white/12 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#f97316] font-bold uppercase tracking-wider">
                  STAGE {activeStage.stepNum} / {activeStage.subhead}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-0.5">
                  {activeStage.name}
                </h3>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                {activeStage.status}
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed max-w-3xl">
              {activeStage.desc}
            </p>

            <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-1 font-mono text-[10px]">
              <div className="text-[#6b6b6b] uppercase">Audit Signal Checkpoint</div>
              <div className="text-emerald-400 font-bold flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                <span>{activeStage.auditCheck}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIWorkflowPlayground;
