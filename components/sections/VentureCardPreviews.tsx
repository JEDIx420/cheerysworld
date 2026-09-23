import React from "react";
import Image from "next/image";
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

export function CheerysBakesVenturePreview() {
  return (
    <div className="relative group bg-stone-100 rounded-2xl p-4 border border-stone-200 shadow-inner">
      {/* Editorial Scrapbook Composition */}
      <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#faf8f5] p-3 flex flex-col justify-between border border-stone-200 shadow-sm">
        
        {/* Top genuine food photography */}
        <div className="relative h-44 w-full rounded-lg overflow-hidden border border-stone-300 shadow-sm">
          <Image
            src="/cheerys-bakes/bake-archive-spread.jpg"
            alt="Handcrafted breads and baked specialties by Cheery"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-emerald-950/80 backdrop-blur-xs text-white px-2 py-0.5 rounded-full text-[10px] font-mono">
            Original Studio Bakes
          </div>
        </div>

        {/* Archival press clipping snippet */}
        <div className="mt-2.5 p-3 rounded-lg bg-white border border-stone-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-emerald-800 font-bold">
            <span>FROM THE ARCHIVE</span>
            <span>Technopark Feature</span>
          </div>
          <p className="text-xs font-serif italic text-stone-800 leading-snug">
            &ldquo;The kitchen is another studio. Made with patience, wholesome grains, and care.&rdquo;
          </p>
          <div className="text-[10px] font-mono text-stone-500 pt-1 flex items-center justify-between border-t border-stone-100">
            <span>Gluten-Free • Sugar-Free</span>
            <span className="text-emerald-700 font-semibold">Made to Order</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs font-mono text-stone-600 px-1">
        <span className="font-semibold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          Kitchen Story
        </span>
        <Link
          href="/cheerys-bakes"
          className="inline-flex items-center gap-1 text-stone-900 font-bold hover:underline"
        >
          Explore Bakehouse <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
