import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";

interface BState {
  x: number; y: number;
  vx: number; vy: number;
  rotation: number;
  wobblePhase: number;
  wobbleSpeed: number;
  restFrames: number;
  speed: number;
}

const CFG = [
  { src: "/animations/butterfly1.json", size: 50, sx: 200, sy: 200, spd: 2.2 },
  { src: "/animations/butterfly2.json", size: 40, sx: 600, sy: 350, spd: 1.8 },
  { src: "/animations/butterfly3.json", size: 35,  sx: 350, sy: 500, spd: 2.5 },
];

const FloatingButterflies = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const active = isMobile ? CFG.slice(0, 2) : CFG;

  const divRefs = useRef<(HTMLDivElement | null)[]>([]);
  const states  = useRef<BState[]>([]);
  const rafId   = useRef<number>(0);

  useEffect(() => {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const M = 80; // margin from edges

    // Initialise one state object per butterfly
    states.current = active.map(c => ({
      x: c.sx, y: c.sy,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      rotation: 0,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.018 + Math.random() * 0.018,
      restFrames: 0,
      speed: c.spd,
    }));

    // ONE shared loop — updates every butterfly in a single RAF callback
    const tick = () => {
      active.forEach((_, i) => {
        const el = divRefs.current[i];
        const s  = states.current[i];
        if (!el || !s) return;

        // Resting pause
        if (s.restFrames > 0) { s.restFrames--; return; }
        if (Math.random() < 0.003) { s.restFrames = 40 + Math.floor(Math.random() * 80); return; }

        // Wobble
        s.wobblePhase += s.wobbleSpeed;
        const wobble = Math.sin(s.wobblePhase) * 0.7;

        // Random nudge
        s.vx += (Math.random() - 0.5) * 0.28;
        s.vy += (Math.random() - 0.5) * 0.28 + wobble * 0.08;

        // Clamp speed
        const spd = Math.hypot(s.vx, s.vy);
        if (spd > s.speed) { s.vx = s.vx / spd * s.speed; s.vy = s.vy / spd * s.speed; }
        if (spd < 0.4)     { s.vx += (Math.random() - 0.5) * 0.5; s.vy += (Math.random() - 0.5) * 0.5; }

        s.x += s.vx;
        s.y += s.vy + wobble;

        // Boundary repulsion
        if (s.x < M)     s.vx += 0.35;
        if (s.x > W - M) s.vx -= 0.35;
        if (s.y < M)     s.vy += 0.35;
        if (s.y > H - M) s.vy -= 0.35;

        // Smooth body rotation toward movement direction
        const target = Math.atan2(s.vy, s.vx) * (180 / Math.PI);
        let diff = target - s.rotation;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        s.rotation += diff * 0.07;

        el.style.transform = `translate(${s.x}px,${s.y}px) rotate(${s.rotation}deg)`;
      });

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <>
      {active.map((b, i) => (
        <div
          key={i}
          ref={el => { divRefs.current[i] = el; }}
          className="pointer-events-none"
          style={{ position: "fixed", top: 0, left: 0, zIndex: 25, willChange: "transform" }}
        >
          <Player autoplay loop src={b.src} style={{ width: b.size, height: b.size }} />
        </div>
      ))}
    </>
  );
};

export default FloatingButterflies;
