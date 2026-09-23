"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { VentureInquiryForm } from "@/components/forms/VentureInquiryForm";
import { Utensils, ShieldAlert, Newspaper, Quote, Sparkles, Flame } from "lucide-react";

export default function CheerysBakesPage() {
  const containerRef = useRef<HTMLElement>(null);

  const menuItems = [
    {
      category: "Artisan Breads",
      name: "Handcrafted Sourdough & Specialty Loaves",
      desc: "Slow-fermented artisan breads baked to order with careful flour blending and natural crust development.",
      badge: "Gluten-Free Option",
      image: "/cheerys-bakes/bake-round-loaf.jpg",
    },
    {
      category: "Buns & Bagels",
      name: "Artisan Bagels & Brioche-Style Buns",
      desc: "Golden boiled and baked bagels with classic seed toppings, plus cloud-soft dinner and burger buns.",
      badge: "Sugar-Free Recipe",
      image: "/cheerys-bakes/bake-chocolate-twists.jpg",
    },
    {
      category: "Focaccia & Savory",
      name: "Herb & Olive Extra Virgin Olive-Oil Focaccia",
      desc: "Rosemary, roasted cherry tomato, and cold-pressed extra virgin olive oil focaccia baked fresh on your schedule.",
      badge: "Made to Order",
      image: "/cheerys-bakes/bake-savory-platter.jpg",
    },
    {
      category: "Pretzels to Pastries",
      name: "Bavarian Soft Pretzels & Mini Pastries",
      desc: "Coarse sea-salt soft pretzels alongside naturally sweetened baked cinnamon-dusted pastries and treats.",
      badge: "Custom Dietary",
      image: "/cheerys-bakes/bake-mini-pies.jpg",
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-stone-200/80 relative overflow-hidden bg-radial from-emerald-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-emerald-700" />
                Venture 05 • Healthy, Custom Baking
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
                cheerys_bakes
              </h1>

              <div className="mt-1">
                <ScribbleUnderline className="text-emerald-700 w-56 sm:w-80" />
              </div>

              <p className="mt-6 text-xl sm:text-2xl font-serif italic text-emerald-950 leading-snug">
                &ldquo;Nutritious • gluten-free • sugar-free • made to order&rdquo;
              </p>

              <p className="mt-4 text-stone-700 text-base sm:text-lg max-w-xl leading-relaxed">
                cheerys_bakes brings a thoughtful, health-conscious approach to home baking—creating breads, rolls, and baked treats crafted around real dietary needs, allergies, and lifestyle choices.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {["Sourdough Loaves", "Herb Focaccia", "Artisan Bagels", "Bavarian Pretzels"].map((item) => (
                  <div key={item} className="p-3 rounded-xl bg-white border border-stone-200 text-center shadow-2xs">
                    <span className="text-xs font-mono font-bold text-stone-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#custom-order"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white font-mono text-sm font-bold hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  <Utensils className="w-4 h-4 text-emerald-400" />
                  Request Custom Baking Order ↓
                </a>

                <a
                  href="#archive"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
                >
                  From the Archive Clipping ↓
                </a>
              </div>
            </div>

            {/* Right Hero Card: Rich Editorial Scrapbook & Baking Motion Composition */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-stone-900 shadow-2xl rotate-1">
                <div className="space-y-4">
                  
                  {/* Real Food Photography Feature with Steam Micro-animation */}
                  <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-stone-300 shadow-sm bg-stone-900 group">
                    <Image
                      src="/cheerys-bakes/bake-archive-spread.jpg"
                      alt="Artisan breads and pastries baked by Cheery"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Dark gradient for badge contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40" />

                    {/* Studio label badge */}
                    <div className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-xs text-stone-100 text-[11px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5 border border-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Authentic Studio Bake
                    </div>

                    {/* Rising Steam Micro-Cues */}
                    <div className="absolute top-2 right-4 flex items-center gap-1 opacity-70 pointer-events-none">
                      <svg width="24" height="32" viewBox="0 0 24 32" className="text-white/60 animate-bounce duration-1000">
                        <path d="M6 28 C6 20, 14 16, 10 8 C8 4, 12 2, 12 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                      </svg>
                      <svg width="24" height="32" viewBox="0 0 24 32" className="text-white/60 animate-bounce duration-700">
                        <path d="M12 30 C12 22, 18 18, 14 10 C12 6, 16 3, 16 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                      </svg>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold block">
                        Slow Fermentation & Fire
                      </span>
                      <p className="text-xs font-serif italic text-stone-200 mt-0.5 line-clamp-1">
                        Handcrafted sourdough crusts, golden braided loaves & morning treats
                      </p>
                    </div>
                  </div>

                  {/* Artisan Craft Motion Cel & Fermentation Callout */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-stone-800 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-1.5 font-bold text-emerald-950">
                        <Flame className="w-3.5 h-3.5 text-emerald-700" />
                        Slow-Fermented Craft Standards
                      </span>
                      <span className="text-[10px] bg-emerald-200/70 text-emerald-900 px-2 py-0.5 rounded-full font-bold">
                        100% Hand-Crafted
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-center">
                      <div className="p-2 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                        <span className="block font-bold text-stone-900">Gluten-Free</span>
                        <span className="text-[10px] text-emerald-700">Clean Flour</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                        <span className="block font-bold text-stone-900">Sugar-Free</span>
                        <span className="text-[10px] text-emerald-700">Natural Sweet</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                        <span className="block font-bold text-stone-900">Custom Order</span>
                        <span className="text-[10px] text-emerald-700">Baked Fresh</span>
                      </div>
                    </div>
                  </div>

                  {/* Studio Quote Footer */}
                  <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-600">
                    <span className="flex items-center gap-1 font-bold text-stone-900">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      &ldquo;The kitchen is another studio.&rdquo;
                    </span>
                    <span className="text-emerald-800 font-semibold text-[10px] uppercase">
                      CHEERYS Bakes
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* From The Archive Editorial Feature */}
      <section id="archive" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-mono font-bold mb-3">
              <Newspaper className="w-3.5 h-3.5 text-emerald-700" />
              From the Archive
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900">
              Before cheerys_bakes had a name
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              Long before launching the studio venture, Cheery spent years experimenting in the kitchen, studying bread craft, and baking for friends, colleagues, and family.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* The Actual Editorial Newspaper Clipping */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative bg-[#f5f2eb] p-5 sm:p-7 rounded-3xl border-2 border-stone-800 shadow-2xl -rotate-1 max-w-md w-full">
                
                {/* Washi tape header graphic */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-100/90 border border-amber-300 shadow-xs -rotate-2 z-10" />

                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-white">
                  <Image
                    src="/cheerys-bakes/technopark-cheery-baker-clipping.jpg"
                    alt="Technopark's Cheery Baker historical feature clipping"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-stone-500 px-1">
                  <span>Archived Magazine Feature</span>
                  <span className="font-semibold text-stone-800">&ldquo;Creative Works Corner&rdquo;</span>
                </div>
              </div>
            </div>

            {/* Story & Verified Quotes from the Feature */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200 shadow-xs space-y-4">
                <Quote className="w-8 h-8 text-emerald-600 opacity-60" />
                <p className="font-serif italic text-lg sm:text-xl text-stone-900 leading-snug">
                  &ldquo;While Cheery learnt the basics alongside his mother during his childhood, he took his own timeout to attend classes to enhance his skills... finding one intention: the flavours, the aromas, seeing the reaction when someone tastes a cake or those cookies—that’s so fulfilling for me.&rdquo;
                </p>
                <div className="pt-3 border-t border-stone-200 text-xs font-mono text-stone-600 flex items-center justify-between">
                  <span>From &ldquo;Technopark’s Cheery Baker&rdquo;</span>
                  <span className="text-emerald-700 font-bold">Deepu Aby Varghese</span>
                </div>
              </div>

              <div className="space-y-4 text-stone-700 text-base leading-relaxed">
                <p>
                  Cheery’s baking began as a sanctuary away from the digital screen—unwinding by perfecting the temperature of the oven, working wholewheat flour into multi-bread loaves, and hand-shaping knotted chocolate twists and rustic focaccia.
                </p>
                <p>
                  Today, that same quiet patience forms the heart of <strong>cheerys_bakes</strong>: a dedicated bakehouse making everything fresh to order, customized around gluten-free flours, diabetic-friendly natural sweeteners, and strict allergy safeguards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                  <span className="block text-xs font-mono uppercase font-bold text-emerald-800">Childhood Roots</span>
                  <p className="text-xs text-stone-600 mt-1">Learnt the early foundation alongside his mother at home.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                  <span className="block text-xs font-mono uppercase font-bold text-emerald-800">Mindful Craft</span>
                  <p className="text-xs text-stone-600 mt-1">Trained and refined in classes to master sourdough and crust structure.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Visual Menu Concept with Real Photography */}
      <section id="menu" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              Bakehouse Menu Concept
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
              From Pretzels to Churros
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Hand-baked specialties crafted from scratch and tailored to your household&apos;s table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Photo crop */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-stone-200 bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full font-bold">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-stone-900 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Custom Batch Size</span>
                  <a
                    href="#custom-order"
                    className="text-emerald-800 font-bold hover:underline flex items-center gap-1"
                  >
                    Order Batch →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Dietary Caution Notice */}
      <section className="py-12 bg-white border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-300 text-stone-800 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs font-mono leading-relaxed">
              <strong className="block text-stone-950 font-bold text-sm">
                Dietary & Allergy Notice:
              </strong>
              <p>
                Every order is mixed, proofed, and baked in dedicated batches tailored to your specific intolerances. While we implement strict cross-contamination protocols, please specify all severe allergies (celiac, tree nuts, eggs, sesame) explicitly in the form below so we can prepare with utmost care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Baking Order Inquiry Form */}
      <section id="custom-order" className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <VentureInquiryForm formType="cheerys-bakes" />
        </div>
      </section>

    </main>
  );
}
