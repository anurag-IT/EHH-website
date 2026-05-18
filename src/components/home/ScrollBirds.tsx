import { useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface BirdState {
  x: number;
  y: number;
  speed: number;
  wobblePhase: number;
  wobbleSpeed: number;
  delayFrames: number;
}

const birdData = [
  { src: "/animations/bird1.json", baseSpeed: 2.0, size: 90 },
  { src: "/animations/bird2.json", baseSpeed: 1.5, size: 500 },
  { src: "/animations/bird2.json", baseSpeed: 1.8, size: 420 },
];

const ScrollBirds = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const activeBirds = isMobile ? birdData.slice(0, 2) : birdData;
  const states = useRef<BirdState[]>([]);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const W = window.innerWidth;
    const H = window.innerHeight;

    // Initialize states with staggered start positions
    states.current = activeBirds.map((bird, i) => ({
      x: -300 - (Math.random() * 500) - (i * 400),
      y: Math.random() * (H * 0.8) + (H * 0.1), // Random height between 10% and 90% of screen
      speed: bird.baseSpeed + Math.random() * 0.5,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.01 + Math.random() * 0.01,
      delayFrames: 0,
    }));

    const tick = () => {
      const currentW = window.innerWidth;
      const currentH = window.innerHeight;

      activeBirds.forEach((bird, i) => {
        const el = refs.current[i];
        const s = states.current[i];
        if (!el || !s) return;

        if (s.delayFrames > 0) {
          s.delayFrames--;
          return;
        }

        s.x += s.speed;
        s.wobblePhase += s.wobbleSpeed;
        // Add a gentle vertical wobble
        const currentY = s.y + Math.sin(s.wobblePhase) * 20;

        // When bird flies past the right edge, reset to the left with a new random Y
        if (s.x > currentW + 300) {
          s.x = -300;
          s.y = Math.random() * (currentH * 0.8) + (currentH * 0.1);
          s.delayFrames = 60 + Math.floor(Math.random() * 180); // 1-4 seconds delay before respawning
        }

        el.style.transform = `translate(${s.x}px, ${currentY}px)`;
      });

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
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
            <div style={{ transform: bird.src.includes("bird1") ? "scaleX(-1)" : "none" }}>
              <Player
                autoplay
                loop
                src={bird.src}
                style={{ width: finalSize, height: finalSize * 0.6 }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ScrollBirds;
