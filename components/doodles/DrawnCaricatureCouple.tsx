"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";

export function DrawnCaricatureCouple({
  className = "w-full max-w-md h-auto text-stone-900",
}: {
  className?: string;
}) {
  const containerRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const paths = containerRef.current.querySelectorAll("path");

      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Sequential drawing stages:
      // 1. Man's Head & Afro Curls
      // 2. Woman's Flowing Hair & Face
      // 3. Facial features (glasses, smiles, bindu/jewelry)
      // 4. Clapsed Hands & Outfits
      // 5. Typography lettering "IRENE & PHILIP • 1 CORINTHIANS 13 LOVE"
      tl.to(".draw-afro", {
        strokeDashoffset: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
      })
        .to(
          ".draw-woman-hair",
          {
            strokeDashoffset: 0,
            duration: 1.4,
            stagger: 0.15,
            ease: "power2.inOut",
          },
          "-=0.8"
        )
        .to(
          ".draw-faces",
          {
            strokeDashoffset: 0,
            duration: 1.0,
            stagger: 0.08,
            ease: "power1.out",
          },
          "-=0.6"
        )
        .to(
          ".draw-bodies",
          {
            strokeDashoffset: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          ".draw-type",
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.in",
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 500 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
      aria-label="Irene and Philip line art illustration drawn by Cheery"
    >
      {/* 1. Header Typography */}
      <text
        x="250"
        y="50"
        textAnchor="middle"
        className="draw-type font-serif font-bold text-xl fill-stone-900 tracking-widest opacity-0"
      >
        IRENE &amp; PHILIP
      </text>

      {/* 2. Philip's Afro Curls */}
      <path
        className="draw-afro"
        d="M270 180 C 260 140, 290 100, 320 90 C 350 80, 380 95, 390 120 C 405 150, 395 190, 375 210"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="draw-afro"
        d="M290 120 C 300 110, 320 115, 325 130 M 340 105 C 360 105, 365 125, 355 140 M 310 150 C 320 140, 335 145, 330 160"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Philip's Face & Glasses */}
      <path
        className="draw-faces"
        d="M280 200 C 275 240, 310 270, 345 260 C 375 250, 375 210, 370 200"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Glasses */}
      <path
        className="draw-faces"
        d="M285 205 L 320 205 L 320 230 L 285 230 Z M 325 205 L 360 205 L 360 230 L 325 230 Z M 320 215 L 325 215"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Smile & Eyes */}
      <path
        className="draw-faces"
        d="M300 217 A 1.5 1.5 0 1 1 299.9 217 M 342 217 A 1.5 1.5 0 1 1 341.9 217"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="draw-faces"
        d="M305 242 C 320 255, 340 255, 350 242"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* 3. Irene's Flowing Hair */}
      <path
        className="draw-woman-hair"
        d="M180 200 C 140 210, 110 320, 115 450 C 118 520, 140 560, 160 580"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="draw-woman-hair"
        d="M245 220 C 260 260, 265 360, 240 480 C 230 530, 210 560, 195 590"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="draw-woman-hair"
        d="M150 280 C 130 380, 135 480, 170 540 M 175 250 C 160 350, 180 440, 185 510"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Irene's Face & Jewelry */}
      <path
        className="draw-faces"
        d="M180 230 C 175 270, 205 310, 230 295 C 245 285, 250 250, 245 225"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Eyes & Smile & Bindi */}
      <path
        className="draw-faces"
        d="M195 240 C 202 235, 210 240, 208 245 M 225 240 C 232 235, 240 240, 238 245"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="draw-faces"
        d="M217 228 A 1 1 0 1 1 216.9 228"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="draw-faces"
        d="M200 270 C 212 282, 228 282, 235 270"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Necklace */}
      <path
        className="draw-faces"
        d="M195 320 C 210 335, 225 335, 240 320"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />

      {/* 4. Bodies & Joined Hands */}
      <path
        className="draw-bodies"
        d="M150 360 C 100 420, 90 510, 110 590"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="draw-bodies"
        d="M370 280 C 420 340, 440 440, 430 550"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Philip's Shirt & Collar */}
      <path
        className="draw-bodies"
        d="M290 275 L 320 320 L 370 280 M 320 320 L 320 540"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Clapsed Hands */}
      <path
        className="draw-bodies"
        d="M230 480 C 240 510, 280 540, 300 520 C 315 500, 300 460, 275 460 C 255 460, 240 470, 230 480 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Watch on Philip's Wrist */}
      <path
        className="draw-bodies"
        d="M315 520 A 8 8 0 1 1 314.9 520"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* 5. Footer Lettering & Scripture */}
      <text
        x="250"
        y="640"
        textAnchor="middle"
        className="draw-type font-mono font-bold text-sm fill-stone-800 tracking-widest opacity-0"
      >
        1 CORINTHIANS 13
      </text>
      <text
        x="250"
        y="670"
        textAnchor="middle"
        className="draw-type font-serif font-black text-2xl fill-stone-900 tracking-widest opacity-0"
      >
        LOVE
      </text>
    </svg>
  );
}
