import React from "react";
import { LucideIcon } from "lucide-react";

export interface PipelineStage {
  id: string;
  stageName: string;
  title: string;
  desc: string;
  status: string;
  inputData: string;
  outputData: string;
  icon: LucideIcon;
}

export interface GovernanceLayer {
  id: string;
  name: string;
  scope: string;
  desc: string;
  status: string;
  auditSignal: string;
  icon: LucideIcon;
}

export interface SolutionUseCase {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

export interface SolutionCapability {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface SolutionConfig {
  slug: string;
  badge: string;
  title: string;
  titleHighlight: string;
  tagline: string;
  subhead: string;
  heroBullets: string[];
  pipeline: PipelineStage[];
  governanceLayers: GovernanceLayer[];
  capabilities: SolutionCapability[];
  useCases: SolutionUseCase[];
  positioningStatement: string;
}
