import React, { useState } from "react";
import { Cpu, Terminal, Shield, CheckCircle2, ArrowRight, GitBranch, Network, Users } from "lucide-react";

const agentNodes = [
  { id: "router", name: "Agent Router Engine", role: "Workload Classifier", status: "ROUTING", task: "Parse task parameters and select specialist agent" },
  { id: "recruitment", name: "Recruitment Specialist", role: "Candidate Assessment", status: "ACTIVE", task: "Analyze interview audio stream & score technical competency" },
  { id: "claims", name: "Claims Triage Agent", role: "Risk Evaluation", status: "STANDBY", task: "Classify insurance claim documentation against policy rules" },
  { id: "validation", name: "Guardrail Verifier", role: "Schema Enforcement", status: "ENFORCING", task: "Verify agent JSON output against compliance guardrails" }
];

export const AgenticVisualizer: React.FC = () => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>("router");
  const selectedAgent = agentNodes.find((a) => a.id === selectedAgentId) || agentNodes[0];

  return (
    <div className="bg-[#131313]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 sm:p-6 space-y-5 sm:space-y-6 shadow-2xl select-none max-w-full overflow-hidden">
      
      {/* Visual Title Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase truncate">
          <GitBranch className="h-4 w-4 text-[#f97316] flex-shrink-0" />
          <span className="truncate">Agent Orchestration Mesh</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
          ORCHESTRATOR ONLINE
        </span>
      </div>

      {/* Spatial Agent Execution Graph */}
      <div className="p-3 sm:p-4 rounded-xl bg-[#0a0a0a] border border-white/5 space-y-3">
        <div className="text-[9px] sm:text-[10px] font-mono text-[#6b6b6b] uppercase flex justify-between items-center">
          <span>Routing Graph</span>
          <span className="text-[#f97316] truncate max-w-[150px] text-right">Node: {selectedAgent.name}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {agentNodes.map((node) => {
            const isSelected = selectedAgentId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedAgentId(node.id)}
                className={`p-2.5 sm:p-3 rounded-lg border text-left font-mono transition-all focus:outline-none ${
                  isSelected
                    ? "bg-[#f97316] text-white border-[#f97316] shadow-md"
                    : "bg-[#1a1a1a] text-[#a1a1a1] border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                <div className="text-[8px] sm:text-[9px] font-bold uppercase">{node.role}</div>
                <div className="text-xs font-bold font-display uppercase truncate mt-0.5">{node.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Agent Inspector Readout */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-3 font-mono text-xs shadow-inner">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-[#f97316] font-bold uppercase truncate max-w-[200px]">{selectedAgent.name}</span>
          <span className="text-[9px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
            {selectedAgent.status}
          </span>
        </div>

        <div className="space-y-1">
          <div className="text-[9px] sm:text-[10px] text-[#6b6b6b] uppercase">Current Autonomous Task</div>
          <div className="text-slate-200 text-xs leading-relaxed font-sans">{selectedAgent.task}</div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] text-[#a1a1a1]">
          <span>State Handoff Protocol</span>
          <span className="text-emerald-400 font-bold">TYPED STATE LOCKED</span>
        </div>
      </div>

    </div>
  );
};

export default AgenticVisualizer;
