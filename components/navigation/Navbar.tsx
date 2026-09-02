"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { CheerySmileDoodle } from "../doodles/DoodleIcons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "cheery_fic", href: "/cheery-fic", label: "Caricatures", accent: "hover:text-amber-700" },
    { name: "anim_daddy", href: "/anim-daddy", label: "Mentoring", accent: "hover:text-blue-700" },
    { name: "cheerys_tees", href: "/cheerys-tees", label: "Apparel", accent: "hover:text-orange-700" },
    { name: "cheerys_bakes", href: "/cheerys-bakes", label: "Baking", accent: "hover:text-emerald-700" },
    { name: "About", href: "/about", label: "Cheery", accent: "hover:text-stone-900" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f5]/90 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group focus:outline-hidden"
            aria-label="CHEERYS Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center p-1.5 shadow-xs group-hover:rotate-6 transition-transform">
              <CheerySmileDoodle className="text-stone-100" size={24} />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-stone-950 font-serif block leading-none">
                CHEERYS
              </span>
              <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase block mt-0.5">
                Creative Culture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-stone-900/5 backdrop-blur-xs p-1.5 rounded-full border border-stone-200/80">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                    isActive
                      ? "bg-stone-900 text-stone-50 shadow-xs"
                      : `text-stone-700 hover:bg-white/80 ${link.accent}`
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA + Cart preview button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full border border-stone-300/80 hover:border-stone-900 bg-white/80 hover:bg-white text-stone-800 transition-colors cursor-pointer"
              aria-label="View Cart (Client preview)"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-600 text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            <Link
              href="/cheery-fic#commission"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono font-medium hover:bg-amber-600 transition-colors shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Commission Art
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/cart"
              className="p-2 rounded-full border border-stone-300 bg-white/80 text-stone-800"
              aria-label="Cart preview"
            >
              <ShoppingBag className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full border border-stone-300 bg-white text-stone-900 shadow-xs focus:outline-hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#faf8f5] border-b border-stone-300 p-6 shadow-2xl transition-all animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              The Four Expressions
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3.5 rounded-xl border text-sm font-mono font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-stone-900 text-stone-50 border-stone-900"
                    : "bg-white text-stone-900 border-stone-200 hover:border-stone-800"
                }`}
              >
                <div>
                  <span className="block font-bold">{link.name}</span>
                  <span className="text-xs text-stone-500 font-sans">{link.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-stone-200 flex flex-col gap-2.5">
              <Link
                href="/cheery-fic#commission"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-amber-600 text-white font-mono text-xs font-semibold shadow-xs"
              >
                Commission a Caricature
              </Link>
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 font-mono text-xs"
              >
                Shopping Bag (Preview Mode)
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
