import React from "react";
import InternalSolutionLayout from "@/components/InternalSolutionLayout";
import { ragConfig } from "@/data/ragConfig";

export const RAGApplication: React.FC = () => {
  return <InternalSolutionLayout config={ragConfig} />;
};

export default RAGApplication;
