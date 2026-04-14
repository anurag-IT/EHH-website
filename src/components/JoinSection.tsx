import { motion, useInView } from "framer-motion";
import React, { useRef, useState, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";

/**
 * JoinSection Component
 * Specialized for consecutive submissions without page refreshes.
 * Fields clear automatically upon success and a toast notification is shown.
 */
const JoinSectionComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fullName, setFullName] = useState("");
  const [school, setSchool] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
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
        toast.error("Failed to join. Please try again.");
        return;
      }

      // Success logic: Clear fields and show toast
      setFullName("");
      setSchool("");
      setDistrict("");
      toast.success("Welcome to EHH! You're now part of the movement.");
      
    } catch (err) {
      console.error("Server Error:", err);
      toast.error("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }, [fullName, school, district, isSubmitting]);

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
                disabled={isSubmitting}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow disabled:opacity-50"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">School</label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="Your school name"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">District</label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="Your district"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow disabled:opacity-50"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
              {isSubmitting ? "Submitting..." : "Join EHH Now"}
            </button>
            <p className="text-center text-muted-foreground text-xs">
              By joining, you're standing for humanity and our shared future 🌿
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export const JoinSection = React.memo(JoinSectionComponent);
export default JoinSection;