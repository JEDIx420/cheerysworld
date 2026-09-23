"use client";

import React, { useState } from "react";
import { FOUNDATION_LEVELS, ADVANCED_MODULES } from "@/data/animDaddyModules";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { AnimDaddyHeroReel } from "@/components/anim-daddy/AnimDaddyHeroReel";
import { LottieAnimationPlayer } from "@/components/anim-daddy/LottieAnimationPlayer";
import { VentureInquiryForm } from "@/components/forms/VentureInquiryForm";
import { BookOpen, GraduationCap, Video, Users, Sparkles, Film, Compass, Clapperboard, Palette, CheckCircle2 } from "lucide-react";

export default function AnimDaddyPage() {
  const [selectedLevel, setSelectedLevel] = useState(FOUNDATION_LEVELS[0]);

  // Group curriculum logically into 5 distinct thematic studios as requested
  const curriculumTracks = [
    {
      id: "track-mechanics",
      title: "Foundations & Body Mechanics",
      tagline: "Physics, Weight & Locomotion",
      icon: Film,
      lottieSrc: "/anim-daddy/lottie-cat-walk.json",
      lottieLabel: "STUDIO CEL • WALK CYCLE MECHANICS",
      lottieCaption: "24 FPS contact, passing, and foot-fall breakdown",
      modules: ADVANCED_MODULES.filter((m) => [1, 2, 4, 7].includes(m.num)),
    },
    {
      id: "track-acting",
      title: "Character Performance & Acting",
      tagline: "Emotional Staging & Dialogue Pacing",
      icon: Clapperboard,
      lottieSrc: "/anim-daddy/lottie-character-acting.json",
      lottieLabel: "STUDIO CEL • CHARACTER PERFORMANCE",
      lottieCaption: "Anticipation, comedic timing, and expressive pantomime",
      modules: ADVANCED_MODULES.filter((m) => [3, 5].includes(m.num)),
    },
    {
      id: "track-storyboard",
      title: "Visual Development & Storyboarding",
      tagline: "Cinematic Staging & Narrative Beats",
      icon: Compass,
      lottieSrc: "/anim-daddy/lottie-shape-morph.json",
      lottieLabel: "STUDIO CEL • METAMORPHOSIS & ARCS",
      lottieCaption: "Elastic shape-flow, dynamic transitions, and spatial staging",
      modules: ADVANCED_MODULES.filter((m) => [6, 8, 9].includes(m.num)),
    },
    {
      id: "track-digital",
      title: "Digital 2D Production & Design",
      tagline: "Hand-Drawn Inbetweening to Final Pipeline",
      icon: Palette,
      lottieSrc: "/anim-daddy/lottie-draw-on.json",
      lottieLabel: "STUDIO CEL • DIGITAL CLEANUP LINE",
      lottieCaption: "Pencil test line resolution into inked vector cel",
      modules: ADVANCED_MODULES.filter((m) => [10, 11, 13, 14].includes(m.num)),
    },
    {
      id: "track-caricature",
      title: "The Art of Caricature Masterclass",
      tagline: "Signature Funny-Bone Mentorship with Cheery",
      icon: Sparkles,
      lottieSrc: "/anim-daddy/lottie-character.json",
      lottieLabel: "STUDIO CEL • EXAGGERATION & PERSONALITY",
      lottieCaption: "Extracting comedic gold, living expressions, and iconic silhouettes",
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

            {/* Right Hero: Character-Driven Animator Reel */}
            <div className="lg:col-span-6">
              <AnimDaddyHeroReel />
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {FOUNDATION_LEVELS.map((lvl) => (
              <button
                key={lvl.level}
                type="button"
                onClick={() => setSelectedLevel(lvl)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedLevel.level === lvl.level
                    ? "bg-blue-600 text-white border-blue-600 shadow-md font-bold"
                    : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                    {lvl.level}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    selectedLevel.level === lvl.level ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"
                  }`}>
                    {lvl.level === "Level A" ? "Principles" : lvl.level === "Level B" ? "Drawing" : lvl.level === "Level C" ? "Design" : "Caricature"}
                  </span>
                </div>
                <span className="block text-base font-serif font-bold mt-2">
                  {lvl.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Level Detail Container with stable height and bespoke layouts */}
          <div className="bg-white rounded-3xl border-2 border-stone-900 p-6 sm:p-10 shadow-xl overflow-hidden min-h-[520px] flex flex-col justify-between">
            {selectedLevel.level === "Level A" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                    Level A • The Stepping Stones Desk
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
                    {selectedLevel.summary}
                  </h3>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {selectedLevel.detail}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                      <span className="block font-bold text-stone-900">Squash & Stretch</span>
                      <span className="text-stone-500 text-[11px]">Volume conservation rules</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                      <span className="block font-bold text-stone-900">Timing & Spacing</span>
                      <span className="text-stone-500 text-[11px]">Slow-in, slow-out arcs</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span>Foundation Enrollment: <strong>₹5,000/- per student</strong></span>
                    <span className="text-blue-700 font-bold">Online & Offline</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <LottieAnimationPlayer
                    src="/anim-daddy/lottie-cat-walk.json"
                    autoplay={true}
                    loop={true}
                    label="LEVEL A • LOCOMOTION PRINCIPLE CEL"
                    caption="24 FPS contact, passing, and foot-fall breakdown"
                    aspectRatio="aspect-[4/3]"
                    className="w-full shadow-md"
                  />
                </div>
              </div>
            )}

            {selectedLevel.level === "Level B" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                    Level B • Let&apos;s Draw (Sketchbook Stage)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
                    {selectedLevel.summary}
                  </h3>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {selectedLevel.detail}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                      <span className="block font-bold text-stone-900">Direct Pen Sketching</span>
                      <span className="text-stone-500 text-[11px]">Unlocking raw confidence</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                      <span className="block font-bold text-stone-900">Beautiful Asymmetry</span>
                      <span className="text-stone-500 text-[11px]">Natural character quirks</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span>Foundation Enrollment: <strong>₹5,000/- per student</strong></span>
                    <span className="text-blue-700 font-bold">Online & Offline</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <LottieAnimationPlayer
                    src="/anim-daddy/lottie-draw-on.json"
                    autoplay={true}
                    loop={true}
                    label="LEVEL B • PENCIL TEST TO INKED LINE"
                    caption="Clean-up stroke resolution from raw pencil lines"
                    aspectRatio="aspect-[4/3]"
                    className="w-full shadow-md"
                  />
                </div>
              </div>
            )}

            {selectedLevel.level === "Level C" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold mb-2">
                      Level C • Character Design & Visual Development Board
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                      {selectedLevel.summary}
                    </h3>
                  </div>
                  <div className="text-right text-xs font-mono text-stone-600">
                    <span className="block">Foundation fee: <strong>₹5,000/-</strong></span>
                    <span className="text-blue-700 font-bold">Silhouette to Production Asset</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-stone-700 text-sm leading-relaxed">
                      {selectedLevel.detail}
                    </p>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span><strong>Silhouette Readability:</strong> Immediate recognition at thumbnail scale</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span><strong>Costume & Volume:</strong> Turnaround sheets with animator-friendly forms</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span><strong>Expressive Acting Model:</strong> Emotion range from broad smile to subtle smirk</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LottieAnimationPlayer
                      src="/anim-daddy/lottie-shape-morph.json"
                      autoplay={true}
                      loop={true}
                      label="VOLUME MORPH & PROPORTION"
                      caption="Dynamic anatomy & volume conservation"
                      aspectRatio="aspect-[4/3]"
                      className="shadow-sm"
                    />
                    <LottieAnimationPlayer
                      src="/anim-daddy/lottie-character-acting.json"
                      autoplay={true}
                      loop={true}
                      label="EXPRESSION & ACTING CEL"
                      caption="Rigged character personality in motion"
                      aspectRatio="aspect-[4/3]"
                      className="shadow-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedLevel.level === "Level D" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                    Level D • The Art of Caricature Masterclass
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
                    {selectedLevel.summary}
                  </h3>
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {selectedLevel.detail}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                      <span className="block font-bold text-stone-900">Facial Architecture</span>
                      <span className="text-stone-500 text-[11px]">Identifying core distinct features</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                      <span className="block font-bold text-stone-900">Comedic Exaggeration</span>
                      <span className="text-stone-500 text-[11px]">Pushing forms while keeping likeness</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span>Foundation Enrollment: <strong>₹5,000/- per student</strong></span>
                    <a href="/cheery-fic" className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1">
                      See Cheery&apos;s Caricatures →
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <LottieAnimationPlayer
                    src="/anim-daddy/lottie-character.json"
                    autoplay={true}
                    loop={true}
                    label="LEVEL D • CARICATURE WIT & EXPRESSION"
                    caption="Pushed silhouette with instant comic recognition"
                    aspectRatio="aspect-[4/3]"
                    className="w-full shadow-md"
                  />
                </div>
              </div>
            )}
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
              Curated into 5 dedicated craft studios. Real animation movement paired with clear curriculum hierarchy.
            </p>
          </div>

          <div className="space-y-16">
            {curriculumTracks.map((track, idx) => {
              const TrackIcon = track.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={track.id}
                  className="bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-xl overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left/Right Text & Curriculum List */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
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

                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {track.modules.map((mod) => (
                          <div
                            key={mod.num}
                            className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-stone-900 transition-colors"
                          >
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
                        ))}
                      </div>
                    </div>

                    {/* Dedicated Motion Showcase Cel */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <LottieAnimationPlayer
                        src={track.lottieSrc}
                        autoplay={true}
                        loop={true}
                        label={track.lottieLabel}
                        caption={track.lottieCaption}
                        showControls={true}
                        className="shadow-md"
                      />
                    </div>

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
