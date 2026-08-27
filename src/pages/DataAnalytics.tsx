import React from "react";
import InternalSolutionLayout from "@/components/InternalSolutionLayout";
import { dataAnalyticsConfig } from "@/data/dataAnalyticsConfig";

export const DataAnalytics: React.FC = () => {
  return <InternalSolutionLayout config={dataAnalyticsConfig} />;
};

export default DataAnalytics;
