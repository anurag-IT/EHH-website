import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "./ui/OptimizedImage";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#problem", label: "Our Beliefs" },
  { href: "#solution", label: "Our Approach" },
  { href: "#impact", label: "Impact" },
  { href: "#gallery", label: "Gallery" },
];

const Navbar = React.memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 group">
          <OptimizedImage
            src={import.meta.env.BASE_URL + "logo.png"}
            alt="EHH Logo"
            className="h-12 sm:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
          >
            Join Now
          </a>
        </div>

        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted transition-colors active:bg-muted"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3.5 rounded-xl text-center font-semibold mt-2 active:opacity-90"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
