import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Database, CheckCircle2, ShieldCheck, Sparkles, FileSearch, ArrowUpRight } from "lucide-react";

export interface ProductPreviewProps {
  active?: boolean;
}

const proposalLayers = [
  {
    id: "requirements",
    label: "REQUIREMENTS",
    title: "RFP Requirement Matrix Extraction",
    desc: "Parses complex RFP requirement matrices into structured compliance specifications.",
    status: "REQUIREMENTS EXTRACTED"
  },
  {
    id: "knowledge",
    label: "KNOWLEDGE",
    title: "Vector Knowledge Retrieval",
    desc: "Queries enterprise document databases via hybrid dense-sparse vector search.",
    status: "CONTEXT ASSEMBLED"
  },
  {
    id: "context",
    label: "CONTEXT",
    title: "Compliance Verification",
    desc: "Cross-checks retrieved proposal content against regulatory compliance guidelines.",
    status: "RESPONSE GROUNDED"
  },
  {
    id: "draft",
    label: "DRAFT",
    title: "Proposal Output Generation",
    desc: "Drafts fully structured proposal documents grounded in enterprise data.",
    status: "DRAFT READY"
  }
];

export const ProposalAIVisual: React.FC<ProductPreviewProps> = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("requirements");
  const shouldReduceMotion = useReducedMotion();

  const activeLayer = proposalLayers.find((l) => l.id === activeLayerId) || proposalLayers[0];

  return (
    <div className="bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-6 space-y-5 shadow-2xl relative overflow-hidden select-none">
      
      {/* Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase">
          <FileText className="h-4 w-4 text-[#ef4444]" />
          <span>RFP Document Intelligence Suite</span>
        </div>
        <span className="text-[9px] font-bold text-[#ef4444] px-2 py-0.5 rounded bg-[#ef4444]/10 border border-[#ef4444]/20">
          PROPOSAL ENGINE
        </span>
      </div>

      {/* RFP Matrix Parsing Window (Product 3 Visual Anchor) */}
      <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between text-[9px] text-[#6b6b6b] uppercase border-b border-white/5 pb-1">
          <div className="flex items-center gap-1.5 text-[#ef4444]">
            <FileSearch className="h-3 w-3" />
            <span>Ingested RFP Document: enterprise_rfp_v2.pdf</span>
          </div>
          <span className="text-white font-bold">14 REQUIREMENTS PARSED</span>
        </div>

        <div className="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/10 space-y-1.5 text-[10px]">
          <div className="flex items-center justify-between text-slate-200">
            <span className="font-bold">Req #4.2: Enterprise SLA & Data Encryption</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> GROUNDED
            </span>
          </div>
          <p className="text-[10px] text-[#a1a1a1] font-sans italic">
            "System provides 99.9% uptime SLA with air-gapped KMS encryption keys."
          </p>
        </div>
      </div>

      {/* State Switcher Tabs */}
      <div className="flex items-center gap-1 bg-[#0a0a0a] p-1 rounded-xl border border-white/5 overflow-x-auto">
        {proposalLayers.map((layer) => {
          const isActive = activeLayerId === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayerId(layer.id)}
              onMouseEnter={() => setActiveLayerId(layer.id)}
              onFocus={() => setActiveLayerId(layer.id)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none ${
                isActive
                  ? "bg-[#ef4444] text-white shadow-sm"
                  : "text-[#a1a1a1] hover:text-white hover:bg-white/5"
              }`}
            >
              {layer.label}
            </button>
          );
        })}
      </div>

      {/* Active Layer Inspector */}
      <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-white uppercase">
            {activeLayer.title}
          </span>
          <span className="text-[9px] font-mono text-[#ef4444] font-bold px-2 py-0.5 rounded bg-[#ef4444]/10 border border-[#ef4444]/20">
            {activeLayer.status}
          </span>
        </div>

        <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
          {activeLayer.desc}
        </p>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span>RAG Knowledge Base Citations</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> VERIFIED
          </span>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="p-3 rounded-lg bg-[#0a0a0a] border border-white/5 text-center font-mono text-[10px] text-[#a1a1a1] uppercase tracking-wider">
        "Turn complex RFPs into grounded proposal workflows."
      </div>

    </div>
  );
};

export default ProposalAIVisual;
