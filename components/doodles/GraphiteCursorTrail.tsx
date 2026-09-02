"use client";

import React, { useEffect, useRef } from "react";

export function GraphiteCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on desktop with fine pointer and no reduced-motion
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let points: { x: number; y: number; age: number; maxAge: number; size: number }[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      // Add fine graphite particle
      points.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        maxAge: 24, // Fades quickly (~0.4s)
        size: Math.random() * 1.5 + 1.2,
      });

      if (points.length > 35) {
        points.shift();
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const p = points[i];
          const prev = points[i - 1];
          const xc = (prev.x + p.x) / 2;
          const yc = (prev.y + p.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, xc, yc);
        }

        ctx.strokeStyle = "rgba(40, 35, 30, 0.18)";
        ctx.lineWidth = 1.2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        // Update particle ages
        for (let i = 0; i < points.length; i++) {
          points[i].age++;
        }
        points = points.filter((p) => p.age < p.maxAge);
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50 select-none"
    />
  );
}
