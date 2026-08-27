import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { GovernanceLayer } from "./SolutionConfig";

interface ConsoleProps {
  layers: GovernanceLayer[];
}

export const SolutionArchitectureConsole: React.FC<ConsoleProps> = ({ layers }) => {
  const [activeLayerId, setActiveLayerId] = useState<string>(layers[0]?.id || "");

  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[0];

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start select-none">
      
      {/* Left Column: Stack Layers Rail */}
      <div className="lg:col-span-7 bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-6 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2 text-white font-bold uppercase">
            <ShieldCheck className="h-4 w-4 text-[#f97316]" />
            <span>Architecture & Governance Layers</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold">ALL LAYERS ACTIVE</span>
        </div>

        <div className="space-y-2">
          {layers.map((layer) => {
            const LayerIcon = layer.icon;
            const isActive = activeLayerId === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                onMouseEnter={() => setActiveLayerId(layer.id)}
                onFocus={() => setActiveLayerId(layer.id)}
                className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between focus:outline-none ${
                  isActive
                    ? "bg-[#1a1a1a] border-[#f97316] text-white shadow-md border-l-4"
                    : "bg-[#1a1a1a]/50 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isActive ? "bg-[#f97316]/15 text-[#f97316]" : "bg-white/5 text-slate-400"}`}>
                    <LayerIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono font-bold uppercase tracking-wider ${isActive ? "text-white" : "text-[#a1a1a1]"}`}>
                      {layer.name}
                    </div>
                    <div className="text-[10px] text-[#6b6b6b]">{layer.scope}</div>
                  </div>
                </div>

                <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded ${isActive ? "bg-[#f97316]/20 text-[#fb923c] border border-[#f97316]/30" : "bg-white/5 text-slate-400"}`}>
                  {layer.status}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Active Layer Inspector */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 rounded-2xl bg-[#131313]/90 backdrop-blur-2xl border border-white/12 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
            <span className="text-[#f97316] font-bold uppercase tracking-wider">Layer Audit Signal</span>
            <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px]">
              {activeLayer.status}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <activeLayer.icon className="h-5 w-5 text-[#f97316]" />
              <h4 className="font-display text-lg font-bold uppercase text-white">
                {activeLayer.name}
              </h4>
            </div>
            <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
              {activeLayer.desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-2 font-mono text-[10px]">
            <div className="text-[#6b6b6b] uppercase text-[9px]">Enforced Signal</div>
            <div className="flex items-center gap-2 text-white font-bold">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>{activeLayer.auditSignal}</span>
            </div>
          </div>
        </div>

        {/* Factual Qualitative Status Badges */}
        <div className="p-5 rounded-2xl bg-[#131313]/90 backdrop-blur-2xl border border-white/12 space-y-2 font-mono text-[9px] uppercase">
          <div className="flex justify-between p-2 rounded bg-[#0a0a0a] border border-white/5">
            <span className="text-slate-300">SCHEMA GROUNDED</span>
            <span className="text-emerald-400 font-bold">VERIFIED</span>
          </div>
          <div className="flex justify-between p-2 rounded bg-[#0a0a0a] border border-white/5">
            <span className="text-slate-300">GOVERNED EXECUTION</span>
            <span className="text-[#f97316] font-bold">ACTIVE</span>
          </div>
          <div className="flex justify-between p-2 rounded bg-[#0a0a0a] border border-white/5">
            <span className="text-slate-300">HUMAN OVERSIGHT</span>
            <span className="text-emerald-400 font-bold">HOOKED</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SolutionArchitectureConsole;
