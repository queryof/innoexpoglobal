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
        className={`transition-all duration-300 overflow-hidden text-center text-xs text-zinc-700 flex items-center justify-center gap-1.5 flex-wrap pointer-events-auto ${
          isScrolled ? "max-h-0 opacity-0 mb-0" : "max-h-12 opacity-100 mb-2.5"
        }`}
      >
        <span className="inline-flex items-center gap-1.5 bg-white/85 border border-zinc-200/80 backdrop-blur-md px-3.5 py-1 rounded-full text-zinc-700 shadow-md shadow-zinc-900/5">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Featured Event: World Robot Games (WRG 2026) registration is open
          <Link
            href="#competitions"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium ml-1"
          >
            view event
            <ChevronRight className="w-3 h-3 ml-0.5 text-blue-600" />
          </Link>
        </span>
      </div>

      {/* Floating Rounded-Full Glass Pill Header (Light Theme) */}
      <header className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`relative rounded-full border backdrop-blur-2xl px-4 sm:px-6 py-2 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 border-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-zinc-300"
              : "bg-white/80 border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-zinc-300"
          }`}
        >
          {/* Logo with .logo-wrapper Ambient Radial Glow */}
          <Link href="/" className="logo-wrapper shrink-0 group py-1">
            <img
              src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png"
              alt="InnoExpo GL"
              className="relative z-10 h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2.5 text-[13px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-150 font-medium px-3 py-1 rounded-full ${
                    isActive
                      ? "text-zinc-950 font-semibold bg-zinc-100 border border-zinc-200/80 shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70"
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
              className="text-xs sm:text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors duration-150"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white hover:bg-zinc-800 transition-all active:scale-95 shadow-md shadow-zinc-900/10 hover:shadow-lg hover:shadow-blue-500/15"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-700 hover:text-zinc-950 p-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Light Theme) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl shadow-zinc-900/10">
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
                        ? "text-zinc-950 font-semibold bg-zinc-100 border border-zinc-200"
                        : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>}
                  </Link>
                );
              })}
              <div className="pt-3 mt-1 border-t border-zinc-100 flex items-center justify-between gap-3">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-700 hover:text-zinc-950 px-3 py-1"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-1.5 text-xs font-semibold text-white hover:bg-zinc-800 transition-all"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
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
