import { Database, Search, Layers, ShieldCheck, CheckCircle2, FileText, Cpu, Filter } from "lucide-react";
import { SolutionConfig } from "@/components/solutions/SolutionConfig";

export const ragConfig: SolutionConfig = {
  slug: "rag-application",
  badge: "Production RAG Systems",
  title: "Retrieval-Augmented Generation Platforms Engineered for",
  titleHighlight: "Zero Hallucination",
  tagline: "Index enterprise document repositories with hybrid vector retrieval, schema-grounded citations, and runtime validation filters.",
  subhead: "Grevya delivers enterprise RAG platforms that query unstructured documents and databases with verifiable source attribution.",
  heroBullets: [
    "Hybrid Vector Search",
    "Dense-Sparse Indexing",
    "Source Attribution Citations",
    "Schema Validation Filters"
  ],
  pipeline: [
    {
      id: "source",
      stageName: "SOURCE",
      title: "Knowledge Source Ingestion",
      desc: "Connects to internal PDF repositories, SQL databases, and cloud document vaults.",
      status: "CONNECTED",
      inputData: "Enterprise Repositories",
      outputData: "Raw Document Stream",
      icon: Database
    },
    {
      id: "indexing",
      stageName: "INDEXING",
      title: "Chunking & Vector Indexing",
      desc: "Chunks documents semantically and generates dense-sparse vector embeddings.",
      status: "INDEXED",
      inputData: "Raw Document Stream",
      outputData: "Vector Search Index",
      icon: Filter
    },
    {
      id: "retrieval",
      stageName: "RETRIEVAL",
      title: "Hybrid Vector Retrieval",
      desc: "Executes semantic vector lookup and keyword reranking to pull precise context.",
      status: "RETRIEVED",
      inputData: "User Search Query",
      outputData: "Top-K Relevant Chunks",
      icon: Search
    },
    {
      id: "assembly",
      stageName: "ASSEMBLY",
      title: "Context Assembly & Grounding",
      desc: "Assembles context payload with verified source attribution markers.",
      status: "GROUNDED",
      inputData: "Top-K Relevant Chunks",
      outputData: "Grounded Context Prompt",
      icon: Layers
    },
    {
      id: "response",
      stageName: "RESPONSE",
      title: "Validated Response Output",
      desc: "Generates factual answer with inline source citations and guardrail checks.",
      status: "VERIFIED",
      inputData: "Grounded Context Prompt",
      outputData: "Attributed Response Payload",
      icon: CheckCircle2
    }
  ],
  governanceLayers: [
    {
      id: "attribution",
      name: "100% Source Attribution",
      scope: "Citation Enforcement",
      desc: "Every generated claim is linked directly to a verifiable document source chunk.",
      status: "ENFORCED",
      auditSignal: "Inline Citation Links Verified",
      icon: FileText
    },
    {
      id: "isolation",
      name: "Document Access Controls",
      scope: "Data Security",
      desc: "Respects source document ACLs so users only retrieve information they have permissions to view.",
      status: "ACTIVE",
      auditSignal: "Document ACL Isolation Live",
      icon: ShieldCheck
    },
    {
      id: "eval",
      name: "Retrieval Evaluation Harness",
      scope: "Quality Control",
      desc: "Continuously measures retrieval precision and answer faithfulness against test sets.",
      status: "LIVE",
      auditSignal: "Faithfulness Score Evaluated",
      icon: Cpu
    }
  ],
  capabilities: [
    {
      title: "Hybrid Vector Search",
      desc: "Combines semantic vector search with keyword sparse retrieval for high recall.",
      icon: Search
    },
    {
      title: "Semantic Chunking",
      desc: "Chunks complex enterprise documents along logical section boundaries.",
      icon: Filter
    },
    {
      title: "Source Attribution",
      desc: "Attributes generated text directly to underlying source paragraphs.",
      icon: FileText
    },
    {
      title: "Access Control Isolation",
      desc: "Enforces document permission levels during vector retrieval.",
      icon: ShieldCheck
    }
  ],
  useCases: [
    {
      industry: "Legal & Regulatory",
      title: "Contract & Policy Search Assistant",
      problem: "Legal teams spend hours searching across thousands of policy documents.",
      solution: "RAG engine indexes policy vaults and delivers answers with source clause citations.",
      outcome: "Instant clause lookup with verifiable source attribution."
    },
    {
      industry: "Enterprise Knowledge Base",
      title: "Internal Technical Knowledge Assistant",
      problem: "Support engineers struggle to find resolution steps in fragmented wiki pages.",
      solution: "Hybrid RAG search queries technical documentation and indexes resolution flows.",
      outcome: "Faster ticket resolution with verified documentation links."
    },
    {
      industry: "Financial Research",
      title: "Earnings Report Analysis Engine",
      problem: "Analysts need to cross-reference statements across multiple annual reports.",
      solution: "RAG pipeline retrieves exact financial metrics across multi-year filings.",
      outcome: "Accurate financial data extraction with report page citations."
    }
  ],
  positioningStatement: "Query enterprise document repositories with verifiable source attribution."
};
