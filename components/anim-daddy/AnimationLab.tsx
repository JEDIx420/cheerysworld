"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { Sparkles, Layers } from "lucide-react";

export function AnimationLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<SVGCircleElement>(null);
  const [activeFrame, setActiveFrame] = useState(1);
  const [onionSkin, setOnionSkin] = useState(true);

  // Stop-motion loop through 4 walk-cycle/pose keyframes
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // 1. Squash & Stretch bouncing ball timeline
      if (ballRef.current) {
        const tl = gsap.timeline({ repeat: -1, yoyo: false });
        tl.to(ballRef.current, {
          y: 110,
          scaleY: 0.65,
          scaleX: 1.35,
          duration: 0.5,
          ease: "power2.in",
          transformOrigin: "center bottom",
        })
          .to(ballRef.current, {
            y: 0,
            scaleY: 1.15,
            scaleX: 0.88,
            duration: 0.5,
            ease: "power2.out",
            transformOrigin: "center bottom",
          });
      }

      // 2. Step walk cycle pose switcher
      const poseInterval = setInterval(() => {
        setActiveFrame((prev) => (prev % 4) + 1);
      }, 450);

      return () => clearInterval(poseInterval);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
    >
      {/* Sketchbook grid paper header */}
      <div className="flex items-center justify-between border-b border-stone-300 pb-4 mb-6 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-bold text-stone-900 tracking-wider">ANIMATION LAB • PRINCIPLES IN ACTION</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOnionSkin(!onionSkin)}
            className={`px-2.5 py-1 rounded-md border text-[11px] font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              onionSkin
                ? "bg-blue-100 text-blue-900 border-blue-400 font-bold"
                : "bg-white text-stone-600 border-stone-300"
            }`}
          >
            <Layers className="w-3 h-3 text-blue-600" />
            <span>Onion Skin: {onionSkin ? "ON" : "OFF"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Left Interactive Stage: Squash & Stretch with Timing Spacing Arc */}
        <div className="bg-white rounded-2xl border border-stone-300 p-5 relative shadow-inner flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-2">
            <span className="font-bold text-stone-800">Principle 01: Squash & Stretch</span>
            <span>Timing: 24 FPS</span>
          </div>

          <div className="relative h-44 flex items-center justify-center overflow-hidden">
            {/* Background timing chart ruler */}
            <div className="absolute left-4 top-2 bottom-6 w-px bg-stone-300 flex flex-col justify-between text-[9px] font-mono text-stone-400">
              <span>01 • Slow-out</span>
              <span>06</span>
              <span>12 • Peak Speed</span>
              <span>18</span>
              <span>24 • Impact Squash</span>
            </div>

            {/* Parabolic motion arc */}
            <svg viewBox="0 0 200 160" className="w-48 h-full text-blue-400/50 overflow-visible">
              <path
                d="M 50 20 Q 100 10 150 140"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
              />
              {/* Timing tick marks */}
              <circle cx="50" cy="20" r="2.5" fill="#2563eb" />
              <circle cx="65" cy="25" r="2" fill="#93c5fd" />
              <circle cx="85" cy="38" r="2" fill="#93c5fd" />
              <circle cx="110" cy="62" r="2" fill="#93c5fd" />
              <circle cx="132" cy="98" r="2" fill="#93c5fd" />
              <circle cx="150" cy="140" r="3" fill="#2563eb" />
            </svg>

            {/* Ground line */}
            <div className="absolute bottom-4 left-8 right-8 h-0.5 bg-stone-800" />
            {/* Ground cross-hatching */}
            <div className="absolute bottom-2 left-10 right-10 flex justify-between text-stone-400 text-[8px] font-mono select-none">
              <span>{"///"}</span>
              <span>{"///"}</span>
              <span>{"///"}</span>
              <span>{"///"}</span>
              <span>{"///"}</span>
            </div>

            {/* The Bouncing Ball (AnimDaddy Signature Line Ink) */}
            <svg viewBox="0 0 100 160" className="absolute w-24 h-40 overflow-visible pointer-events-none">
              <circle
                ref={ballRef}
                cx="50"
                cy="25"
                r="18"
                fill="#2563eb"
                stroke="#0f172a"
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-600">
            <span>Volume constant = 100%</span>
            <span className="text-blue-700 font-bold">Physics of Energy</span>
          </div>
        </div>

        {/* Right Interactive Stage: Handcrafted Onion-Skin Walk Cycle Sequence */}
        <div className="bg-white rounded-2xl border border-stone-300 p-5 relative shadow-inner flex flex-col justify-between min-h-[280px]">
          <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-2">
            <span className="font-bold text-stone-800">Principle 04: Keyframes & Breakdown</span>
            <span className="text-blue-700 font-bold">Pose {activeFrame} of 4</span>
          </div>

          {/* Handcrafted animated line-art character poses */}
          <div className="relative h-44 flex items-center justify-center">
            {/* Ghost frames (Onion-skinning) */}
            {onionSkin && (
              <svg viewBox="0 0 160 160" className="absolute w-36 h-36 text-blue-200 pointer-events-none">
                {/* Previous ghost pose */}
                <path
                  d="M 80 30 A 12 12 0 1 0 80 54 A 12 12 0 1 0 80 30 M 80 54 L 80 100 M 80 70 L 60 90 M 80 70 L 105 85 M 80 100 L 65 135 M 80 100 L 95 135"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="2 2"
                  fill="none"
                />
              </svg>
            )}

            {/* Active Keyframe SVG Figure */}
            <svg viewBox="0 0 160 160" className="w-36 h-36 text-stone-900 transition-all duration-100">
              {activeFrame === 1 && (
                /* Contact Pose */
                <g>
                  <circle cx="80" cy="40" r="14" fill="#faf8f5" stroke="currentColor" strokeWidth="3" />
                  <path d="M 80 54 L 80 96" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 80 66 L 60 85 M 80 66 L 102 82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  {/* Stride legs */}
                  <path d="M 80 96 L 56 138 M 80 96 L 108 134" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  {/* Pose label badge */}
                  <text x="110" y="35" fill="#2563eb" fontSize="10" fontFamily="monospace" fontWeight="bold">CONTACT</text>
                </g>
              )}

              {activeFrame === 2 && (
                /* Down Pose (Squash) */
                <g>
                  <circle cx="80" cy="48" r="13" fill="#faf8f5" stroke="currentColor" strokeWidth="3" />
                  <path d="M 80 61 L 80 102" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 80 72 L 68 90 M 80 72 L 95 88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  {/* Bent knees */}
                  <path d="M 80 102 L 65 118 L 60 138 M 80 102 L 92 118 L 100 138" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="110" y="42" fill="#2563eb" fontSize="10" fontFamily="monospace" fontWeight="bold">RECOIL</text>
                </g>
              )}

              {activeFrame === 3 && (
                /* Passing Pose */
                <g>
                  <circle cx="80" cy="38" r="14" fill="#faf8f5" stroke="currentColor" strokeWidth="3" />
                  <path d="M 80 52 L 80 94" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 80 64 L 75 88 M 80 64 L 88 88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  {/* Straight support leg, bent lifting leg */}
                  <path d="M 80 94 L 80 138 M 80 94 L 98 112 L 90 128" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="110" y="32" fill="#2563eb" fontSize="10" fontFamily="monospace" fontWeight="bold">PASSING</text>
                </g>
              )}

              {activeFrame === 4 && (
                /* High Point Pose */
                <g>
                  <circle cx="80" cy="32" r="14" fill="#faf8f5" stroke="currentColor" strokeWidth="3" />
                  <path d="M 80 46 L 80 90" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 80 58 L 98 76 M 80 58 L 62 76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  {/* Tip-toe push-off */}
                  <path d="M 80 90 L 104 136 M 80 90 L 58 132" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <text x="110" y="28" fill="#2563eb" fontSize="10" fontFamily="monospace" fontWeight="bold">UP-PEAK</text>
                </g>
              )}
            </svg>
          </div>

          <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-600">
            <span>Richard Williams Walk Cycle</span>
            <span className="text-blue-700 font-bold">Frame #{activeFrame * 3}</span>
          </div>
        </div>

      </div>

      {/* Understated bottom sketchbook annotation */}
      <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-600">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Hand-drawn vector study crafted for student artists.</span>
        </div>
        <span className="text-[11px] text-stone-500 italic">20+ Years Disney & Warner Bros. Principles</span>
      </div>
    </div>
  );
}
