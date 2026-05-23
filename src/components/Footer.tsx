import React from "react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "./ui/OptimizedImage";

const Footer = React.memo(() => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <OptimizedImage
                src={import.meta.env.BASE_URL + "logo.png"}
                alt="EHH Nepal — Earth for Human and Humanity Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Earth for Human and Humanity — a youth-led movement across all 77 districts of Nepal,
              standing for humanity and the planet, one action at a time.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="/#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">About</a>
              <a href="/#problem" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Our Beliefs</a>
              <a href="/#solution" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Our Approach</a>
              <a href="/#impact" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Impact</a>
              <a href="/#gallery" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Gallery</a>
              <a href="/#team" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Our Team</a>
              <Link to="/blog" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">Blog</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Latest Articles</h4>
            <div className="flex flex-col gap-2">
              <Link to="/blog/youth-environmental-movement-nepal" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm leading-snug">Youth Environmental Movement</Link>
              <Link to="/blog/climate-change-nepal-youth-action" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm leading-snug">Climate Change Nepal</Link>
              <Link to="/blog/tree-plantation-nepal" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm leading-snug">Tree Plantation Nepal</Link>
              <Link to="/blog/how-to-join-ehh-nepal" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm leading-snug">How to Join EHH Nepal</Link>
              <Link to="/blog/humanitarian-aid-nepal-students" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm leading-snug">Humanitarian Aid Nepal</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Connect</h4>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Follow us and help spread the word across Nepal.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/EHHNepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EHH Nepal on Facebook"
                className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/EHHNepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EHH Nepal on Instagram"
                className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/EHHNepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EHH Nepal on Twitter/X"
                className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
              >
                Twitter / X
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/40 text-xs sm:text-sm">
            © {new Date().getFullYear()} EHH Nepal — Earth for Human and Humanity. Made by students, for humanity.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            Serving all 77 districts of Nepal
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
