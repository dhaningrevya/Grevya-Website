import React from "react";
import InternalSolutionLayout from "@/components/InternalSolutionLayout";
import { agenticAIConfig } from "@/data/agenticAIConfig";

export const AgenticAI: React.FC = () => {
  return <InternalSolutionLayout config={agenticAIConfig} />;
};

export default AgenticAI;
