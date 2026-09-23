import React from "react";

export type AnimationPrincipleType =
  | "squash-stretch"
  | "body-mechanics"
  | "acting-pantomime"
  | "dynamic-action"
  | "acting-nuance"
  | "environment-layout"
  | "creature-vfx"
  | "concept-preprod"
  | "storyboarding"
  | "2d-digital-basics"
  | "2d-digital-advanced"
  | "caricature-art"
  | "graphic-design-basic"
  | "graphic-design-advanced";

export function AnimatedPrincipleCard({
  type,
  className = "",
}: {
  type: AnimationPrincipleType;
  className?: string;
}) {
  return (
    <div
      className={`w-full aspect-[4/3] bg-[#faf8f5] rounded-xl border border-stone-300 p-4 flex flex-col justify-between relative overflow-hidden select-none ${className}`}
    >
      {/* Light blueprint/storyboard grid backdrop */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      {/* Top timing & registration marks */}
      <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 relative z-10">
        <span className="font-semibold text-stone-800 uppercase tracking-wider">
          {type.replace("-", " ")}
        </span>
        <span className="text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded font-mono text-[9px] font-bold">
          STUDY NOTE
        </span>
      </div>

      {/* Center Illustrated SVG Diagram */}
      <div className="relative flex-1 flex items-center justify-center my-2">
        {type === "squash-stretch" && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* Arcs of motion */}
            <path d="M 20 80 Q 80 10 140 80" stroke="#93c5fd" strokeWidth="2" strokeDasharray="3 3" fill="none" />
            {/* Top normal circle */}
            <circle cx="80" cy="24" r="14" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2.5" />
            {/* Stretched falling */}
            <ellipse cx="115" cy="52" rx="10" ry="16" transform="rotate(30 115 52)" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            {/* Impact squash */}
            <ellipse cx="140" cy="84" rx="20" ry="8" fill="#2563eb" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="110" y1="92" x2="160" y2="92" stroke="#0f172a" strokeWidth="3" />
          </svg>
        )}

        {type === "body-mechanics" && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* Center of gravity line */}
            <line x1="80" y1="10" x2="80" y2="90" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Dynamic leaning figure with contrapposto hips & shoulders */}
            <circle cx="88" cy="22" r="10" fill="#faf8f5" stroke="currentColor" strokeWidth="2.5" />
            <line x1="72" y1="36" x2="100" y2="40" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            <path d="M 86 38 L 78 64" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="62" x2="94" y2="66" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            {/* Legs with weight distribution */}
            <path d="M 72 64 L 60 92 M 88 64 L 104 92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <text x="18" y="55" fill="#2563eb" fontSize="9" fontFamily="monospace">WEIGHT</text>
          </svg>
        )}

        {type === "acting-pantomime" && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* Expressive hand gestures / silhouette */}
            <circle cx="80" cy="28" r="14" fill="#faf8f5" stroke="currentColor" strokeWidth="2.5" />
            {/* Dramatic open arms posture */}
            <path d="M 80 42 L 80 78" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M 80 50 L 45 42 L 35 24 M 80 50 L 115 42 L 125 24" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 80 78 L 65 96 M 80 78 L 95 96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            {/* Thought/sound emission lines */}
            <path d="M 68 18 Q 72 8 80 8 Q 88 8 92 18" stroke="#93c5fd" strokeWidth="2" strokeDasharray="2 2" fill="none" />
            <text x="100" y="20" fill="#2563eb" fontSize="9" fontFamily="monospace">INTENTION</text>
          </svg>
        )}

        {type === "dynamic-action" && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* Strong line of action arc */}
            <path d="M 30 85 C 50 60 100 30 145 15" stroke="#2563eb" strokeWidth="3" strokeDasharray="4 2" fill="none" />
            {/* Flying dynamic jump figure */}
            <circle cx="120" cy="30" r="10" fill="#faf8f5" stroke="currentColor" strokeWidth="2.5" />
            <path d="M 112 38 L 88 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M 102 44 L 128 35 M 95 50 L 72 40" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 88 56 L 68 76 M 88 56 L 60 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <text x="25" y="45" fill="#2563eb" fontSize="9" fontFamily="monospace">LINE OF ACTION</text>
          </svg>
        )}

        {type === "environment-layout" && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* 2-Point Perspective Grid */}
            <line x1="10" y1="45" x2="150" y2="45" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Vanishing points */}
            <circle cx="20" cy="45" r="2.5" fill="#2563eb" />
            <circle cx="140" cy="45" r="2.5" fill="#2563eb" />
            {/* Building volumetric perspective box */}
            <path d="M 80 20 L 50 38 L 50 78 L 80 92 L 110 78 L 110 38 Z" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
            <line x1="80" y1="20" x2="80" y2="92" stroke="#1d4ed8" strokeWidth="2.5" />
            <text x="25" y="38" fill="#2563eb" fontSize="8" fontFamily="monospace">VP 1</text>
            <text x="125" y="38" fill="#2563eb" fontSize="8" fontFamily="monospace">VP 2</text>
          </svg>
        )}

        {type === "storyboarding" && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* Storyboard 16:9 Panel with camera movement arrow */}
            <rect x="25" y="16" width="110" height="64" rx="4" fill="#ffffff" stroke="currentColor" strokeWidth="2" />
            {/* Rule of thirds lines */}
            <line x1="62" y1="16" x2="62" y2="80" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="98" y1="16" x2="98" y2="80" stroke="#e2e8f0" strokeWidth="1" />
            {/* Camera pan arrow */}
            <path d="M 45 48 L 105 48 M 98 42 L 105 48 L 98 54" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="50" y="42" fill="#2563eb" fontSize="8" fontFamily="monospace" fontWeight="bold">PAN RIGHT</text>
            <text x="32" y="74" fill="#64748b" fontSize="8" fontFamily="monospace">SCENE 04 / SHOT 02</text>
          </svg>
        )}

        {type === "caricature-art" && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* Exaggerated Cheery caricature anatomy study */}
            <circle cx="80" cy="45" r="28" fill="#faf8f5" stroke="currentColor" strokeWidth="2.5" />
            {/* Oversized glasses */}
            <circle cx="70" cy="42" r="10" stroke="#2563eb" strokeWidth="2" fill="none" />
            <circle cx="90" cy="42" r="10" stroke="#2563eb" strokeWidth="2" fill="none" />
            <line x1="80" y1="42" x2="80" y2="42" stroke="#2563eb" strokeWidth="2" />
            {/* Wide smile & beard zig-zag */}
            <path d="M 68 58 Q 80 68 92 58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 72 68 L 76 78 L 80 68 L 84 78 L 88 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="25" y="24" fill="#2563eb" fontSize="8" fontFamily="monospace">EXAGGERATION</text>
          </svg>
        )}

        {/* Fallback default clean animation chart */}
        {![
          "squash-stretch",
          "body-mechanics",
          "acting-pantomime",
          "dynamic-action",
          "environment-layout",
          "storyboarding",
          "caricature-art",
        ].includes(type) && (
          <svg viewBox="0 0 160 100" className="w-full h-24 text-stone-900">
            {/* Timing chart & spacing peg bar */}
            <line x1="20" y1="50" x2="140" y2="50" stroke="#2563eb" strokeWidth="2" />
            <circle cx="20" cy="50" r="4" fill="#1d4ed8" />
            <circle cx="140" cy="50" r="4" fill="#1d4ed8" />
            {/* Spacing ticks favoring keyframes */}
            <line x1="30" y1="42" x2="30" y2="58" stroke="#93c5fd" strokeWidth="1.5" />
            <line x1="45" y1="44" x2="45" y2="56" stroke="#93c5fd" strokeWidth="1.5" />
            <line x1="80" y1="40" x2="80" y2="60" stroke="#2563eb" strokeWidth="2" />
            <line x1="115" y1="44" x2="115" y2="56" stroke="#93c5fd" strokeWidth="1.5" />
            <line x1="130" y1="42" x2="130" y2="58" stroke="#93c5fd" strokeWidth="1.5" />
            <text x="35" y="32" fill="#2563eb" fontSize="9" fontFamily="monospace">SLOW IN & SLOW OUT</text>
            <text x="45" y="78" fill="#64748b" fontSize="8" fontFamily="monospace">EASE TIMING CHART</text>
          </svg>
        )}
      </div>

      {/* Footer timing annotation */}
      <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[10px] font-mono text-stone-500">
        <span>Hand-drawn Line Vector</span>
        <span className="text-blue-700 font-bold">AnimDaddy Lab</span>
      </div>
    </div>
  );
}
