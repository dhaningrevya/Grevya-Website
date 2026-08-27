import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Database, Workflow, ShieldCheck, FileCode, Sparkles } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import GhostNumeral from "@/components/primitives/GhostNumeral";
import ReusableCard from "@/components/primitives/ReusableCard";
import Pill from "@/components/primitives/Pill";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import PointerGlowCard from "@/components/interaction/PointerGlowCard";
import {
  InterviewAIVisual,
  MedTriageVisual,
  ProposalAIVisual,
  TranscriptAnalyzerVisual,
} from "@/components/product-previews";

const flagshipProducts = [
  {
    numeral: "01",
    id: "kh-interview",
    name: "KH Interview AI",
    category: "RECRUITMENT ENGINEERING",
    tagline: "Automated Candidate Screening & Competency Scoring Platform",
    desc: "An automated interview assessment ecosystem featuring real-time speech evaluation, structured scoring rubrics, and candidate analytics.",
    capabilities: [
      "AI-driven candidate interview evaluation",
      "Custom rubric creation & domain scoring",
      "Automated transcript & audio summary engine"
    ],
    route: "/solutions/agentic-ai",
    accent: "#f97316",
    VisualComponent: InterviewAIVisual,
    positioning: "Turn unstructured interviews into structured hiring intelligence."
  },
  {
    numeral: "02",
    id: "kh-medtriage",
    name: "KH Med-Triage",
    category: "HEALTHCARE LOGISTICS",
    tagline: "DICOM & Patient Triage Workflow Optimization Engine",
    desc: "Specialized clinical workflow assistant designed to optimize patient intake queues, structure medical records, and parse diagnostic imaging telemetry.",
    capabilities: [
      "Patient triage priority score calculation",
      "DICOM metadata & imaging report formatting",
      "Air-gapped data retention guardrails"
    ],
    route: "/solutions/data-analytics",
    accent: "#fb923c",
    VisualComponent: MedTriageVisual,
    positioning: "Structure clinical intake and route priority decisions faster."
  },
  {
    numeral: "03",
    id: "kh-proposal",
    name: "KH Proposal AI",
    category: "COMMERCIAL AUTOMATION",
    tagline: "Enterprise RFP & Proposal Generation Engine",
    desc: "Automated proposal generation platform that ingests client requirement documents and queries internal knowledge bases to draft winning bids.",
    capabilities: [
      "RFP requirement matrix parsing",
      "Knowledge retrieval RAG integration",
      "Automated compliance verification"
    ],
    route: "/solutions/ai-content-generation",
    accent: "#ef4444",
    VisualComponent: ProposalAIVisual,
    positioning: "Turn complex RFPs into grounded proposal workflows."
  },
  {
    numeral: "04",
    id: "kh-transcript",
    name: "KH Transcript Analyzer",
    category: "SPEECH INTELLIGENCE",
    tagline: "Multi-Party Audio Intelligence & Decision Extractor",
    desc: "Advanced conversation analysis engine that converts unstructured audio and meeting transcripts into structured action items and sentiment analytics.",
    capabilities: [
      "Speaker diarization & identity mapping",
      "Automated action item & decision extraction",
      "Searchable conversation vector database"
    ],
    route: "/solutions/agentic-ai",
    accent: "#f97316",
    VisualComponent: TranscriptAnalyzerVisual,
    positioning: "Turn conversations into structured business decisions."
  }
];

const engineeringServices = [
  {
    numeral: "05",
    slug: "ai-consulting",
    title: "AI Strategy & Feasibility Audit",
    category: "CONSULTING",
    desc: "Strategy workshops, feasibility reviews, and deployment planning that move your team from slide decks to shipped systems.",
    icon: ShieldCheck,
  },
  {
    numeral: "06",
    slug: "ai-software-development",
    title: "Full-Stack AI Software Engineering",
    category: "ENGINEERING",
    desc: "End-to-end software development spanning vector DBs, LLM pipelines, cloud microservices, APIs, and modern web UIs.",
    icon: FileCode,
  },
  {
    numeral: "07",
    slug: "rag-application",
    title: "Production RAG Knowledge Systems",
    category: "DATA SYSTEMS",
    desc: "Retrieval-augmented LLM apps with schema-grounded retrieval, reranking, citations, and eval-driven iteration.",
    icon: Database,
  },
  {
    numeral: "08",
    slug: "erp",
    title: "ERP & Custom System Automation",
    category: "ENTERPRISE",
    desc: "Odoo and Frappe/ERPNext implementations & custom modules enriched with AI agents for workflow automation.",
    icon: Workflow,
  },
];

