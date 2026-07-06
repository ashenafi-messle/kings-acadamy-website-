"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const body = document.body;
      const html = document.documentElement;
      const scrollTop = window.scrollY || html.scrollTop || body.scrollTop;
      const height = (html.scrollHeight || body.scrollHeight) - html.clientHeight;
      const scrolled = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="fixed left-0 top-0 z-50 h-1 w-full">
      <div className="h-1 bg-primary transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ReadingProgress;
