import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AcceleratorLayout, { type AcceleratorCopy } from "@/components/AcceleratorLayout";
import {
  Clock,
  Database,
  Users,
  ShieldAlert,
  MessageSquare,
  BarChart3,
  Shield,
  Layers,
  Sparkles,
  Lock,
  Zap,
  TrendingUp,
  Rocket,
  Cpu,
  Target,
} from "lucide-react";

const copy: AcceleratorCopy = {
  badge: "AI Data Analytics Accelerator",
  title: "Ask your data anything —",
  titleHighlight: "in plain English",
  tagline: "A pre-built analytics engine that turns natural language into governed SQL across every database you own.",
  subhead:
    "Grevya's AI Data Analytics Accelerator ships a production natural-language-to-SQL layer with row-level security, schema grounding, and audit logging — so your business teams self-serve insights without writing queries or waiting on analysts.",
  heroBullets: [
    "4-day POC",
    "4-week pilot",
    "Multi-database support",
    "Row-level governance",
  ],
  problems: [
    {
      icon: Clock,
      title: "BI backlogs",
      body: "Analyst teams are overwhelmed. Business users wait days or weeks for basic reports that should take seconds.",
    },
    {
      icon: Database,
      title: "Data silos",
      body: "Warehouses, product DBs, and SaaS tools don't talk. Cross-source questions require custom pipelines every time.",
    },
    {
      icon: Users,
      title: "SQL skill gap",
      body: "The people with business questions aren't the people who write SQL. That translation layer is where insight dies.",
    },
    {
      icon: ShieldAlert,
      title: "Governance risk",
      body: "Self-serve BI without row-level security, PII masking, or audit trails is a compliance incident waiting to happen.",
    },
  ],
  solutionTitle: "Natural language to SQL, with the governance your auditors expect",
  solutionBody:
    "A production-ready analytics layer that grounds every query in your real schema, semantic model, and role-based permissions. Query Postgres, Snowflake, BigQuery, and your warehouse in the same conversation — with every question logged, every result explained, and every permission enforced.",
  solutionBullets: [
    "Schema-grounded retrieval prevents hallucinated columns and joins",
    "Row-level security & PII masking enforced before results render",
    "Full audit trail — every question, query, and result retained",
    "Multi-source federation across warehouses, transactional DBs, and APIs",
  ],
  features: [
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      body: "Business users ask questions in plain English. The system writes, optimizes, and explains the underlying SQL.",
    },
    {
      icon: Database,
      title: "Multi-Database Federation",
      body: "Query Postgres, Snowflake, BigQuery, Databricks, and Redshift from a single conversation layer.",
    },
    {
      icon: BarChart3,
      title: "Auto Visualization",
      body: "Charts, pivots, and dashboards generated from each result — editable, exportable, and shareable.",
    },
    {
      icon: Shield,
      title: "Row-Level Security",
      body: "Honors existing RBAC, column masking, and tenant isolation. Users only see what they're permitted to see.",
    },
    {
      icon: Layers,
      title: "Semantic Layer",
      body: "Define metrics once — revenue, churn, LTV — and the model uses consistent definitions across every question.",
    },
    {
      icon: Sparkles,
      title: "Self-Improving",
      body: "Every thumbs-up and correction retrains the retrieval layer. Accuracy compounds with usage.",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      body: "SOC 2, HIPAA, and GDPR-aligned. Full audit logs, PII redaction, data residency controls.",
    },
    {
      icon: Zap,
      title: "Sub-Second Responses",
      body: "Caching, query plan reuse, and pre-warmed schemas keep latency under a second on common queries.",
    },
  ],
  useCases: [
    {
      industry: "Finance",
      title: "Self-Serve Revenue Analytics",
      body: "CFO and FP&A teams ask natural-language questions about ARR, cohorts, and forecasts — governed by entitlements and reconciled to the ledger.",
    },
    {
      industry: "Healthcare",
      title: "HIPAA-Safe Patient Cohorts",
      body: "Clinical ops teams query de-identified patient cohorts for outcomes research with row-level PHI masking and full audit trail.",
    },
    {
      industry: "Customer Success",
      title: "Ticket Trend Analysis",
      body: "Support leaders ask about escalation patterns, response SLAs, and CSAT drivers across regions — no SQL, no backlog.",
    },
  ],
  differentiators: [
    { icon: Rocket, title: "4-Day POC", body: "Working demo on your data in under a week." },
    { icon: Target, title: "Grounded, Not Guessed", body: "Schema retrieval prevents hallucinated columns." },
    { icon: Shield, title: "Governance First", body: "RBAC, masking, and audit logs from day one." },
    { icon: Cpu, title: "Model Agnostic", body: "Claude, GPT, Gemini, or self-hosted — your choice." },
    { icon: TrendingUp, title: "Compounds Over Time", body: "Accuracy improves with feedback loops and corrections." },
  ],
  roadmap: [
    { phase: "Phase 1", duration: "4 days", title: "POC", body: "Connect one data source, validate natural-language accuracy on your schema, live demo." },
    { phase: "Phase 2", duration: "4 weeks", title: "Pilot", body: "Add semantic layer, wire up SSO & RBAC, onboard a department of business users." },
    { phase: "Phase 3", duration: "2-3 months", title: "Scale", body: "Federate additional sources, tune retrieval, activate audit and governance reports." },
    { phase: "Phase 4", duration: "4 months", title: "Production", body: "Company-wide rollout, self-service enablement, continuous improvement loop." },
  ],
  gradient: "from-emerald-50 via-teal-50 to-cyan-100",
};

const DataAnalyticsPage = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <main id="main-content">
      <AcceleratorLayout copy={copy} />
    </main>
    <Footer />
  </div>
);

export default DataAnalyticsPage;
