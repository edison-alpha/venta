import { cn } from "@/lib/utils"
import React from "react";

export interface OrbitingCirclesProps {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  index?: number // posisi ke berapa di orbit
  total?: number // total logo di orbit
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  index = 0,
  total = 1,
}: OrbitingCirclesProps) {
  // JS-based orbit animation
  const [angle, setAngle] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    let start = performance.now();
    let frameId: number;
    const animate = (now: number) => {
      const elapsed = (now - start) / 1000 + (delay || 0);
      const direction = reverse ? -1 : 1;
      // Sudut awal berbeda untuk setiap index
      const initialAngle = (index / total) * 2 * Math.PI;
      const orbitAngle = (((elapsed / (duration || 20)) * 2 * Math.PI * direction) + initialAngle) % (2 * Math.PI);
      setAngle(orbitAngle);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [duration, delay, reverse, index, total]);

  // Calculate position
  const centerX = 200; // px, container size
  const centerY = 200;
  const r = radius;
  const x = centerX + r * Math.cos(angle) - (ref.current?.offsetWidth || 30) / 2;
  const y = centerY + r * Math.sin(angle) - (ref.current?.offsetHeight || 30) / 2;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
          width={400}
          height={400}
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/30"
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
          />
        </svg>
      )}
      <div
        ref={ref}
        style={{
          position: "absolute",
          left: x,
          top: y,
          transition: "none",
        }}
        className={cn(
          "flex items-center justify-center rounded-full border bg-black/10 dark:bg-white/10",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
