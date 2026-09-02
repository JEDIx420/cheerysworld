"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { SelectedWorkGallery } from "@/components/gallery/SelectedWorkGallery";
import { CommissionModal } from "./CommissionModal";
import { Sparkles, Camera, Brush, Check } from "lucide-react";

export default function CheeryFicPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const processSteps = [
    {
      step: "01",
      title: "Share Your Photos & Story",
      desc: "Send high-res reference photos and tell Cheery about personality quirks, favorite clothes, props, or special memories.",
      icon: Camera,
    },
    {
      step: "02",
      title: "Handcrafted Caricature Sketch",
      desc: "Cheery begins drafting the anatomy, exaggerating facial charm, and infusing authentic personality into the lines.",
      icon: Brush,
    },
    {
      step: "03",
      title: "Delivered With Heart",
      desc: "Receive your high-res digital caricature or keepsake ready for framing, gifting, social avatars, or merchandise.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Intro Hero */}
      <section className="py-16 md:py-24 border-b border-stone-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-amber-600" />
                Venture 01 • Visual Studio
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
                cheery_fic
              </h1>

              <div className="mt-1">
                <ScribbleUnderline className="text-amber-500 w-56 sm:w-80" />
              </div>

              <p className="mt-6 text-xl sm:text-2xl font-serif italic text-amber-900 leading-snug">
                &ldquo;Where faces become caricatures, ideas become illustrations, and creativity finds a form people can keep, gift or share.&rdquo;
              </p>

              <p className="mt-4 text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
                cheery_fic is the playful visual studio of Cheerys. We celebrate real people by turning personality, laughter, and character into unforgettable art.
              </p>

              {/* Offerings pills */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Solo Caricatures", "Couples & Weddings", "Family Keepsakes", "Corporate Avatars", "Line Art & Faith"].map((pill) => (
                  <span
                    key={pill}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-mono font-medium shadow-xs"
                  >
                    ✓ {pill}
                  </span>
                ))}
              </div>

              {/* Commission Action CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  id="commission"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white font-mono text-sm font-bold hover:bg-amber-600 transition-colors shadow-lg cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  Commission a Caricature (UI Preview)
                </button>

                <a
                  href="#photo-comparison"
                  className="inline-flex items-center gap-1.5 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
                >
                  See Photo → Caricature
                </a>
              </div>
            </div>

            {/* Right Hero Artwork */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-5 border-2 border-stone-800 shadow-xl rotate-1">
                <div className="relative aspect-[4/5] rounded-2xl bg-amber-50/50 p-3 overflow-hidden">
                  <Image
                    src="/cheery-fic/page-1.png"
                    alt="Cheery caricature artwork"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-mono font-bold text-stone-900">
                    Hand-drawn Caricature by Cheery
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Photo to Caricature Demonstration Section */}
      <section id="photo-comparison" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
              The Transformation Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-900 mt-2">
              From Real Photo to Living Character
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Cheery examines facial structure, eyewear, gestures, and authentic warmth to translate real humans into humorous and loving caricature pieces.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#faf8f5] rounded-3xl border-2 border-stone-800 p-6 sm:p-10 shadow-lg">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-300">
              <Image
                src="/cheery-fic/page-7.png"
                alt="Side by side comparison of reference photo and Cheery caricature"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
              />
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-600 gap-2 border-t border-stone-200 pt-4">
              <span>← Real Reference Snapshot</span>
              <span className="font-bold text-amber-800">Original Caricature Artwork by Cheery →</span>
            </div>
          </div>

        </div>
      </section>

      {/* The 3-Step Commission Process */}
      <section className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-900 mt-2">
              The Commission Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <span className="text-4xl font-black font-serif text-amber-200 select-none">
                    {step.step}
                  </span>

                  <div className="my-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4 border border-amber-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-stone-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-mono text-stone-400">
                    <Check className="w-3.5 h-3.5 text-amber-600" />
                    Personalized attention
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Dedicated cheery_fic Portfolio Gallery */}
      <SelectedWorkGallery
        defaultFilter="cheery-fic"
        showHeading={true}
      />

      {/* Cheerys Promise Banner */}
      <section className="py-20 bg-amber-950 text-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 block mb-3">
            The Cheery_fic Promise
          </span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic leading-snug">
            &ldquo;The goal is simple: make people smile, recognise themselves and feel that their story has been given a distinctive creative identity.&rdquo;
          </blockquote>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-full bg-amber-500 text-stone-950 font-mono font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg cursor-pointer"
            >
              Start Your Custom Caricature
            </button>
          </div>
        </div>
      </section>

      {/* Commission Enquiry Modal */}
      <CommissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </main>
  );
}
