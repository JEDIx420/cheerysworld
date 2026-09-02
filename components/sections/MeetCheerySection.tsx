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
            
            {/* Left signature portrait column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-square bg-[#faf8f5] rounded-3xl border-2 border-dashed border-stone-400 p-6 flex flex-col items-center justify-center text-center shadow-inner group">
                
                {/* Handdrawn signature doodle */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                  <Image
                    src="/brand/cheery-signature-clean.jpg"
                    alt="Cheery original self portrait doodle and signature"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-stone-100 font-mono text-xs">
                  <RoughCircle size={14} className="text-amber-400" />
                  Self-Portrait & Signature by Cheery
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
