import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart } from "lucide-react";

const founders = [
  {
    name: "Aayush Jha",
    role: "Founder & Chief Executive Officer (CEO)",
    initials: "AJ",
    badge: "Founder",
    image: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1778936126/ChatGPT_Image_May_16_2026_06_37_26_PM_eh9qgn.png",
    bio: "The visionary mind behind EHH Nepal, Aayush conceived the idea of a nationwide youth movement for climate action and humanitarian service. He leads the organization's mission, strategy, and growth across all 77 districts.",
    color: "bg-primary",
  },
  {
    name: "Anurag Thakur",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    initials: "AT",
    badge: "Co-Founder",
    image: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1778936141/ChatGPT_Image_May_16_2026_10_35_21_AM_eoefpp.png",
    bio: "The digital backbone of EHH Nepal, our CTO architects every technology that powers the organization — from the website and mobile applications to digital outreach tools.",
    color: "bg-secondary",
  },
  {
    name: "Sameer Yadav",
    role: "Co-Founder & Chief Operations Officer (COO)",
    initials: "SY",
    badge: "Co-Founder",
    bio: "The operational engine of EHH Nepal, Sameer ensures that vision becomes reality on the ground. He oversees day-to-day operations, community coordination, and execution of programs across Nepal's districts.",
    color: "bg-primary/80",
    image: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1778936132/ChatGPT_Image_May_16_2026_06_38_48_PM_vfuox8.png",
  },
];

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionWrapper>
            <span className="text-secondary font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block font-semibold">
              The People Behind the Movement
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Founding <span className="text-gradient-earth">Members</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Meet the visionary team leading the charge for a greener, more humanitarian Nepal across all 77 districts.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </SectionWrapper>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-500 border border-border"
            >
              <div className={`h-2 w-full ${founder.color}`} />
              <div className="p-8 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-full overflow-hidden ${founder.color} flex items-center justify-center text-white text-3xl font-display font-bold shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {founder.image ? (
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      founder.initials
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-background border border-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                    {founder.badge}
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-1 text-foreground">
                  {founder.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-4">
                  {founder.role}
                </p>
                
                <div className="w-12 h-px bg-border mb-6 group-hover:w-20 transition-all duration-500" />
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Banner Integration */}
        <div className="relative rounded-3xl overflow-hidden bg-primary py-16 px-8 text-center shadow-xl mb-12">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionWrapper>
              <Heart className="w-10 h-10 text-secondary mx-auto mb-6 opacity-80" />
              <blockquote className="font-display text-2xl md:text-3xl text-white font-medium italic mb-8 leading-tight">
                "We did not inherit this earth from our ancestors — we are borrowing it from our children."
              </blockquote>
              <div className="w-12 h-px bg-white/30 mx-auto mb-4" />
              <cite className="text-white/60 font-body text-xs tracking-widest uppercase not-italic">
                — The founding principle of EHH Nepal
              </cite>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
