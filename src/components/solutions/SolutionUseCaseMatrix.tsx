import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Pill from "@/components/primitives/Pill";
import { SolutionUseCase } from "./SolutionConfig";

interface MatrixProps {
  useCases: SolutionUseCase[];
}

export const SolutionUseCaseMatrix: React.FC<MatrixProps> = ({ useCases }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeUseCase = useCases[activeIdx] || useCases[0];

  return (
    <div className="space-y-6 select-none">
      
      {/* Selector Track */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {useCases.map((uc, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={uc.industry}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-[0.15em] border transition-all duration-300 whitespace-nowrap focus:outline-none ${
                isActive
                  ? "bg-[#f97316] border-[#f97316] text-white shadow-accent-glow"
                  : "bg-[#131313] border-white/10 text-[#a1a1a1] hover:border-white/20 hover:text-white"
              }`}
            >
              {uc.industry}
            </button>
          );
        })}
      </div>

      {/* Active Use Case Details Workspace */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#131313]/90 backdrop-blur-2xl border border-white/12 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <Pill variant="accent" size="sm">
              {activeUseCase.industry}
            </Pill>
            <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
              {activeUseCase.title}
            </h4>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            PRODUCTION READY
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 font-sans text-xs">
          <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-2">
            <div className="font-mono text-[9px] text-[#ef4444] uppercase font-bold">Operational Challenge</div>
            <p className="text-[#a1a1a1] leading-relaxed">{activeUseCase.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-2">
            <div className="font-mono text-[9px] text-[#f97316] uppercase font-bold">Grevya AI Solution</div>
            <p className="text-[#a1a1a1] leading-relaxed">{activeUseCase.solution}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-2">
            <div className="font-mono text-[9px] text-emerald-400 uppercase font-bold">Qualitative Outcome</div>
            <p className="text-[#a1a1a1] leading-relaxed">{activeUseCase.outcome}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SolutionUseCaseMatrix;
