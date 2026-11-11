"use client";

import React, { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { ModuleMedia } from "@/data/animDaddyModules";

interface ModuleMediaPreviewProps {
  media: ModuleMedia;
  moduleNum: number;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function ModuleMediaPreview({ media, moduleNum }: ModuleMediaPreviewProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // If user explicitly toggles play/pause, respect their manual preference
  const [manualOverride, setManualOverride] = useState<boolean | null>(null);

  const isPlaying = manualOverride !== null ? manualOverride : !prefersReducedMotion;
  const imageSrc = isPlaying ? media.src : (media.stillSrc || media.src);

  return (
    <div className="mt-4 pt-3 border-t border-stone-200">
      <div className="relative rounded-xl overflow-hidden bg-stone-950 border border-stone-800 shadow-inner flex flex-col">
        {/* Peg-bar style cel header */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-stone-900 border-b border-stone-800 text-[10px] font-mono text-stone-300">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPlaying ? "bg-emerald-400 animate-pulse" : "bg-stone-500"
              }`}
            />
            <span className="font-bold tracking-wider uppercase text-stone-200">
              Module 0{moduleNum} • Demo Cel
            </span>
          </div>

          <button
            type="button"
            onClick={() => setManualOverride(!isPlaying)}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors text-[10px] font-mono cursor-pointer border border-stone-700/60"
            aria-label={
              isPlaying
                ? `Pause Module ${moduleNum} demonstration animation`
                : `Play Module ${moduleNum} demonstration animation`
            }
          >
            {isPlaying ? (
              <>
                <Pause className="w-2.5 h-2.5 text-amber-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 text-emerald-400" />
                <span>Play</span>
              </>
            )}
          </button>
        </div>

        {/* Stable dark stage viewport — high contrast for white figures & colored pixels */}
        <div className="relative w-full h-44 sm:h-48 flex items-center justify-center p-3 bg-[#111113]">
          <Image
            src={imageSrc}
            alt={media.alt}
            width={media.width}
            height={media.height}
            unoptimized={isPlaying}
            loading="lazy"
            className="object-contain w-auto h-full max-h-38 sm:max-h-42 drop-shadow-md select-none"
          />
        </div>

        {/* Bottom caption / motion note */}
        {media.caption && (
          <div className="px-3 py-1.5 bg-stone-900/95 border-t border-stone-800/80 text-[10px] font-mono text-stone-400 truncate">
            {media.caption}
          </div>
        )}
      </div>
    </div>
  );
}
