import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Activity, ShieldCheck, CheckCircle2, Clock, Stethoscope, AlertTriangle, FileSpreadsheet } from "lucide-react";

export interface ProductPreviewProps {
  active?: boolean;
}

const triageLayers = [
  {
    id: "intake",
    label: "INTAKE",
    title: "Patient Intake Processing",
    desc: "Ingests diagnostic requests, DICOM metadata streams, and clinical intake logs.",
    status: "INTAKE RECEIVED"
  },
  {
    id: "structuring",
    label: "STRUCTURING",
    title: "Clinical Record Structuring",
    desc: "Extracts structured symptom terminology and medical code categories.",
    status: "CONTEXT STRUCTURED"
  },
  {
    id: "priority",
    label: "PRIORITY",
    title: "Priority Reasoning Engine",
    desc: "Evaluates patient urgency indicators to suggest clinical queue positioning.",
    status: "PRIORITY REVIEW"
  },
  {
    id: "action",
    label: "ACTION",
    title: "Triage Routing Support",
    desc: "Routes structured decision support payloads to attending medical staff.",
    status: "ACTION ROUTED"
  }
];

export const MedTriageVisual: React.FC<ProductPreviewProps> = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("intake");
  const shouldReduceMotion = useReducedMotion();

  const activeLayer = triageLayers.find((l) => l.id === activeLayerId) || triageLayers[0];

  return (
    <div className="bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-6 space-y-5 shadow-2xl relative overflow-hidden select-none">
      
      {/* Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase">
          <Stethoscope className="h-4 w-4 text-[#fb923c]" />
          <span>Clinical Priority Control Desk</span>
        </div>
        <span className="text-[9px] font-bold text-[#fb923c] px-2 py-0.5 rounded bg-[#fb923c]/10 border border-[#fb923c]/20">
          CLINICAL SUPPORT
        </span>
      </div>

      {/* Patient Triage Queue Widget (Product 2 Visual Anchor) */}
      <div className="p-3.5 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between text-[9px] text-[#6b6b6b] uppercase border-b border-white/5 pb-1">
          <span>Active Patient Queue</span>
          <span className="text-[#fb923c] font-bold">3 PATIENTS QUEUED</span>
        </div>

        <div className="space-y-1.5 text-[10px]">
          <div className="p-2 rounded-lg bg-[#1a1a1a] border border-[#fb923c]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 text-[#fb923c]" />
              <span className="text-white font-bold">Patient #1042 • Acute Telemetry</span>
            </div>
            <span className="text-[9px] text-[#fb923c] font-bold px-2 py-0.5 rounded bg-[#fb923c]/10">
              PRIORITY 1
            </span>
          </div>

          <div className="p-2 rounded-lg bg-[#1a1a1a]/60 border border-white/5 flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="h-3.5 w-3.5" />
              <span>Patient #1043 • Routine Scan Ingest</span>
            </div>
            <span className="text-[9px] text-slate-400 font-bold px-2 py-0.5 rounded bg-white/5">
              PRIORITY 3
            </span>
          </div>
        </div>
      </div>

      {/* State Switcher Tabs */}
      <div className="flex items-center gap-1 bg-[#0a0a0a] p-1 rounded-xl border border-white/5 overflow-x-auto">
        {triageLayers.map((layer) => {
          const isActive = activeLayerId === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayerId(layer.id)}
              onMouseEnter={() => setActiveLayerId(layer.id)}
              onFocus={() => setActiveLayerId(layer.id)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none ${
                isActive
                  ? "bg-[#fb923c] text-white shadow-sm"
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
          <span className="text-[9px] font-mono text-[#fb923c] font-bold px-2 py-0.5 rounded bg-[#fb923c]/10 border border-[#fb923c]/20">
            {activeLayer.status}
          </span>
        </div>

        <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
          {activeLayer.desc}
        </p>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span>HIPAA Compliance Masking</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> ENFORCED
          </span>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="p-3 rounded-lg bg-[#0a0a0a] border border-white/5 text-center font-mono text-[10px] text-[#a1a1a1] uppercase tracking-wider">
        "Structure clinical intake and route priority decisions faster."
      </div>

    </div>
  );
};

export default MedTriageVisual;
