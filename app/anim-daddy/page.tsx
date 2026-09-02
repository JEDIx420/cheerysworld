"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { FOUNDATION_LEVELS, ADVANCED_MODULES } from "@/data/animDaddyModules";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { ScrawlRevealImage } from "@/components/doodles/ScrawlRevealImage";
import { BookOpen, GraduationCap, Video, Users, CheckCircle2, Sparkles } from "lucide-react";

export default function AnimDaddyPage() {
  const [selectedLevel, setSelectedLevel] = useState(FOUNDATION_LEVELS[0]);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const motionCurveRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Draw bouncing ball curve timeline
      if (motionCurveRef.current) {
        const len = motionCurveRef.current.getTotalLength();
        gsap.set(motionCurveRef.current, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });

        gsap.to(motionCurveRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#curriculum",
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-stone-200/80 relative overflow-hidden bg-radial from-blue-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-blue-600" />
                Venture 02 • Animation & Art Mentoring
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
                anim_daddy
              </h1>

              <div className="mt-1">
                <ScribbleUnderline className="text-blue-600 w-56 sm:w-80" />
              </div>

              <p className="mt-6 text-xl sm:text-2xl font-serif italic text-blue-950 leading-snug">
                &ldquo;Where passion becomes motion.&rdquo;
              </p>

              <p className="mt-4 text-stone-700 text-base sm:text-lg max-w-xl leading-relaxed">
                The learning and mentoring arm of Cheerys for curious artists who want to understand the craft behind animation and visual storytelling.
              </p>

              {/* Mentoring mode pillars */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs font-mono shadow-xs">
                  <Video className="w-4 h-4 text-blue-600 mb-1" />
                  <strong className="block text-stone-900">Online Mentoring</strong>
                  <span className="text-stone-500 text-[11px]">Flexible feedback from home</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs font-mono shadow-xs">
                  <Users className="w-4 h-4 text-blue-600 mb-1" />
                  <strong className="block text-stone-900">Offline Mentoring</strong>
                  <span className="text-stone-500 text-[11px]">Workshops for schools & homes</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs font-mono col-span-2 sm:col-span-1 shadow-xs">
                  <GraduationCap className="w-4 h-4 text-blue-600 mb-1" />
                  <strong className="block text-stone-900">Old-School Craft</strong>
                  <span className="text-stone-500 text-[11px]">20+ yrs industry faculty</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white font-mono text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg"
                >
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  Explore The Curriculum Journey
                </a>

                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
                >
                  Mentoring Enquiry
                </a>
              </div>
            </div>

            {/* Right Hero Booklet Cover */}
            <div className="lg:col-span-5">
              <div className="relative bg-stone-900 text-white rounded-3xl p-5 border-2 border-stone-800 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-stone-950 p-2 border border-stone-800">
                  <ScrawlRevealImage
                    src="/anim-daddy/page-01.png"
                    alt="AnimDaddy Student Booklet Cover"
                    aspectRatio="aspect-[3/4]"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-mono text-stone-300">
                    AnimDaddy Student Curriculum & Handbook
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-16 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold block mb-2">
            The AnimDaddy Promise
          </span>
          <p className="text-2xl sm:text-3xl font-serif italic text-stone-900 leading-snug">
            &ldquo;anim_daddy is not only about software. It is about learning to observe, think, draw, act, animate and tell a story with intention.&rdquo;
          </p>
          <p className="mt-4 text-sm font-mono text-stone-500">
            Guided by a group of animation and design professionals with over 20 years of industry experience.
          </p>
        </div>
      </section>

      {/* Foundation Levels (Interactive Sketchbook Timeline with Motion Arcs) */}
      <section id="curriculum" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80 relative overflow-hidden">
        
        {/* Animated Bouncing Ball Motion Arc in Background */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
          <svg viewBox="0 0 1000 800" fill="none" className="w-full h-full text-blue-400/40">
            <path
              ref={motionCurveRef}
              d="M 50 150 Q 250 20 450 180 Q 650 40 850 220 Q 950 80 980 260"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Early Levels & Foundations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
              The Stepping Stones Curriculum
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Start with drawing confidence and animating everyday objects before advancing to character mechanics.
            </p>
          </div>

          {/* Level Switcher Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {FOUNDATION_LEVELS.map((lvl) => (
              <button
                key={lvl.level}
                onClick={() => setSelectedLevel(lvl)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedLevel.level === lvl.level
                    ? "bg-blue-600 text-white border-blue-600 shadow-md font-bold"
                    : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
                }`}
              >
                <span className="block text-xs font-mono uppercase tracking-wider opacity-80">
                  {lvl.level}
                </span>
                <span className="block text-base font-serif font-bold mt-1">
                  {lvl.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Level Detail View */}
          <div className="bg-white rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold mb-4">
                {selectedLevel.level} • {selectedLevel.name}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                {selectedLevel.summary}
              </h3>

              <p className="mt-4 text-stone-700 text-base leading-relaxed">
                {selectedLevel.detail}
              </p>

              <div className="mt-8 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-600">
                <span>Fee structure (from booklet): <strong>Rs. 5,000/- per student</strong> (Online or Offline)</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              {selectedLevel.imageSrc && (
                <div className="relative rounded-2xl overflow-hidden bg-stone-900 p-2 border border-stone-300 shadow-md">
                  <ScrawlRevealImage
                    src={selectedLevel.imageSrc}
                    alt={selectedLevel.name}
                    aspectRatio="aspect-[3/4]"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Modules List (1 to 14 from Student Booklet) */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
              Advanced Mastery
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
              Advanced Modules (1 to 14)
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              From Body Mechanics and Acting to Environmental Art, Creature VFX, Storyboarding, and Caricature.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANCED_MODULES.map((mod) => (
              <div
                key={mod.num}
                className="bg-[#faf8f5] rounded-2xl p-6 border border-stone-200 hover:border-stone-900 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                      {mod.num}
                    </span>
                    <span className="text-[11px] font-mono text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full font-medium">
                      {mod.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-stone-900 mb-2">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {mod.description}
                  </p>
                </div>

                {mod.imageSrc && (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 mt-2 border border-stone-300">
                    <Image
                      src={mod.imageSrc}
                      alt={mod.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-300 text-xs font-mono text-stone-700 text-center max-w-2xl mx-auto">
            Advanced modules range from <strong>Rs. 20,000/- to Rs. 40,000/-</strong> (Online & Offline options available).
          </div>

        </div>
      </section>

      {/* Mentoring Enquiry Form (Frontend UX Preview) */}
      <section id="enquiry" className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
                Student & School Admissions
              </span>
              <h2 className="text-3xl font-black font-serif text-stone-900 mt-1">
                Start Your Animation Journey
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Let us know your learning goals, current level, or school workshop requirements.
              </p>
            </div>

            {enquirySuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mx-auto border-2 border-blue-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">
                  Admissions Enquiry Previewed!
                </h3>
                <p className="text-stone-600 text-xs max-w-md mx-auto">
                  This form is currently a <strong>frontend client prototype</strong>. In production, this will route directly to the AnimDaddy mentoring coordination desk.
                </p>
                <button
                  onClick={() => setEnquirySuccess(false)}
                  className="px-6 py-2 rounded-full bg-stone-900 text-white text-xs font-mono font-bold cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnquirySuccess(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Student / Parent Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sharma"
                      className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@example.com"
                      className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Interested Track
                    </label>
                    <select className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-stone-900 focus:outline-hidden">
                      <option>Foundations (Levels A - D)</option>
                      <option>Advanced Character Animation & Acting</option>
                      <option>Storyboarding & Pre-Production</option>
                      <option>School / Home Workshop (Group)</option>
                      <option>The Art of Caricature Masterclass</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Mentoring Mode
                    </label>
                    <select className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-mono focus:border-stone-900 focus:outline-hidden">
                      <option>Online Guided Mentoring</option>
                      <option>Offline In-Person Workshop</option>
                      <option>School Institutional Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Learning Goals & Background
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your drawing experience, favorite cartoons, or animation goals..."
                    className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-sans focus:border-stone-900 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-blue-600 text-white font-mono text-sm font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Request Mentoring Information (Demo)
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}
