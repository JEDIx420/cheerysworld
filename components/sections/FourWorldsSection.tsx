"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VENTURES } from "@/data/ventures";
import { ScribbleUnderline, SparkleDoodle } from "../doodles/DoodleIcons";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";

export function FourWorldsSection() {
  return (
    <section id="four-worlds" className="py-24 md:py-32 bg-[#faf8f5] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-mono tracking-widest uppercase mb-4">
            <SparkleDoodle size={14} className="text-amber-400" />
            Section 03 • Four Expressions
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif tracking-tight text-stone-950">
            The Four Worlds of Cheerys
          </h2>

          <div className="flex justify-center mt-2">
            <ScribbleUnderline className="text-stone-800" width={220} />
          </div>

          <p className="mt-6 text-stone-600 text-lg md:text-xl font-sans leading-relaxed">
            Distinct creative ventures, each focused on a specific craft, yet united by one shared artistic ethos and human touch.
          </p>
        </div>

        {/* Art-Directed Venture Showcase (Asymmetrical Editorial Layouts) */}
        <div className="space-y-20 md:space-y-28">
          {VENTURES.map((venture, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={venture.id}
                className="relative bg-white rounded-3xl border-2 border-stone-900 shadow-xl overflow-hidden p-6 sm:p-10 md:p-14 transition-all hover:shadow-2xl"
              >
                {/* Venture Number Watermark in Background */}
                <span className="absolute top-4 right-8 text-8xl sm:text-9xl md:text-[140px] font-black font-serif text-stone-100 select-none pointer-events-none -z-0">
                  {venture.number}
                </span>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Details Column */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    
                    {/* Venture Badge & Tag */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-stone-950 text-white">
                        {venture.number}
                      </span>
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${venture.pillColor}`}>
                        {venture.bulletPill}
                      </span>
                    </div>

                    {/* Venture Name & Tagline */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-stone-900 mt-2">
                      {venture.name}
                    </h3>

                    <p className={`mt-2 text-base sm:text-lg font-serif italic ${venture.accentColor}`}>
                      {venture.tagline}
                    </p>

                    <p className="mt-5 text-stone-700 text-base sm:text-lg leading-relaxed">
                      {venture.description}
                    </p>

                    {/* Offerings list */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-200">
                      {venture.offerings.slice(0, 4).map((offering) => (
                        <div key={offering.title} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 mt-1 shrink-0 ${venture.accentColor}`} />
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
                    <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 font-sans">
                      <span className="font-mono font-bold text-stone-900 block mb-1 uppercase tracking-wider text-[11px]">
                        The Cheerys Promise:
                      </span>
                      &ldquo;{venture.promise}&rdquo;
                    </div>

                    {/* Action CTA Link */}
                    <div className="mt-8">
                      <Link
                        href={venture.actionHref}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 text-stone-50 font-mono text-sm font-semibold hover:bg-amber-600 transition-all shadow-md group"
                      >
                        {venture.actionText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                  {/* Artwork Showcase Column */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative group">
                      <div className="relative aspect-[4/5] rounded-2xl bg-stone-100 p-4 border border-stone-300 shadow-inner flex items-center justify-center overflow-hidden">
                        <Image
                          src={venture.previewImage}
                          alt={venture.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Small floating annotation */}
                      <div className="mt-3 flex items-center justify-between text-xs font-mono text-stone-500 px-2">
                        <span>Original Asset</span>
                        <Link
                          href={venture.actionHref}
                          className="inline-flex items-center gap-1 font-bold text-stone-900 hover:underline"
                        >
                          View World <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
