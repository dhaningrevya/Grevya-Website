import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AcceleratorLayout, { type AcceleratorCopy } from "@/components/AcceleratorLayout";
import {
  Clock,
  AlertTriangle,
  FileWarning,
  Layers,
  FileText,
  Image as ImageIcon,
  Video,
  Languages,
  Shield,
  Cpu,
  Gauge,
  Zap,
  Palette,
  Target,
  Sparkles,
  Rocket,
  Award,
  ShieldCheck,
  Building2,
} from "lucide-react";

const copy: AcceleratorCopy = {
  badge: "AI Content Generation Accelerator",
  title: "Your custom content engine,",
  titleHighlight: "shipped in 2 weeks",
  tagline: "Generate on-brand text, images, and video 10x faster — with brand voice, compliance, and audit trails built in.",
  subhead:
    "Grevya's AI Content Generation Accelerator deploys a production-grade, multi-modal content engine tuned to your brand, governed by your compliance rules, and routed across the LLMs that give you the best cost-quality tradeoff. Reports, emails, campaigns, product descriptions, illustrations, and short-form video — all from one pipeline.",
  heroBullets: [
    "2-week pilot",
    "Multi-modal (text, image, video)",
    "Brand voice baked in",
    "Up to 40% lower inference cost",
  ],
  problems: [
    {
      icon: Clock,
      title: "Content bottlenecks",
      body: "Marketing, clinical, legal, and research teams spend days on documents that should take minutes — and quality suffers under pressure.",
    },
    {
      icon: FileWarning,
      title: "Off-brand, off-tone output",
      body: "Generic LLM prompts produce inconsistent voice, wrong facts, and output your brand team has to rewrite from scratch.",
    },
    {
      icon: AlertTriangle,
      title: "70% of AI projects never ship",
      body: "Content POCs stall on compliance review, cost blowups, and lack of audit trails — so the demo never becomes a tool.",
    },
    {
      icon: Layers,
      title: "Vendor lock-in risk",
      body: "A content pipeline tied to one LLM provider is a budget and flexibility liability as models and prices change monthly.",
    },
  ],
  solutionTitle: "A multi-modal content engine that respects your brand and your auditors",
  solutionBody:
    "A production content generation platform with YAML/JSON prompt blueprints for brand voice, multi-provider LLM routing (Claude, GPT, Gemini, Bedrock, open-source), brand-asset retrieval, compliance guardrails, and full audit logging. Your writers, designers, and compliance officers stay in the loop — the AI handles the first 80% of the work.",
  solutionBullets: [
    "Prompt blueprints version-control your brand voice, tone, and format",
    "Smart routing picks the right model per task — up to 40% cheaper inference",
    "Brand-asset retrieval grounds every output in your approved content library",
    "Full audit trail: every prompt, model, and output logged and reproducible",
  ],
  features: [
    {
      icon: FileText,
      title: "Text Generation",
      body: "Articles, emails, social posts, product descriptions, reports — in your brand voice with factual grounding.",
    },
    {
      icon: ImageIcon,
      title: "Image Generation",
      body: "On-brand illustrations, infographics, hero images, and product visuals from text prompts or reference sets.",
    },
    {
      icon: Video,
      title: "Video Production",
      body: "Text-to-video and automated storyboards for social, training, and product marketing — 50 variants in the time one used to take.",
    },
    {
      icon: Languages,
      title: "Repurpose & Translate",
      body: "One source document becomes blog posts, social threads, slide decks, and localized variants across 30+ languages.",
    },
    {
      icon: Palette,
      title: "Brand Blueprints",
      body: "YAML/JSON templates lock in voice, tone, structure, and disallowed terms — version-controlled in git.",
    },
    {
      icon: Cpu,
      title: "Multi-Provider Routing",
      body: "Route each task to the best model — Claude, GPT, Gemini, Bedrock, Llama — based on cost, quality, and latency.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Guardrails",
      body: "Output validators for regulated content — healthcare, finance, legal — with policy-review workflows and red-team testing.",
    },
    {
      icon: Gauge,
      title: "Audit & Observability",
      body: "Every prompt, model, and output traced. Reproducible runs for legal, regulatory, and brand review.",
    },
  ],
  useCases: [
    {
      industry: "Healthcare",
      title: "Clinical Summarization",
      body: "HIPAA-safe summarization of clinical notes with traceable sources — freeing clinicians from documentation to spend time on analysis and care.",
    },
    {
      industry: "Media & Publishing",
      title: "Interactive Content Production",
      body: "Cut content production time from 2 days to under 1 hour per asset — 50 campaign variants shipped in the time one used to take.",
    },
    {
      industry: "Market Research",
      title: "Automated Report Drafts",
      body: "First-draft research reports generated from market data in hours, not days — reviewed by analysts instead of written from scratch.",
    },
  ],
  differentiators: [
    {
      icon: Target,
      title: "Industry-Tuned",
      body: "Pre-built blueprints for healthcare, finance, legal, and technical content.",
    },
    {
      icon: Zap,
      title: "Model Agnostic",
      body: "No lock-in. Route to the best LLM per task as the market evolves.",
    },
    {
      icon: Sparkles,
      title: "Brand Consistency",
      body: "Version-controlled voice, tone, and guardrails — checked in to git.",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      body: "Audit trails, model tracking, and governance workflows from day one.",
    },
    {
      icon: Rocket,
      title: "80% Faster Launch",
      body: "Pre-configured architecture and battle-tested components ship in weeks.",
    },
  ],
  roadmap: [
    {
      phase: "Phase 1",
      duration: "Days 1-4",
      title: "Discovery & POC",
      body: "Content audit, brand-voice workshop, proof-of-concept on 3 high-priority content types.",
    },
    {
      phase: "Phase 2",
      duration: "Weeks 2-4",
      title: "Pilot Build",
      body: "Brand blueprints authored, asset retrieval wired up, guardrails defined, eval suite built.",
    },
    {
      phase: "Phase 3",
      duration: "Weeks 5-8",
      title: "Compliance & Scale",
      body: "Policy review workflow, audit logging, cost routing, production deploy.",
    },
    {
      phase: "Phase 4",
      duration: "Months 3-4",
      title: "Company-Wide Rollout",
      body: "Onboarding for content, marketing, and compliance teams. Continuous improvement loop on real content.",
    },
  ],
  gradient: "from-rose-50 via-fuchsia-50 to-purple-100",
};

const ContentGenerationPage = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <main id="main-content">
      <AcceleratorLayout copy={copy} />
    </main>
    <Footer />
  </div>
);

export default ContentGenerationPage;
