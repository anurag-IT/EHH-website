import React, { Suspense, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

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
  const queryClient = useQueryClient();

  // ✅ GET data from Supabase using React Query
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  });

  // ✅ INSERT data using React Query Mutations
  const addUserMutation = useMutation({
    mutationFn: async (newUser: { name: string; email: string }) => {
      const { data, error } = await supabase.from("users").insert([newUser]).select();
      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleAddUser = useCallback(() => {
    addUserMutation.mutate({ name: "Anurag", email: "test@gmail.com" });
  }, [addUserMutation]);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />

      <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading section...</div>}>
        <AboutSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <ImpactSection />
        <JoinSection />
        <GallerySection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;