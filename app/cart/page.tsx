"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, Sparkles, AlertCircle } from "lucide-react";
import { ScribbleUnderline } from "@/components/doodles/DoodleIcons";

export default function CartPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Client Visual Preview
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-serif text-stone-900">
            Your Creative Bag
          </h1>
          <div className="flex justify-center mt-1">
            <ScribbleUnderline className="text-amber-500" width={180} />
          </div>
        </div>

        {/* Prototype Explanation Callout */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 sm:p-8 mb-8 text-amber-950 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-950">
                Frontend-Only Prototype State
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 mt-1 leading-relaxed">
                As per Phase 1 design requirements, database persistence, payment gateways, and checkout API processing are intentionally omitted for client visual review. Real commerce, user accounts, and checkout workflows will be built in the backend phase.
              </p>
            </div>
          </div>
        </div>

        {/* Empty state visual preview */}
        <div className="bg-white rounded-3xl border-2 border-stone-800 p-10 sm:p-14 text-center shadow-xl">
          <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-800 border border-stone-300">
            <ShoppingBag className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-bold font-serif text-stone-900">
            Your bag is currently empty
          </h2>

          <p className="text-stone-600 text-sm max-w-md mx-auto mt-2 mb-8">
            Explore Cheery&apos;s caricatures, custom apparel lookbook, or baking inquiries to assemble your order.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/cheerys-tees"
              className="px-6 py-3 rounded-full bg-stone-900 text-white font-mono text-xs font-bold hover:bg-orange-700 transition-colors shadow-sm"
            >
              Browse cheerys_tees
            </Link>
            <Link
              href="/cheery-fic"
              className="px-6 py-3 rounded-full bg-white border border-stone-300 text-stone-800 font-mono text-xs font-semibold hover:bg-stone-50"
            >
              Commission Caricature
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-700 hover:text-stone-950"
          >
            <ArrowLeft className="w-4 h-4" /> Back to CHEERYS Home
          </Link>
        </div>

      </div>
    </main>
  );
}
