import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import studentsImg from "@/assets/students-planting.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold">
              About EHH
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6 leading-tight">
              A Movement Born
              <br />
              <span className="text-gradient-earth">From Humanity</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              EHH — Earth for Human and Humanity — is a youth-led movement
              uniting students across all 77 districts of Nepal. We believe that
              the fight for our planet is a fight for people — for clean air,
              safe communities, and a future worth inheriting.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Our mission is to empower young people to take meaningful action —
              bridging environmental stewardship with human well-being, and
              turning students into leaders of lasting change.
            </p>
            <div className="flex gap-6 sm:gap-8">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-primary">77</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Districts</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-primary">1</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Mission</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-primary">∞</p>
                <p className="text-muted-foreground text-xs sm:text-sm">Impact</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={studentsImg}
                alt="Students planting trees together"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground rounded-xl p-4 sm:p-6 shadow-elevated">
              <p className="font-display text-lg sm:text-2xl font-bold">Since 2024</p>
              <p className="text-xs sm:text-sm text-primary-foreground/80">Standing for humanity</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
