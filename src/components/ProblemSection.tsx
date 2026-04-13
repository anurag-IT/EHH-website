import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Leaf, Users } from "lucide-react";

const themes = [
  {
    icon: Heart,
    title: "Human Well-being",
    desc: "Environmental and social crises directly threaten human health, livelihoods, and the future of communities across Nepal.",
    gradient: "from-primary/15 to-secondary/10",
  },
  {
    icon: Leaf,
    title: "Nature & Humanity",
    desc: "Protecting nature isn't separate from protecting people — clean air, water, and ecosystems are the foundation of human life.",
    gradient: "from-secondary/15 to-sky/10",
  },
  {
    icon: Users,
    title: "Youth Power & Action",
    desc: "Students across 77 districts are rising as changemakers, proving that collective action from young people can reshape our future.",
    gradient: "from-sky/15 to-primary/10",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="py-16 sm:py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-secondary font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold">
            Our Core Beliefs
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Humanity at the Center
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
            This movement is about people. Every action we take for the planet
            is an action for human dignity, safety, and hope.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {themes.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`bg-gradient-to-br ${t.gradient} rounded-2xl p-6 sm:p-8 border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <t.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                {t.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
