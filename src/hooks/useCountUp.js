import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * Supports decimals (e.g. 9.62) via the `decimals` option.
 * Respects prefers-reduced-motion by snapping straight to the target value.
 */
export function useCountUp(target, start, { duration = 1200, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setValue(target);
      hasRun.current = true;
      return;
    }

    hasRun.current = true;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setValue(decimals > 0 ? Number(current.toFixed(decimals)) : Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    }

    requestAnimationFrame(tick);
  }, [start, target, duration, decimals]);

  return value;
}
