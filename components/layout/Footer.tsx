import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheerySmileDoodle } from "../doodles/DoodleIcons";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Footer() {
  const divisions = [
    { name: "cheery_fic", href: "/cheery-fic", desc: "Caricatures, characters & creative products" },
    { name: "cheerys_art", href: "/cheerys-art", desc: "Canvas, resin & clock dial painting work" },
    { name: "anim_daddy", href: "/anim-daddy", desc: "Animation & art mentoring" },
    { name: "cheerys_tees", href: "/cheerys-tees", desc: "Personalised apparel & merchandise" },
    { name: "cheerys_bakes", href: "/cheerys-bakes", desc: "Nutritious • gluten-free • sugar-free" },
  ];

  return (
    <footer className="bg-stone-950 text-stone-100 pt-20 pb-12 border-t-2 border-stone-800 relative overflow-hidden">
      {/* Background sketch mark accent */}
      <div className="absolute right-10 bottom-10 opacity-5 pointer-events-none select-none">
        <CheerySmileDoodle size={320} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Brand Vision Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center">
                  <CheerySmileDoodle className="text-amber-400" size={24} />
                </div>
                <span className="text-2xl font-black font-serif tracking-tight text-white">
                  CHEERYS
                </span>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
                One name. Five creative expressions. One unified culture.
                Bringing together imagination, fine art, mentorship, personal style, and mindful nourishment under one creative spirit.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-28 h-14 bg-white/5 rounded-lg border border-stone-800 p-1 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/brand/cheery-signature-clean.jpg"
                    alt="Cheery original signature"
                    width={120}
                    height={50}
                    className="object-contain invert brightness-90"
                  />
                </div>
                <div className="text-[11px] font-mono text-stone-400 leading-tight">
                  <span className="text-stone-200 block font-bold">Cheery</span>
                  Founder • Artist • Animator • Mentor
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs font-mono text-stone-500">
              CREATE • PAINT • TEACH • PERSONALISE • NOURISH
            </div>
          </div>

          {/* Divisions Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-6 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              The Creative Divisions
            </h4>
            <ul className="space-y-3.5">
              {divisions.map((div) => (
                <li key={div.name}>
                  <Link
                    href={div.href}
                    className="group block p-2 -mx-2 rounded-lg hover:bg-stone-900/80 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">
                        {div.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <span className="text-xs text-stone-400 block mt-0.5">
                      {div.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Information */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">
              World & Studio
            </h4>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <Link href="/about" className="text-stone-300 hover:text-white transition-colors">
                  Meet Cheery
                </Link>
              </li>
              <li>
                <Link href="/cheerys-art" className="text-stone-300 hover:text-white transition-colors">
                  Art & Painting Gallery
                </Link>
              </li>
              <li>
                <Link href="/cheery-fic#commission" className="text-stone-300 hover:text-white transition-colors">
                  Commission Custom Art
                </Link>
              </li>
              <li>
                <Link href="/anim-daddy#curriculum" className="text-stone-300 hover:text-white transition-colors">
                  Animation Curriculum
                </Link>
              </li>
              <li>
                <Link href="/cheerys-tees" className="text-stone-300 hover:text-white transition-colors">
                  Custom Apparel Lookbook
                </Link>
              </li>
              <li>
                <Link href="/cheerys-bakes" className="text-stone-300 hover:text-white transition-colors">
                  Baking Inquiry Form
                </Link>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-400">
              <span className="font-mono font-semibold text-stone-200 block mb-1">
                Client Visual Prototype
              </span>
              Designed exclusively for Cheerys review phase.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} CHEERYS. A creative culture by Cheery. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Cheery Signature Studio</span>
            <span>Handcrafted Frontend</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
