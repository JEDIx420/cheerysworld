"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScribbleUnderline, SparkleDoodle } from "@/components/doodles/DoodleIcons";
import { ProductPreviewModal, ProductItem } from "./ProductPreviewModal";
import { ShoppingBag, Shirt, ArrowRight, Sparkles, Printer } from "lucide-react";

export default function CheerysTeesPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: "tees-living-water-blk",
      name: "Rivers of Living Water Tee",
      subtitle: "Textured acrylic artwork with John 10:38 scripture back print",
      imageSrc: "/cheerys-tees/page-08.png",
      category: "Faith & Scripture Collection",
      scriptureReference: "John 10:38",
      colors: ["Black", "Charcoal", "Deep Navy"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      description:
        "Everyday apparel transformed into fine art. Featuring hand-painted rich textures and metallic accents paired with bold scriptural testimony.",
    },
    {
      id: "tees-living-water-wht",
      name: "Living Water Canvas Tee (White)",
      subtitle: "Crisp white minimalist front chest and back statement print",
      imageSrc: "/cheerys-tees/page-09.png",
      category: "Faith & Scripture Collection",
      scriptureReference: "John 10:38",
      colors: ["White", "Off-White", "Cream"],
      sizes: ["S", "M", "L", "XL"],
      description:
        "High-contrast color pathway design rendered on premium heavyweight combed cotton.",
    },
    {
      id: "tees-lion-of-judah",
      name: "Lion of Judah Graphic Tee",
      subtitle: "Vibrant multi-hued illustrated lion portrait with back statement",
      imageSrc: "/cheerys-tees/page-02.png",
      category: "Illustrated Series",
      scriptureReference: "It Is My Faith",
      colors: ["Black", "Vintage Wash"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      description:
        "Explosive spectrum colors portraying the majesty and strength of the Lion of Judah.",
    },
    {
      id: "tees-fearfully-made",
      name: "Fearfully & Wonderfully Made",
      subtitle: "Organic fingerprint sculpted typography graphic tee",
      imageSrc: "/cheerys-tees/page-11.png",
      category: "Typography & Streetwear",
      scriptureReference: "Psalm 139:14",
      colors: ["Black", "Pitch Black"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      description:
        "Intricate fingerprint pattern interwoven with Psalm 139:14 lettering for contemporary streetwear expression.",
    },
    {
      id: "tees-hypernikomen",
      name: "Hypernikomen — More Than Conquerors",
      subtitle: "Clean typographic minimalist street apparel",
      imageSrc: "/cheerys-tees/page-12.png",
      category: "Streetwear & Identity",
      scriptureReference: "Romans 8:37",
      colors: ["Black", "Stone", "Sage"],
      sizes: ["S", "M", "L", "XL"],
      description:
        "Modern front chest identity lettering with bold 'More Than Conquerors' back spine typographic layout.",
    },
    {
      id: "tees-hole-in-soul",
      name: "Only Jesus Can Fill The Hole In Your Soul",
      subtitle: "Dramatic hand-drawn stone well & torn canvas composition",
      imageSrc: "/cheerys-tees/page-01.png",
      category: "Fine Art Illustration",
      scriptureReference: "Soul Testimony",
      colors: ["Vintage Black", "Washed Charcoal"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      description:
        "Deep metaphorical illustration capturing spiritual transformation, light, and redemption.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#faf8f5]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-stone-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-950 text-xs font-mono font-bold uppercase tracking-wider mb-6">
                <SparkleDoodle size={14} className="text-orange-700" />
                Venture 03 • Apparel & Merchandise
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-stone-950">
                cheerys_tees
              </h1>

              <div className="mt-1">
                <ScribbleUnderline className="text-orange-700 w-56 sm:w-80" />
              </div>

              <p className="mt-6 text-xl sm:text-2xl font-serif italic text-orange-950 leading-snug">
                &ldquo;Everyday apparel becomes a canvas for personality, faith, identity, celebration and self-expression.&rdquo;
              </p>

              <p className="mt-4 text-stone-700 text-base sm:text-lg max-w-xl leading-relaxed">
                Giving T-shirts and merchandise a face-lift through customisable prints and artistic designs that tell your personal story.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Custom Prints", "Faith & Scripture", "Streetwear Typography", "Events & Teams", "Made to Order"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-mono"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#collection"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white font-mono text-sm font-bold hover:bg-orange-700 transition-colors shadow-lg"
                >
                  <Shirt className="w-4 h-4 text-orange-400" />
                  Explore Lookbook & Designs
                </a>

                <Link
                  href="/cart"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Cart (Preview Mode)
                </Link>
              </div>
            </div>

            {/* Right Hero Preview */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-5 border-2 border-stone-900 shadow-2xl rotate-1">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 p-2 border border-stone-200">
                  <Image
                    src="/cheerys-tees/page-08.png"
                    alt="Cheerys Tees Living Water Apparel Preview"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-mono font-bold text-stone-900">
                    Artistic Print on Premium Heavyweight Cotton
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Signature Feature: The Garment Screen-Print Craft */}
      <section id="print-process" className="py-20 md:py-28 bg-white border-b border-stone-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-700 font-bold">
              Craft & Production
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
              From Artist Sketch to Garment Print
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              The hand-drawn line forms the shirt silhouette while textured pigments reveal Cheery&apos;s custom artwork.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#faf8f5] rounded-3xl border-2 border-stone-900 p-8 sm:p-12 shadow-2xl relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Drawn T-Shirt Vector SVG */}
              <div className="flex flex-col items-center justify-center p-4">
                <svg viewBox="0 0 300 320" fill="none" className="w-64 h-auto text-stone-900 overflow-visible">
                  <path
                    d="M 100 30 
                       C 120 45, 180 45, 200 30 
                       L 280 80 
                       L 240 140 
                       L 210 120 
                       L 210 290 
                       L 90 290 
                       L 90 120 
                       L 60 140 
                       L 20 80 Z"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Collar curve */}
                  <path
                    d="M 100 30 C 120 60, 180 60, 200 30"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs font-mono text-stone-500 mt-3 font-semibold">
                  Hand-Drawn Apparel Silhouette
                </span>
              </div>

              {/* Garment Details Narrative */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-mono font-bold mb-3">
                  <Printer className="w-3.5 h-3.5 text-orange-700" />
                  Premium Screen & Digital Print
                </div>
                <h3 className="font-serif font-bold text-2xl text-stone-900">
                  Wearable Narrative
                </h3>
                <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                  We treat every T-shirt as a bespoke canvas. Hand-painted textures, Greek and Hebrew scriptural typography, and vibrant caricature expressions are fused into rich cotton fibers designed for longevity.
                </p>
                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs font-mono text-stone-700">
                  <Sparkles className="w-4 h-4 text-orange-700" />
                  Customized batch runs for teams, fellowships & events.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Product & Lookbook Gallery */}
      <section id="collection" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-800 font-bold">
              Design Collections
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-serif text-stone-900 mt-2">
              Curated Apparel Lookbook
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              Click any piece to test the client-side color, size, and detail preview modal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className="group bg-white rounded-3xl border border-stone-200 hover:border-stone-900 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden p-3 border border-stone-100 flex items-center justify-center">
                    <Image
                      src={p.imageSrc}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/95 text-stone-900 border border-stone-200 shadow-xs font-bold">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-serif font-bold text-stone-900 text-xl group-hover:text-orange-800 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-600 font-semibold">
                    Price on Request
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-orange-800 group-hover:translate-x-0.5 transition-transform">
                    Preview Piece <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Custom Run / Bulk Order Callout */}
      <section className="py-20 bg-stone-900 text-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-orange-400 block mb-3">
            Customised Batches & Events
          </span>
          <h3 className="text-3xl sm:text-4xl font-black font-serif text-white mb-4">
            Custom Prints for Your Team or Celebration
          </h3>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            From church fellowships and sports teams to milestone family reunions, we design tailored artwork printed on top-tier apparel.
          </p>
          <button
            onClick={() => setSelectedProduct(products[0])}
            className="px-8 py-4 rounded-full bg-orange-700 text-white font-mono font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg cursor-pointer"
          >
            Custom Order Preview
          </button>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductPreviewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </main>
  );
}
