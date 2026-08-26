import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, Database, Layers, ShieldCheck, FileCode, Workflow } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import GhostNumeral from "@/components/primitives/GhostNumeral";
import ReusableCard from "@/components/primitives/ReusableCard";
import Pill from "@/components/primitives/Pill";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

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
    accent: "#f97316"
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
    accent: "#fb923c"
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
    accent: "#ef4444"
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
    accent: "#f97316"
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
  const [activeCategory, setActiveCategory] = useState<"all" | "flagship" | "services">("all");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative border-t border-white/10">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full space-y-16">
        
        {/* Section Wayfinding Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
            <div className="max-w-3xl space-y-4">
              <Eyebrow index="003" label="PROPRIETARY PRODUCTS & ENGINEERING SERVICES" />
              <h2 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95]">
                PROPRIETARY PRODUCTS & <br />
                <GradientText className="inline">AI ENGINEERING SERVICES</GradientText>
              </h2>
              <p className="font-sans text-[#a1a1a1] text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
                Grevya delivers production AI/ML platforms, domain-tuned accelerators, and bespoke software engineering built for enterprise reliability.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <Pill
                asButton
                variant={activeCategory === "all" ? "accent" : "outline"}
                size="md"
                onClick={() => setActiveCategory("all")}
              >
                All Systems
              </Pill>
              <Pill
                asButton
                variant={activeCategory === "flagship" ? "accent" : "outline"}
                size="md"
                onClick={() => setActiveCategory("flagship")}
              >
                Flagship Products
              </Pill>
              <Pill
                asButton
                variant={activeCategory === "services" ? "accent" : "outline"}
                size="md"
                onClick={() => setActiveCategory("services")}
              >
                Engineering Services
              </Pill>
            </div>
          </div>
        </RevealOnScroll>

        {/* Section Part 1: Flagship Proprietary Products (2x2 Architectural Grid) */}
        {(activeCategory === "all" || activeCategory === "flagship") && (
          <div className="space-y-8">
            <RevealOnScroll delay={0.1} direction="up">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                  PART I • FLAGSHIP PROPRIETARY PLATFORMS
                </div>
                <div className="text-xs font-mono text-[#6b6b6b]">4 PRODUCTION PLATFORMS</div>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {flagshipProducts.map((prod, idx) => (
                <RevealOnScroll key={prod.id} delay={0.1 + idx * 0.08} direction="up">
                  <ReusableCard
                    variant="elevated"
                    hoverable
                    data-cursor="hover"
                    className="p-8 border-white/10 space-y-6 relative overflow-hidden group flex flex-col justify-between h-full hover:border-[#f97316]/40 transition-all duration-300"
                  >
                    <GhostNumeral
                      numeral={prod.numeral}
                      className="absolute -right-4 -top-8 text-white/[0.04] group-hover:text-[#f97316]/[0.08] transition-colors"
                    />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <Pill variant="accent" size="sm">
                          {prod.category}
                        </Pill>
                        <span className="font-mono text-xs font-bold text-[#f97316]">
                          [{prod.numeral}]
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-wide group-hover:text-[#fb923c] transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-xs font-mono text-[#a1a1a1]">
                          {prod.tagline}
                        </p>
                      </div>

                      <p className="font-sans text-[#a1a1a1] text-sm leading-relaxed">
                        {prod.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-white/5">
                        {prod.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                            <CheckCircle2 className="h-4 w-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 relative z-10 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to={prod.route}
                        className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.2em] text-white hover:text-[#f97316] transition-colors group/link"
                      >
                        <span>Explore Platform</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        onClick={scrollToContact}
                        className="text-xs font-mono text-[#a1a1a1] hover:text-white transition-colors"
                      >
                        Request Demo →
                      </button>
                    </div>
                  </ReusableCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}

        {/* Section Part 2: AI Engineering Services */}
        {(activeCategory === "all" || activeCategory === "services") && (
          <div className="space-y-8 pt-8">
            <RevealOnScroll delay={0.1} direction="up">
              <div className="flex items-center justify-between border-t border-white/10 pt-10">
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                  PART II • ENTERPRISE ENGINEERING SERVICES
                </div>
                <div className="text-xs font-mono text-[#6b6b6b]">4 SERVICE DOMAINS</div>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {engineeringServices.map((serv, idx) => {
                const Icon = serv.icon;
                return (
                  <RevealOnScroll key={serv.slug} delay={0.1 + idx * 0.08} direction="up">
                    <ReusableCard
                      variant="elevated"
                      hoverable
                      data-cursor="hover"
                      className="p-8 border-white/10 space-y-6 relative overflow-hidden group flex flex-col justify-between h-full hover:border-[#f97316]/40 transition-all duration-300"
                    >
                      <GhostNumeral
                        numeral={serv.numeral}
                        className="absolute -right-4 -top-8 text-white/[0.04] group-hover:text-[#f97316]/[0.08] transition-colors"
                      />

                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="p-2.5 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-mono text-xs font-bold text-[#f97316]">
                            [{serv.numeral}]
                          </span>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a1a1a1]">
                            {serv.category}
                          </span>
                          <h3 className="text-2xl font-display font-extrabold uppercase text-white tracking-wide group-hover:text-[#fb923c] transition-colors">
                            {serv.title}
                          </h3>
                        </div>

                        <p className="font-sans text-[#a1a1a1] text-sm leading-relaxed">
                          {serv.desc}
                        </p>
                      </div>

                      <div className="pt-6 relative z-10 border-t border-white/10 flex items-center justify-between">
                        <Link
                          to={`/solutions/${serv.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.2em] text-white hover:text-[#f97316] transition-colors group/link"
                        >
                          <span>View Service Details</span>
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </ReusableCard>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        )}

        {/* Section Footer Callout */}
        <RevealOnScroll delay={0.3} direction="up">
          <div className="p-8 rounded-[14px] bg-[#131313] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-base font-display font-bold uppercase text-white">
                Need a Custom AI Architecture or Feasibility Audit?
              </div>
              <div className="text-xs font-sans text-[#a1a1a1]">
                Consult directly with Grevya software architects to evaluate stack feasibility and ROI.
              </div>
            </div>
            <Pill
              asButton
              variant="accent"
              size="lg"
              onClick={scrollToContact}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Book Technical Review
            </Pill>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Products;
