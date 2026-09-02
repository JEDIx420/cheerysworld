"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";

export function DrawnSelfPortrait({
  className = "w-48 sm:w-64 h-auto text-stone-900",
  triggerOnScroll = true,
}: {
  className?: string;
  triggerOnScroll?: boolean;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!svgRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const paths = svgRef.current.querySelectorAll("path");

      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, {
          strokeDasharray: len,
          strokeDashoffset: len,
          opacity: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: triggerOnScroll
          ? {
              trigger: svgRef.current,
              start: "top 80%",
              once: true,
            }
          : undefined,
      });

      // Sequential artistic drawing timeline:
      // 1. C-h-e-e-r-y-'s lettering
      // 2. Main horizontal baseline sweep
      // 3. Glasses & Nose
      // 4. Smile & Ears
      // 5. Beard zigzag strokes
      tl.to(".cheery-lettering", {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
      })
        .to(
          ".cheery-baseline",
          {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          ".cheery-face-features",
          {
            strokeDashoffset: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          ".cheery-beard",
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "rough",
          },
          "-=0.2"
        );
    },
    { scope: svgRef }
  );

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
      aria-label="Cheery's hand-drawn self-portrait and signature"
    >
      {/* 1. Lettering "Cheery's" */}
      {/* 'C' */}
      <path
        className="cheery-lettering"
        d="M100 240 C 60 220, 50 160, 95 140 C 120 130, 125 155, 115 170 C 105 185, 80 200, 70 230 C 65 245, 75 255, 95 245"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 'h' */}
      <path
        className="cheery-lettering"
        d="M115 130 L 105 235 M 105 190 C 115 165, 140 165, 145 190 L 140 230"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 'e' */}
      <path
        className="cheery-lettering"
        d="M150 205 C 175 200, 175 175, 160 175 C 145 175, 145 220, 165 220 C 175 220, 180 210, 185 200"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 'e' second */}
      <path
        className="cheery-lettering"
        d="M190 200 C 215 195, 215 170, 200 170 C 185 170, 185 215, 205 215 C 215 215, 220 205, 225 195"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 'r' */}
      <path
        className="cheery-lettering"
        d="M230 185 L 225 215 M 227 195 C 235 180, 255 180, 260 190"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* 'y' */}
      <path
        className="cheery-lettering"
        d="M270 170 L 265 210 C 265 225, 280 225, 285 200 L 295 160 M 285 205 C 275 240, 260 270, 240 295"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Apostrophe 's' */}
      <path
        className="cheery-lettering"
        d="M305 135 L 315 125 M 325 135 C 320 120, 335 110, 345 120 C 355 130, 330 140, 335 155 C 340 165, 360 160, 365 145"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* 2. Main baseline underline cutting diagonally across the face */}
      <path
        className="cheery-baseline"
        d="M115 295 L 390 150"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
      />

      {/* 3. Face & Glasses */}
      {/* Left Glass */}
      <path
        className="cheery-face-features"
        d="M200 275 C 190 250, 225 240, 235 265 C 245 290, 210 300, 200 275 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Glass */}
      <path
        className="cheery-face-features"
        d="M245 255 C 235 230, 270 220, 280 245 C 290 270, 255 280, 245 255 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pupils / Eyes Dots */}
      <path
        className="cheery-face-features"
        d="M217 268 A 2 2 0 1 1 216.9 268 M 262 248 A 2 2 0 1 1 261.9 248"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Left Ear */}
      <path
        className="cheery-face-features"
        d="M185 265 C 175 265, 175 285, 185 285"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Right Ear */}
      <path
        className="cheery-face-features"
        d="M295 245 C 305 245, 305 265, 295 265"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Nose line down from bridge */}
      <path
        className="cheery-face-features"
        d="M240 235 L 230 295"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Cheerful Smile */}
      <path
        className="cheery-face-features"
        d="M210 315 C 225 335, 245 330, 255 310"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* 4. Beard Zigzag */}
      <path
        className="cheery-beard"
        d="M200 345 L 208 375 L 216 345 L 224 375 L 232 345 L 240 375 L 248 340"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
