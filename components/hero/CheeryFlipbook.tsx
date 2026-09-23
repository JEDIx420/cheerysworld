"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { Sparkles, Pause, Play } from "lucide-react";
import { CheerySmileDoodle } from "../doodles/DoodleIcons";

// The exact photos in /public (5.jpeg intentionally absent)
const FRAMES = [
  { src: "/1.jpeg", label: "Pose 01", caption: "Character in motion" },
  { src: "/2.jpeg", label: "Pose 02", caption: "Sketching gestures" },
  { src: "/3.jpeg", label: "Pose 03", caption: "Storyteller stance" },
  { src: "/4.jpeg", label: "Pose 04", caption: "Line & expression" },
  { src: "/6.jpeg", label: "Pose 05", caption: "The playful smirk" },
  { src: "/7.jpeg", label: "Pose 06", caption: "Living caricature" },
  { src: "/8.jpeg", label: "Pose 07", caption: "Cheery in studio" },
];

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function CheeryFlipbook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Handmade paper-cut small rotations that alternate with each frame
  const frameRotations = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];
  const currentRotation = frameRotations[currentIndex % frameRotations.length];

  // Stop-motion frame advancement: 600ms per pose
  useEffect(() => {
    if (prefersReducedMotion || !isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FRAMES.length);
    }, 620);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md mx-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer physical paper card backing */}
      <div
        className={`relative bg-white rounded-3xl p-5 sm:p-7 border-2 border-stone-900 shadow-2xl transition-transform duration-300 ${currentRotation}`}
      >
        {/* Top playful hand-written badge */}
        <div className="absolute -top-4 -right-2 sm:-right-4 bg-amber-400 text-stone-950 px-3.5 py-1.5 rounded-2xl border-2 border-stone-900 shadow-md font-mono text-xs font-bold rotate-3 flex items-center gap-1.5 z-20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flipbook • In Motion</span>
        </div>

        {/* Studio Registration Marks / Onion-skin corner stamp */}
        <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-3 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-semibold text-stone-800">Cheery In Poses</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200 font-bold text-stone-700">
              FRAME {String(currentIndex + 1).padStart(2, "0")} / {String(FRAMES.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Primary Flipbook Photograph Stage */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-950 border-2 border-stone-800 shadow-inner flex items-center justify-center">
          {FRAMES.map((frame, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <div
                key={frame.src}
                className={`absolute inset-0 transition-opacity duration-100 ${
                  isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                aria-hidden={!isCurrent}
              >
                <Image
                  src={frame.src}
                  alt={`Cheery physical pose photograph ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
                  className="object-cover object-top"
                />
                {/* Light grain/sepia wash for stop-motion warmth */}
                <div className="absolute inset-0 bg-amber-950/10 mix-blend-multiply pointer-events-none" />
              </div>
            );
          })}

          {/* Handcrafted photo frame edge highlights */}
          <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20" />

          {/* Quick manual pause/play overlay button for accessibility */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying((p) => !p);
            }}
            aria-label={isPlaying ? "Pause flipbook" : "Play flipbook"}
            className="absolute bottom-3 right-3 z-30 p-2 rounded-full bg-stone-900/80 hover:bg-stone-900 text-stone-200 hover:text-white backdrop-blur-xs border border-white/20 transition-all cursor-pointer opacity-80 hover:opacity-100"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Hover indicator toast */}
          {isHovered && !prefersReducedMotion && (
            <div className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded-full bg-stone-900/85 text-stone-200 text-[10px] font-mono backdrop-blur-xs border border-white/10 pointer-events-none animate-in fade-in duration-150">
              Paused on hover
            </div>
          )}
        </div>

        {/* Footnote card with authentic signature & identity */}
        <div className="mt-4 pt-3.5 border-t border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-white shrink-0">
              <CheerySmileDoodle size={20} className="text-white" />
            </div>
            <div>
              <span className="block text-xs font-bold font-serif text-stone-900">
                Cheery Thomas
              </span>
              <span className="block text-[11px] font-mono text-stone-500">
                Artist • Animator • Storyteller
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-bold">
              Stop-Motion
            </span>
          </div>
        </div>
      </div>

      {/* Hand-drawn pencil note underneath card */}
      <div className="mt-3 text-center">
        <span className="font-mono text-[11px] text-stone-500 italic">
          7 handmade poses • hover or click to pause
        </span>
      </div>
    </div>
  );
}
