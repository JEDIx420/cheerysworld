"use client";

import React from "react";

export function ScribbleUnderline({
  className = "text-amber-500",
  width = 160,
  height = 14,
}: {
  className?: string;
  width?: number | string;
  height?: number | string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 14C35 5 80 16 115 7C145 -1 180 15 197 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 15.5C65 10.5 120 16.5 175 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function SketchArrow({
  className = "text-stone-800",
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "down" | "curved-down" | "up-right";
}) {
  if (direction === "curved-down") {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 54 54"
        fill="none"
        className={`inline-block overflow-visible ${className}`}
        aria-hidden="true"
      >
        <path
          d="M8 8 C 28 4, 46 16, 42 38 M 32 30 L 42 38 L 48 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "up-right") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`inline-block overflow-visible ${className}`}
        aria-hidden="true"
      >
        <path
          d="M7 17L17 7M17 7H9M17 7V15"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="36"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      className={`inline-block overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 12C12 11 25 13 36 12M26 4C30 8 34 11 37 12C34 13 30 16 26 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RoughCircle({
  className = "text-amber-500",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={`inline-block overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M28 6 C 45 4, 56 16, 54 32 C 52 48, 38 56, 20 54 C 6 52, 4 36, 8 20 C 11 9, 23 4, 34 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DrawnDivider({
  className = "text-stone-300",
}: {
  className?: string;
}) {
  return (
    <svg
      width="100%"
      height="12"
      viewBox="0 0 800 12"
      fill="none"
      preserveAspectRatio="none"
      className={`w-full overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 6C150 2 300 10 450 5C600 0 720 9 800 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkleDoodle({
  className = "text-amber-500",
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M16 2 C 16 10, 18 14, 28 16 C 18 18, 16 22, 16 30 C 16 22, 14 18, 4 16 C 14 14, 16 10, 16 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheerySmileDoodle({
  className = "text-stone-800",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Glasses */}
      <circle cx="22" cy="26" r="10" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="42" cy="26" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 26 L32 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 24 L6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 24 L58 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Eyes dots */}
      <circle cx="22" cy="26" r="2.5" fill="currentColor" />
      <circle cx="42" cy="26" r="2.5" fill="currentColor" />
      {/* Nose */}
      <path d="M31 29 L31 38 L35 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Smile */}
      <path d="M22 44 C27 50 37 50 42 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Beard zigzag */}
      <path d="M26 52 L28 58 L31 52 L34 58 L37 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
