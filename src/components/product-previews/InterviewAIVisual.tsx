import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { User, Activity, CheckCircle2, BarChart3, Mic, ShieldCheck } from "lucide-react";

export interface ProductPreviewProps {
  active?: boolean;
}

const interviewLayers = [
  {
    id: "signals",
    label: "SIGNALS",
    title: "Interview Signal Extraction",
    desc: "Captures candidate audio streams, speech cadence, and domain keyword frequency.",
    status: "SIGNAL CAPTURED"
  },
  {
    id: "competency",
    label: "COMPETENCY",
    title: "Domain Competency Mapping",
    desc: "Maps candidate responses against custom technical competency rubrics.",
    status: "COMPETENCY MAPPED"
  },
  {
    id: "evaluation",
    label: "EVALUATION",
    title: "Structured Evaluation",
    desc: "Calculates weighted scoring criteria across technical depth and problem-solving.",
    status: "EVALUATION READY"
  },
  {
    id: "decision",
    label: "DECISION",
    title: "Hiring Decision Support",
    desc: "Outputs audited candidate insight summaries directly to hiring managers.",
    status: "DECISION SUPPORTED"
  }
];

export const InterviewAIVisual: React.FC<ProductPreviewProps> = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("signals");
  const shouldReduceMotion = useReducedMotion();

  const activeLayer = interviewLayers.find((l) => l.id === activeLayerId) || interviewLayers[0];

  return (
    <div className="bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-6 space-y-5 shadow-2xl relative overflow-hidden select-none">
      
      {/* Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase">
          <User className="h-4 w-4 text-[#f97316]" />
          <span>Candidate Intelligence Workspace</span>
        </div>
        <span className="text-[9px] font-bold text-[#f97316] px-2 py-0.5 rounded bg-[#f97316]/10 border border-[#f97316]/20">
          RECRUITMENT ENGINE
        </span>
      </div>

      {/* Candidate Scorecard Sub-Header */}
      <div className="p-3.5 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] flex items-center justify-center font-bold">
            <User className="h-4 w-4" />
          </div>
          <div>
            <div className="text-white font-bold uppercase text-[11px]">Senior AI Architect Candidate</div>
            <div className="text-[9px] text-[#6b6b6b]">Technical Assessment • Stream Active</div>
          </div>
        </div>
        <span className="text-[9px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          RECOMMENDED
        </span>
      </div>

      {/* Audio Waveform Signal Graph (Product 1 Visual Anchor) */}
      <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[9px] font-mono text-[#6b6b6b] uppercase">
          <div className="flex items-center gap-1.5 text-[#f97316]">
            <Mic className="h-3 w-3 animate-pulse" />
            <span>Speech Audio Stream</span>
          </div>
          <span>Cadence: 142 wpm</span>
        </div>
        {/* Simulated Waveform Bars */}
        <div className="flex items-end gap-1 h-8 px-1">
          {[40, 65, 30, 85, 95, 50, 70, 90, 45, 80, 60, 100, 75, 40, 60, 90, 35, 75].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm transition-all duration-300 ${i % 2 === 0 ? "bg-[#f97316]" : "bg-white/20"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* State Switcher Tabs */}
      <div className="flex items-center gap-1 bg-[#0a0a0a] p-1 rounded-xl border border-white/5 overflow-x-auto">
        {interviewLayers.map((layer) => {
          const isActive = activeLayerId === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayerId(layer.id)}
              onMouseEnter={() => setActiveLayerId(layer.id)}
              onFocus={() => setActiveLayerId(layer.id)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none ${
                isActive
                  ? "bg-[#f97316] text-white shadow-sm"
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
          <span className="text-[9px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            {activeLayer.status}
          </span>
        </div>

        <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
          {activeLayer.desc}
        </p>

        {/* Competency Scoring Breakdown */}
        <div className="pt-2 border-t border-white/5 space-y-1.5 font-mono text-[10px]">
          <div className="flex justify-between text-slate-300">
            <span>System Architecture Depth</span>
            <span className="text-emerald-400 font-bold">VERIFIED</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Problem-Solving Approach</span>
            <span className="text-[#f97316] font-bold">STRUCTURED</span>
          </div>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="p-3 rounded-lg bg-[#0a0a0a] border border-white/5 text-center font-mono text-[10px] text-[#a1a1a1] uppercase tracking-wider">
        "Turn unstructured interviews into structured hiring intelligence."
      </div>

    </div>
  );
};

export default InterviewAIVisual;
