"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { SparkleDoodle, SketchArrow, CheerySmileDoodle } from "../doodles/DoodleIcons";
import { DrawnSelfPortrait } from "../doodles/DrawnSelfPortrait";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<SVGSVGElement>(null);

  const pillars = [
    { word: "CREATE.", desc: "cheery_fic", color: "text-amber-900 bg-amber-50/80 border-amber-200" },
    { word: "PAINT.", desc: "cheerys_art", color: "text-purple-900 bg-purple-50/80 border-purple-200" },
    { word: "TEACH.", desc: "anim_daddy", color: "text-blue-900 bg-blue-50/80 border-blue-200" },
    { word: "PERSONALISE.", desc: "cheerys_tees", color: "text-orange-950 bg-orange-50/80 border-orange-200" },
    { word: "NOURISH.", desc: "cheerys_bakes", color: "text-emerald-950 bg-emerald-50/80 border-emerald-200" },
  ];

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Draw scribble underline path
      const underlinePath = underlineRef.current?.querySelector("path");
      if (underlinePath) {
        const len = underlinePath.getTotalLength();
        gsap.set(underlinePath, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: -15,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title-char",
          {
            y: 40,
            opacity: 0,
            stagger: 0.04,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        );

      if (underlinePath) {
        tl.to(
          underlinePath,
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.4"
        );
      }

      tl.from(
        ".hero-tagline",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
        .from(
          ".hero-subcopy",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".hero-pillar",
          {
            y: 20,
            opacity: 0,
            stagger: 0.06,
            duration: 0.5,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        )
        .from(
          ".hero-cta",
          {
            scale: 0.95,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.2"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden border-b border-stone-200/80 paper-texture"
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono tracking-wider uppercase mb-6 w-fit shadow-xs">
              <SparkleDoodle size={14} className="text-amber-400" />
              The Creative Umbrella of Cheery
            </div>

            {/* Giant Typographic Title with animated letters */}
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-serif tracking-tighter text-stone-950 leading-[0.9] flex flex-wrap">
                {"CHEERYS".split("").map((char, index) => (
                  <span key={index} className="hero-title-char inline-block">
                    {char}
                  </span>
                ))}
              </h1>
              <div className="mt-1">
                <svg
                  ref={underlineRef}
                  width="320"
                  height="16"
                  viewBox="0 0 200 18"
                  fill="none"
                  className="text-amber-500 w-48 sm:w-72 md:w-96 overflow-visible"
                >
                  <path
                    d="M3 14C35 5 80 16 115 7C145 -1 180 15 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Supporting Core Positioning Message */}
            <p className="hero-tagline mt-8 text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-800 leading-snug">
              &ldquo;One name. Five expressions. One creative culture.&rdquo;
            </p>

            <p className="hero-subcopy mt-4 text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Cheerys brings together five distinct creative ventures—caricatures, fine canvas & resin art, animation mentoring, custom apparel, and mindful baking—connected by one vision: to create, paint, teach, personalise and nourish with heart.
            </p>

            {/* Five Action Pillars */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-3xl">
              {pillars.map((pillar) => (
                <div
                  key={pillar.word}
                  className={`hero-pillar p-2.5 rounded-xl border text-center transition-transform hover:-translate-y-1 shadow-xs ${pillar.color}`}
                >
                  <span className="block text-[11px] font-black font-mono tracking-wider">
                    {pillar.word}
                  </span>
                  <span className="block text-[10px] text-stone-600 font-sans mt-0.5">
                    {pillar.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#four-worlds"
                className="hero-cta inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-stone-950 text-white font-mono text-sm font-semibold hover:bg-amber-600 transition-colors shadow-md group"
              >
                <Compass className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                Explore The Creative Worlds
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="hero-cta inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-stone-800 text-stone-900 font-mono text-sm font-semibold hover:bg-stone-50 transition-colors shadow-xs"
              >
                Meet Cheery
              </Link>
            </div>
          </div>

          {/* Right Hero Artwork with Draw-In and Interactive Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-900 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                
                {/* Cheery Signature Badge on top */}
                <div className="absolute -top-5 -right-4 sm:-right-6 bg-amber-400 text-stone-950 px-4 py-1.5 rounded-2xl border-2 border-stone-900 shadow-md font-mono text-xs font-bold rotate-6 flex items-center gap-1.5 z-20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Self-Drawing Studio Art
                </div>

                {/* Animated Draw-In Self-Portrait by Cheery */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 flex flex-col items-center justify-center p-4">
                  <DrawnSelfPortrait
                    className="w-full max-w-[280px] h-auto text-stone-900"
                    triggerOnScroll={false}
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

                  <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                    Live Drawn
                  </span>
                </div>
              </div>

              {/* Doodle floating arrow pointing into story */}
              <div className="hidden sm:block absolute -bottom-8 -left-10 text-stone-800 rotate-12">
                <SketchArrow direction="curved-down" />
                <span className="block font-mono text-[11px] text-stone-500 -mt-2 ml-4">
                  Scroll for continuous journey
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
