import React from "react";
import Link from "next/link";
import { LottieAnimationPlayer } from "@/components/anim-daddy/LottieAnimationPlayer";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function AnimDaddyVenturePreview() {
  return (
    <div className="relative group bg-stone-100 rounded-2xl p-4 border border-stone-200 shadow-inner">
      {/* Real Animation Motion Cel Preview */}
      <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#faf8f5] p-3 flex flex-col justify-between border border-stone-200 shadow-sm">
        
        {/* Top pegbar registration header */}
        <div className="flex items-center justify-between border-b border-stone-300 pb-2 text-[10px] font-mono text-stone-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-bold text-stone-900 tracking-wider">ANIMDADDY • MOTION REEL</span>
          </div>
          <span>24 FPS • KEYFRAME</span>
        </div>

        {/* Live Vector Lottie Player: Cat Walk-Cycle (Classic Character Mechanics) */}
        <div className="relative flex-1 flex items-center justify-center my-2 overflow-hidden rounded-lg bg-white border border-stone-200">
          <LottieAnimationPlayer
            src="/anim-daddy/lottie-cat-walk.json"
            autoplay={true}
            loop={true}
            showControls={false}
            className="w-full h-full border-none shadow-none bg-transparent"
          />
        </div>

        {/* Studio notes underneath */}
        <div className="pt-2 border-t border-stone-300 space-y-1">
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
          Interactive Motion Cel
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
