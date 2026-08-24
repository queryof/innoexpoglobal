"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GradientBars } from "@/components/ui/gradient-bars-background";

export const Footer = () => {
  const [deviceInfo, setDeviceInfo] = useState("Web • 1920×1080");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const platform = navigator.userAgent.includes("Mac")
        ? "MacOS"
        : navigator.userAgent.includes("Win")
        ? "Windows"
        : navigator.userAgent.includes("Linux")
        ? "Linux"
        : "Device";
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDeviceInfo(`${platform} · ${width}×${height}`);
    }
  }, []);

  return (
    <footer className="relative w-full overflow-hidden bg-black text-white pt-28 pb-14 px-6 sm:px-12 border-t border-zinc-900/80">
      {/* Animated Blue Gradient Bars Background */}
      <GradientBars
        numBars={18}
        gradientFrom="rgba(37, 99, 235, 0.45)"
        gradientTo="transparent"
        animationDuration={2.4}
        className="opacity-70 pointer-events-none"
      />

      {/* Ambient Blue Radial Glow Base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[450px] bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(37,99,235,0.35),rgba(29,78,216,0.15)_40%,transparent_80%)] blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 items-start">
          
          {/* Left Column: Logo, Heading & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Inno Expo GL Logo with High-Contrast Solid White & Blue Silhouette Halo */}
            <div className="relative inline-flex items-center group py-1">
              {/* Layer 1: Pure White Inner Silhouette Halo */}
              <img
                src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-8 sm:h-9 w-auto object-contain [filter:brightness(0)_invert(1)_blur(2.5px)] opacity-100 scale-[1.06] pointer-events-none transition-all group-hover:scale-[1.08]"
              />
              
              {/* Layer 2: Medium White Ambient Backlight */}
              <img
                src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-8 sm:h-9 w-auto object-contain [filter:brightness(0)_invert(1)_blur(6px)] opacity-90 scale-[1.12] pointer-events-none transition-all group-hover:scale-[1.15]"
              />

              {/* Layer 3: Cyan/Sapphire Outer Glow Aura */}
              <img
                src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-8 sm:h-9 w-auto object-contain [filter:brightness(0)_invert(1)_drop-shadow(0_0_12px_#3b82f6)_blur(10px)] opacity-80 scale-[1.18] pointer-events-none transition-all group-hover:opacity-100"
              />

              {/* Foreground Sharp Image */}
              <img
                src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png"
                alt="Inno Expo GL"
                className="relative z-10 h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105 [filter:drop-shadow(0_0_1.5px_rgba(255,255,255,0.95))_drop-shadow(0_0_6px_rgba(255,255,255,0.7))]"
              />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
              Stay connected &amp; <br />
              <span className="font-sans font-normal text-white">keep </span>
              <span className="font-serif italic font-light text-blue-200">building</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 font-light pt-1">
              Join thousands of students and builders in Bangladesh and worldwide.
            </p>

            <div className="pt-2">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white backdrop-blur-md px-5 py-2.5 border border-white/15 text-xs sm:text-sm font-medium transition-all hover:border-white/25 active:scale-95 shadow-lg shadow-black/40"
              >
                <span>Register Your Team</span>
              </Link>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-8 lg:pl-16">
            {/* Column 1 */}
            <div className="space-y-3.5">
              <Link
                href="#segments"
                className="block text-sm text-zinc-300 hover:text-white transition-colors duration-150"
              >
                Game Categories
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href="#events"
                  className="text-sm text-zinc-300 hover:text-white transition-colors duration-150"
                >
                  Schedule
                </Link>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 px-1.5 py-0.2 rounded-full">
                  NEW
                </span>
              </div>

              <Link
                href="/about"
                className="block text-sm text-zinc-300 hover:text-white transition-colors duration-150"
              >
                About Inno Expo GL
              </Link>

              <Link
                href="#faq"
                className="block text-sm text-zinc-300 hover:text-white transition-colors duration-150"
              >
                FAQ
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              <Link
                href="/contact"
                className="block text-sm text-zinc-300 hover:text-white transition-colors duration-150"
              >
                Help &amp; Support
              </Link>

              <Link
                href="/privacy"
                className="block text-sm text-zinc-300 hover:text-white transition-colors duration-150"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block text-sm text-zinc-300 hover:text-white transition-colors duration-150"
              >
                Terms of Participation
              </Link>

              <Link
                href="/register"
                className="block text-sm text-zinc-300 hover:text-white transition-colors duration-150"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Metadata 4-Column Bar */}
        <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] sm:text-xs text-zinc-400 font-light">
          
          <div>
            <div className="text-zinc-300 font-normal">© {new Date().getFullYear()} Inno Expo GL</div>
            <div className="text-zinc-500 mt-0.5">Youth Robotics &amp; Science</div>
          </div>

          <div>
            <div className="text-zinc-300 font-normal">Community</div>
            <Link
              href="https://ioexo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-blue-300 transition-colors mt-0.5 block"
            >
              @innoexpo.gl
            </Link>
          </div>

          <div>
            <div className="text-zinc-300 font-normal">Your device</div>
            <div className="text-zinc-500 font-mono mt-0.5">{deviceInfo}</div>
          </div>

          <div>
            <div className="text-zinc-300 font-normal">World Finals</div>
            <div className="text-zinc-500 mt-0.5">Chiba Port Arena, Japan</div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