export const Products: React.FC = () => {
  const [activeProdIdx, setActiveProdIdx] = useState<number>(0);
  const activeProd = flagshipProducts[activeProdIdx];
  const ActiveVisual = activeProd.VisualComponent;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative border-t border-white/10 select-none">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full space-y-12 sm:space-y-16">
        
        {/* Section Wayfinding Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 sm:pb-10">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <Eyebrow index="003" label="PROPRIETARY PRODUCTS & ENGINEERING SERVICES" />
              <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95] break-words">
                ENGINEERED FOR <br />
                <GradientText className="inline">ENTERPRISE PERFORMANCE</GradientText>
              </h2>
              <p className="font-sans text-[#a1a1a1] text-sm sm:text-xl font-normal leading-relaxed max-w-2xl">
                Explore our flagship AI product platforms and specialized software engineering capabilities.
              </p>
            </div>
            
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-accent-glow self-start md:self-auto"
            >
              <span>Schedule Product Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </RevealOnScroll>

        {/* Flagship Product Showcase Workspace */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Product Navigation Track */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {flagshipProducts.map((prod, idx) => {
              const isSelected = activeProdIdx === idx;
              return (
                <button
                  key={prod.id}
                  onClick={() => setActiveProdIdx(idx)}
                  className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? "bg-[#131313] border-[#f97316] shadow-md border-l-4"
                      : "bg-[#131313]/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#f97316] uppercase truncate mb-0.5">
                    {prod.numeral} • {prod.category}
                  </div>
                  <div className={`text-xs sm:text-sm font-display font-bold uppercase truncate ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {prod.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Product Interactive Workspace Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#131313]/90 backdrop-blur-2xl border border-white/12 rounded-2xl p-5 sm:p-10 shadow-2xl">
            
            {/* Left: Product Metadata & Capabilities */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#f97316] font-bold uppercase">
                  <Sparkles className="h-3 w-3 text-[#f97316]" />
                  <span>{activeProd.category}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                  {activeProd.name}
                </h3>
                <p className="font-sans text-xs sm:text-base text-[#f97316] font-semibold">
                  "{activeProd.positioning}"
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#a1a1a1] leading-relaxed">
                {activeProd.desc}
              </p>

              {/* Capability Checklist */}
              <div className="space-y-2 font-sans text-xs pt-2 border-t border-white/10">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#6b6b6b] uppercase tracking-wider">
                  Core Technical Capabilities
                </div>
                {activeProd.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Explore Link */}
              <div className="pt-3">
                <Link
                  to={activeProd.route}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#f97316] uppercase tracking-wider hover:text-white transition-colors"
                >
                  <span>Explore Product Solution</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: Active Product Interactive Demonstration Preview */}
            <div className="lg:col-span-6">
              <ActiveVisual />
            </div>

          </div>
        </div>

        {/* Specialized Engineering Services Grid */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="space-y-2">
            <Eyebrow index="004" label="SPECIALIZED ENGINEERING SERVICES" />
            <h3 className="font-display text-xl sm:text-3xl font-bold uppercase text-white">
              Enterprise Services
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.slug}
                  to={`/solutions/${svc.slug}`}
                  className="p-5 rounded-xl bg-[#131313]/70 hover:bg-[#131313] border border-white/10 hover:border-[#f97316]/40 transition-all group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#f97316] font-bold">{svc.numeral}</span>
                      <span className="text-[9px] text-[#6b6b6b] uppercase">{svc.category}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-[#f97316]/10 text-white group-hover:text-[#f97316] w-fit transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display text-sm font-bold uppercase text-white group-hover:text-[#f97316] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="font-sans text-xs text-[#a1a1a1] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#f97316] font-bold uppercase pt-2 border-t border-white/5">
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
