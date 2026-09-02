"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";

export function SketchAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Very subtle floating parallax & rotation on sketch elements
      gsap.to(".ambient-float-slow", {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-8, 8)",
        duration: "random(6, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 3,
          from: "random",
        },
      });

      // Subtle scroll parallax on background graphite marks
      gsap.to(".ambient-scroll-fast", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(".ambient-scroll-slow", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-40"
    >
      {/* 1. Wandering graphite arc (Top Right) */}
      <svg
        className="ambient-scroll-slow ambient-float-slow absolute -top-10 right-10 w-72 h-72 text-stone-700 opacity-20"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M20 50 C 80 20, 150 70, 170 140 C 180 180, 140 190, 110 170"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <circle cx="170" cy="140" r="3" fill="currentColor" />
      </svg>

      {/* 2. Rough Scribble Loop (Mid Left) */}
      <svg
        className="ambient-scroll-fast ambient-float-slow absolute top-1/3 -left-12 w-64 h-64 text-amber-700 opacity-25"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M 40 100 C 30 40, 120 20, 140 80 C 160 140, 60 160, 50 110 C 40 60, 150 50, 160 100"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 3. Hand-drawn Star & Frame Indicators (Mid Right) */}
      <svg
        className="ambient-scroll-slow ambient-float-slow absolute top-1/2 right-6 w-32 h-32 text-stone-800 opacity-20"
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* Star */}
        <path
          d="M50 10 L58 35 L85 35 L63 52 L71 78 L50 62 L29 78 L37 52 L15 35 L42 35 Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        {/* Animation Registration Target */}
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
        <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      {/* 4. Animation Bouncing Ball Motion Arcs (Bottom Left) */}
      <svg
        className="ambient-scroll-fast ambient-float-slow absolute bottom-20 left-12 w-80 h-48 text-blue-800 opacity-25"
        viewBox="0 0 300 150"
        fill="none"
      >
        <path
          d="M10 130 Q 60 10 110 130 Q 150 30 190 130 Q 220 50 250 130 Q 270 80 290 130"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="5 3"
        />
        <circle cx="60" cy="40" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="150" cy="55" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="220" cy="70" r="4" fill="currentColor" opacity="0.4" />
      </svg>

      {/* 5. Cheery Glasses Doodle Mark (Bottom Right) */}
      <svg
        className="ambient-scroll-slow ambient-float-slow absolute bottom-1/4 right-20 w-36 h-28 text-stone-700 opacity-15"
        viewBox="0 0 100 60"
        fill="none"
      >
        <circle cx="35" cy="30" r="14" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="65" cy="30" r="14" stroke="currentColor" strokeWidth="1.2" />
        <path d="M49 30 L51 30" stroke="currentColor" strokeWidth="1.2" />
        <path d="M21 28 L10 24 M79 28 L90 24" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
