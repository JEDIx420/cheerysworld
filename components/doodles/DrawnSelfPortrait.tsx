"use client";

import React, { useRef, useId } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";

export function DrawnSelfPortrait({
  className = "w-full max-w-[300px] h-auto text-stone-900",
  triggerOnScroll = true,
}: {
  className?: string;
  triggerOnScroll?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const strokePath1 = useRef<SVGPathElement>(null);
  const strokePath2 = useRef<SVGPathElement>(null);
  const strokePath3 = useRef<SVGPathElement>(null);
  const strokePath4 = useRef<SVGPathElement>(null);
  const maskId = useId().replace(/:/g, "_");

  useGSAP(
    () => {
      if (!containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const paths = [
        strokePath1.current,
        strokePath2.current,
        strokePath3.current,
        strokePath4.current,
      ].filter(Boolean);

      paths.forEach((p) => {
        if (!p) return;
        const len = p.getTotalLength();
        gsap.set(p, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: triggerOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 80%",
              once: true,
            }
          : undefined,
      });

      // Sequential authentic pen-stroke reveal over Cheery's real signature:
      // 1. "Cheery" letters (cursive flowing loop from left to right)
      // 2. "'s" apostrophe and s mark (top right)
      // 3. Diagonal underline baseline
      // 4. Glasses, nose, eyes, smile, and beard zigzag
      tl.to(strokePath1.current, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.inOut",
      })
        .to(
          strokePath2.current,
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          strokePath3.current,
          {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        .to(
          strokePath4.current,
          {
            strokeDashoffset: 0,
            duration: 0.9,
            ease: "power1.out",
          },
          "-=0.1"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`relative aspect-[3/4] flex items-center justify-center ${className}`}>
      {/* SVG Mask with accurate hand-drawn pen trajectories corresponding to Cheery's strokes */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <mask id={`exact-sig-mask-${maskId}`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="black" />

            {/* Stroke 1: "Cheery" cursive word path (Top-Left to Center-Right) */}
            <path
              ref={strokePath1}
              d="M 60 480 
                 C 20 400, 30 280, 80 260 
                 C 120 240, 140 380, 80 440 
                 C 100 380, 140 320, 170 300 
                 C 180 340, 190 400, 220 380 
                 C 230 350, 250 280, 290 280 
                 C 320 280, 300 380, 340 360 
                 C 360 340, 370 280, 420 250 
                 C 440 300, 430 380, 450 340 
                 C 470 280, 490 240, 520 220 
                 C 500 320, 470 420, 440 450"
              stroke="white"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Stroke 2: "'s" apostrophe and flourish (Top Right) */}
            <path
              ref={strokePath2}
              d="M 500 230 C 510 180, 530 190, 560 210 M 520 250 C 560 230, 580 250, 560 280 C 540 300, 580 320, 590 300"
              stroke="white"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Stroke 3: Diagonal Underline Baseline cutting under "Cheery's" */}
            <path
              ref={strokePath3}
              d="M 180 420 L 620 250"
              stroke="white"
              strokeWidth="52"
              strokeLinecap="round"
              fill="none"
            />

            {/* Stroke 4: Glasses, Nose, Smile, Beard Face Doodle */}
            <path
              ref={strokePath4}
              d="M 330 380 C 300 370, 340 450, 380 440 C 410 430, 380 370, 340 380
                 M 380 380 C 370 370, 430 360, 450 410 C 470 450, 410 460, 380 410
                 M 395 380 L 380 440
                 M 350 460 C 370 480, 410 480, 430 450
                 M 340 490 L 350 530 L 365 490 L 380 530 L 395 490 L 410 530 L 420 490"
              stroke="white"
              strokeWidth="56"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>
        </defs>
      </svg>

      {/* Cheery's Exact 100% Original Vector Signature and Self-Portrait */}
      <div
        className="w-full h-full relative flex items-center justify-center"
        style={{
          maskImage: `url(#exact-sig-mask-${maskId})`,
          WebkitMaskImage: `url(#exact-sig-mask-${maskId})`,
        }}
      >
        <Image
          src="/brand/cheery-signature-clean.jpg"
          alt="Cheery authentic original signature and self-portrait"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-contain p-2"
        />
      </div>
    </div>
  );
}
