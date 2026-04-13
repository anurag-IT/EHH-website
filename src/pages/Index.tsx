import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import ImpactSection from "@/components/ImpactSection";
import JoinSection from "@/components/JoinSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {

  // ✅ Fetch data when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ GET data from Supabase
  async function fetchUsers() {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);
  }

  // ✅ INSERT data into Supabase
  async function addUser() {
    const { data, error } = await supabase
      .from("users")
      .insert([
        { name: "Anurag", email: "test@gmail.com" }
      ]);

    console.log("INSERT:", data);
    console.log("ERROR:", error);
  }

  return (
    <div className="min-h-screen">
      <Navbar />


      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ImpactSection />
      <JoinSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;