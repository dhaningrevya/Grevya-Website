import React, { useState } from "react";
import { Factory, Users, Search, Cpu, ArrowRight, CheckCircle2, ShieldCheck, HeartPulse, Landmark, Sparkles } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import GhostNumeral from "@/components/primitives/GhostNumeral";
import ReusableCard from "@/components/primitives/ReusableCard";
import Pill from "@/components/primitives/Pill";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";

const industryList = [
  {
    id: "mfg",
    index: "01",
    title: "Manufacturing & Supply Chain",
    icon: Factory,
    problem: "Supply chain disruptions, inventory overstocking, and unoptimized logistics scheduling.",
    solution: "AI-driven demand forecasting models, inventory optimization algorithms, and real-time logistics tracking.",
    technologies: ["Machine Learning", "Python", "FastAPI", "React", "Cloud Pipelines"],
    impact: "Inventory cost optimization & operational efficiency",
  },
  {
    id: "hr",
    index: "02",
    title: "HR & Recruitment",
    icon: Users,
    problem: "High recruiter screening bandwidth, subjective evaluations, and slow candidate turnaround times.",
    solution: "Automated candidate assessment platforms, real-time AI interview engines, and objective competency analytics.",
    technologies: ["NLP", "Audio Processing", "Multi-Agent Evaluation", "Node.js"],
    impact: "Streamlined evaluation workflows & objective scoring",
  },
  {
    id: "sme",
    index: "03",
    title: "SaaS & SME Automation",
    icon: Search,
    problem: "Manual repetitive workflows, fragmented customer insights, and high administrative overhead.",
    solution: "Custom SaaS automation bots, natural-language database query engines, and CRM workflow orchestrations.",
    technologies: ["LangChain", "n8n", "PostgreSQL", "React", "Odoo/Frappe"],
    impact: "Automated business operations & rapid scaling",
  },
  {
    id: "ent",
    index: "04",
    title: "Custom Enterprise AI",
    icon: Cpu,
    problem: "Legacy system bottlenecks, strict data compliance requirements, and complex custom integration needs.",
    solution: "Bespoke LLM fine-tuning, RAG application architectures, cloud microservices, and legacy replatforming.",
    technologies: ["RAG Systems", "Vector DBs", "Docker/K8s", "Enterprise Security"],
    impact: "Future-proof cloud infrastructure & governed AI",
  },
  {
    id: "hc",
    index: "05",
    title: "Healthcare & Med-Tech",
    icon: HeartPulse,
    problem: "Unstructured clinical documentation, patient intake backlogs, and DICOM telemetry parsing delays.",
    solution: "HIPAA-aligned triage assistant engines, DICOM header extraction, and clinical summary pipelines.",
    technologies: ["DICOM Parsing", "HIPAA Vaults", "FastAPI", "Vector Indexes"],
    impact: "60% reduction in physician documentation time",
  },
  {
    id: "fin",
    index: "06",
    title: "Financial Services & Fintech",
    icon: Landmark,
    problem: "Manual RFP response prep, fraud risk detection backlogs, and non-governed financial LLM usage.",
    solution: "RFP requirement matrix parsing, automated audit-trail verification, and deal risk analytics.",
    technologies: ["RAG Verification", "Risk Models", "SOC 2 Encryption"],
    impact: "98.4% RFP match rate & instant audit trails",
  },
];

export const Industries: React.FC = () => {
  const [activeInd, setActiveInd] = useState(0);
  const current = industryList[activeInd];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative overflow-hidden border-t border-white/10">
      {/* Background Atmosphere Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#f97316]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full space-y-16">
        
        {/* Section Wayfinding Header Block */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
            <div className="max-w-3xl space-y-4">
              <Eyebrow index="007" label="VERTICAL DOMAIN MATRIX & INDUSTRY SOLUTIONS" />
              <h2 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95]">
                INDUSTRIES WE <GradientText className="inline">TRANSFORM</GradientText>
              </h2>
              <p className="font-sans text-[#a1a1a1] text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
                Delivering domain-tuned AI software solutions designed for high-impact operational environments.
              </p>
            </div>
            <div className="text-xs font-mono text-[#6b6b6b] uppercase tracking-[0.2em]">
              6 DOMAIN SECTORS
            </div>
          </div>
        </RevealOnScroll>

        {/* Matrix Industry Selector Pills */}
        <RevealOnScroll delay={0.2} direction="up">
          <div className="flex flex-wrap gap-2.5">
            {industryList.map((ind, idx) => {
              const isSelected = activeInd === idx;
              return (
                <Pill
                  key={ind.id}
                  asButton
                  variant={isSelected ? "accent" : "default"}
                  size="lg"
                  onClick={() => setActiveInd(idx)}
                  className="py-3"
                >
                  <span className="font-mono text-[#f97316] font-bold mr-1">
                    {ind.index}.
                  </span>
                  <span>{ind.title}</span>
                </Pill>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Selected Industry Transformation Matrix Card */}
        <RevealOnScroll delay={0.3} direction="up">
          <ReusableCard
            variant="elevated"
            className="p-8 sm:p-12 border-white/12 bg-[#131313]/90 shadow-2xl relative overflow-hidden"
          >
            <GhostNumeral
              numeral={current.index}
              className="absolute -right-4 -top-8 text-white/[0.04] pointer-events-none"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 relative z-10"
              >
                
                {/* Header Bar inside Selected Industry Card */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-[14px] bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316]">
                      <current.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-[#f97316] uppercase tracking-[0.2em]">
                        VERTICAL MATRIX • [{current.index}]
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-wide">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <Pill
                    asButton
                    variant="accent"
                    size="lg"
                    onClick={scrollToContact}
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Discuss Use Case
                  </Pill>
                </div>

                {/* Detailed Matrix Columns */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  
                  {/* Left Column: Challenge & Grevya Solution */}
                  <div className="space-y-6">
                    <div className="p-6 rounded-[14px] bg-[#1a1a1a] border border-white/10 space-y-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ef4444] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                        Industry Challenge
                      </div>
                      <p className="font-sans text-[#a1a1a1] text-sm sm:text-base leading-relaxed">
                        {current.problem}
                      </p>
                    </div>

                    <div className="p-6 rounded-[14px] bg-[#1a1a1a] border border-[#f97316]/30 space-y-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#f97316] flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#f97316]" />
                        Grevya AI Solution
                      </div>
                      <p className="font-sans text-white text-sm sm:text-base leading-relaxed font-medium">
                        {current.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Stack & Target Impact */}
                  <div className="space-y-6 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#a1a1a1]">
                        Key Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {current.technologies.map((tech, tIdx) => (
                          <Pill key={tIdx} variant="outline" size="sm">
                            {tech}
                          </Pill>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-[14px] bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em]">
                        Target Outcome & Value
                      </div>
                      <div className="text-lg font-sans font-bold text-white">
                        {current.impact}
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </ReusableCard>
        </RevealOnScroll>

        {/* Section Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#6b6b6b] uppercase tracking-[0.2em]">
            GREVYA TECHNOLOGIES PVT LTD • DOMAIN MATRICES
          </div>
          <button
            onClick={scrollToContact}
            className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#f97316] hover:text-white transition-colors"
          >
            Request Industry Solution Brief →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Industries;
