import { FileText, Sparkles, CheckCircle2, Shield, Eye, Layers, Feather } from "lucide-react";
import { SolutionConfig } from "@/components/solutions/SolutionConfig";

export const contentGenConfig: SolutionConfig = {
  slug: "ai-content-generation",
  badge: "Commercial Content Automation",
  title: "Grounded Content Intelligence & Automated Proposal Systems Engineered for",
  titleHighlight: "Brand Accuracy",
  tagline: "Turn technical specifications, brand guidelines, and enterprise briefs into structured proposal drafts and commercial copy.",
  subhead: "Grevya delivers enterprise content generation pipelines with brand guideline enforcement, factual grounding, and human editorial review.",
  heroBullets: [
    "Brief & Spec Ingestion",
    "Grounded Knowledge Retrieval",
    "Brand Policy Guardrails",
    "Human Editorial Review"
  ],
  pipeline: [
    {
      id: "brief",
      stageName: "BRIEF",
      title: "Content Brief Ingestion",
      desc: "Ingests client technical requirements, RFP specifications, and target audience parameters.",
      status: "INGESTED",
      inputData: "Technical Brief / RFP",
      outputData: "Structured Brief Matrix",
      icon: FileText
    },
    {
      id: "context",
      stageName: "CONTEXT",
      title: "Knowledge Base Context",
      desc: "Retrieves factual product specs, case studies, and compliance references.",
      status: "RETRIEVED",
      inputData: "Brief Matrix",
      outputData: "Grounded Knowledge Pack",
      icon: Layers
    },
    {
      id: "generation",
      stageName: "GENERATION",
      title: "Structured Generation",
      desc: "Drafts compliant proposal sections, commercial copy, or documentation templates.",
      status: "GENERATED",
      inputData: "Grounded Context",
      outputData: "Draft Copy Payload",
      icon: Feather
    },
    {
      id: "review",
      stageName: "REVIEW",
      title: "Human Editorial Review",
      desc: "Exposes review checkpoints for human subject-matter experts to verify copy.",
      status: "REVIEWED",
      inputData: "Draft Copy Payload",
      outputData: "Verified Final Copy",
      icon: Eye
    },
    {
      id: "outcome",
      stageName: "PUBLISHED",
      title: "Published Output",
      desc: "Dispatches formatted proposals and technical documentation to CMS or client export.",
      status: "PUBLISHED",
      inputData: "Verified Final Copy",
      outputData: "Export-Ready Document",
      icon: CheckCircle2
    }
  ],
  governanceLayers: [
    {
      id: "brand",
      name: "Brand Guideline Guardrails",
      scope: "Tone & Style",
      desc: "Enforces brand voice policies, forbidden term filters, and formatting rules.",
      status: "ENFORCED",
      auditSignal: "Brand Policy Check Passed",
      icon: Shield
    },
    {
      id: "factual",
      name: "Factual Citation Grounding",
      scope: "Content Accuracy",
      desc: "Cross-checks generated statements against enterprise knowledge base citations.",
      status: "ACTIVE",
      auditSignal: "Citation Grounding Verified",
      icon: Sparkles
    },
    {
      id: "editorial",
      name: "Human Editorial Checkpoint",
      scope: "Human Approval",
      desc: "Requires human sign-off before publishing high-stakes commercial content.",
      status: "HOOKED",
      auditSignal: "Editorial Approval Hook Live",
      icon: Eye
    }
  ],
  capabilities: [
    {
      title: "Content Brief Ingestion",
      desc: "Ingests client technical requirements, RFP specifications, and target audience parameters.",
      icon: FileText
    },
    {
      title: "Grounded Generation",
      desc: "Drafts compliant proposal sections, commercial copy, or documentation templates.",
      icon: Feather
    },
    {
      title: "Brand Guideline Guardrails",
      desc: "Enforces brand voice policies, forbidden term filters, and formatting rules.",
      icon: Shield
    },
    {
      title: "Human Editorial Checkpoint",
      desc: "Requires human sign-off before publishing high-stakes commercial content.",
      icon: Eye
    }
  ],
  useCases: [
    {
      industry: "Commercial Software",
      title: "Automated RFP Response Drafting",
      problem: "Engineers spend 20+ hours per bid drafting repetitive technical responses.",
      solution: "Content pipeline parses RFP requirements and drafts grounded answers.",
      outcome: "Reduced drafting time with verified technical compliance."
    },
    {
      industry: "Marketing & Communications",
      title: "Technical Documentation Generation",
      problem: "Product release notes lag behind fast engineering release cycles.",
      solution: "Pipeline ingestion parses API specs and updates customer documentation.",
      outcome: "Synchronized documentation releases with human review."
    },
    {
      industry: "Professional Services",
      title: "Client Proposal Customization",
      problem: "Proposal teams struggle to customize complex service scope documents.",
      solution: "Grounded context engine matches client specs with past project blueprints.",
      outcome: "Consistent, policy-compliant proposal output."
    }
  ],
  positioningStatement: "Turn technical specifications into grounded proposal workflows and commercial copy."
};
