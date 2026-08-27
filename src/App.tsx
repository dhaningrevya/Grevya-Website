import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import CustomCursor from "@/components/interaction/CustomCursor";
import MouseBackgroundGlow from "@/components/interaction/MouseBackgroundGlow";

const AboutPage = lazy(() => import("./pages/About"));
const CareersPage = lazy(() => import("./pages/Careers"));
const EarlyCareersPage = lazy(() => import("./pages/EarlyCareers"));
const AgenticAIPage = lazy(() => import("./pages/AgenticAI"));
const DataAnalyticsPage = lazy(() => import("./pages/DataAnalytics"));
const ContentGenerationPage = lazy(() => import("./pages/ContentGeneration"));
const RAGApplicationPage = lazy(() => import("./pages/RAGApplication"));
const ServicePage = lazy(() => import("./pages/Service"));
const PrivacyPage = lazy(() => import("./pages/Privacy"));
const TermsPage = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center font-mono text-xs text-[#f97316]">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#f97316] animate-ping" />
      <span>LOADING GREVYA SYSTEM...</span>
    </div>
  </div>
);

const RouteEffects = () => {
  useScrollToHash();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SmoothScrollProvider>
        <MouseBackgroundGlow />
        <CustomCursor />
        <BrowserRouter>
          <RouteEffects />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#f97316] focus:text-white focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/early-careers" element={<EarlyCareersPage />} />
              <Route path="/solutions/agentic-ai" element={<AgenticAIPage />} />
              <Route path="/solutions/data-analytics" element={<DataAnalyticsPage />} />
              <Route path="/solutions/ai-content-generation" element={<ContentGenerationPage />} />
              <Route path="/solutions/rag-application" element={<RAGApplicationPage />} />
              <Route path="/solutions/:slug" element={<ServicePage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <WhatsAppButton />
        </BrowserRouter>
      </SmoothScrollProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
