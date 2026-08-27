import { Brain, Shield, GitBranch, Activity, Network, Terminal, Cpu, CheckCircle2, Lock } from "lucide-react";
import { SolutionConfig } from "@/components/solutions/SolutionConfig";

export const agenticAIConfig: SolutionConfig = {
  slug: "agentic-ai",
  badge: "Agentic AI Engineering",
  title: "Production Multi-Agent Systems Engineered for",
  titleHighlight: "Operational Reliability",
  tagline: "Ship autonomous multi-agent workflow engines with state management, runtime guardrails, and complete auditability baked in.",
  subhead: "Grevya delivers production multi-agent systems with typed state coordination, policy enforcement, and observability tracing.",
  heroBullets: [
    "Multi-Agent Orchestration",
    "Typed State Coordination",
    "Enterprise Guardrails",
    "Model Agnostic Routing"
  ],
  pipeline: [
    {
      id: "input",
      stageName: "INPUT",
      title: "Task Intent Ingestion",
      desc: "Captures user request parameters, context payload, and enterprise API specifications.",
      status: "INGESTED",
      inputData: "User Task Prompt & Context",
      outputData: "Structured Task Intent",
      icon: Network
    },
    {
      id: "intent",
      stageName: "INTENT",
      title: "Intent Parsing & Decomposition",
      desc: "Decomposes complex multi-step workflows into sub-tasks and assigns specialist agent roles.",
      status: "PARSED",
      inputData: "Task Intent Object",
      outputData: "Multi-Subtask DAG",
      icon: Brain
    },
    {
      id: "orchestration",
      stageName: "ORCHESTRATION",
      title: "Multi-Agent Coordination",
      desc: "Orchestrates execution handoffs between specialized agents using typed global state.",
      status: "ACTIVE",
      inputData: "Subtask Execution Graph",
      outputData: "Agent Handoff Messages",
      icon: Terminal
    },
    {
      id: "validation",
      stageName: "VALIDATION",
      title: "Runtime Guardrail Filter",
      desc: "Validates intermediate outputs against strict JSON schema rules and safety constraints.",
      status: "ENFORCED",
      inputData: "Raw Agent Output",
      outputData: "Validated Schema Object",
      icon: Shield
    },
    {
      id: "outcome",
      stageName: "OUTCOME",
      title: "Deterministic Dispatch",
      desc: "Dispatches audited action payloads directly to enterprise software endpoints.",
      status: "EXECUTED",
      inputData: "Validated Payload",
      outputData: "Audited System Dispatch",
      icon: CheckCircle2
    }
  ],
  governanceLayers: [
    {
      id: "state",
      name: "Typed State Coordination",
      scope: "State Management",
      desc: "Agents share and mutate a strongly-typed global state with lock control.",
      status: "ENFORCED",
      auditSignal: "Typed State Locking Active",
      icon: Brain
    },
    {
      id: "guardrails",
      name: "Policy & Constraint Enforcer",
      scope: "Runtime Security",
      desc: "Declarative guardrails—tool allow-lists, output validators, and PII filters—enforced at runtime.",
      status: "ACTIVE",
      auditSignal: "PII Redaction & Tool Allowlist",
      icon: Shield
    },
    {
      id: "routing",
      name: "Deterministic Routing",
      scope: "Logic Execution",
      desc: "Conditional edges, human checkpoints, and deterministic fallbacks ensure execution stability.",
      status: "CONNECTED",
      auditSignal: "Deterministic Fallbacks Live",
      icon: GitBranch
    },
    {
      id: "observability",
      name: "Observability Tracing",
      scope: "Execution Audit",
      desc: "Structured execution logs and token-level cost attribution for every agent workflow.",
      status: "LIVE",
      auditSignal: "Execution Audit Logs Active",
      icon: Activity
    }
  ],
  capabilities: [
    {
      title: "Typed State Management",
      desc: "Agents share and mutate a strongly-typed global state with lock control.",
      icon: Brain
    },
    {
      title: "Policy & Constraints",
      desc: "Declarative guardrails—tool allow-lists, output validators, and PII filters—enforced at runtime.",
      icon: Shield
    },
    {
      title: "Deterministic Routing",
      desc: "Conditional edges, human checkpoints, and deterministic fallbacks ensure execution stability.",
      icon: GitBranch
    },
    {
      title: "Execution Observability",
      desc: "Structured execution logs and token-level cost attribution for every workflow.",
      icon: Activity
    }
  ],
  useCases: [
    {
      industry: "Finance",
      title: "Autonomous Claims Processing Support",
      problem: "Manual claims verification causes long processing queues.",
      solution: "Multi-agent pipeline parses documents, validates policy rules, and pre-qualifies claims.",
      outcome: "Accelerated throughput with full audit trail compliance."
    },
    {
      industry: "Customer Success",
      title: "Support Workflow Deflection",
      problem: "High volume tier-1 tickets overload engineering teams.",
      solution: "Specialist agents handle billing and troubleshooting with human escalation hooks.",
      outcome: "Faster resolution times with policy-compliant handoffs."
    },
    {
      industry: "Operations",
      title: "Procurement & Invoice Matching",
      problem: "Discrepancies between purchase orders and vendor invoices.",
      solution: "Multi-agent matching engine extracts line items and flags variances.",
      outcome: "Automated invoice audit stream with human review triggers."
    }
  ],
  positioningStatement: "Ship production multi-agent systems with state management, guardrails, and auditability."
};
