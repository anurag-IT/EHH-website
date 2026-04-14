import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const steps = [
  { num: "01", title: "Join EHH", desc: "Sign up and become part of Nepal's largest youth movement for humanity." },
  { num: "02", title: "Register Your School", desc: "Connect your school or district and rally your peers for collective action." },
  { num: "03", title: "Take Action", desc: "Plant trees, run campaigns, and lead initiatives that serve both people and planet." },
  { num: "04", title: "Track Your Impact", desc: "See your real impact — trees planted, communities reached, lives changed." },
];

const HowItWorksComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how" className="py-16 sm:py-24 md:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-secondary font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Four Steps to Change
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group"
            >
              <p className="font-display text-6xl sm:text-7xl font-bold text-primary/10 mb-2 group-hover:text-primary/20 transition-colors duration-300">{s.num}</p>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowItWorks = React.memo(HowItWorksComponent);
export default HowItWorks;
