import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RoughCircle, CheerySmileDoodle } from "../doodles/DoodleIcons";
import { ArrowRight } from "lucide-react";

export function MeetCheerySection() {
  const roles = ["Founder", "Artist", "Animator", "Designer", "Storyteller", "Mentor"];

  return (
    <section className="py-20 md:py-28 bg-[#faf8f5] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border-2 border-stone-800 p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle doodle stamp */}
          <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
            <CheerySmileDoodle size={180} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left portrait photograph column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-3 sm:p-4 shadow-xl rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300">
                {/* Real Photograph with editorial aspect ratio */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-stone-300 bg-stone-100 shadow-inner">
                  <Image
                    src="/cheery-portrait-studio.jpg"
                    alt="Cheery Thomas Cherian - Artist, Animator, and Founder of Cheerys World holding pens and brushes"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="object-cover object-[center_28%]"
                  />

                  {/* Corner Accent: Authentic Cheery Sign Mark */}
                  <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-stone-700/80 flex items-center gap-1.5 shadow-sm pointer-events-none select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-stone-200 uppercase tracking-wider font-semibold">
                      In the Studio
                    </span>
                  </div>
                </div>

                {/* Editorial Caption Strip */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-stone-900 font-bold">
                    <RoughCircle size={14} className="text-amber-500 shrink-0" />
                    <span>Cheery — Artist • Animator • Mentor</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
                    EST. 2000
                  </span>
                </div>
              </div>
            </div>

            {/* Right narrative content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                  Section 02 • The Creator Behind The Worlds
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-stone-900">
                Meet Cheery
              </h2>

              {/* Roles pills bar */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {roles.map((role, idx) => (
                  <span
                    key={role}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-mono border border-stone-300 font-medium"
                  >
                    {role} {idx < roles.length - 1 && <span className="text-amber-600 font-bold">•</span>}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
                <p>
                  Cheerys isn&apos;t a random collection of unconnected shops—it is the unified artistic studio of a creator whose life work revolves around visual humor, storytelling, mentorship, and thoughtful craft.
                </p>
                <p className="text-stone-600 text-base">
                  Whether capturing someone&apos;s true essence in a caricature, teaching an aspiring artist the science of motion, drafting meaningful apparel designs, or baking made-to-order wholesome loaves, each venture reflects the same personal care and hand-crafted philosophy.
                </p>
              </div>

              {/* Quote box */}
              <div className="mt-8 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 relative">
                <p className="font-serif italic text-stone-900 text-base sm:text-lg">
                  &ldquo;Do everything by hand, even when using the computer.&rdquo;
                </p>
                <span className="block mt-2 text-xs font-mono text-amber-900 font-semibold">
                  — Hayao Miyazaki • Quoted in the AnimDaddy philosophy
                </span>
              </div>

              {/* Link to About */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-stone-950 font-mono font-bold hover:text-amber-700 transition-colors text-sm underline decoration-amber-500 decoration-2 underline-offset-4"
                >
                  Read the full story & studio philosophy <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
