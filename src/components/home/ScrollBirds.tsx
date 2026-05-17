import { useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";

const birdData = [
  { src: "/animations/bird1.json", yVh: 15, yDrift: -20, duration: 15, delay: 0,  size: 90 },
  { src: "/animations/bird2.json", yVh: 35, yDrift:  25, duration: 20, delay: 8,  size: 500 },
  { src: "/animations/bird2.json", yVh: 80, yDrift:  18, duration: 22, delay: 12, size: 420 },
];

const ScrollBirds = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const activeBirds = isMobile ? birdData.slice(0, 2) : birdData;

  useEffect(() => {
    activeBirds.forEach((bird, i) => {
      const el = refs.current[i];
      if (!el) return;

      gsap.fromTo(el,
        {
          x: "-30vw",
          y: `${bird.yVh}vh`,
        },
        {
          x: "110vw",
          y: `calc(${bird.yVh}vh + ${bird.yDrift}px)`,
          duration: bird.duration,
          delay: bird.delay,
          ease: "none",
          repeat: -1,
        }
      );
    });

    return () => {
      gsap.killTweensOf(refs.current);
    };
  }, [activeBirds]);

  return (
    <>
      {activeBirds.map((bird, i) => {
        const finalSize = isMobile ? bird.size * 0.5 : bird.size;
        return (
          <div
            key={i}
            ref={el => { refs.current[i] = el; }}
            className="pointer-events-none"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 24,
              willChange: "transform",
            }}
          >
            <Player
              autoplay
              loop
              src={bird.src}
              style={{ width: finalSize, height: finalSize * 0.6 }}
            />
          </div>
        );
      })}
    </>
  );
};

export default ScrollBirds;
