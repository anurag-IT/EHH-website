import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import React from "react";
import heroBg from "@/assets/hero-bg.webp";
import { OptimizedImage } from "./ui/OptimizedImage";

const HeroSection = React.memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background/5">
        <OptimizedImage
          src={heroBg}
          alt="Nepal Himalayan landscape with students and nature"
          wrapperClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover animate-ken-burns origin-bottom-right"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-5 py-2 mb-8"
          >
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground/90 font-body text-xs sm:text-sm tracking-[0.15em] uppercase font-medium">
              A Youth-Led Movement for Humanity
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-6">
            For Humanity.
            <br />
            <span className="italic font-normal opacity-90">For Our Future.</span>
          </h1>
          <p className="text-primary-foreground/80 font-body text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-2">
            Uniting students across Nepal to protect what matters most —
            our people, our planet, our shared future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a
            href="#join"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Join the Movement
          </a>
          <a
            href="#how"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 w-full sm:w-auto"
          >
            How It Works
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground/60" />
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
