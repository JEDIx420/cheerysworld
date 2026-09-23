import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScribbleUnderline, SparkleDoodle, CheerySmileDoodle } from "@/components/doodles/DoodleIcons";
import { Palette, Sparkles, Film, Shirt, Utensils, ArrowRight, Quote } from "lucide-react";

export const metadata = {
  title: "About Cheery • CHEERYS Creative Culture",
  description:
    "Founder • Artist • Animator • Designer • Storyteller • Mentor. The human and artistic vision behind cheery_fic, cheerys_art, anim_daddy, cheerys_tees, and cheerys_bakes.",
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
      name: "cheerys_art",
      label: "Canvas, Resin & Clock Dial Painting Work",
      desc: "Art that adds life to your space. Handcrafted textured canvas paintings, fluid cosmic resin art, and statement clocks.",
      icon: Sparkles,
      href: "/cheerys-art",
      accent: "text-purple-700 bg-purple-50 border-purple-200",
    },
    {
      num: "03",
      name: "anim_daddy",
      label: "Animation & Art Mentoring",
      desc: "Learning the craft behind animation, movement, and visual storytelling with old-school principles and heart.",
      icon: Film,
      href: "/anim-daddy",
      accent: "text-blue-700 bg-blue-50 border-blue-200",
    },
    {
      num: "04",
      name: "cheerys_tees",
      label: "Custom Apparel & Merchandise",
      desc: "Everyday apparel as a canvas for personality, faith, identity, celebration and self-expression.",
      icon: Shirt,
      href: "/cheerys-tees",
      accent: "text-orange-700 bg-orange-50 border-orange-200",
    },
    {
      num: "05",
      name: "cheerys_bakes",
      label: "Healthy, Custom Baking",
      desc: "Nutritious, gluten-free, sugar-free made-to-order baking crafted with care around real dietary needs.",
      icon: Utensils,
      href: "/cheerys-bakes",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
  ];

  // Industry recommendations from colleagues and mentors
  const recommendations = [
    {
      name: "Shine Bose",
      title: "2D Animation Director @ Zebu Animation Studios",
      context: "Worked with Cheery on the same team",
      quote:
        "I've had the privilege of working with Cheery Cherian Thomas, an inspiring professional with over 24 years of experience in animation and mentorship. His unique ability to blend creativity with guidance has helped countless aspiring artists grow. With a keen eye for detail and a gift for simplifying complex concepts, Cheery empowers his students to thrive. I'm excited about his new online course and confident it will be transformative for anyone pursuing a career in animation. I highly recommend him as an outstanding animator, mentor, and leader.",
    },
    {
      name: "Vinod Thomas",
      title: "CEO @ Probeplus",
      context: "Managed Cheery directly as creative consultant",
      quote:
        "Cheery Thomas has worked for me as a creative consultant back in the day. His creativity was above and beyond, that my team benefitted from his contribution in every angle and level. His hardwork and dedication to the craft was exemplary. He will be a high value addition to any organization. Wishing him all the very best.",
    },
    {
      name: "Camila Mary Jerome Philip",
      title: "DGM - HR | MBA | CIPD",
      context: "Senior colleague at Toonz Animation",
      quote:
        "I had the pleasure of working with Cheery, Show Director and Animation Director at Toonz, and it was a highly rewarding experience. He brings strong expertise in directing international animation projects, with deep technical knowledge of tools like Shotgun and Maya, and a solid command of end-to-end animation pipelines...",
    },
    {
      name: "Nideep Varghese",
      title: "Animator at DreamWorks",
      context: "Worked with Cheery for ~4 years at Toonz",
      quote:
        "I have worked with Cheery for around 4 years at Toonz. He was a really passionate and talented artist. He was also very pro-active. He did whatever job he was assigned, with great responsibility and dedication. I would definitely recommend Cheery to be part of any artistic company. He would be a great asset to any team.",
    },
    {
      name: "Atul Rao",
      title: "Professor at Loyalist College",
      context: "Colleague at Toonz for 4 years",
      quote:
        "Cheery is a talented writer and creative executive with decades of experience. He's great to work with and an asset to any organization. I'm lucky to have worked with him for four years at Toonz.",
    },
    {
      name: "Sreekumar Sree",
      title: "3D Exhibit Designer at Al Fajer Information & Services",
      context: "Worked with Cheery across creative projects",
      quote:
        "He has been the most efficient Talent Artist I've been working with. He always has been available when I had some questions and he makes you feel very comfortable. He is very passionate, very professional.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Intro Hero Section with Real Cheery Portrait */}
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
                &ldquo;One name. Five expressions. One creative culture.&rdquo;
              </p>

              <div className="mt-6 space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Cheerys is the creative world of Cheery—an artist, caricaturist, animation director, and mentor whose calling is to infuse ideas, faces, spaces, and nourishment with unmistakable character and human warmth.
                </p>
                <p>
                  With over 24 years in international animation pipelines, visual storytelling, and bespoke art, Cheery unites distinct crafts—from paper caricature to fine canvas art, animation instruction, custom faith merchandise, and mindful baking—into one coherent handcrafted culture.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#recommendations"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-900 hover:text-amber-700 transition-colors"
                >
                  Read Industry Recommendations ↓
                </a>
              </div>
            </div>

            {/* Right: Prominent Real Portrait of Cheery in Handcrafted Editorial Cel Frame */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-900 shadow-2xl rotate-1">
                
                {/* Genuine Photographic Portrait of Cheery */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 border border-stone-300 shadow-inner">
                  <Image
                    src="/WhatsApp Image 2026-09-21 at 10.13.23 PM (1).jpeg"
                    alt="Cheery Thomas Cherian - Founder, Artist & Director of Cheerys World"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  
                  {/* Subtle Studio Label */}
                  <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-xs text-stone-100 px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Cheery Thomas Cherian
                  </div>
                </div>

                {/* Secondary Signature Overlay & Doodle Badge */}
                <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-serif font-bold text-stone-900">
                      Cheery Thomas
                    </span>
                    <span className="text-[11px] font-mono text-stone-500">
                      Artist, Director & Mentor
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative w-16 h-10">
                      <Image
                        src="/brand/cheery-signature-clean.jpg"
                        alt="Cheery authentic sign mark"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
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
            CREATE • PAINT • TEACH • PERSONALISE • NOURISH
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Every piece created under CHEERYS begins with the human touch. From the pencil strokes of a live caricature to the vivid acrylic layers of a fine art canvas, the timing curves of character animation, the customized fabric of everyday apparel, and the mindful preparation of home-baked loaves, our work puts personal connection and craftsmanship first.
          </p>
        </div>
      </section>

      {/* Industry Recommendations / Testimonials Section */}
      <section id="recommendations" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-mono font-bold mb-3">
              <Quote className="w-3.5 h-3.5 text-amber-400" />
              Industry Voices
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900">
              From People Who&apos;ve Worked Alongside Cheery
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              Peers, studio directors, collaborators, and industry colleagues sharing their first-hand experience of Cheery&apos;s craftsmanship, dedication, and mentorship.
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recommendations.map((rec) => (
              <div
                key={rec.name}
                className="bg-white rounded-3xl p-7 border-2 border-stone-900 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Subtle quote icon & badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full font-semibold border border-amber-200">
                      Recommendation
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      {rec.context}
                    </span>
                  </div>

                  {/* Recommendation Text */}
                  <p className="text-stone-700 text-sm font-sans leading-relaxed italic">
                    &ldquo;{rec.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-stone-200">
                  <h4 className="font-serif font-bold text-stone-950 text-base">
                    {rec.name}
                  </h4>
                  <p className="text-xs font-mono text-stone-500 mt-0.5">
                    {rec.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <span className="text-xs font-mono text-stone-500">
              Verified recommendations from professional colleagues across 24+ years in animation and creative production.
            </span>
          </div>

        </div>
      </section>

      {/* The Five Expressions Cards */}
      <section className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black font-serif text-stone-900">
              The Five Expressions Under Cheerys
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Explore how Cheery&apos;s artistic voice takes shape across each discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.num}
                  className="bg-[#faf8f5] rounded-3xl p-8 border-2 border-stone-900 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-stone-900 text-white">
                        Venture {v.num}
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

                  <div className="mt-8 pt-4 border-t border-stone-200">
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

      {/* Cheery Closing Signature Mark */}
      <section className="py-16 text-center">
        <div className="inline-flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center mb-3 shadow-lg">
            <CheerySmileDoodle size={36} className="text-amber-400" />
          </div>
          <span className="font-serif font-bold text-lg text-stone-900">
            Cheerys World
          </span>
          <span className="text-xs font-mono text-stone-500 mt-0.5">
            Handcrafted with Heart & Story
          </span>
        </div>
      </section>

    </main>
  );
}
