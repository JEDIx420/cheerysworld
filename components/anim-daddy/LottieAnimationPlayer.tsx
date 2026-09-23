"use client";

import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { Play, Pause, RefreshCw } from "lucide-react";

interface LottieAnimationPlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  label?: string;
  caption?: string;
  showControls?: boolean;
  onHoverPlay?: boolean;
}

export function LottieAnimationPlayer({
  src,
  autoplay = false,
  loop = true,
  className = "",
  label,
  caption,
  showControls = true,
  onHoverPlay = false,
}: LottieAnimationPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 1. IntersectionObserver: only load and run when visible in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Load Lottie runtime cleanly when visible
  useEffect(() => {
    if (!isVisible || !containerRef.current) {
      if (animRef.current) {
        animRef.current.pause();
      }
      return;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: !prefersReducedMotion && loop,
      autoplay: !prefersReducedMotion && autoplay,
      path: src,
    });
    animRef.current = anim;

    anim.addEventListener("DOMLoaded", () => {
      setIsLoaded(true);
      if (!prefersReducedMotion && autoplay) {
        setIsPlaying(true);
      }
    });

    return () => {
      anim.destroy();
      animRef.current = null;
      setIsLoaded(false);
      setIsPlaying(false);
    };
  }, [isVisible, src, autoplay, loop]);

  const togglePlay = () => {
    if (!animRef.current) return;
    if (isPlaying) {
      animRef.current.pause();
      setIsPlaying(false);
    } else {
      animRef.current.play();
      setIsPlaying(true);
    }
  };

  const restart = () => {
    if (!animRef.current) return;
    animRef.current.goToAndPlay(0, true);
    setIsPlaying(true);
  };

  const handleMouseEnter = () => {
    if (onHoverPlay && animRef.current && !isPlaying) {
      animRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (onHoverPlay && animRef.current && isPlaying && !autoplay) {
      animRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl border border-stone-300 shadow-sm overflow-hidden group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header bar with registration marks */}
      {(label || showControls) && (
        <div className="flex items-center justify-between px-3.5 py-2 border-b border-stone-200 bg-stone-50/70 text-[11px] font-mono select-none">
          <div className="flex items-center gap-1.5 text-stone-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-semibold">{label || "Animation Reel"}</span>
          </div>

          {showControls && isLoaded && (
            <div className="flex items-center gap-1 text-stone-500">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause animation" : "Play animation"}
                className="p-1 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              <button
                type="button"
                onClick={restart}
                aria-label="Restart animation"
                className="p-1 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Animation Stage */}
      <div className="relative w-full h-full flex items-center justify-center p-3 overflow-hidden min-h-[180px]">
        {/* Cel registration crosshairs & pegbar cues */}
        <div className="absolute top-2 left-2 text-[9px] font-mono text-stone-300 pointer-events-none">
          + REG_01
        </div>
        <div className="absolute top-2 right-2 text-[9px] font-mono text-stone-300 pointer-events-none">
          REG_02 +
        </div>

        <div ref={containerRef} className="w-full h-full flex items-center justify-center" />
      </div>

      {/* Caption footer */}
      {caption && (
        <div className="px-3.5 py-2 border-t border-stone-200 bg-stone-50/50 text-[11px] font-mono text-stone-600 flex items-center justify-between">
          <span>{caption}</span>
          <span className="text-[10px] text-blue-700 font-semibold uppercase tracking-wider">
            Vector Cel
          </span>
        </div>
      )}
    </div>
  );
}
