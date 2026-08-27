import { Database, Filter, BarChart3, ShieldCheck, CheckCircle2, LineChart, Cpu, FileSpreadsheet } from "lucide-react";
import { SolutionConfig } from "@/components/solutions/SolutionConfig";

export const dataAnalyticsConfig: SolutionConfig = {
  slug: "data-analytics",
  badge: "Enterprise Data Analytics",
  title: "Production Data Pipelines & Intelligence Systems Engineered for",
  titleHighlight: "Decision Accuracy",
  tagline: "Transform fragmented enterprise databases into structured analytical pipelines with automated normalization, validation, and executive decision support.",
  subhead: "Grevya delivers enterprise data analytics systems that process heterogeneous database streams into clear decision intelligence.",
  heroBullets: [
    "Heterogeneous Stream Ingest",
    "Automated Normalization",
    "Analytical Validation",
    "Executive Decision Support"
  ],
  pipeline: [
    {
      id: "ingestion",
      stageName: "INGESTION",
      title: "Data Stream Ingestion",
      desc: "Captures multi-source database feeds, IoT telemetry, and financial transactional sheets.",
      status: "INGESTED",
      inputData: "Multi-Source Database Feeds",
      outputData: "Unified Data Ingest Pipeline",
      icon: Database
    },
    {
      id: "structuring",
      stageName: "STRUCTURING",
      title: "Schema Normalization",
      desc: "Cleanses, structures, and maps incoming records into a unified relational schema.",
      status: "STRUCTURED",
      inputData: "Raw Unstructured Tables",
      outputData: "Normalized Data Schema",
      icon: Filter
    },
    {
      id: "analysis",
      stageName: "ANALYSIS",
      title: "Analytical Inference Engine",
      desc: "Executes statistical trend analysis, anomaly detection, and predictive modeling.",
      status: "ANALYZED",
      inputData: "Normalized Schema",
      outputData: "Analytical Relationship Matrix",
      icon: BarChart3
    },
    {
      id: "validation",
      stageName: "VALIDATION",
      title: "Data Integrity Verification",
      desc: "Enforces data quality thresholds and flags outliers before reporting output.",
      status: "VERIFIED",
      inputData: "Inferred Trends",
      outputData: "Validated Data Metrics",
      icon: ShieldCheck
    },
    {
      id: "outcome",
      stageName: "OUTCOME",
      title: "Decision Support Output",
      desc: "Dispatches executive reporting payloads and operational decision support alerts.",
      status: "DISPATCHED",
      inputData: "Validated Metrics",
      outputData: "Executive Insight Payload",
      icon: CheckCircle2
    }
  ],
  governanceLayers: [
    {
      id: "quality",
      name: "Data Quality & Sanitization",
      scope: "Data Cleaning",
      desc: "Filters duplicate entries, null records, and malformed field structures.",
      status: "ENFORCED",
      auditSignal: "Data Quality Check Passed",
      icon: Filter
    },
    {
      id: "access",
      name: "Role-Based Access Control",
      scope: "Data Security",
      desc: "Restricts sensitive data view access according to enterprise RBAC policies.",
      status: "ACTIVE",
      auditSignal: "RBAC Data Isolation Live",
      icon: ShieldCheck
    },
    {
      id: "auditability",
      name: "Immutable Audit Trace",
      scope: "Lineage Tracking",
      desc: "Logs data pipeline transformations from source ingest to final report.",
      status: "LIVE",
      auditSignal: "Full Lineage Trace Active",
      icon: FileSpreadsheet
    }
  ],
  capabilities: [
    {
      title: "Multi-Source Data Ingestion",
      desc: "Captures multi-source database feeds, IoT telemetry, and financial transactional sheets.",
      icon: Database
    },
    {
      title: "Schema Normalization",
      desc: "Cleanses, structures, and maps incoming records into a unified relational schema.",
      icon: Filter
    },
    {
      title: "Analytical Inference Engine",
      desc: "Executes statistical trend analysis, anomaly detection, and predictive modeling.",
      icon: BarChart3
    },
    {
      title: "Executive Decision Support",
      desc: "Dispatches executive reporting payloads and operational decision support alerts.",
      icon: LineChart
    }
  ],
  useCases: [
    {
      industry: "Healthcare Logistics",
      title: "Patient Flow & Resource Allocation Analytics",
      problem: "Unpredictable ER intake volume leads to staffing bottlenecks.",
      solution: "Analytics engine parses historical intake trends and predicts shift load.",
      outcome: "Optimized staff scheduling with reduced patient wait times."
    },
    {
      industry: "Retail & Supply Chain",
      title: "Inventory Anomaly Detection",
      problem: "Stockouts and overstock errors across regional distribution centers.",
      solution: "Data pipeline tracks inventory velocity and flags supply chain anomalies.",
      outcome: "Proactive inventory rebalancing across warehouses."
    },
    {
      industry: "Financial Services",
      title: "Transaction Anomaly & Risk Monitoring",
      problem: "High volume of transaction logs delays fraud risk evaluation.",
      solution: "Analytical pipeline evaluates transaction patterns against policy baselines.",
      outcome: "Immediate risk score assignment with human review escalation."
    }
  ],
  positioningStatement: "Transform fragmented databases into structured analytical decision pipelines."
};
