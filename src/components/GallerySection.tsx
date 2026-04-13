import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import gallery1 from "@/assets/gallery-3.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-1.webp";
import studentsImg from "@/assets/students-planting.webp";
import gallery_4 from "@/assets/gallery_4.webp";
import { OptimizedImage } from "./ui/OptimizedImage";

const images = [
  { src: gallery1, alt: "Terraced green hills of Nepal", span: "sm:col-span-2 sm:row-span-2" },
  { src: gallery2, alt: "Hands planting a seedling", span: "" },
  { src: gallery3, alt: "Students rallying for climate action", span: "" },
  { src: studentsImg, alt: "Students planting trees together", span: "sm:col-span-2" },
  { src: gallery_4, alt: "Digital expert earth day 10207040", span: "" },
];

const GallerySection = React.memo(() => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden group ${img.span}`}
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

GallerySection.displayName = "GallerySection";
export default GallerySection;
