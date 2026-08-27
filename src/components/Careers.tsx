import React from "react";
import { Briefcase, ArrowRight, CheckCircle2, Terminal, Code, Cpu } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import ReusableCard from "@/components/primitives/ReusableCard";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const openPositions = [
  {
    title: "Senior AI Systems Engineer",
    type: "Full-Time",
    location: "Coimbatore / Remote",
    team: "Core Platform",
    desc: "Build production multi-agent orchestration frameworks, hybrid vector retrieval pipelines, and runtime guardrail filters.",
    requirements: ["5+ years Python/TypeScript", "Production LLM/RAG experience", "Vector DB & Schema design"]
  },
  {
    title: "Full-Stack AI Software Engineer",
    type: "Full-Time",
    location: "Coimbatore / Hybrid",
    team: "Product Engineering",
    desc: "Architect scalable frontend applications and API backend endpoints for enterprise software platforms.",
    requirements: ["React/Vite/Next.js proficiency", "FastAPI/Node.js microservices", "State management & UI performance"]
  },
  {
    title: "Data & ML Engineer",
    type: "Full-Time",
    location: "Coimbatore / Remote",
    team: "Data Intelligence",
    desc: "Design natural-language-to-SQL data pipelines, ETL normalization workflows, and automated anomaly detectors.",
    requirements: ["PostgreSQL & SQL optimization", "Python data stack (Pandas, Polars)", "Embedding model fine-tuning"]
  }
];

export const Careers: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] min-h-screen selection:bg-[#f97316]/30 selection:text-white select-none">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#f97316]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-6">
          <Eyebrow index="001" label="CAREERS & ENGINEERING ROLES" />

          <h1 className="font-display text-2xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-[0.95] break-words max-w-4xl">
            BUILD PRODUCTION AI SYSTEMS <br />
            <GradientText className="inline">WITH GREVYA ENGINEERING</GradientText>
          </h1>

          <p className="font-sans text-sm sm:text-xl text-[#a1a1a1] max-w-2xl leading-relaxed font-normal">
            We are looking for exceptional software engineers, ML researchers, and product builders dedicated to technical excellence.
          </p>
        </div>
      </section>

      {/* Open Positions Workspace */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 space-y-12">
          
          <RevealOnScroll delay={0.1} direction="up">
            <div className="space-y-3 max-w-3xl">
              <Eyebrow label="OPEN POSITIONS" />
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white">
                Engineering Roles
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-6">
            {openPositions.map((pos, idx) => (
              <RevealOnScroll key={pos.title} delay={0.1 * (idx + 1)} direction="up">
                <ReusableCard variant="elevated" className="p-6 sm:p-8 border-white/10 bg-[#131313]/95 shadow-2xl space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#f97316] uppercase tracking-wider mb-1">
                        <span>{pos.team}</span>
                        <span>•</span>
                        <span>{pos.type}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
                        {pos.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono text-slate-300 font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 self-start sm:self-auto">
                      {pos.location}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed max-w-3xl">
                    {pos.desc}
                  </p>

                  <div className="space-y-2 pt-2 font-sans text-xs">
                    <div className="text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider">
                      Key Competencies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pos.requirements.map((req, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-[#1a1a1a] border border-white/10 text-slate-300 text-[11px]">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-end">
                    <a
                      href={`mailto:careers@grevya.com?subject=Application for ${encodeURIComponent(pos.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-sans font-bold uppercase tracking-[0.18em] transition-all shadow-accent-glow"
                    >
                      <span>Apply For Role</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </ReusableCard>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
