"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { SelectedWorkGallery } from "@/components/gallery/SelectedWorkGallery";
import { Palette, Sparkles, Clock, CheckCircle2, ArrowRight, Paintbrush } from "lucide-react";

export default function CheerysArtPage() {
  const [inquirySent, setInquirySent] = useState(false);

  const artMediums = [
    {
      title: "Canvas Painting",
      icon: Palette,
      desc: "Transform your walls with beautiful and expressive canvas paintings. From elegant decorative artwork to personalized creations, our canvas paintings are made to complement your style and make your space feel truly special.",
      highlights: ["High-texture acrylic & impasto", "Gold leaf accents & rich palettes", "Custom dimensions & stretchers"],
      sampleImg: "/cheerys-art/sample-01.png",
    },
    {
      title: "Resin Painting",
      icon: Sparkles,
      desc: "Discover the beauty of resin art with vibrant colours, glossy finishes, and unique artistic patterns. Each resin painting is carefully handcrafted, making every piece one of a kind.",
      highlights: ["Glossy glass-like reflections", "Fluid celestial & cosmic depth", "Durable archival pigments"],
      sampleImg: "/cheerys-art/sample-02.png",
    },
    {
      title: "Clock Dial Painting",
      icon: Clock,
      desc: "Turn an everyday clock into a beautiful work of art. Our hand-painted clock dials combine functionality with creativity, creating statement pieces that add an artistic touch to any interior.",
      highlights: ["Functional timepieces meet fine art", "Bespoke colorways for your room", "Statement centerpieces for home & office"],
      sampleImg: "/cheerys-art/sample-03.png",
    },
  ];

  const valueProps = [
    "Handcrafted and creative artwork",
    "Unique designs and artistic concepts",
    "Customized paintings based on your preferences",
    "Careful attention to detail",
    "Quality materials and finishing",
    "Perfect for home and office décor",
    "Ideal for gifts and special occasions",
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Intro Hero */}
      <section className="py-16 md:py-24 border-b border-stone-200/80 relative overflow-hidden bg-radial from-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-900 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-purple-600" />
                Venture 02 • Fine Art & Painting Work
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
                cheerys_art
              </h1>

              <div className="mt-1">
                <ScribbleUnderline className="text-purple-600 w-56 sm:w-80" />
              </div>

              <p className="mt-6 text-xl sm:text-2xl font-serif italic text-purple-950 leading-snug">
                &ldquo;Art That Adds Life to Your Space.&rdquo;
              </p>

              <p className="mt-4 text-stone-700 text-base sm:text-lg max-w-xl leading-relaxed">
                Welcome to Cheerys Art & Painting Work, where creativity meets craftsmanship. We create unique, handcrafted artworks designed to bring colour, beauty, and personality into your home, office, and special spaces.
              </p>

              {/* Mediums tags */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Canvas Painting", "Resin Painting", "Clock Dial Painting", "Custom Wall Art", "Made to Order"].map((pill) => (
                  <span
                    key={pill}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-mono font-medium shadow-xs"
                  >
                    ✓ {pill}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#artworks-grid"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white font-mono text-sm font-bold hover:bg-purple-700 transition-colors shadow-lg group"
                >
                  <Paintbrush className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
                  Explore Artworks & Mediums
                </a>

                <a
                  href="#custom-inquiry"
                  className="inline-flex items-center gap-1.5 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
                >
                  Request Commissioned Painting
                </a>
              </div>
            </div>

            {/* Right Hero Artwork Frame */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-5 border-2 border-stone-800 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[3/4] rounded-2xl bg-stone-950 p-2 overflow-hidden border border-stone-200">
                  <Image
                    src="/cheerys-art/sample-01.png"
                    alt="Radiant Star Burst Canvas by Cheery"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-stone-700 px-1">
                  <span className="font-bold">Original Canvas by Cheery</span>
                  <span className="text-purple-700 font-bold">Textured Acrylic</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Art Mediums Section */}
      <section id="artworks-grid" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold">
              Our Artworks
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
              Three Distinct Mediums of Expression
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Every creation is made with attention to detail, creativity, and a personal touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artMediums.map((med) => {
              const Icon = med.icon;
              return (
                <div
                  key={med.title}
                  className="bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border-2 border-stone-800 hover:border-purple-800 transition-all flex flex-col justify-between shadow-sm hover:shadow-xl group"
                >
                  <div>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-900 mb-6 border border-stone-200">
                      <Image
                        src={med.sampleImg}
                        alt={med.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-2xl font-bold font-serif text-stone-900 mb-2">
                      {med.title}
                    </h3>

                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {med.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-stone-200/80">
                      {med.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs font-mono text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-500">Made to order</span>
                    <a
                      href="#custom-inquiry"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-purple-800 group-hover:translate-x-1 transition-transform"
                    >
                      Inquire Piece <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Cheerys */}
      <section className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold">
                Craftsmanship & Care
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
                Why Choose Cheerys Art?
              </h2>
              <p className="mt-4 text-stone-600 text-base leading-relaxed">
                Our passion is turning simple ideas into eye-catching pieces of art. Whether it is a vibrant canvas, a stunning resin artwork, or a beautifully painted clock dial, Cheerys brings creativity into everyday life.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {valueProps.map((prop) => (
                  <div key={prop} className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                    <span className="text-xs font-mono text-stone-800 font-medium">{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-stone-800 relative">
                <span className="text-xs font-mono tracking-widest uppercase text-purple-400 block mb-3">
                  Our Promise
                </span>
                <blockquote className="text-2xl sm:text-3xl font-serif italic text-white leading-snug">
                  &ldquo;At Cheerys Art & Painting Work, we believe that art is more than decoration—it is a way to express emotions, memories, and individuality. We put creativity and care into every piece so that each artwork becomes something you can proudly display and cherish.&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>Let Your Space Tell a Story</span>
                  <span className="text-purple-300 font-bold">Cheery Thomas</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Curated Gallery Section */}
      <SelectedWorkGallery
        defaultFilter="cheerys-art"
        showHeading={true}
      />

      {/* Custom Painting Inquiry Form */}
      <section id="custom-inquiry" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold">
                Custom Painting Inquiry (Prototype)
              </span>
              <h2 className="text-3xl font-black font-serif text-stone-900 mt-1">
                Commission an Art Piece for Your Space
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Share your desired dimensions, preferred medium, color scheme, or wall space photos.
              </p>
            </div>

            {inquirySent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mx-auto border-2 border-purple-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">
                  Art Inquiry Received!
                </h3>
                <p className="text-stone-600 text-xs max-w-md mx-auto">
                  This form is currently a <strong>frontend client prototype</strong>. In production, this will route directly into Cheery&apos;s custom art commissions queue.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="px-6 py-2 rounded-full bg-stone-900 text-white text-xs font-mono font-bold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Art Medium
                    </label>
                    <select className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden">
                      <option>Canvas Painting (Abstract / Textured)</option>
                      <option>Resin Art (Fluid / Celestial)</option>
                      <option>Clock Dial Statement Painting</option>
                      <option>Faith & Scripture Fine Art</option>
                      <option>Custom Wall Sizing & Multi-Panel</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Approximate Dimensions
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 24x36 inches or Wall Size"
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
                      placeholder="e.g. Rachel Mathew"
                      className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rachel@example.com"
                      className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-1">
                    Space Details & Color Preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the space (living room, office lobby, bedroom), preferred color themes, mood, or custom memories..."
                    className="w-full p-2.5 rounded-xl border border-stone-300 bg-white text-xs font-sans focus:border-stone-900 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-purple-800 text-white font-mono text-sm font-bold hover:bg-purple-900 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Submit Painting Inquiry (Visual Demo)
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}
