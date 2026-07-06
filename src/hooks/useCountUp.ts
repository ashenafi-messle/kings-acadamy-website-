import { useEffect, useRef, useState } from "react";

interface CountUpOptions {
  duration?: number;
  isActive?: boolean;
}

export function useCountUp(target: number, options: CountUpOptions = {}) {
  const { duration = 1200, isActive = true } = options;
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return;
    }

    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, isActive, target]);

  return value;
}
