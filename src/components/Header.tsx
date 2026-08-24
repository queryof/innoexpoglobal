"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, Menu, X, Sparkles } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Competitions", href: "#competitions" },
    { name: "Events", href: "#events" },
    { name: "News", href: "#news" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      
      {/* Top Event Notice */}
      <div
        className={`transition-all duration-300 overflow-hidden text-center text-xs text-zinc-300 flex items-center justify-center gap-1.5 flex-wrap pointer-events-auto ${
          isScrolled ? "max-h-0 opacity-0 mb-0" : "max-h-12 opacity-100 mb-2.5"
        }`}
      >
        <span className="inline-flex items-center gap-1.5 bg-black/60 border border-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-zinc-200 shadow-lg shadow-black/50">
          <Sparkles className="w-3 h-3 text-blue-400" />
          Featured Event: World Robot Games (WRG 2026) registration is open
          <Link
            href="#competitions"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium ml-1"
          >
            view event
            <ChevronRight className="w-3 h-3 ml-0.5 text-blue-400" />
          </Link>
        </span>
      </div>

      {/* Floating Rounded-Full Glass Pill Header */}
      <header className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`relative rounded-full border backdrop-blur-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl shadow-black/80 transition-all duration-300 ${
            isScrolled
              ? "bg-zinc-950/85 border-white/[0.18] shadow-[0_10px_35px_rgba(0,0,0,0.9)] hover:border-white/[0.28]"
              : "bg-zinc-950/70 border-white/[0.12] hover:border-white/[0.22]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="border border-dashed border-white/30 bg-white/[0.04] px-3 py-1 rounded-md text-[11px] font-mono text-zinc-300 group-hover:border-white/60 group-hover:text-white transition-all flex items-center gap-1.5">
              <span>Placeholder Logo (120x32)</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 text-[13px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-150 font-medium px-3 py-1 rounded-full ${
                    isActive
                      ? "text-white font-semibold bg-white/[0.14] border border-white/[0.18] shadow-sm backdrop-blur-md"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            <Link
              href="/login"
              className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-150"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-black hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-400 hover:text-white p-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl border border-white/[0.14] bg-zinc-950/95 backdrop-blur-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium py-1.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-white font-semibold bg-white/[0.12] border border-white/[0.15]"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></span>}
                  </Link>
                );
              })}
              <div className="pt-3 mt-1 border-t border-white/[0.1] flex items-center justify-between gap-3">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-white px-3 py-1"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black hover:bg-zinc-200 transition-all"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
