"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FOUNDATION_LEVELS, ADVANCED_MODULES } from "@/data/animDaddyModules";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { ModuleMediaPreview } from "@/components/anim-daddy/ModuleMediaPreview";
import { VentureInquiryForm } from "@/components/forms/VentureInquiryForm";
import { BookOpen, GraduationCap, Video, Users, Sparkles, Film, Compass, Clapperboard, Palette } from "lucide-react";

export default function AnimDaddyPage() {
  const [selectedLevel, setSelectedLevel] = useState(FOUNDATION_LEVELS[0]);

  // Group curriculum logically into 5 distinct thematic studios
  const curriculumTracks = [
    {
      id: "track-mechanics",
      title: "Foundations & Body Mechanics",
      tagline: "Physics, Weight & Locomotion",
      icon: Film,
      modules: ADVANCED_MODULES.filter((m) => [1, 2, 4, 7].includes(m.num)),
    },
    {
      id: "track-acting",
      title: "Character Performance & Acting",
      tagline: "Emotional Staging & Dialogue Pacing",
      icon: Clapperboard,
      modules: ADVANCED_MODULES.filter((m) => [3, 5].includes(m.num)),
    },
    {
      id: "track-storyboard",
      title: "Visual Development & Storyboarding",
      tagline: "Cinematic Staging & Narrative Beats",
      icon: Compass,
      modules: ADVANCED_MODULES.filter((m) => [6, 8, 9].includes(m.num)),
    },
    {
      id: "track-digital",
      title: "Digital 2D Production & Design",
      tagline: "Hand-Drawn Inbetweening to Final Pipeline",
      icon: Palette,
      modules: ADVANCED_MODULES.filter((m) => [10, 11, 13, 14].includes(m.num)),
    },
    {
      id: "track-caricature",
      title: "The Art of Caricature Masterclass",
      tagline: "Signature Funny-Bone Mentorship with Cheery",
      icon: Sparkles,
      modules: ADVANCED_MODULES.filter((m) => [12].includes(m.num)),
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-stone-200/80 relative overflow-hidden bg-radial from-blue-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-blue-600" />
                Venture 03 • Animation & Art Mentoring
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
                The learning and mentoring arm of Cheerys for curious artists who want to understand the craft behind animation, movement, and visual storytelling from 20+ year studio veterans.
              </p>

              {/* Mentoring mode pillars */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs font-mono shadow-xs">
                  <Video className="w-4 h-4 text-blue-600 mb-1" />
                  <strong className="block text-stone-900">Online Mentoring</strong>
                  <span className="text-stone-500 text-[11px]">Direct 1-on-1 feedback</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs font-mono shadow-xs">
                  <Users className="w-4 h-4 text-blue-600 mb-1" />
                  <strong className="block text-stone-900">Offline Workshops</strong>
                  <span className="text-stone-500 text-[11px]">Intensive in-person masterclasses</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs font-mono col-span-2 sm:col-span-1 shadow-xs">
                  <GraduationCap className="w-4 h-4 text-blue-600 mb-1" />
                  <strong className="block text-stone-900">Old-School Craft</strong>
                  <span className="text-stone-500 text-[11px]">Disney & Warner Bros. principles</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white font-mono text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg"
                >
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  Explore The Curriculum Tracks
                </a>

                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
                >
                  Admissions Inquiry ↓
                </a>
              </div>
            </div>

            {/* Right Hero: Plain, Character-Driven Animation Cel */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg bg-white rounded-3xl p-5 sm:p-6 border-2 border-stone-800 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 flex items-center justify-center p-4">
                  <Image
                    src="/anim-daddy/hero-character-acting.gif"
                    alt="Character Animation Acting & Performance demonstration"
                    fill
                    priority
                    unoptimized
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-mono font-medium text-stone-600">
                    Character Acting &amp; Dialogue Pantomime • 24 FPS
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
            Guided by Cheery and a network of industry directors with over 24 years of international studio experience.
          </p>
        </div>
      </section>

      {/* Foundation Levels (Stepping Stones) */}
      <section id="curriculum" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10" role="tablist" aria-label="Foundation Curriculum Levels">
            {FOUNDATION_LEVELS.map((lvl) => {
              const isSelected = selectedLevel.level === lvl.level;
              return (
                <button
                  key={lvl.level}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-600 shadow-md font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                      {lvl.level}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"
                    }`}>
                      {lvl.tag}
                    </span>
                  </div>
                  <span className="block text-base font-serif font-bold mt-2">
                    {lvl.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Single Data-Driven, Stable Foundation Container */}
          <div className="bg-white rounded-3xl border-2 border-stone-900 p-6 sm:p-10 shadow-xl overflow-hidden min-h-[480px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Lesson Details */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                  {selectedLevel.level} • {selectedLevel.name}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
                  {selectedLevel.summary}
                </h3>
                
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {selectedLevel.detail}
                </p>

                {/* Core Learning Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {selectedLevel.points.map((pt, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                      <span className="block font-bold text-stone-900 mb-0.5">{pt.title}</span>
                      <span className="text-stone-500 text-[11px] leading-snug block">{pt.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Fee & Enrollment Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-600 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  <span>Foundation Enrollment: <strong>₹5,000/- per student</strong></span>
                  {selectedLevel.link ? (
                    <a href={selectedLevel.link.href} className="text-blue-700 font-bold hover:underline">
                      {selectedLevel.link.label}
                    </a>
                  ) : (
                    <span className="text-blue-700 font-bold">Online &amp; Offline</span>
                  )}
                </div>
              </div>

              {/* Right Column: Clean Visual Loop Container */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md bg-stone-50 rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-col items-center">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-stone-200 flex items-center justify-center p-3">
                    <Image
                      key={selectedLevel.media.webp}
                      src={selectedLevel.media.webp}
                      alt={selectedLevel.media.alt}
                      fill
                      unoptimized
                      priority
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs font-mono text-stone-600">
                    {selectedLevel.media.caption}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Advanced Thematic Studios */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
              Advanced Mastery
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
              Advanced Studios & Modules
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Curated into 5 dedicated craft studios with all 14 comprehensive professional modules.
            </p>
          </div>

          <div className="space-y-12">
            {curriculumTracks.map((track, idx) => {
              const TrackIcon = track.icon;

              return (
                <div
                  key={track.id}
                  className="bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-6 sm:p-10 shadow-lg overflow-hidden"
                >
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                    <TrackIcon className="w-4 h-4 text-blue-600" />
                    <span>Studio Track 0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
                    {track.title}
                  </h3>
                  <p className="text-sm font-mono text-stone-600 mt-1">
                    {track.tagline}
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {track.modules.map((mod) => (
                      <div
                        key={mod.num}
                        className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-stone-900 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                              {mod.num}
                            </span>
                            <span className="text-[10px] font-mono text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
                              {mod.tag}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-stone-900 text-base">
                            {mod.title}
                          </h4>
                          <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                            {mod.description}
                          </p>
                        </div>

                        {mod.media && (
                          <ModuleMediaPreview media={mod.media} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-stone-100 border border-stone-300 text-xs font-mono text-stone-700 text-center max-w-2xl mx-auto">
            Advanced modules range from <strong>₹20,000/- to ₹40,000/-</strong> (Online & Offline options available with custom portfolio reviews).
          </div>

        </div>
      </section>

      {/* Structured Mentoring Admissions Intake Form */}
      <section id="enquiry" className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <VentureInquiryForm formType="anim-daddy" />
        </div>
      </section>

    </main>
  );
}
