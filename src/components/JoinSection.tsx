import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart } from "lucide-react";
import { supabase } from "../lib/supabase";

const JoinSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  // ✅ ADDED STATES (no UI change)
  const [fullName, setFullName] = useState("");
  const [school, setSchool] = useState("");
  const [district, setDistrict] = useState("");

  // ✅ UPDATED HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("ehh_submissions")
      .insert([
        {
          full_name: fullName,
          school: school,
          district: district,
        },
      ]);

    if (error) {
      console.error("Insert Error:", error);
      alert("Failed to submit");
      return;
    }

    setSubmitted(true);

    // optional reset
    setFullName("");
    setSchool("");
    setDistrict("");
  };

  return (
    <section id="join" className="py-16 sm:py-24 md:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-secondary font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold">
              Take Action
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Stand With Humanity
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              Every student counts. Every district matters. Join the movement
              that puts humanity first.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12 text-center"
            >
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                Welcome to EHH!
              </h3>
              <p className="text-muted-foreground">
                You're now part of the movement. Together, we stand for humanity.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-6 sm:p-8 md:p-10 shadow-elevated space-y-4 sm:space-y-5"
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">School</label>
                  <input
                    type="text"
                    required
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="Your school name"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">District</label>
                  <input
                    type="text"
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="Your district"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
              >
                Join EHH Now
              </button>
              <p className="text-center text-muted-foreground text-xs">
                By joining, you're standing for humanity and our shared future 🌿
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;