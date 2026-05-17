import { Player } from "@lottiefiles/react-lottie-player";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const butterflyData = [
  {
    src: "/animations/butterfly1.json",
    startX: 80,  startY: 150,
    pathX: [80,  300, 150, 450, 80],
    pathY: [150, 60,  280, 130, 150],
    duration: 18, delay: 0, size: 50,
  },
  {
    src: "/animations/butterfly2.json",
    startX: 650, startY: 300,
    pathX: [650, 450, 730, 500, 650],
    pathY: [300, 180, 420, 260, 300],
    duration: 23, delay: 5, size: 40,
  },
  {
    src: "/animations/butterfly3.json",
    startX: 300, startY: 500,
    pathX: [300, 100, 420, 180, 300],
    pathY: [500, 380, 620, 450, 500],
    duration: 20, delay: 9, size: 35,
  },
  {
    src: "/animations/butterfly1.json",
    startX: 900, startY: 220,
    pathX: [900, 700, 980, 750, 900],
    pathY: [220, 120, 340, 190, 220],
    duration: 26, delay: 3, size: 45,
  },
  {
    src: "/animations/butterfly2.json",
    startX: 500, startY: 680,
    pathX: [500, 680, 380, 720, 500],
    pathY: [680, 560, 800, 640, 680],
    duration: 21, delay: 12, size: 30,
  },
  {
    src: "/animations/butterfly3.json",
    startX: 180, startY: 800,
    pathX: [180, 380, 80,  450, 180],
    pathY: [800, 680, 920, 760, 800],
    duration: 24, delay: 7, size: 40,
  },
];

interface ButterflyProps {
  src: string;
  startX: number;
  startY: number;
  pathX: number[];
  pathY: number[];
  duration: number;
  delay: number;
  size: number;
}

const FloatingButterfly = ({ src, startX, startY, pathX, pathY, duration, delay, size }: ButterflyProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({
        x: pathX,
        y: pathY,
        transition: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        },
      });
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      animate={controls}
      className="pointer-events-none"
      style={{
        position: "fixed",
        left: startX,
        top: startY,
        zIndex: 25,
        willChange: "transform",
      }}
    >
      <Player
        autoplay
        loop
        src={src}
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
};

const FloatingButterflies = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const active = isMobile ? butterflyData.slice(0, 2) : butterflyData;
  return (
    <>
      {active.map((b, i) => (
        <FloatingButterfly key={i} {...b} />
      ))}
    </>
  );
};

export default FloatingButterflies;
