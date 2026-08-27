import React from "react";
import InternalSolutionLayout from "@/components/InternalSolutionLayout";
import { contentGenConfig } from "@/data/contentGenConfig";

export const ContentGeneration: React.FC = () => {
  return <InternalSolutionLayout config={contentGenConfig} />;
};

export default ContentGeneration;
