"use client";

import React, { useState } from "react";
import { LottieAnimationPlayer } from "./LottieAnimationPlayer";
import { Layers, Film, Compass, Clapperboard, Sparkles } from "lucide-react";

export function AnimDaddyHeroReel() {
  const [activeCel, setActiveCel] = useState<"performance" | "walk" | "draw" | "morph">("performance");
  const [fpsMode, setFpsMode] = useState<24 | 12>(24);
  const [showGuides, setShowGuides] = useState(true);

  const celConfig = {
    performance: {
      src: "/anim-daddy/lottie-character-acting.json",
      title: "ACTING CEL • CHARACTER DIALOGUE & BEATS",
      subtitle: "Adrock dialogue pantomime, staging & eye darts",
      frameRange: "FR 01 - 72",
      badge: "Masterclass Cel",
      aspectRatio: "aspect-[4/3]",
    },
    walk: {
      src: "/anim-daddy/lottie-cat-walk.json",
      title: "MECHANICS CEL • QUADRUPED & BIPED LOCOMOTION",
      subtitle: "Contact, down, passing, and up breakdown (24 FPS)",
      frameRange: "FR 01 - 24",
      badge: "Locomotion Study",
      aspectRatio: "aspect-[4/3]",
    },
    draw: {
      src: "/anim-daddy/lottie-draw-on.json",
      title: "LINE RESOLUTION • PENCIL CLEANUP PASS",
      subtitle: "Rough animation line cleaned and inked to vector cel",
      frameRange: "FR 01 - 36",
      badge: "Clean-up Pass",
      aspectRatio: "aspect-[4/3]",
    },
    morph: {
      src: "/anim-daddy/lottie-shape-morph.json",
      title: "SHAPE FLOW • SQUASH, STRETCH & MORPH",
      subtitle: "Volume preservation across elastic metamorphosis",
      frameRange: "FR 01 - 48",
      badge: "Volume Study",
      aspectRatio: "aspect-[4/3]",
    },
  };

  const current = celConfig[activeCel];

  return (
    <div className="bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Animator's Lightbox Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-stone-300 pb-4 mb-6 gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-bold text-stone-900 tracking-wider">
            ANIMDADDY LIGHTBOX • 24 FPS DESK
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowGuides(!showGuides)}
            className={`px-2.5 py-1 rounded-md border text-[11px] font-mono transition-colors flex items-center gap-1 cursor-pointer ${
              showGuides
                ? "bg-blue-100 text-blue-900 border-blue-400 font-bold"
                : "bg-white text-stone-600 border-stone-300"
            }`}
          >
            <Layers className="w-3 h-3 text-blue-600" />
            <span>Field Guides: {showGuides ? "ON" : "OFF"}</span>
          </button>

          <button
            type="button"
            onClick={() => setFpsMode(fpsMode === 24 ? 12 : 24)}
            className="px-2.5 py-1 rounded-md border border-stone-300 bg-white text-stone-700 text-[11px] font-mono font-bold hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {fpsMode} FPS {fpsMode === 24 ? "(On 1s)" : "(On 2s)"}
          </button>
        </div>
      </div>

      {/* Main Lightbox Frame with Real Motion */}
      <div className="relative bg-white rounded-2xl border border-stone-300 shadow-inner overflow-hidden p-4">
        {/* Pegbar holes & cel registration at top of desk */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-3 px-2 text-[10px] font-mono text-stone-400 select-none">
          <div className="flex items-center gap-1.5">
            <span className="text-blue-600 font-bold">#REG-A</span>
            <span>ACME STANDARD 3-HOLE PEG</span>
          </div>

          <div className="flex items-center gap-2 opacity-35">
            <span className="w-3 h-1.5 rounded-xs bg-stone-900" />
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            <span className="w-3 h-1.5 rounded-xs bg-stone-900" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-stone-700 font-bold">{current.frameRange}</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
              {current.badge}
            </span>
          </div>
        </div>

        {/* Primary Motion Display */}
        <div className="relative">
          <LottieAnimationPlayer
            key={activeCel}
            src={current.src}
            autoplay={true}
            loop={true}
            label={current.title}
            caption={current.subtitle}
            showControls={true}
            aspectRatio="aspect-[4/3]"
            className="w-full shadow-xs"
          />

          {/* Overlaid Field Grid & Safe Action Guides when enabled */}
          {showGuides && (
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-8 opacity-40">
              <div className="w-full h-full border border-dashed border-blue-400 rounded-lg flex items-center justify-center relative">
                <span className="absolute top-1 left-2 text-[8px] font-mono text-blue-500 uppercase tracking-wider">
                  Safe Title (90%)
                </span>
                <div className="w-3/4 h-3/4 border border-blue-300/60 rounded flex items-center justify-center relative">
                  <span className="absolute top-1 left-2 text-[8px] font-mono text-blue-400 uppercase tracking-wider">
                    Safe Action (80%)
                  </span>
                  {/* Center registration crosshair */}
                  <div className="w-4 h-4 relative flex items-center justify-center">
                    <div className="w-full h-px bg-blue-500" />
                    <div className="h-full w-px bg-blue-500 absolute" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Timing marks / Exposures X-Sheet strip */}
        <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono">
          <span className="text-stone-500 flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-blue-600" />
            <span>Exposure Sheet Active Track</span>
          </span>
          <div className="flex items-center gap-1 text-[10px] text-stone-600">
            <span className="px-1.5 py-0.5 rounded bg-stone-100 font-bold text-stone-800">Key 01</span>
            <span>→</span>
            <span className="px-1.5 py-0.5 rounded bg-stone-100">Breakdown 12</span>
            <span>→</span>
            <span className="px-1.5 py-0.5 rounded bg-stone-100 font-bold text-stone-800">Key 24</span>
          </div>
        </div>
      </div>

      {/* Interactive Cel Selector Buttons */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setActiveCel("performance")}
          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
            activeCel === "performance"
              ? "bg-blue-600 text-white border-blue-600 shadow-xs font-bold"
              : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
          }`}
        >
          <Clapperboard className="w-3.5 h-3.5 mb-1 text-current opacity-80" />
          <span className="block text-[11px] font-mono font-bold leading-tight">Acting & Dialogue</span>
          <span className="block text-[9px] opacity-75 font-mono">Performance Cel</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveCel("walk")}
          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
            activeCel === "walk"
              ? "bg-blue-600 text-white border-blue-600 shadow-xs font-bold"
              : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
          }`}
        >
          <Film className="w-3.5 h-3.5 mb-1 text-current opacity-80" />
          <span className="block text-[11px] font-mono font-bold leading-tight">Walk Cycle</span>
          <span className="block text-[9px] opacity-75 font-mono">Mechanics Cel</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveCel("draw")}
          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
            activeCel === "draw"
              ? "bg-blue-600 text-white border-blue-600 shadow-xs font-bold"
              : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
          }`}
        >
          <Compass className="w-3.5 h-3.5 mb-1 text-current opacity-80" />
          <span className="block text-[11px] font-mono font-bold leading-tight">Line Cleanup</span>
          <span className="block text-[9px] opacity-75 font-mono">Pencil Inking</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveCel("morph")}
          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
            activeCel === "morph"
              ? "bg-blue-600 text-white border-blue-600 shadow-xs font-bold"
              : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 mb-1 text-current opacity-80" />
          <span className="block text-[11px] font-mono font-bold leading-tight">Squash & Morph</span>
          <span className="block text-[9px] opacity-75 font-mono">Elastic Shapes</span>
        </button>
      </div>

      {/* Mentorship stamp footer */}
      <div className="mt-4 pt-3 border-t border-stone-300 flex items-center justify-between text-[11px] font-mono text-stone-600">
        <span>Curated by Cheery Thomas & International Studio Veterans</span>
        <span className="text-blue-700 font-bold">24 FPS Hand-Drawn DNA</span>
      </div>
    </div>
  );
}
