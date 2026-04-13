import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Users, MapPin, Megaphone } from "lucide-react";

const solutions = [
  {
    icon: TreePine,
    title: "Green Action",
    desc: "Tree planting, clean-ups, and restoration projects that heal both the environment and communities.",
  },
  {
    icon: Users,
    title: "Student-Led Change",
    desc: "Empowering students to lead initiatives that bridge environmental care with human well-being.",
  },
  {
    icon: MapPin,
    title: "77 Districts United",
    desc: "Building a nationwide network of young leaders, connecting every corner of Nepal.",
  },
  {
    icon: Megaphone,
    title: "Awareness & Advocacy",
    desc: "Educating communities on how protecting nature directly protects human lives and futures.",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solution" className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-sky blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-primary-foreground/70 font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold">
            Our Approach
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Action That Serves People
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed px-2">
            Every initiative connects environmental action to real human impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-primary-foreground/10 hover:bg-primary-foreground/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <s.icon className="w-9 h-9 sm:w-10 sm:h-10 text-secondary mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-base sm:text-lg font-bold mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
