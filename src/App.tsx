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
const DeforestationNepal = React.lazy(() => import("./pages/blog/DeforestationNepal.tsx"));
const AirPollutionKathmandu = React.lazy(() => import("./pages/blog/AirPollutionKathmandu.tsx"));
const WaterPollutionNepal = React.lazy(() => import("./pages/blog/WaterPollutionNepal.tsx"));
const PlasticPollutionNepal = React.lazy(() => import("./pages/blog/PlasticPollutionNepal.tsx"));
const BiodiversityNepal = React.lazy(() => import("./pages/blog/BiodiversityNepal.tsx"));
const SustainableLivingNepal = React.lazy(() => import("./pages/blog/SustainableLivingNepal.tsx"));
const ClimateChangeAgricultureNepal = React.lazy(() => import("./pages/blog/ClimateChangeAgricultureNepal.tsx"));
const StartEnvironmentalClubSchoolNepal = React.lazy(() => import("./pages/blog/StartEnvironmentalClubSchoolNepal.tsx"));
const NepalNationalParksConservation = React.lazy(() => import("./pages/blog/NepalNationalParksConservation.tsx"));
const DisasterPreparednessNepal = React.lazy(() => import("./pages/blog/DisasterPreparednessNepal.tsx"));
const RenewableEnergyNepal = React.lazy(() => import("./pages/blog/RenewableEnergyNepal.tsx"));
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
              <Route path="/blog/deforestation-nepal-causes-effects-solutions" element={<DeforestationNepal />} />
              <Route path="/blog/air-pollution-kathmandu-nepal" element={<AirPollutionKathmandu />} />
              <Route path="/blog/water-pollution-nepal-rivers" element={<WaterPollutionNepal />} />
              <Route path="/blog/plastic-pollution-nepal-solutions" element={<PlasticPollutionNepal />} />
              <Route path="/blog/biodiversity-nepal-wildlife-conservation" element={<BiodiversityNepal />} />
              <Route path="/blog/sustainable-living-nepal-students" element={<SustainableLivingNepal />} />
              <Route path="/blog/climate-change-agriculture-nepal" element={<ClimateChangeAgricultureNepal />} />
              <Route path="/blog/start-environmental-club-school-nepal" element={<StartEnvironmentalClubSchoolNepal />} />
              <Route path="/blog/nepal-national-parks-conservation" element={<NepalNationalParksConservation />} />
              <Route path="/blog/disaster-preparedness-nepal-youth" element={<DisasterPreparednessNepal />} />
              <Route path="/blog/renewable-energy-nepal-youth-advocacy" element={<RenewableEnergyNepal />} />
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
