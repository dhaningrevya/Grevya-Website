import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import CareersPage from "./pages/Careers";
import EarlyCareersPage from "./pages/EarlyCareers";
import AgenticAIPage from "./pages/AgenticAI";
import DataAnalyticsPage from "./pages/DataAnalytics";
import ContentGenerationPage from "./pages/ContentGeneration";
import ServicePage from "./pages/Service";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import CustomCursor from "@/components/interaction/CustomCursor";
import MouseBackgroundGlow from "@/components/interaction/MouseBackgroundGlow";

const queryClient = new QueryClient();

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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/early-careers" element={<EarlyCareersPage />} />
            <Route path="/solutions/agentic-ai" element={<AgenticAIPage />} />
            <Route path="/solutions/data-analytics" element={<DataAnalyticsPage />} />
            <Route path="/solutions/ai-content-generation" element={<ContentGenerationPage />} />
            <Route path="/solutions/:slug" element={<ServicePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </BrowserRouter>
      </SmoothScrollProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
