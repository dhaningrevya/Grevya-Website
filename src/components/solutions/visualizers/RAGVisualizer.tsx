import React, { useState } from "react";
import { Search, Database, FileText, CheckCircle2, Layers, ShieldCheck, ArrowRight } from "lucide-react";

const retrievedChunks = [
  { id: "chunk1", source: "enterprise_security_v3.pdf (p. 14)", score: "0.94 Similarity Score", excerpt: "Grevya RAG platforms enforce document-level ACL access isolation during vector retrieval." },
  { id: "chunk2", source: "policy_compliance_2026.docx (p. 2)", score: "0.89 Similarity Score", excerpt: "All generated claims are linked to verifiable source citations before output dispatch." },
  { id: "chunk3", source: "architecture_specs_v2.pdf (p. 8)", score: "0.86 Similarity Score", excerpt: "Hybrid dense-sparse retrieval combines vector embeddings with keyword reranking." }
];

export const RAGVisualizer: React.FC = () => {
  const [activeChunkId, setActiveChunkId] = useState<string>("chunk1");
  const activeChunk = retrievedChunks.find((c) => c.id === activeChunkId) || retrievedChunks[0];

  return (
    <div className="bg-[#131313]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 sm:p-6 space-y-5 sm:space-y-6 shadow-2xl select-none max-w-full overflow-hidden">
      
      {/* Visual Title Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-white font-bold uppercase truncate">
          <Search className="h-4 w-4 text-[#f97316] flex-shrink-0" />
          <span className="truncate">Knowledge Retrieval Engine</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
          HYBRID INDEX READY
        </span>
      </div>

      {/* Query Search Mock Box */}
      <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-2 font-mono text-xs">
        <div className="text-[9px] text-[#6b6b6b] uppercase">Active Vector Query Search</div>
        <div className="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/10 text-white font-bold flex items-center justify-between gap-2">
          <span className="truncate text-xs">"How does Grevya enforce RAG document security?"</span>
          <Search className="h-3.5 w-3.5 text-[#f97316] flex-shrink-0" />
        </div>
      </div>

      {/* Retrieved Chunks Workspace */}
      <div className="space-y-2 font-mono text-xs">
        <div className="text-[9px] sm:text-[10px] text-[#6b6b6b] uppercase flex justify-between items-center">
          <span>Top-K Vector Candidates</span>
          <span className="text-[#f97316]">Select Candidate</span>
        </div>

        <div className="space-y-2">
          {retrievedChunks.map((chunk) => {
            const isSelected = activeChunkId === chunk.id;
            return (
              <button
                key={chunk.id}
                onClick={() => setActiveChunkId(chunk.id)}
                className={`w-full p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between gap-2 transition-all focus:outline-none ${
                  isSelected
                    ? "bg-[#1a1a1a] border-[#f97316] text-white shadow-md border-l-4"
                    : "bg-[#0a0a0a] border-white/5 text-[#a1a1a1] hover:border-white/15 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <FileText className={`h-4 w-4 flex-shrink-0 ${isSelected ? "text-[#f97316]" : "text-slate-400"}`} />
                  <span className="font-bold truncate text-xs">{chunk.source}</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
                  {chunk.score}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grounded Citation Source Trace Window */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-3 font-mono text-xs shadow-inner">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="text-white font-bold truncate max-w-[180px]">Source Chunk Attribution</span>
          <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold flex-shrink-0">{activeChunk.score}</span>
        </div>

        <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
          "{activeChunk.excerpt}"
        </p>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-300">
          <span>Source Citation Verification</span>
          <span className="text-emerald-400 font-bold">100% GROUNDED</span>
        </div>
      </div>

    </div>
  );
};

export default RAGVisualizer;
