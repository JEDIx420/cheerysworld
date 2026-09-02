"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string;
  category: string;
  scriptureReference?: string;
  colors: string[];
  sizes: string[];
  description: string;
}

export function ProductPreviewModal({
  product,
  onClose,
}: {
  product: ProductItem | null;
  onClose: () => void;
}) {
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || "Black");
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[1] || "M");
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#faf8f5] text-stone-900 rounded-3xl border-2 border-stone-800 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-200/80 hover:bg-stone-900 text-stone-800 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Stage */}
        <div className="md:w-1/2 bg-stone-100 p-6 flex items-center justify-center relative min-h-[300px]">
          <div className="relative w-full h-full max-h-[60vh] aspect-[3/4]">
            <Image
              src={product.imageSrc}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Product Details & Selectors */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 text-[11px] font-mono uppercase tracking-wider rounded-full bg-orange-100 text-orange-950 border border-orange-200">
                {product.category}
              </span>
              {product.scriptureReference && (
                <span className="text-xs font-mono text-stone-500">
                  {product.scriptureReference}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              {product.name}
            </h3>

            <p className="text-stone-500 text-xs sm:text-sm font-serif italic mt-1 mb-4">
              {product.subtitle}
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mb-4">
              <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-2">
                Select Color: <span className="font-normal text-stone-500">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                      selectedColor === c
                        ? "border-stone-900 bg-stone-900 text-white font-bold shadow-xs"
                        : "border-stone-300 bg-white text-stone-700 hover:border-stone-500"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <label className="block text-xs font-mono font-bold uppercase text-stone-700 mb-2">
                Select Size: <span className="font-normal text-stone-500">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-10 h-10 rounded-lg border text-xs font-mono flex items-center justify-center transition-all cursor-pointer ${
                      selectedSize === s
                        ? "border-stone-900 bg-stone-900 text-white font-bold shadow-xs"
                        : "border-stone-300 bg-white text-stone-700 hover:border-stone-500"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price note */}
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-600 mb-6">
              <strong>Price on Request</strong> • Custom batch runs & individual customized prints.
            </div>
          </div>

          <div>
            {addedNotice && (
              <div className="mb-3 p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-xs font-mono text-orange-900 text-center animate-in fade-in">
                ✓ Added to Client Cart Preview!
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 rounded-2xl bg-orange-700 text-white font-mono text-sm font-bold hover:bg-orange-800 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag (Preview Demo)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
