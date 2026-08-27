import React, { useState } from "react";
import { FileText, Sparkles, Shield, Eye, CheckCircle2, Feather, Layers } from "lucide-react";

const documentSections = [
  { id: "sec1", title: "Executive Technical Overview", status: "GROUNDED", citations: "3 Verified Knowledge Chunks", text: "Grevya delivers production multi-agent platforms with state coordination and guardrails." },
  { id: "sec2", title: "Architecture & Security Controls", status: "POLICY CHECKED", citations: "Brand Voice & Security Rules Passed", text: "Data isolation and PII redaction enforced across all tool boundaries." },
  { id: "sec3", title: "Implementation Roadmap & Milestones", status: "READY FOR REVIEW", citations: "Milestone Timelines Verified", text: "3-week pilot rollout phase leading to production deployment." }
];

export const ContentGenVisualizer: React.FC = () => {
  const [activeSecId, setActiveSecId] = useState<string>("sec1");
  const activeSec = documentSections.find((s) => s.id === activeSecId) || documentSections[0];

  return (
    <div className="bg-[#131313]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 sm:p-6 space-y-5 sm:space-y-6 shadow-2xl select-none max-w-full overflow-hidden">
      
      {/* Visual Title Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase truncate">
          <Feather className="h-4 w-4 text-[#f97316] flex-shrink-0" />
          <span className="truncate">Content Intelligence Studio</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
          PROPOSAL DRAFT ACTIVE
        </span>
      </div>

      {/* Section Track Selector */}
      <div className="space-y-2 font-mono text-xs">
        <div className="text-[9px] sm:text-[10px] text-[#6b6b6b] uppercase flex justify-between items-center">
          <span>Proposal Sections</span>
          <span className="text-[#f97316]">Select Section</span>
        </div>

        <div className="flex flex-col gap-1.5">
          {documentSections.map((sec) => {
            const isSelected = activeSecId === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSecId(sec.id)}
                className={`p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between gap-2 transition-all focus:outline-none ${
                  isSelected
                    ? "bg-[#1a1a1a] border-[#f97316] text-white shadow-md border-l-4"
                    : "bg-[#0a0a0a] border-white/5 text-[#a1a1a1] hover:border-white/15 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <FileText className={`h-4 w-4 flex-shrink-0 ${isSelected ? "text-[#f97316]" : "text-slate-400"}`} />
                  <span className="font-bold truncate text-xs">{sec.title}</span>
                </div>
                <span className="text-[8px] sm:text-[9px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                  {sec.status}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Section Draft Window */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-3 font-mono text-xs shadow-inner">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-white font-bold truncate max-w-[180px]">{activeSec.title}</span>
          <span className="text-[9px] sm:text-[10px] text-slate-300 font-bold flex-shrink-0">{activeSec.citations}</span>
        </div>

        <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
          "{activeSec.text}"
        </p>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-300">
          <span>Editorial Review</span>
          <span className="text-emerald-400 font-bold">HUMAN HOOK READY</span>
        </div>
      </div>

    </div>
  );
};

export default ContentGenVisualizer;
