import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = React.lazy(() => import("./pages/Index.tsx"));
const FoundingMembers = React.lazy(() => import("./pages/FoundingMembers.tsx"));
const Blog = React.lazy(() => import("./pages/Blog.tsx"));
const YouthEnvironmentalMovementNepal = React.lazy(() => import("./pages/blog/YouthEnvironmentalMovementNepal.tsx"));
const ClimateChangeNepalYouth = React.lazy(() => import("./pages/blog/ClimateChangeNepalYouth.tsx"));
const TreePlantationNepal = React.lazy(() => import("./pages/blog/TreePlantationNepal.tsx"));
const HowToJoinEHHNepal = React.lazy(() => import("./pages/blog/HowToJoinEHHNepal.tsx"));
const HumanitarianAidNepal = React.lazy(() => import("./pages/blog/HumanitarianAidNepal.tsx"));
const EnvironmentalEducationNepalSchools = React.lazy(() => import("./pages/blog/EnvironmentalEducationNepalSchools.tsx"));
const NotFound = React.lazy(() => import("./pages/NotFound.tsx"));

const FloatingButterflies = React.lazy(() => import("@/components/home/FloatingButterflies"));
const ScrollBirds         = React.lazy(() => import("@/components/home/ScrollBirds"));

// Step 6: React Query Optimization
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
      gcTime: 1000 * 60 * 30, // Data remains in cache for 30 minutes (formerly cacheTime)
      refetchOnWindowFocus: false, // Prevent unnecessary background refetches
      refetchOnReconnect: true,
      retry: 2, // Retry failed requests twice
    },
  },
});

import { ErrorBoundary } from "./components/ErrorBoundary";

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const GlobalAnimations = () => {
  const [showAnimations, setShowAnimations] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowAnimations(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!showAnimations) return null;

  return (
    <Suspense fallback={null}>
      <ErrorBoundary fallback={null}>
        <FloatingButterflies />
      </ErrorBoundary>
      <ErrorBoundary fallback={null}>
        <ScrollBirds />
      </ErrorBoundary>
    </Suspense>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GlobalAnimations />
        <BrowserRouter basename="/" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/founding-members" element={<FoundingMembers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/youth-environmental-movement-nepal" element={<YouthEnvironmentalMovementNepal />} />
              <Route path="/blog/climate-change-nepal-youth-action" element={<ClimateChangeNepalYouth />} />
              <Route path="/blog/tree-plantation-nepal" element={<TreePlantationNepal />} />
              <Route path="/blog/how-to-join-ehh-nepal" element={<HowToJoinEHHNepal />} />
              <Route path="/blog/humanitarian-aid-nepal-students" element={<HumanitarianAidNepal />} />
              <Route path="/blog/environmental-education-nepal-schools" element={<EnvironmentalEducationNepalSchools />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
