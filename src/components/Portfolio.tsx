import React, { useState } from "react";
import { Layers, Users, TrendingUp, ShoppingCart, FileText, Brain, ArrowRight, CheckCircle2, Terminal, Clock } from "lucide-react";
import Eyebrow from "@/components/primitives/Eyebrow";
import GradientText from "@/components/primitives/GradientText";
import GhostNumeral from "@/components/primitives/GhostNumeral";
import ReusableCard from "@/components/primitives/ReusableCard";
import Pill from "@/components/primitives/Pill";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const processMilestones = [
  {
    numeral: "01",
    phase: "PHASE 01 • DISCOVERY & FEASIBILITY",
    title: "1-Day Architecture Workshop & ROI Scoring",
    timeline: "Week 1",
    desc: "Facilitated alignment session to map use-case inventories, score data readiness, evaluate vector DB & LLM stack options, and build a board-ready ROI scorecard.",
    capabilities: ["Use-Case Matrix Scoring", "Data Quality Diagnostic", "Build-vs-Buy Evaluation"],
  },
  {
    numeral: "02",
    phase: "PHASE 02 • PROTOTYPE & EVAL HARNESS",
    title: "Rapid Agentic Pilot & Golden Eval Set",
    timeline: "Weeks 2 - 4",
    desc: "Deploy working prompt pipelines, RAG ingestion strategies, and multi-agent execution graphs wired with golden evaluation harnesses in CI/CD.",
    capabilities: ["Prompt Pipeline Versioning", "LLM-as-Judge Evals", "Schema Validation Engine"],
  },
  {
    numeral: "03",
    phase: "PHASE 03 • PRODUCTION & HARDENING",
    title: "Cloud Infrastructure, Guardrails & SOC 2",
    timeline: "Weeks 5 - 8",
    desc: "Harden application APIs, wire OpenTelemetry observability, enforce PII redaction and role-based access controls, and deploy canary releases.",
    capabilities: ["Air-Gapped Data Isolation", "Row-Level Access Controls", "Canary Deployment Gates"],
  },
  {
    numeral: "04",
    phase: "PHASE 04 • CONTINUOUS GOVERNANCE",
    title: "Observability, Cost Control & SLA SLAs",
    timeline: "Ongoing",
    desc: "Continuous monitoring of token-level cost attribution, prompt drift, model accuracy, and SLA enforcement with 24/7 engineering escalation.",
    capabilities: ["Cost Attribution Traces", "Accuracy Drift Alerts", "SLA-Backed Support"],
  },
];

