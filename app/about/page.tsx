import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { Palette, Film, Shirt, Utensils, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Cheery • CHEERYS Creative Culture",
  description:
    "Founder • Artist • Animator • Designer • Storyteller • Mentor. The human and artistic vision behind cheery_fic, anim_daddy, cheerys_tees, and cheerys_bakes.",
};

export default function AboutPage() {
  const ventures = [
    {
      num: "01",
      name: "cheery_fic",
      label: "Caricatures & Creative Products",
      desc: "Where faces become caricatures, ideas become illustrations, and creativity finds a form people can keep, gift or share.",
      icon: Palette,
      href: "/cheery-fic",
      accent: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      num: "02",
      name: "anim_daddy",
      label: "Animation & Art Mentoring",
      desc: "Learning the craft behind animation, movement, and visual storytelling with old-school principles and heart.",
      icon: Film,
      href: "/anim-daddy",
      accent: "text-blue-700 bg-blue-50 border-blue-200",
    },
    {
      num: "03",
      name: "cheerys_tees",
      label: "Custom Apparel & Merchandise",
      desc: "Everyday apparel as a canvas for personality, faith, identity, celebration and self-expression.",
      icon: Shirt,
      href: "/cheerys-tees",
      accent: "text-orange-700 bg-orange-50 border-orange-200",
    },
    {
      num: "04",
      name: "cheerys_bakes",
      label: "Healthy, Custom Baking",
      desc: "Nutritious, gluten-free, sugar-free made-to-order baking crafted with care around real dietary needs.",
      icon: Utensils,
      href: "/cheerys-bakes",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Intro Hero */}
      <section className="py-16 md:py-24 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-amber-400" />
                The Story Behind CHEERYS
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
                Meet Cheery
              </h1>

              <div className="mt-1">
                <ScribbleUnderline className="text-stone-900 w-56 sm:w-80" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-stone-700">
                {["Founder", "Artist", "Animator", "Designer", "Storyteller", "Mentor"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded-full bg-white border border-stone-300 font-semibold"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-xl sm:text-2xl font-serif italic text-stone-800 leading-snug">
                &ldquo;One name. Four expressions. One creative culture.&rdquo;
              </p>

              <div className="mt-6 space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Cheerys is the creative home of Cheery—an artist, animator, and storyteller whose passion is to give ideas, faces, memories, and nourishment an unmistakable personality.
                </p>
                <p>
                  Rather than viewing art, teaching, merchandise, and baking as disconnected activities, Cheerys unites them into a cohesive creative ecosystem rooted in hand-made authenticity, genuine human warmth, and purpose.
                </p>
              </div>
            </div>

            {/* Right signature self-portrait */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-8 border-2 border-stone-900 shadow-2xl rotate-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 p-6 flex items-center justify-center">
                  <Image
                    src="/brand/cheery-signature-clean.jpg"
                    alt="Cheery original self-portrait doodle"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 pt-4 border-t border-stone-200 text-center">
                  <span className="block text-sm font-serif font-bold text-stone-900">
                    Cheery
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    Original Self-Portrait & Signature
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-3">
            Creative Spirit
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-900 mb-6">
            CREATE • TEACH • PERSONALISE • NOURISH
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Every piece created under CHEERYS begins with the human touch. From the pencil strokes of a live caricature to the timing curves of character animation, the customized fabric of everyday apparel, and the mindful preparation of home-baked loaves, our work puts personal connection and craftsmanship first.
          </p>
        </div>
      </section>

      {/* The Four Expressions Cards */}
      <section className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-900">
              The Four Divisions Under Cheerys
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Explore how Cheery&apos;s artistic voice takes shape across each discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ventures.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.num}
                  className="bg-white rounded-3xl p-8 border-2 border-stone-900 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-stone-900 text-white">
                        {v.num}
                      </span>
                      <div className={`p-2.5 rounded-xl border ${v.accent}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold font-serif text-stone-900">
                      {v.name}
                    </h3>
                    <span className="text-xs font-mono text-stone-500 block mt-1">
                      {v.label}
                    </span>

                    <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-stone-100">
                    <Link
                      href={v.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 hover:text-amber-700 transition-colors"
                    >
                      Visit {v.name} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
