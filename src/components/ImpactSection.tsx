import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Trees Planted", target: 2500, suffix: "+" },
  { label: "Districts Joined", target: 2, suffix: "/77" },
  { label: "Students Involved", target: 200, suffix: "+" },
  { label: "Tons CO₂ Offset", target: 34, suffix: "t" },
];

function useCounter(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

const StatCard = ({ label, target, suffix, inView, delay }: {
  label: string; target: number; suffix: string; inView: boolean; delay: number;
}) => {
  const count = useCounter(target, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <p className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-primary-foreground/70 font-body text-xs sm:text-sm tracking-wide uppercase">{label}</p>
    </motion.div>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-16 sm:py-24 md:py-32 bg-gradient-earth relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-primary-foreground blur-3xl" />
      </div>
      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary-foreground/70 font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold">
            Our Impact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
            Growing Every Day
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} inView={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
