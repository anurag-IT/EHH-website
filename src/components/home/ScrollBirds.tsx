import { useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const birdData = [
  { src: "/animations/bird1.json", yVh: 10, yDrift: -20, scrollStart: 8,  scrollEnd: 38, scrub: 3,   size: 120 },
  { src: "/animations/bird2.json", yVh: 18, yDrift:  25, scrollStart: 22, scrollEnd: 54, scrub: 4,   size: 90  },
  { src: "/animations/bird1.json", yVh:  7, yDrift: -15, scrollStart: 40, scrollEnd: 70, scrub: 2.5, size: 140 },
  { src: "/animations/bird2.json", yVh: 14, yDrift:  18, scrollStart: 58, scrollEnd: 88, scrub: 3.5, size: 80  },
];

const ScrollBirds = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    birdData.forEach((bird, i) => {
      const el = refs.current[i];
      if (!el) return;

      gsap.set(el, {
        x: "110vw",
        y: `${bird.yVh}vh`,
      });

      gsap.to(el, {
        x: "-20vw",
        y: `calc(${bird.yVh}vh + ${bird.yDrift}px)`,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: () => `top+=${(bird.scrollStart / 100) * document.body.scrollHeight} top`,
          end:   () => `top+=${(bird.scrollEnd   / 100) * document.body.scrollHeight} top`,
          scrub: bird.scrub,
          invalidateOnRefresh: true,
        },
      });
    });

    // Refresh ScrollTrigger when lazy-loaded sections mount and body height changes
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {birdData.map((bird, i) => (
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
            transform: "scaleX(-1)", // face left since flying left
          }}
        >
          <Player
            autoplay
            loop
            src={bird.src}
            style={{ width: bird.size, height: bird.size * 0.6 }}
          />
        </div>
      ))}
    </>
  );
};

export default ScrollBirds;
