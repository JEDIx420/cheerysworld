import React from "react";
import { ScribbleUnderline, SparkleDoodle, CheerySmileDoodle } from "../doodles/DoodleIcons";

export function CreativeCultureSection() {
  return (
    <section className="py-24 md:py-32 bg-stone-950 text-stone-100 relative overflow-hidden border-b border-stone-800">
      
      {/* Background large decorative elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-mono uppercase tracking-widest mb-8">
          <SparkleDoodle size={14} className="text-amber-400" />
          The Creative Umbrella
        </div>

        {/* Big memorable typographic words */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-serif tracking-tight leading-[0.95] text-white">
            CREATE.<br />
            TEACH.<br />
            PERSONALISE.<br />
            NOURISH.
          </h2>

          <div className="flex justify-center mt-6">
            <ScribbleUnderline className="text-amber-500 w-56 sm:w-80" />
          </div>

          <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-300 max-w-2xl mx-auto">
            &ldquo;Four ventures. One creative spirit.&rdquo;
          </p>

          <p className="mt-6 text-stone-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Cheerys is a living culture built around the things that matter most: imagination, learning, personal expression and well-being.
          </p>

          {/* Division tags ribbon */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 font-mono text-xs sm:text-sm">
            <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
              cheery_fic
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
              anim_daddy
            </span>
            <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300">
              cheerys_tees
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              cheerys_bakes
            </span>
          </div>

          {/* Cheery signature card bottom */}
          <div className="mt-14 inline-flex items-center gap-4 p-4 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-stone-950 flex items-center justify-center">
              <CheerySmileDoodle size={28} className="text-amber-400" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-mono text-stone-400">
                A creative culture by Cheery
              </span>
              <span className="block text-sm font-serif font-bold text-white">
                CHEERYS STUDIO
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
