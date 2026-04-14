import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const ProblemSection = React.lazy(() => import("@/components/ProblemSection"));
const SolutionSection = React.lazy(() => import("@/components/SolutionSection"));
const HowItWorks = React.lazy(() => import("@/components/HowItWorks"));
const ImpactSection = React.lazy(() => import("@/components/ImpactSection"));
const JoinSection = React.lazy(() => import("@/components/JoinSection"));
const GallerySection = React.lazy(() => import("@/components/GallerySection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <HeroSection />

      <Suspense 
        fallback={
          <div className="h-64 flex flex-col items-center justify-center bg-background animate-pulse">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-sm text-muted-foreground font-medium">Loading meaningful stories...</p>
          </div>
        }
      >
        <div className="flex flex-col">
          <AboutSection />
          <ProblemSection />
          <SolutionSection />
          <HowItWorks />
          <ImpactSection />
          <JoinSection />
          <GallerySection />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;