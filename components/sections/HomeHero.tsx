"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScribbleUnderline, SparkleDoodle, SketchArrow, CheerySmileDoodle } from "../doodles/DoodleIcons";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

export function HomeHero() {
  const pillars = [
    { word: "CREATE.", desc: "cheery_fic", color: "text-amber-800 bg-amber-50 border-amber-300" },
    { word: "TEACH.", desc: "anim_daddy", color: "text-blue-800 bg-blue-50 border-blue-300" },
    { word: "PERSONALISE.", desc: "cheerys_tees", color: "text-orange-800 bg-orange-50 border-orange-300" },
    { word: "NOURISH.", desc: "cheerys_bakes", color: "text-emerald-800 bg-emerald-50 border-emerald-300" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-stone-200/80 paper-texture">
      {/* Background ambient sketch shapes */}
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono tracking-wider uppercase mb-6 w-fit shadow-xs">
              <SparkleDoodle size={14} className="text-amber-400" />
              The Creative Umbrella of Cheery
            </div>

            {/* Giant Typographic Title */}
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-serif tracking-tighter text-stone-950 leading-[0.9]">
                CHEERYS
              </h1>
              <div className="mt-1">
                <ScribbleUnderline className="text-amber-500 w-48 sm:w-72 md:w-96" />
              </div>
            </div>

            {/* Supporting Core Positioning Message */}
            <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-800 leading-snug">
              &ldquo;One name. Four expressions. One creative culture.&rdquo;
            </p>

            <p className="mt-4 text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Cheerys brings together four distinct creative ventures—each with its own personality, purpose and craft, yet connected by one vision: to create, teach, personalise and nourish with heart.
            </p>

            {/* Four Action Pillars / Words */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl">
              {pillars.map((pillar) => (
                <div
                  key={pillar.word}
                  className={`p-3 rounded-xl border text-center transition-transform hover:-translate-y-0.5 ${pillar.color}`}
                >
                  <span className="block text-xs font-black font-mono tracking-wider">
                    {pillar.word}
                  </span>
                  <span className="block text-[11px] text-stone-600 font-sans mt-0.5">
                    {pillar.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#four-worlds"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-stone-950 text-white font-mono text-sm font-semibold hover:bg-amber-600 transition-colors shadow-md group"
              >
                <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                Explore The Four Worlds
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-stone-800 text-stone-900 font-mono text-sm font-semibold hover:bg-stone-50 transition-colors shadow-xs"
              >
                Meet Cheery
              </Link>
            </div>
          </div>

          {/* Right Hero Artwork Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Hand-drawn frame effect */}
              <div className="relative bg-white rounded-3xl p-4 sm:p-6 border-2 border-stone-900 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                
                {/* Cheery Signature Badge on top */}
                <div className="absolute -top-6 -right-4 sm:-right-6 bg-amber-400 text-stone-950 px-4 py-2 rounded-2xl border-2 border-stone-900 shadow-md font-mono text-xs font-bold rotate-6 flex items-center gap-1.5 z-20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Original Studio Art
                </div>

                {/* Hero Artwork Image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                  <Image
                    src="/cheery-fic/page-4.png"
                    alt="Original portrait by Cheery"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-3"
                  />
                </div>

                {/* Sketch notes beneath hero piece */}
                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-white">
                      <CheerySmileDoodle size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold font-serif text-stone-900">
                        Cheery Signature Work
                      </span>
                      <span className="block text-[11px] font-mono text-stone-500">
                        Artist • Animator • Mentor
                      </span>
                    </div>
                  </div>

                  <div className="w-20 h-10 relative">
                    <Image
                      src="/brand/cheery-signature-clean.jpg"
                      alt="Cheery signature"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Doodle floating arrow pointing into story */}
              <div className="hidden sm:block absolute -bottom-10 -left-12 text-stone-800 rotate-12">
                <SketchArrow direction="curved-down" />
                <span className="block font-mono text-[11px] text-stone-500 -mt-2 ml-4">
                  Hand-crafted craft
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
