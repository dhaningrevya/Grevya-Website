import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, Users, CheckCircle2, Sparkles, Volume2, ListTodo } from "lucide-react";

export interface ProductPreviewProps {
  active?: boolean;
}

const transcriptLayers = [
  {
    id: "conversation",
    label: "CONVERSATION",
    title: "Audio & Transcript Ingestion",
    desc: "Ingests raw multi-party audio recordings and text conversation streams.",
    status: "TRANSCRIPT INGESTED"
  },
  {
    id: "speakers",
    label: "SPEAKERS",
    title: "Speaker Diarization",
    desc: "Segments multi-speaker channels and maps individual participant talk-time.",
    status: "SPEAKERS STRUCTURED"
  },
  {
    id: "insights",
    label: "INSIGHTS",
    title: "Key Signal Extraction",
    desc: "Extracts action items, sentiment markers, and key operational commitments.",
    status: "INSIGHTS READY"
  },
  {
    id: "decisions",
    label: "DECISIONS",
    title: "Action Item Logging",
    desc: "Dispatches audited action payloads into task management and enterprise CRMs.",
    status: "DECISIONS SURFACED"
  }
];

export const TranscriptAnalyzerVisual: React.FC<ProductPreviewProps> = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("conversation");
  const shouldReduceMotion = useReducedMotion();

  const activeLayer = transcriptLayers.find((l) => l.id === activeLayerId) || transcriptLayers[0];

  return (
    <div className="bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-6 space-y-5 shadow-2xl relative overflow-hidden select-none">
      
      {/* Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase">
          <MessageSquare className="h-4 w-4 text-[#f97316]" />
          <span>Conversation Intelligence Console</span>
        </div>
        <span className="text-[9px] font-bold text-[#f97316] px-2 py-0.5 rounded bg-[#f97316]/10 border border-[#f97316]/20">
          SPEECH ENGINE
        </span>
      </div>

      {/* Multi-Speaker Diarization Widget (Product 4 Visual Anchor) */}
      <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between text-[9px] text-[#6b6b6b] uppercase border-b border-white/5 pb-1">
          <div className="flex items-center gap-1.5 text-[#f97316]">
            <Volume2 className="h-3 w-3" />
            <span>Multi-Speaker Channel Diarization</span>
          </div>
          <span>2 SPEAKERS MAPPED</span>
        </div>

        <div className="space-y-1.5 text-[10px]">
          <div className="p-2 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-between">
            <span className="text-white font-bold">Speaker A (Product Lead):</span>
            <span className="text-[#a1a1a1]">"Deployment scheduled for Q3..."</span>
          </div>
          <div className="p-2 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-between text-slate-300">
            <span className="text-[#f97316] font-bold">Speaker B (Client VP):</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <ListTodo className="h-3 w-3" /> ACTION ITEM LOGGED
            </span>
          </div>
        </div>
      </div>

      {/* State Switcher Tabs */}
      <div className="flex items-center gap-1 bg-[#0a0a0a] p-1 rounded-xl border border-white/5 overflow-x-auto">
        {transcriptLayers.map((layer) => {
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

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span>Action Item Dispatch Hook</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> CONNECTED
          </span>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="p-3 rounded-lg bg-[#0a0a0a] border border-white/5 text-center font-mono text-[10px] text-[#a1a1a1] uppercase tracking-wider">
        "Turn conversations into structured business decisions."
      </div>

    </div>
  );
};

export default TranscriptAnalyzerVisual;
