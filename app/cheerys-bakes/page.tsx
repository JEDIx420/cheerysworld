"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { Utensils, CheckCircle2, Sparkles, Wheat } from "lucide-react";

export default function CheerysBakesPage() {
  const [orderSent, setOrderSent] = useState(false);
  const [dietaryPrefs, setDietaryPrefs] = useState<string[]>(["Gluten-Free"]);
  const containerRef = useRef<HTMLElement>(null);
  const wheatStemRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Draw wheat stem path on scroll
      if (wheatStemRef.current) {
        const len = wheatStemRef.current.getTotalLength();
        gsap.set(wheatStemRef.current, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });

        gsap.to(wheatStemRef.current, {
          strokeDashoffset: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#craft-philosophy",
            start: "top 75%",
            end: "bottom 85%",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: containerRef }
  );

  const menuItems = [
    {
      category: "Artisan Breads",
      name: "Handcrafted Sourdough & Specialty Loaves",
      desc: "Slow-fermented artisan breads baked to order with careful flour blending and natural crust development.",
      badge: "Gluten-Free Option",
    },
    {
      category: "Buns & Bagels",
      name: "Artisan Bagels & Brioche-Style Buns",
      desc: "Golden boiled and baked bagels with classic seed toppings, plus cloud-soft dinner and burger buns.",
      badge: "Sugar-Free Recipe",
    },
    {
      category: "Focaccia & Savory",
      name: "Herb & Olive Olive-Oil Focaccia",
      desc: "Rosemary, roasted cherry tomato, and extra virgin olive oil focaccia baked fresh on your schedule.",
      badge: "Made to Order",
    },
    {
      category: "Pretzels to Churros",
      name: "Bavarian Soft Pretzels & Baked Churros",
      desc: "Coarse sea-salt soft pretzels alongside naturally sweetened baked cinnamon-dusted churro treats.",
      badge: "Custom Dietary",
    },
  ];

  const toggleDiet = (tag: string) => {
    if (dietaryPrefs.includes(tag)) {
      setDietaryPrefs(dietaryPrefs.filter((t) => t !== tag));
    } else {
      setDietaryPrefs([...dietaryPrefs, tag]);
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-stone-200/80 relative overflow-hidden bg-radial from-emerald-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-emerald-700" />
                Venture 04 • Healthy, Custom Baking
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
                cheerys_bakes brings a thoughtful, health-conscious approach to home baking—creating breads and baked treats around real dietary needs, allergies and personal preferences.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {["Breads & Buns", "Focaccia", "Bagels & Pretzels", "Baked Churros"].map((item) => (
                  <div key={item} className="p-3 rounded-xl bg-white border border-stone-200 text-center">
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
                  Request Custom Baking Order
                </a>

                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
                >
                  View Menu Concept
                </a>
              </div>
            </div>

            {/* Right Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 border-2 border-stone-900 shadow-2xl rotate-1">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-emerald-50/50 p-4 flex flex-col justify-between border border-emerald-100">
                  
                  <div className="p-4 rounded-2xl bg-white/90 border border-emerald-200">
                    <span className="text-[11px] font-mono text-emerald-800 uppercase font-bold tracking-wider block">
                      Mindful Kitchen Philosophy
                    </span>
                    <h3 className="font-serif font-bold text-stone-900 text-lg mt-1">
                      Made-To-Order Freshness
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Every batch is prepared exclusively for your request using organic and farmer-sourced ingredients wherever practical.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-mono flex items-center justify-between">
                      <span>✓ Gluten-Free Options</span>
                      <span className="text-emerald-700 font-bold">Standard</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-mono flex items-center justify-between">
                      <span>✓ Sugar-Free Alternatives</span>
                      <span className="text-emerald-700 font-bold">Custom</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-mono flex items-center justify-between">
                      <span>✓ Allergy Considerations</span>
                      <span className="text-emerald-700 font-bold">Tailored</span>
                    </div>
                  </div>

                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-mono font-bold text-stone-900">
                    cheerys_bakes • Thoughtful Home Craft
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Signature Craft & Wheat Drawing Section */}
      <section id="craft-philosophy" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              {/* Hand-drawn Wheat Stem Vector */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <svg viewBox="0 0 200 300" fill="none" className="w-48 h-auto text-emerald-800 overflow-visible">
                  <path
                    ref={wheatStemRef}
                    d="M 100 280 
                       L 100 80 
                       M 100 80 C 80 60, 60 70, 75 90 C 90 100, 100 85, 100 80
                       M 100 80 C 120 60, 140 70, 125 90 C 110 100, 100 85, 100 80
                       M 100 120 C 75 100, 55 110, 70 130 C 85 140, 100 125, 100 120
                       M 100 120 C 125 100, 145 110, 130 130 C 115 140, 100 125, 100 120
                       M 100 160 C 75 140, 55 150, 70 170 C 85 180, 100 165, 100 160
                       M 100 160 C 125 140, 145 150, 130 170 C 115 180, 100 165, 100 160
                       M 100 50 L 100 20"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-mono text-emerald-900 font-bold mt-2">
                  Hand-Drawn Wheat & Grain
                </span>
              </div>

              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-mono font-bold mb-3">
                  <Wheat className="w-3.5 h-3.5 text-emerald-700" />
                  Nourishing Craft
                </div>
                <h3 className="font-serif font-bold text-3xl text-stone-900">
                  Mindful Table & Clean Nutrition
                </h3>
                <p className="text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
                  We believe that eating with dietary requirements should always feel celebratory, never restrictive. Using small-batch methods, wholesome grains, and custom sweetness profiles, our kitchen creates breads, bagels, and treats shaped around your family&apos;s lifestyle.
                </p>
                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs font-mono text-stone-600">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  Organic & farmer-sourced ingredients wherever practical.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Visual Menu Concept */}
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
              A growing range of breads and baked treats tailored to your table and dietary needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
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

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Custom Batch Ordering</span>
                  <a href="#custom-order" className="text-emerald-800 font-bold hover:underline">
                    Order In Batch →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Custom Order Flow (Frontend UX Preview) */}
      <section id="custom-order" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
                Baking Request (Prototype)
              </span>
              <h2 className="text-3xl font-black font-serif text-stone-900 mt-1">
                Request a Custom Bake Order
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Specify your dietary requirements, preferred date, and menu preferences.
              </p>
            </div>

            {orderSent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border-2 border-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">
                  Baking Inquiry Previewed!
                </h3>
                <p className="text-stone-600 text-xs max-w-md mx-auto">
                  This form is currently a <strong>frontend client prototype</strong>. In production, this will route into the cheerys_bakes order calendar.
                </p>
                <button
                  onClick={() => setOrderSent(false)}
                  className="px-6 py-2 rounded-full bg-stone-900 text-white text-xs font-mono font-bold cursor-pointer"
                >
                  Create Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderSent(true);
                }}
                className="space-y-4"
              >
                {/* Dietary requirements tags */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-2">
                    Dietary Requirements & Preferences
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Gluten-Free", "Sugar-Free", "Nut-Free Preference", "Dairy-Free", "Low Carb", "Traditional Artisan"].map((pref) => (
                      <button
                        type="button"
                        key={pref}
                        onClick={() => toggleDiet(pref)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                          dietaryPrefs.includes(pref)
                            ? "bg-emerald-800 text-white border-emerald-800 font-bold shadow-xs"
                            : "bg-white text-stone-700 border-stone-300 hover:border-stone-500"
                        }`}
                      >
                        {dietaryPrefs.includes(pref) ? "✓ " : ""}{pref}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Menu Item
                    </label>
                    <select className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden">
                      <option>Sourdough & Specialty Loaves</option>
                      <option>Artisan Buns & Bagels</option>
                      <option>Herb & Olive Focaccia</option>
                      <option>Pretzels & Churros</option>
                      <option>Custom Celebration Assortment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Quantity / Batch Size
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Loaves + 6 Bagels"
                      className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Preferred Date / Event Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next Saturday Morning"
                      className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Special Notes & Allergy Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about specific allergy concerns, flavor preferences, or custom dietary parameters..."
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-sans focus:border-stone-900 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-emerald-800 text-white font-mono text-sm font-bold hover:bg-emerald-900 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Submit Bake Inquiry (Visual Demo)
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}
