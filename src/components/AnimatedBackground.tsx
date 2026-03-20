"use client";

import { useEffect, useRef } from "react";

// Generates floating SVG particles that slowly drift around
const PARTICLES = [
  { cx: "10%", cy: "20%", r: 3, delay: "0s", dur: "18s", dx: 60, dy: 40 },
  { cx: "85%", cy: "10%", r: 2, delay: "2s", dur: "22s", dx: -50, dy: 70 },
  { cx: "70%", cy: "80%", r: 4, delay: "1s", dur: "26s", dx: 40, dy: -60 },
  { cx: "20%", cy: "75%", r: 2.5, delay: "3s", dur: "20s", dx: 80, dy: -30 },
  { cx: "50%", cy: "50%", r: 2, delay: "5s", dur: "30s", dx: -70, dy: 50 },
  { cx: "30%", cy: "30%", r: 3.5, delay: "4s", dur: "24s", dx: 50, dy: 80 },
  { cx: "90%", cy: "60%", r: 2, delay: "6s", dur: "28s", dx: -90, dy: -40 },
  { cx: "60%", cy: "15%", r: 3, delay: "1.5s", dur: "19s", dx: -30, dy: 60 },
  { cx: "5%", cy: "55%", r: 2, delay: "7s", dur: "32s", dx: 70, dy: -50 },
  { cx: "75%", cy: "40%", r: 2.5, delay: "3.5s", dur: "21s", dx: -60, dy: 30 },
  { cx: "40%", cy: "90%", r: 4, delay: "0.5s", dur: "27s", dx: -40, dy: -80 },
  { cx: "55%", cy: "70%", r: 2, delay: "8s", dur: "23s", dx: 90, dy: 20 },
];

const SHAPES = [
  { type: "circle", x: "15%", y: "25%", size: 120, delay: "0s", dur: "35s", opacity: 0.06 },
  { type: "square", x: "78%", y: "12%", size: 80, delay: "4s", dur: "40s", opacity: 0.05 },
  { type: "circle", x: "65%", y: "70%", size: 160, delay: "8s", dur: "45s", opacity: 0.04 },
  { type: "square", x: "8%", y: "70%", size: 100, delay: "2s", dur: "38s", opacity: 0.05 },
  { type: "circle", x: "45%", y: "40%", size: 90, delay: "12s", dur: "50s", opacity: 0.03 },
  { type: "square", x: "90%", y: "85%", size: 70, delay: "6s", dur: "42s", opacity: 0.06 },
];

export default function AnimatedBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Subtle mouse parallax for the gradient layer
    const handleMouseMove = (e: MouseEvent) => {
      const svg = svgRef.current;
      if (!svg) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      svg.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="animated-bg-root"
      aria-hidden="true"
    >
      {/* Animated gradient mesh layer */}
      <div className="animated-bg-mesh" />

      {/* Dot grid layer */}
      <div className="animated-bg-grid" />

      {/* SVG floating shapes + particles */}
      <svg
        ref={svgRef}
        className="animated-bg-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ transition: "transform 0.6s ease-out" }}
      >
        <defs>
          <filter id="blur-soft">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Soft geometric shapes */}
        {SHAPES.map((s, i) =>
          s.type === "circle" ? (
            <circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.size / 10}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity={s.opacity}
              className="animated-bg-shape"
              style={{
                animationDelay: s.delay,
                animationDuration: s.dur,
              }}
            />
          ) : (
            <rect
              key={i}
              x={`calc(${s.x} - ${s.size / 20}%)`}
              y={`calc(${s.y} - ${s.size / 20}%)`}
              width={s.size / 10}
              height={s.size / 10}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity={s.opacity}
              className="animated-bg-shape"
              style={{
                animationDelay: s.delay,
                animationDuration: s.dur,
              }}
            />
          )
        )}

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <circle
            key={`p-${i}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r / 10}
            fill="currentColor"
            opacity="0.25"
            className="animated-bg-particle"
            style={{
              animationDelay: p.delay,
              animationDuration: p.dur,
              // Custom property trick for individual float directions
              ["--dx" as string]: `${p.dx}px`,
              ["--dy" as string]: `${p.dy}px`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
