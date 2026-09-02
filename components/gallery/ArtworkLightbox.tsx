"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  initialIndex?: number | null;
  onClose: () => void;
}

export function ArtworkLightbox({ items, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(initialIndex ?? null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#faf8f5] text-stone-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-stone-800 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/10 hover:bg-stone-900 text-stone-900 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image preview area */}
        <div className="relative md:w-3/5 bg-stone-100 flex items-center justify-center p-6 min-h-[320px] md:min-h-[500px]">
          <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center">
            <Image
              src={current.imageSrc}
              alt={current.title}
              width={800}
              height={1000}
              className="object-contain max-h-[70vh] w-auto rounded-lg shadow-sm"
              priority
            />
          </div>

          {/* Nav arrows overlay */}
          {items.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous artwork"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md border border-stone-200 transition-transform active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next artwork"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md border border-stone-200 transition-transform active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Details area */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-warm-white">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-0.5 text-xs font-mono font-medium uppercase tracking-wider bg-stone-900 text-stone-100 rounded-full">
                {current.categoryLabel}
              </span>
              <span className="text-xs text-stone-500 font-mono">
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-stone-900 mb-3 font-serif">
              {current.title}
            </h3>

            <p className="text-stone-600 leading-relaxed text-sm mb-6">
              {current.caption}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200"
                >
                  <Tag className="w-3 h-3 text-stone-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
            <span>Cheerys Creative Culture Archive</span>
            <span className="italic">Original art by Cheery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
