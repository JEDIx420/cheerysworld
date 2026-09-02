"use client";

import React, { useRef, useId } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";

interface ScrawlRevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
}

export function ScrawlRevealImage({
  src,
  alt,
  width = 600,
  height = 800,
  fill = false,
  priority = false,
  className = "",
  aspectRatio = "aspect-[4/5]",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ScrawlRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskPathRef1 = useRef<SVGPathElement>(null);
  const maskPathRef2 = useRef<SVGPathElement>(null);
  const maskPathRef3 = useRef<SVGPathElement>(null);
  const maskId = useId().replace(/:/g, "_");

  useGSAP(
    () => {
      // Check reduced motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const paths = [maskPathRef1.current, maskPathRef2.current, maskPathRef3.current].filter(Boolean);

      paths.forEach((path) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.6,
        stagger: 0.15,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      {/* SVG Mask Definition with dense hand-drawn scribble paths */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <mask id={`scrawl-mask-${maskId}`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="black" />
            
            {/* Primary diagonal scribble stroke */}
            <path
              ref={maskPathRef1}
              d="M-20 -20 
                 L 400 50 L -20 120 L 400 190 L -20 260 L 400 330 
                 L -20 400 L 400 470 L -20 540 L 400 610 L -20 680 
                 L 400 750 L -20 820 L 400 890 L -20 960 L 400 1020"
              stroke="white"
              strokeWidth="90"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Secondary cross-hatching scribble stroke */}
            <path
              ref={maskPathRef2}
              d="M400 -20 
                 L -20 60 L 400 140 L -20 220 L 400 300 L -20 380 
                 L 400 460 L -20 540 L 400 620 L -20 700 L 400 780 
                 L -20 860 L 400 940 L -20 1020"
              stroke="white"
              strokeWidth="75"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Circular organic infill */}
            <path
              ref={maskPathRef3}
              d="M 50 100 Q 200 50 350 200 T 100 450 T 350 650 T 150 900"
              stroke="white"
              strokeWidth="110"
              strokeLinecap="round"
              fill="none"
            />
          </mask>
        </defs>
      </svg>

      {/* Underneath image masked with scribble */}
      <div
        className="w-full h-full relative"
        style={{
          maskImage: `url(#scrawl-mask-${maskId})`,
          WebkitMaskImage: `url(#scrawl-mask-${maskId})`,
        }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-contain"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="object-contain w-full h-full"
          />
        )}
      </div>
    </div>
  );
}
