import React from "react";
import { OptimizedImage } from "./ui/OptimizedImage";

const Footer = React.memo(() => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <OptimizedImage
                src="/logo.webp"
                alt="EHH Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Earth for Human and Humanity — a youth-led movement
              standing for humanity, one action at a time.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Our Beliefs", "Our Approach", "Impact", "Gallery"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "").replace("our", "")}`}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Connect</h4>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Follow us and help spread the word.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter"].map((s) => (
                <span
                  key={s}
                  className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/40 text-xs sm:text-sm">
            © 2024 EHH Nepal. Made by students, for humanity.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            🌿 Every action plants a seed of hope.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
