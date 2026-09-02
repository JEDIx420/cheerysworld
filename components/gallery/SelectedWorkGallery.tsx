"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/gallery";
import { ArtworkLightbox } from "./ArtworkLightbox";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { Eye, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SelectedWorkGallery({
  defaultFilter = "all",
  showHeading = true,
  limit,
}: {
  defaultFilter?: string;
  showHeading?: boolean;
  limit?: number;
}) {
  const [filter, setFilter] = useState<string>(defaultFilter);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filterOptions = [
    { id: "all", label: "All Works" },
    { id: "cheery-fic", label: "cheery_fic (Caricatures)" },
    { id: "cheerys-tees", label: "cheerys_tees (Apparel)" },
    { id: "anim-daddy", label: "anim_daddy (Mentoring)" },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-20 md:py-28 bg-[#fdfbf7] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono tracking-widest text-stone-500 uppercase">
                  Section 04 • The Visual Archive
                </span>
                <SparkleDoodle className="text-amber-600" size={16} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 font-serif">
                Selected Work
              </h2>
              <ScribbleUnderline className="text-amber-500 mt-2" width={180} />
              <p className="mt-4 text-stone-600 max-w-xl text-base md:text-lg">
                An editorial showcase across caricatures, illustrated apparel, concept art, and animation studies.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setFilter(opt.id)}
                  className={`px-4 py-2 text-xs md:text-sm font-mono rounded-full border transition-all cursor-pointer ${
                    filter === opt.id
                      ? "bg-stone-900 text-stone-50 border-stone-900 shadow-sm"
                      : "bg-white text-stone-700 border-stone-300 hover:border-stone-900 hover:bg-stone-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(idx)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-stone-900 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] bg-stone-100/70 p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay hover cue */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900/90 text-stone-100 text-xs font-mono font-medium shadow-lg backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5" /> View Artwork
                  </span>
                </div>

                {/* Top category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-md bg-white/90 text-stone-900 shadow-xs border border-stone-200 backdrop-blur-xs">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Caption details */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-stone-100">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-lg group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400">
                    {item.tags[0]} • {item.tags[1] || "Artwork"}
                  </span>
                  <span className="inline-flex items-center text-xs font-mono font-semibold text-stone-900 group-hover:translate-x-0.5 transition-transform">
                    Inspect <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for full collection */}
        {limit && (
          <div className="mt-14 text-center">
            <Link
              href="/cheery-fic"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-stone-100 font-mono text-sm hover:bg-amber-600 transition-colors shadow-md"
            >
              Explore Full Creative Archives <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeItemIndex !== null && (
        <ArtworkLightbox
          items={displayItems}
          initialIndex={activeItemIndex}
          onClose={() => setActiveItemIndex(null)}
        />
      )}
    </section>
  );
}
