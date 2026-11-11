import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function AnimDaddyVenturePreview() {
  return (
    <div className="relative group bg-stone-100 rounded-2xl p-4 border border-stone-200 shadow-inner">
      <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-white p-3 flex flex-col justify-between border border-stone-200 shadow-sm">
        {/* Simple Animation Preview Container */}
        <div className="relative flex-1 w-full rounded-lg overflow-hidden bg-stone-50 border border-stone-200 flex items-center justify-center p-2">
          <Image
            src="/anim-daddy/level-a-cat-walk.gif"
            alt="Walk cycle locomotion mechanics"
            fill
            unoptimized
            loading="lazy"
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* Note underneath */}
        <div className="pt-3 border-t border-stone-200 space-y-1">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="font-bold text-stone-900">Module 01: Walk Cycles</span>
            <span className="text-blue-700 font-semibold">Weight & Timing</span>
          </div>
          <p className="text-[10px] text-stone-500 font-sans leading-tight">
            Kinetic locomotion breakdown, foot-fall arcs, and secondary spine follow-through.
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs font-mono text-stone-600 px-1">
        <span className="font-semibold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Animation Demo
        </span>
        <Link
          href="/anim-daddy"
          className="inline-flex items-center gap-1 text-stone-900 font-bold hover:underline"
        >
          Explore Mentoring <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
