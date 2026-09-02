"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { VENTURES } from "@/data/ventures";
import { ScrawlRevealImage } from "../doodles/ScrawlRevealImage";
import { SparkleDoodle, ScribbleUnderline, CheerySmileDoodle } from "../doodles/DoodleIcons";
import { ArrowRight, CheckCircle2, ArrowUpRight, Film, Shirt, Utensils, Sparkles } from "lucide-react";

export function FourWorldsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const journeyPathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      // Check reduced motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // 1. Continuous Hand-Drawn Scrawl Path Scroll Scrubbing
      if (journeyPathRef.current) {
        const path = journeyPathRef.current;
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 85%",
            scrub: 1.2,
          },
        });
      }

      // 2. Individual World Stage Cinematic Transitions
      const stages = gsap.utils.toArray<HTMLElement>(".world-stage");
      stages.forEach((stage) => {
        const textBlock = stage.querySelector(".world-text");
        const artBlock = stage.querySelector(".world-art");
        const badge = stage.querySelector(".world-badge");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: "top 75%",
            end: "bottom 80%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.from(badge, {
          scale: 0.8,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.5)",
        })
          .from(
            textBlock,
            {
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.2"
          )
          .from(
            artBlock,
            {
              scale: 0.92,
              opacity: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.6"
          );
      });
    },
    { scope: containerRef }
  );

  const worldIcons = [Sparkles, Film, Shirt, Utensils];

  return (
    <section
      id="four-worlds"
      ref={containerRef}
      className="py-24 md:py-36 bg-[#faf8f5] relative border-b border-stone-200/80 overflow-hidden"
    >
      {/* Background Continuous Traveling Hand-drawn S-Curve Path (Desktop) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-visible">
        <svg
          viewBox="0 0 1200 3600"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full text-stone-400/50"
        >
          <path
            ref={journeyPathRef}
            d="M 600 80 
               C 850 300, 950 500, 750 800 
               C 550 1100, 200 1300, 350 1700 
               C 500 2100, 950 2300, 800 2700 
               C 650 3100, 450 3300, 600 3550"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
            <SparkleDoodle size={14} className="text-amber-400" />
            Section 03 • The Scroll Journey
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
            The Four Worlds of Cheerys
          </h2>

          <div className="flex justify-center mt-3">
            <ScribbleUnderline className="text-amber-600" width={260} />
          </div>

          <p className="mt-6 text-stone-600 text-lg md:text-xl font-sans leading-relaxed">
            Follow the continuous creative thread through caricature craft, old-school animation, personalized streetwear, and mindful baking.
          </p>
        </div>

        {/* The 4 Immersive Chapter Scenes */}
        <div className="space-y-32 md:space-y-48">
          {VENTURES.map((venture, index) => {
            const isEven = index % 2 === 1;
            const Icon = worldIcons[index % worldIcons.length];

            return (
              <div
                key={venture.id}
                className="world-stage relative scroll-mt-28"
              >
                {/* Scene Header Milestone Pill */}
                <div className="flex items-center justify-center mb-10">
                  <div className={`world-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full border-2 bg-white shadow-md ${venture.badgeBorder}`}>
                    <Icon className={`w-4 h-4 ${venture.accentColor}`} />
                    <span className="font-mono text-xs font-bold text-stone-900">
                      CHAPTER {venture.number} • {venture.bulletPill}
                    </span>
                  </div>
                </div>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
                >
                  {/* Text Details Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="world-text bg-white/90 backdrop-blur-xs rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-xl relative overflow-hidden">
                      
                      {/* Big Number Watermark */}
                      <span className="absolute top-2 right-6 text-8xl sm:text-9xl font-black font-serif text-stone-100 select-none pointer-events-none -z-0">
                        {venture.number}
                      </span>

                      <div className="relative z-10">
                        <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${venture.pillColor}`}>
                          {venture.name}
                        </span>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-stone-900 mt-4">
                          {venture.name}
                        </h3>

                        <p className={`mt-2 text-lg sm:text-xl font-serif italic ${venture.accentColor}`}>
                          {venture.tagline}
                        </p>

                        <p className="mt-5 text-stone-700 text-base sm:text-lg leading-relaxed">
                          {venture.description}
                        </p>

                        {/* Offerings list */}
                        <div className="mt-8 space-y-3 pt-6 border-t border-stone-200">
                          {venture.offerings.slice(0, 3).map((offering) => (
                            <div key={offering.title} className="flex items-start gap-3">
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
                        <div className="mt-8 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 font-sans">
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

                    </div>
                  </div>

                  {/* Artwork Showcase Column with Scrawl Mask Reveal */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="world-art relative group">
                      <div className="relative bg-white rounded-3xl p-5 border-2 border-stone-900 shadow-2xl">
                        
                        {/* Progressive hand-drawn scribble mask reveal on raster artwork */}
                        <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                          <ScrawlRevealImage
                            src={venture.previewImage}
                            alt={venture.imageAlt}
                            aspectRatio="aspect-[4/5]"
                            className="w-full h-auto p-2"
                          />
                        </div>

                        {/* Footer details */}
                        <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs font-mono text-stone-600">
                          <span className="font-bold">Original Cheery Studio Artwork</span>
                          <Link
                            href={venture.actionHref}
                            className="inline-flex items-center gap-1 text-stone-900 font-bold hover:underline"
                          >
                            Enter World <ArrowUpRight className="w-3.5 h-3.5" />
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

        {/* Continuous Line Resolution into Cheery Brand Signature */}
        <div className="mt-32 text-center flex flex-col items-center">
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
