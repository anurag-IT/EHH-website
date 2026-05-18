import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = React.lazy(() => import("./pages/Index.tsx"));
const FoundingMembers = React.lazy(() => import("./pages/FoundingMembers.tsx"));
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
      <FloatingButterflies />
      <ScrollBirds />
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
