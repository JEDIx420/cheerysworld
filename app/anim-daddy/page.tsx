"use client";

import React, { useState } from "react";
import { FOUNDATION_LEVELS, ADVANCED_MODULES } from "@/data/animDaddyModules";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { AnimationLab } from "@/components/anim-daddy/AnimationLab";
import { AnimatedPrincipleCard } from "@/components/anim-daddy/AnimatedPrincipleCard";
import { VentureInquiryForm } from "@/components/forms/VentureInquiryForm";
import { BookOpen, GraduationCap, Video, Users } from "lucide-react";

export default function AnimDaddyPage() {
  const [selectedLevel, setSelectedLevel] = useState(FOUNDATION_LEVELS[0]);

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
                  Admissions Inquiry ↓
                </a>
              </div>
            </div>

            {/* Right Hero: Replaced dark booklet with Handcrafted Interactive Animation Lab */}
            <div className="lg:col-span-6">
              <AnimationLab />
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

      {/* Foundation Levels (Interactive Sketchbook Timeline) */}
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
                <span>Fee structure (from curriculum): <strong>₹5,000/- per student</strong> (Online or Offline options)</span>
              </div>
            </div>

            {/* Handcrafted animated principle illustration instead of dark booklet screenshot */}
            <div className="lg:col-span-5">
              <AnimatedPrincipleCard
                type={selectedLevel.principleType}
                className="shadow-md"
              />
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

                {/* Handcrafted animated card diagram */}
                <div className="mt-2">
                  <AnimatedPrincipleCard type={mod.principleType} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-300 text-xs font-mono text-stone-700 text-center max-w-2xl mx-auto">
            Advanced modules range from <strong>₹20,000/- to ₹40,000/-</strong> (Online & Offline options available).
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
