"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { buildCheeryWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const pathname = usePathname();

  // Contextual prefilled messages per user spec
  const getContextMessage = (path: string): string => {
    if (path.startsWith("/cheery-fic")) {
      return "Hi Cheery, I’d like to enquire about a caricature.";
    }
    if (path.startsWith("/cheerys-art")) {
      return "Hi Cheery, I’d like to enquire about a custom artwork.";
    }
    if (path.startsWith("/anim-daddy")) {
      return "Hi Cheery, I’d like to know more about AnimDaddy mentoring.";
    }
    if (path.startsWith("/cheerys-tees")) {
      return "Hi Cheery, I’d like to enquire about a custom apparel order.";
    }
    if (path.startsWith("/cheerys-bakes")) {
      return "Hi Cheery, I’d like to enquire about a custom bake.";
    }
    return "Hi Cheery, I found Cheerys World and would like to know more.";
  };

  const message = getContextMessage(pathname || "/");
  const href = buildCheeryWhatsAppUrl(message);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Cheery on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-stone-900 hover:bg-stone-950 text-stone-100 pl-3.5 pr-4 py-3 rounded-full border-2 border-stone-800 shadow-2xl hover:shadow-stone-900/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
      >
        {/* Chat icon with WhatsApp green live status dot */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-stone-100 group-hover:text-emerald-400 transition-colors" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-stone-900" />
        </div>

        {/* Text label: always visible on desktop, compact on small mobile */}
        <span className="font-mono text-xs font-semibold tracking-wide text-stone-200 group-hover:text-white hidden sm:inline-block">
          Chat with Cheery
        </span>

        {/* Subtle hover prompt for mobile tap target */}
        <span className="sr-only">Open WhatsApp chat with Cheery</span>
      </a>
    </aside>
  );
}
