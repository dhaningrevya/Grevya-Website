import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowRight, Activity, Terminal, Shield, Zap } from "lucide-react";
import { PipelineStage } from "./SolutionConfig";

interface VisualizerProps {
  stages: PipelineStage[];
  title?: string;
}

export const InternalWorkflowVisualizer: React.FC<VisualizerProps> = ({ stages, title = "SOLUTION PIPELINE WORKFLOW" }) => {
  const [activeStageId, setActiveStageId] = useState<string>(stages[0]?.id || "");
  const shouldReduceMotion = useReducedMotion();

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];
  const activeIdx = stages.findIndex((s) => s.id === activeStageId);

  return (
    <div className="bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-6 space-y-6 shadow-2xl relative overflow-hidden select-none">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase">
          <Activity className="h-4 w-4 text-[#f97316]" />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ACTIVE STAGE READY
        </div>
      </div>

      {/* Connection Flow Track (Dynamic Highlighting across Pipeline) */}
      <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-3 font-mono text-[10px]">
        <div className="flex items-center justify-between text-[9px] text-[#6b6b6b] uppercase">
          <span>Execution Graph Connection</span>
          <span className="text-[#f97316]">Stage {activeIdx + 1} of {stages.length} Active</span>
        </div>

        <div className="flex items-center justify-between gap-1">
          {stages.map((stg, i) => {
            const isCompleted = i <= activeIdx;
            const isCurrent = i === activeIdx;
            return (
              <React.Fragment key={stg.id}>
                <button
                  onClick={() => setActiveStageId(stg.id)}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold transition-all focus:outline-none ${
                    isCurrent
                      ? "bg-[#f97316] text-white border-[#f97316] ring-2 ring-[#f97316]/30 shadow-md"
                      : isCompleted
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                      : "bg-white/5 text-[#6b6b6b] border-white/10"
                  }`}
                >
                  {i + 1}
                </button>
                {i < stages.length - 1 && (
                  <div className={`flex-1 h-[2px] transition-colors duration-300 ${i < activeIdx ? "bg-emerald-400" : "bg-white/10"}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Stage Selector Track */}
      <div className="flex items-center gap-1 bg-[#0a0a0a] p-1.5 rounded-xl border border-white/5 overflow-x-auto">
        {stages.map((stage) => {
          const isActive = activeStageId === stage.id;
          const StageIcon = stage.icon;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              onMouseEnter={() => setActiveStageId(stage.id)}
              onFocus={() => setActiveStageId(stage.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none ${
                isActive
                  ? "bg-[#f97316] text-white shadow-md border-b-2 border-white"
                  : "text-[#a1a1a1] hover:text-white hover:bg-white/5"
              }`}
            >
              <StageIcon className="h-3.5 w-3.5" />
              <span>{stage.stageName}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Inspector Readout */}
      <div className="p-5 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-4 shadow-inner">
        <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
          <div className="flex items-center gap-2.5">
            <activeStage.icon className="h-5 w-5 text-[#f97316]" />
            <h4 className="font-display text-sm font-bold uppercase text-white">
              {activeStage.title}
            </h4>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            {activeStage.status}
          </span>
        </div>

        <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
          {activeStage.desc}
        </p>

        {/* Input/Output Data Payload Details */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5 font-mono text-[10px]">
          <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-white/5 space-y-1">
            <div className="text-[#6b6b6b] uppercase text-[9px]">Stage Input</div>
            <div className="text-white font-bold truncate">{activeStage.inputData}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-white/5 space-y-1">
            <div className="text-[#6b6b6b] uppercase text-[9px]">Stage Output</div>
            <div className="text-emerald-400 font-bold truncate">{activeStage.outputData}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InternalWorkflowVisualizer;
