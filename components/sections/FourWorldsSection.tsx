"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VENTURES } from "@/data/ventures";
import { SparkleDoodle, ScribbleUnderline, CheerySmileDoodle } from "../doodles/DoodleIcons";
import { ArrowRight, CheckCircle2, ArrowUpRight, Film, Shirt, Utensils, Sparkles } from "lucide-react";

export function FourWorldsSection() {
  const worldIcons = [Sparkles, Film, Shirt, Utensils];

  return (
    <section
      id="four-worlds"
      className="py-20 md:py-32 bg-[#faf8f5] relative border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <SparkleDoodle size={14} className="text-amber-400" />
            Section 03 • Four Expressions
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
            The Four Worlds of Cheerys
          </h2>

          <div className="flex justify-center mt-3">
            <ScribbleUnderline className="text-amber-600" width={260} />
          </div>

          <p className="mt-6 text-stone-600 text-lg md:text-xl font-sans leading-relaxed">
            Scroll through Cheery&apos;s creative disciplines—each world stacks into place as you explore the craft.
          </p>
        </div>

        {/* Responsive Sticky Card Stacking Container */}
        <div className="relative flex flex-col gap-10 md:gap-16 pb-20">
          {VENTURES.map((venture, index) => {
            const isEven = index % 2 === 1;
            const Icon = worldIcons[index % worldIcons.length];
            // Progressive top offset for stacking on desktop/tablet/mobile
            const topOffset = 90 + index * 24;

            return (
              <div
                key={venture.id}
                className="sticky rounded-3xl transition-all duration-300 shadow-2xl"
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 1,
                }}
              >
                <div className="bg-white rounded-3xl border-2 border-stone-900 p-6 sm:p-10 md:p-12 overflow-hidden relative">
                  
                  {/* Big Number Watermark */}
                  <span className="absolute top-2 right-6 text-8xl sm:text-9xl md:text-[140px] font-black font-serif text-stone-100 select-none pointer-events-none -z-0">
                    {venture.number}
                  </span>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                    
                    {/* Text Narrative Column */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      
                      {/* Badge Milestone */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border ${venture.pillColor} text-xs font-mono font-bold uppercase tracking-wider`}>
                          <Icon className={`w-3.5 h-3.5 ${venture.accentColor}`} />
                          Chapter {venture.number} • {venture.bulletPill}
                        </div>
                      </div>

                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-stone-900 mt-2">
                        {venture.name}
                      </h3>

                      <p className={`mt-2 text-base sm:text-lg font-serif italic ${venture.accentColor}`}>
                        {venture.tagline}
                      </p>

                      <p className="mt-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                        {venture.description}
                      </p>

                      {/* Offerings list */}
                      <div className="mt-6 space-y-2.5 pt-4 border-t border-stone-200">
                        {venture.offerings.slice(0, 3).map((offering) => (
                          <div key={offering.title} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${venture.accentColor}`} />
                            <div>
                              <h4 className="text-xs font-mono font-bold uppercase text-stone-900">
                                {offering.title}
                              </h4>
                              <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                                {offering.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Cheerys Promise Callout */}
                      <div className="mt-6 p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 font-sans">
                        <span className="font-mono font-bold text-stone-900 block mb-0.5 uppercase tracking-wider text-[11px]">
                          The Cheerys Promise:
                        </span>
                        &ldquo;{venture.promise}&rdquo;
                      </div>

                      {/* Action CTA Link */}
                      <div className="mt-6">
                        <Link
                          href={venture.actionHref}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-stone-50 font-mono text-xs sm:text-sm font-semibold hover:bg-amber-600 transition-all shadow-md group"
                        >
                          {venture.actionText}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Artwork Preview Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative group bg-stone-100 rounded-2xl p-4 border border-stone-200 shadow-inner">
                        <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-white p-2">
                          <Image
                            src={venture.previewImage}
                            alt={venture.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="mt-3 flex items-center justify-between text-xs font-mono text-stone-600 px-1">
                          <span className="font-semibold">Original Studio Art</span>
                          <Link
                            href={venture.actionHref}
                            className="inline-flex items-center gap-1 text-stone-900 font-bold hover:underline"
                          >
                            Explore World <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resolution into Cheery Brand Signature */}
        <div className="mt-16 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center mb-4 shadow-lg">
            <CheerySmileDoodle size={36} className="text-amber-400" />
          </div>
          <span className="font-serif font-bold text-xl text-stone-900">
            Four ventures. One creative culture.
          </span>
          <span className="font-mono text-xs text-stone-500 mt-1">
            Handcrafted by Cheery
          </span>
        </div>

      </div>
    </section>
  );
}