const capabilityBlueprints = [
  {
    id: "supply-chain",
    title: "AI-Powered Supply Chain Architecture",
    description: "Intelligent supply chain architecture utilizing machine learning algorithms for demand forecasting, inventory balancing, and logistics tracking.",
    icon: Layers,
    technologies: ["Machine Learning", "Python", "FastAPI", "React", "Cloud Pipelines"],
    focus: "Supply Chain & Logistics",
  },
  {
    id: "recruitment",
    title: "HR Recruitment Automation Workflows",
    description: "Recruitment ecosystem featuring automated candidate evaluation pipelines, structured interview scheduling, and talent analytics.",
    icon: Users,
    technologies: ["NLP", "Audio Processing", "Multi-Agent Evaluation", "Node.js"],
    focus: "Talent & HR Engineering",
  },
  {
    id: "saas-analytics",
    title: "Enterprise SaaS Analytics Engines",
    description: "Business intelligence platform with real-time analytics pipelines, predictive modeling, and governed natural-language query interfaces.",
    icon: TrendingUp,
    technologies: ["Data Science", "Python", "React", "PostgreSQL", "Kubernetes"],
    focus: "Business Intelligence",
  },
  {
    id: "ecommerce-ai",
    title: "E-Commerce AI Assistant Architectures",
    description: "Intelligent commerce conversational engines with recommendation models and automated customer support integrations.",
    icon: ShoppingCart,
    technologies: ["LLM APIs", "React", "Node.js", "Redis", "Microservices"],
    focus: "Conversational AI",
  },
  {
    id: "doc-ocr",
    title: "Document Intelligence & OCR Systems",
    description: "Enterprise document processing platform using computer vision and optical character recognition for automated document classification.",
    icon: FileText,
    technologies: ["Computer Vision", "OCR", "Python", "FastAPI", "PostgreSQL"],
    focus: "Computer Vision",
  },
  {
    id: "workflow-engine",
    title: "Intelligent Workflow Engines",
    description: "Advanced AI workflow orchestration engine that automates complex multi-step business decisions and operational procedures.",
    icon: Brain,
    technologies: ["Agentic AI", "Automation", "TypeScript", "GraphQL", "gRPC"],
    focus: "Workflow Engineering",
  },
];

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"timeline" | "blueprints">("timeline");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#fafafa] relative overflow-hidden border-t border-white/10">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 z-10 w-full space-y-16">
        
        {/* Section Wayfinding Header */}
        <RevealOnScroll delay={0.1} direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
            <div className="max-w-3xl space-y-4">
              <Eyebrow index="008" label="OUR ENGINEERING PROCESS & SOLUTION BLUEPRINTS" />
              <h2 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold uppercase text-[#fafafa] tracking-tight leading-[0.95]">
                ENGINEERING PROCESS & <br />
                <GradientText className="inline">SOLUTION BLUEPRINTS</GradientText>
              </h2>
              <p className="font-sans text-[#a1a1a1] text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
                A structured, 4-phase deployment methodology backed by tested enterprise solution blueprints.
              </p>
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center gap-2">
              <Pill
                asButton
                variant={activeTab === "timeline" ? "accent" : "outline"}
                size="md"
                onClick={() => setActiveTab("timeline")}
              >
                4-Phase Process Rail
              </Pill>
              <Pill
                asButton
                variant={activeTab === "blueprints" ? "accent" : "outline"}
                size="md"
                onClick={() => setActiveTab("blueprints")}
              >
                Capability Blueprints
              </Pill>
            </div>
          </div>
        </RevealOnScroll>

        {/* View 1: Vertical Progress Rail Timeline */}
        {activeTab === "timeline" && (
          <div className="space-y-12">
            <RevealOnScroll delay={0.1} direction="up">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                  DEPLOYMENT TIMELINE & MILESTONES
                </div>
                <div className="text-xs font-mono text-[#6b6b6b]">4 STAGED PHASES</div>
              </div>
            </RevealOnScroll>

            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#f97316]/30 space-y-12">
              {processMilestones.map((ms, idx) => (
                <RevealOnScroll key={ms.numeral} delay={0.1 + idx * 0.1} direction="up">
                  <div className="relative group">
                    {/* Rail Node Dot Indicator */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-[#f97316] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#f97316] transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    <ReusableCard
                      variant="elevated"
                      hoverable
                      className="p-8 border-white/10 space-y-6 relative overflow-hidden"
                    >
                      <GhostNumeral
                        numeral={ms.numeral}
                        className="absolute -right-4 -top-8 text-white/[0.04] group-hover:text-[#f97316]/[0.08] transition-colors"
                      />

                      <div className="space-y-4 relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#f97316]">
                            {ms.phase}
                          </span>
                          <Pill variant="accent" size="sm">
                            <Clock className="h-3 w-3 mr-1" />
                            {ms.timeline}
                          </Pill>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-wide group-hover:text-[#fb923c] transition-colors">
                          {ms.title}
                        </h3>

                        <p className="font-sans text-[#a1a1a1] text-sm sm:text-base leading-relaxed max-w-4xl">
                          {ms.desc}
                        </p>

                        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                          {ms.capabilities.map((cap, cIdx) => (
                            <Pill key={cIdx} variant="outline" size="sm">
                              {cap}
                            </Pill>
                          ))}
                        </div>
                      </div>
                    </ReusableCard>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}

        {/* View 2: Capability Solution Blueprints Grid */}
        {activeTab === "blueprints" && (
          <div className="space-y-8">
            <RevealOnScroll delay={0.1} direction="up">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                  REPRESENTATIVE SOLUTION BLUEPRINTS
                </div>
                <div className="text-xs font-mono text-[#6b6b6b]">6 BLUEPRINT ARCHITECTURES</div>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilityBlueprints.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <RevealOnScroll key={cap.id} delay={0.1 + idx * 0.08} direction="up">
                    <ReusableCard
                      variant="elevated"
                      hoverable
                      className="p-8 border-white/10 space-y-6 flex flex-col justify-between h-full group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="p-2.5 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <Pill variant="default" size="sm">
                            {cap.focus}
                          </Pill>
                        </div>

                        <h3 className="text-xl font-display font-bold uppercase text-white tracking-wide group-hover:text-[#fb923c] transition-colors">
                          {cap.title}
                        </h3>

                        <p className="font-sans text-[#a1a1a1] text-xs leading-relaxed">
                          {cap.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/10 space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                          {cap.technologies.map((tech, tIdx) => (
                            <Pill key={tIdx} variant="outline" size="sm">
                              {tech}
                            </Pill>
                          ))}
                        </div>

                        <button
                          onClick={scrollToContact}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#1a1a1a] hover:bg-[#222] border border-white/10 text-xs font-sans font-bold uppercase tracking-[0.15em] text-white hover:text-[#f97316] transition-colors"
                        >
                          <span>Request Solution Architecture</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
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
                Ready to Initiate Your AI Pilot Deployment?
              </div>
              <div className="text-xs font-sans text-[#a1a1a1]">
                Schedule a technical review to receive a custom architecture roadmap in 1 day.
              </div>
            </div>
            <Pill
              asButton
              variant="accent"
              size="lg"
              onClick={scrollToContact}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Request Architecture Roadmap
            </Pill>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Portfolio;
