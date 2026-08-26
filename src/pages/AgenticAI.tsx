import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AcceleratorLayout, { type AcceleratorCopy } from "@/components/AcceleratorLayout";
import {
  Clock,
  AlertTriangle,
  Network,
  Lock,
  Brain,
  Workflow,
  Shield,
  GitBranch,
  Activity,
  Zap,
  Target,
  Gauge,
  Rocket,
  Building2,
} from "lucide-react";

const copy: AcceleratorCopy = {
  badge: "Agentic AI Accelerator",
  title: "Build production multi-agent systems in",
  titleHighlight: "3 weeks, not 6 months",
  tagline: "Ship autonomous AI agents 10x faster with a pre-built, enterprise-grade orchestration layer.",
  subhead:
    "Grevya's Agentic AI Accelerator gives you a production-ready multi-agent platform with state management, guardrails, and observability baked in — so your team ships the business logic instead of the plumbing.",
  heroBullets: [
    "3-week pilot",
    "Multi-agent orchestration",
    "Enterprise guardrails",
    "Bring your own LLM",
  ],
  problems: [
    {
      icon: Clock,
      title: "6+ month timelines",
      body: "Most agentic AI projects take 6-12 months before a single agent reaches production due to infrastructure work.",
    },
    {
      icon: AlertTriangle,
      title: "40% failure rate",
      body: "Nearly half of agent POCs never reach production because hallucinations, loops, and cost blowups can't be controlled.",
    },
    {
      icon: Network,
      title: "Agent coordination chaos",
      body: "Multi-agent workflows break down without a state layer, handoff protocols, and deterministic fallbacks.",
    },
    {
      icon: Lock,
      title: "No enterprise guardrails",
      body: "Teams hit a wall on security review — no RBAC, audit trails, PII filtering, or compliance controls.",
    },
  ],
  solutionTitle: "A multi-agent platform your security team will actually approve",
  solutionBody:
    "Orchestrate specialist agents across your workflow with typed state, policy-level constraints, and full execution tracing. Built on LangGraph, CrewAI, and Microsoft Agent Framework with provider-agnostic LLM routing.",
  solutionBullets: [
    "Deterministic orchestration with fallback & retry policies",
    "PII redaction and policy enforcement at every agent boundary",
    "Full OpenTelemetry tracing across agents, tools, and LLM calls",
    "Human-in-the-loop approval checkpoints for regulated workflows",
  ],
  features: [
    {
      icon: Brain,
      title: "Typed State Management",
      body: "Agents share and mutate a strongly-typed global state with optimistic locking and time-travel debugging.",
    },
    {
      icon: Shield,
      title: "Policy & Constraints",
      body: "Declarative guardrails — tool allow-lists, output validators, cost ceilings, and PII filters — enforced at runtime.",
    },
    {
      icon: GitBranch,
      title: "Deterministic Routing",
      body: "Conditional edges, human checkpoints, and deterministic fallbacks replace \"let the LLM decide\" routing.",
    },
    {
      icon: Activity,
      title: "Full Observability",
      body: "OpenTelemetry traces, token-level cost attribution, and replayable execution timelines for every workflow.",
    },
  ],
  useCases: [
    {
      industry: "Finance",
      title: "Autonomous Claims Triage",
      body: "Multi-agent pipeline classifies, validates, and routes insurance claims with human approval for edge cases — 4x throughput, full audit trail.",
    },
    {
      industry: "Customer Success",
      title: "Tier-1 Support Deflection",
      body: "Specialist agents for billing, onboarding, and troubleshooting hand off to humans on policy violations — 62% of tickets resolved end-to-end.",
    },
    {
      industry: "Operations",
      title: "Procurement Automation",
      body: "Agents negotiate vendor quotes against a policy matrix, draft POs, and escalate above threshold to human buyers — cycle time cut from days to hours.",
    },
  ],
  differentiators: [
    { icon: Rocket, title: "3-Week Pilot", body: "Fixed scope, fixed timeline, working demo at the end." },
    { icon: Shield, title: "Enterprise Ready", body: "Guardrails and security baked in — not bolted on later." },
    { icon: Gauge, title: "Full Observability", body: "Every decision is traced, replayable, and debuggable." },
    { icon: Network, title: "Open Architecture", body: "No vendor lock-in. Works with your stack and your models." },
    { icon: Building2, title: "Built for Scale", body: "Handles millions of agent runs per day in production." },
  ],
  roadmap: [
    { phase: "Phase 1", duration: "Week 1", title: "Discovery & Architecture", body: "Workflow mapping, agent decomposition, data access review, success metrics." },
    { phase: "Phase 2", duration: "Week 2", title: "Pilot Build", body: "Configure accelerator for your use case, wire up tools, define guardrails and evals." },
    { phase: "Phase 3", duration: "Week 3", title: "Validation", body: "Run eval suite, tune prompts, deploy to staging with traffic mirroring." },
    { phase: "Phase 4", duration: "Month 2-4", title: "Production Launch", body: "Gradual rollout, monitoring, human-in-the-loop tuning, scale-up." },
  ],
  gradient: "from-primary-50 via-blue-50 to-indigo-100",
};

const AgenticAIPage = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
    <Navigation />
    <main id="main-content">
      <AcceleratorLayout copy={copy} />
    </main>
    <Footer />
  </div>
);

export default AgenticAIPage;
