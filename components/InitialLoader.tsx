"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;
    let exitTimer: ReturnType<typeof setTimeout> | null = null;
    const progressStartDelay = 350;
    const duration = 1400;
    const exitDuration = 700;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime - progressStartDelay;
      if (elapsed < 0) {
        setProgress(0);
        rafId = requestAnimationFrame(animate);
        return;
      }

      const linearProgress = Math.min(1, elapsed / duration);
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
      const nextProgress = easedProgress * 100;
      setProgress(nextProgress);

      if (linearProgress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setPhase("exiting");
        exitTimer = setTimeout(() => {
          setPhase("done");
        }, exitDuration);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-background text-primary will-change-transform transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        phase === "exiting" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full overflow-hidden">
        <div className="loader-marquee flex items-center whitespace-nowrap">
          <span className="px-6 font-light text-scale-loader leading-none">
            develop. evolve. repeat.
          </span>
          <span className="px-6 font-light text-scale-loader leading-none">
            develop. evolve. repeat.
          </span>
        </div>
      </div>

      <div className="mt-10 w-[82%] max-w-xl px-2">
        <div className="mb-2 flex items-center justify-between text-scale-sm text-primary/70">
          <span className="tracking-[0.18em] uppercase">Loading</span>
          <span className="tabular-nums">{Math.round(progress)}%</span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary/15">
          <div
            className="h-full rounded-full bg-secondary"
            style={{ width: `${progress}%` }}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            role="progressbar"
          />
        </div>
      </div>
    </div>
  );
}
