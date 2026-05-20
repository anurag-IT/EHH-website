import { useEffect, useRef, useMemo } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { ErrorBoundary } from "../ErrorBoundary";

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
  // Note: bird2.json is intentionally included twice to spawn multiple independent instances
  // with varying speeds and sizes for a richer parallax effect.
  { src: "/animations/bird2.json", baseSpeed: 1.5, size: 500 },
  { src: "/animations/bird2.json", baseSpeed: 1.8, size: 420 },
];

const ScrollBirds = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useMemo(() => typeof window !== "undefined" && window.innerWidth < 768, []);
  const activeBirds = useMemo(() => isMobile ? birdData.slice(0, 2) : birdData, [isMobile]);
  const states = useRef<BirdState[]>([]);
  const rafId = useRef<number>(0);

  useEffect(() => {
    let currentW = window.innerWidth;
    let currentH = window.innerHeight;

    const handleResize = () => {
      currentW = window.innerWidth;
      currentH = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Initialize states with staggered start positions
    states.current = activeBirds.map((bird, i) => ({
      x: -300 - (Math.random() * 500) - (i * 400),
      y: Math.random() * (currentH * 0.8) + (currentH * 0.1), // Random height between 10% and 90% of screen
      speed: bird.baseSpeed + Math.random() * 0.5,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.01 + Math.random() * 0.01,
      delayFrames: 0,
    }));

    const tick = () => {
      try {

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

          el.style.transform = `translate3d(${s.x}px, ${currentY}px, 0)`;
        });

        rafId.current = requestAnimationFrame(tick);
      } catch (err) {
        console.error("ScrollBirds tick error:", err);
        cancelAnimationFrame(rafId.current);
      }
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
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
              contain: "layout paint"
            }}
          >
            <div style={{ transform: bird.src.includes("bird1") ? "scaleX(-1)" : "none" }}>
              <ErrorBoundary fallback={<div style={{ display: "none" }} />}>
                <Player
                  autoplay
                  loop
                  src={bird.src}
                  style={{ width: finalSize, height: finalSize * 0.6 }}
                  renderer="canvas"
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice', clearCanvas: true }}
                />
              </ErrorBoundary>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ScrollBirds;
