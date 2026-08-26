import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AcceleratorLayout, { type AcceleratorCopy } from "@/components/AcceleratorLayout";
import { Database, Shield, Cpu, Activity, Rocket, Gauge, Network, Building2 } from "lucide-react";

const copy: AcceleratorCopy = {
  badge: "AI Data Analytics Accelerator",
  title: "Transform enterprise databases into",
  titleHighlight: "Conversational Intelligence",
  tagline: "Ship natural language to SQL analytics pipelines with sub-second execution.",
  subhead: "Grevya's Data Analytics Accelerator bridges business teams and complex databases with schema-grounded LLMs, role-based access control, and zero data leakage.",
  heroBullets: ["NL-to-SQL Engine", "Air-gapped Privacy", "Sub-second Queries", "BI Integration"],
  problems: [
    { icon: Database, title: "SQL Bottlenecks", body: "Data teams waste 40% of their time writing repetitive SQL queries for business stakeholders." },
    { icon: Shield, title: "Data Security Risks", body: "Sending database schemas and raw tables to public LLM APIs violates compliance." }
  ],
  solutionTitle: "Natural Language Analytics Built for Enterprise Compliance",
  solutionBody: "Query your relational databases, data warehouses, and vector stores using plain English with schema grounding and strict RBAC enforcement.",
  solutionBullets: ["Automatic SQL query validation and sanitization", "Role-based schema masking", "Support for Snowflake, BigQuery, PostgreSQL, and Databricks"],
  features: [
    { icon: Database, title: "Schema Indexing", body: "Automatically index tables, foreign keys, and column metadata for accurate SQL generation." },
    { icon: Cpu, title: "LLM Query Validation", body: "Dry-run and validate generated SQL statements before executing against production databases." }
  ],
  useCases: [
    { industry: "Healthcare", title: "Patient Intake Analytics", body: "Query clinical records and diagnostic queues in real-time." }
  ],
  differentiators: [
    { icon: Rocket, title: "3-Week Setup", body: "Plug into your existing database schema without data movement." }
  ],
  roadmap: [
    { phase: "Phase 1", duration: "Week 1", title: "Schema Mapping", body: "Index schemas and establish query security boundaries." }
  ],
  gradient: "from-blue-50 via-slate-50 to-indigo-100"
};

const DataAnalyticsPage = () => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
    <Navigation />
    <main id="main-content">
      <AcceleratorLayout copy={copy} />
    </main>
    <Footer />
  </div>
);

export default DataAnalyticsPage;
