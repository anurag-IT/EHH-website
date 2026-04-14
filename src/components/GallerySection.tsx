import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { OptimizedImage } from "./ui/OptimizedImage";
import { useIsMobile } from "../hooks/useIsMobile";

const images = [
  { 
    src: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1776169347/gallery-3_ixvriw.webp", 
    alt: "Terraced green hills of Nepal", 
    span: "sm:col-span-2 sm:row-span-2" 
  },
  { 
    src: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1776169345/gallery-2_lnfuqt.webp", 
    alt: "Hands planting a seedling", 
    span: "" 
  },
  { 
    src: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1776169344/gallery-1_dyd4ex.webp", 
    alt: "Students rallying for climate action", 
    span: "" 
  },
  { 
    src: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1776169283/students-planting_zyskxk.jpg", 
    alt: "Students planting trees together", 
    span: "sm:col-span-2" 
  },
  { 
    src: "https://res.cloudinary.com/dbfknoyxl/image/upload/v1776169342/gallery_4_mi6az3.webp", 
    alt: "Digital expert earth day 10207040", 
    span: "" 
  },
];

const GallerySectionComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isMobile = useIsMobile();

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-secondary font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold">
            Gallery
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Stories of Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: isMobile ? 0 : i * 0.1 }}
              className={`rounded-2xl overflow-hidden group ${img.span}`}
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                wrapperClassName="w-full h-full"
                className={`w-full h-full object-cover ${isMobile ? "" : "group-hover:scale-105 transition-transform duration-700"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GallerySection = React.memo(GallerySectionComponent);
export default GallerySection;
