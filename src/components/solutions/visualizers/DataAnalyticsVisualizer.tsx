import React, { useState } from "react";
import { Database, Filter, BarChart3, ShieldCheck, CheckCircle2, LineChart, AlertTriangle } from "lucide-react";

const dataStreams = [
  { id: "stream1", source: "PostgreSQL Production DB", records: "Ingesting 14,200 rows/sec", status: "NORMALIZED", quality: "PASSED" },
  { id: "stream2", source: "IoT Telemetry Stream", records: "Ingesting 4,800 events/sec", status: "FILTERED", quality: "PASSED" },
  { id: "stream3", source: "Financial Transactions Sheet", records: "Ingesting 1,100 records/sec", status: "ANALYZED", quality: "ANOMALY FLAGGED" }
];

export const DataAnalyticsVisualizer: React.FC = () => {
  const [activeStreamId, setActiveStreamId] = useState<string>("stream1");
  const activeStream = dataStreams.find((s) => s.id === activeStreamId) || dataStreams[0];

  return (
    <div className="bg-[#131313]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 sm:p-6 space-y-5 sm:space-y-6 shadow-2xl select-none max-w-full overflow-hidden">
      
      {/* Visual Title Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase truncate">
          <BarChart3 className="h-4 w-4 text-[#f97316] flex-shrink-0" />
          <span className="truncate">Data Intelligence Pipeline</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
          STREAMS NORMALIZED
        </span>
      </div>

      {/* Stream Selector Workspace */}
      <div className="space-y-2">
        <div className="text-[9px] sm:text-[10px] font-mono text-[#6b6b6b] uppercase flex justify-between items-center">
          <span>Active Streams</span>
          <span className="text-[#f97316]">Select Stream</span>
        </div>

        <div className="space-y-2 font-mono text-xs">
          {dataStreams.map((st) => {
            const isSelected = activeStreamId === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStreamId(st.id)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between gap-2 transition-all focus:outline-none ${
                  isSelected
                    ? "bg-[#1a1a1a] border-[#f97316] text-white shadow-md border-l-4"
                    : "bg-[#0a0a0a] border-white/5 text-[#a1a1a1] hover:border-white/15 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Database className={`h-4 w-4 flex-shrink-0 ${isSelected ? "text-[#f97316]" : "text-slate-400"}`} />
                  <span className="font-bold truncate text-xs">{st.source}</span>
                </div>
                <span className={`text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded flex-shrink-0 ${st.quality.includes("ANOMALY") ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
                  {st.quality}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Analytical Readout Window */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-3 font-mono text-xs shadow-inner">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-white font-bold truncate max-w-[180px]">{activeStream.source}</span>
          <span className="text-[9px] sm:text-[10px] text-[#f97316] font-bold flex-shrink-0">{activeStream.records}</span>
        </div>

        {/* Dynamic Analytical Bars Visualization */}
        <div className="space-y-1.5 pt-1">
          <div className="text-[9px] text-[#6b6b6b] uppercase">Normalization & Anomaly Threshold</div>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
            <div className="bg-[#f97316] h-full w-[72%]" />
            <div className="bg-emerald-400 h-full w-[28%]" />
          </div>
        </div>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-300">
          <span>Decision Support Output</span>
          <span className="text-emerald-400 font-bold">READY FOR DISPATCH</span>
        </div>
      </div>

    </div>
  );
};

export default DataAnalyticsVisualizer;
