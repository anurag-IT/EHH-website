import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";

interface BState {
  x: number; y: number;
  vx: number; vy: number;
  rotation: number;
  targetHeading: number;
  headingChangeTimer: number;
  wobblePhase: number;
  wobbleSpeed: number;
  restFrames: number;
  baseSpeed: number;
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
    states.current = active.map(c => {
      const initialHeading = Math.random() * Math.PI * 2;
      return {
        x: c.sx, y: c.sy,
        vx: Math.cos(initialHeading) * c.spd,
        vy: Math.sin(initialHeading) * c.spd,
        rotation: initialHeading * (180 / Math.PI) + 90,
        targetHeading: initialHeading,
        headingChangeTimer: Math.floor(Math.random() * 60),
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.15 + Math.random() * 0.1, // Faster wobble for flapping effect
        restFrames: 0,
        baseSpeed: c.spd,
      };
    });

    // ONE shared loop — updates every butterfly in a single RAF callback
    const tick = () => {
      active.forEach((_, i) => {
        const el = divRefs.current[i];
        const s  = states.current[i];
        if (!el || !s) return;

        // Resting pause
        if (s.restFrames > 0) { 
          s.restFrames--; 
          return; 
        }
        if (Math.random() < 0.001) { 
          s.restFrames = 30 + Math.floor(Math.random() * 60); 
          return; 
        }

        s.headingChangeTimer--;
        if (s.headingChangeTimer <= 0) {
          // Pick a new target heading within -90 to 90 degrees of current heading
          s.targetHeading += (Math.random() - 0.5) * Math.PI; 
          s.headingChangeTimer = 40 + Math.floor(Math.random() * 80);
        }

        // Current heading
        const currentHeading = Math.atan2(s.vy, s.vx);
        let diff = s.targetHeading - currentHeading;
        
        // Normalize diff to -PI to PI
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        
        // Steer towards target heading (smooth turning)
        const turnRate = 0.04;
        const newHeading = currentHeading + Math.sign(diff) * Math.min(Math.abs(diff), turnRate);
        
        // Update velocity based on new heading and base speed
        s.vx = Math.cos(newHeading) * s.baseSpeed;
        s.vy = Math.sin(newHeading) * s.baseSpeed;

        // Boundary repulsion (soft push away from walls)
        let boundaryTurn = false;
        if (s.x < M)     { s.vx += 0.15; boundaryTurn = true; }
        if (s.x > W - M) { s.vx -= 0.15; boundaryTurn = true; }
        if (s.y < M)     { s.vy += 0.15; boundaryTurn = true; }
        if (s.y > H - M) { s.vy -= 0.15; boundaryTurn = true; }
        
        if (boundaryTurn) {
          // Normalize velocity to baseSpeed so it doesn't speed up against walls
          const spd = Math.hypot(s.vx, s.vy);
          s.vx = (s.vx / spd) * s.baseSpeed;
          s.vy = (s.vy / spd) * s.baseSpeed;
          // Overwrite target heading so it doesn't fight the boundary
          s.targetHeading = Math.atan2(s.vy, s.vx);
        }

        // Apply movement
        s.x += s.vx;
        s.y += s.vy;

        // Flapping wobble (bobbing up and down perpendicular to motion is ideal, but Y is fine for subtle effects)
        s.wobblePhase += s.wobbleSpeed;
        const bounceY = Math.sin(s.wobblePhase) * 2.5;

        // Visual rotation: +90 degrees because Lottie butterflies face UP
        const visualHeading = Math.atan2(s.vy, s.vx) * (180 / Math.PI) + 90;
        
        // Smoothly update s.rotation so it doesn't snap if it crosses 360/0
        let rotDiff = visualHeading - s.rotation;
        while (rotDiff > 180) rotDiff -= 360;
        while (rotDiff < -180) rotDiff += 360;
        s.rotation += rotDiff * 0.15;

        el.style.transform = `translate3d(${s.x}px,${s.y + bounceY}px,0) rotate(${s.rotation}deg)`;
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
          style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            zIndex: 25, 
            willChange: "transform",
            contain: "layout paint"
          }}
        >
          <Player 
            autoplay 
            loop 
            src={b.src} 
            style={{ width: b.size, height: b.size }}
            renderer="canvas"
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice', clearCanvas: true }}
          />
        </div>
      ))}
    </>
  );
};

export default FloatingButterflies;
