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
    <footer className="relative w-full overflow-hidden bg-zinc-50 text-zinc-900 pt-28 pb-14 px-6 sm:px-12 border-t border-zinc-200">
      {/* Animated Light Blue Gradient Bars Background */}
      <GradientBars
        numBars={18}
        gradientFrom="rgba(59, 130, 246, 0.15)"
        gradientTo="transparent"
        animationDuration={2.4}
        className="opacity-60 pointer-events-none"
      />

      {/* Ambient Sky Radial Glow Base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[450px] bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(59,130,246,0.12),rgba(147,197,253,0.06)_40%,transparent_80%)] blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 items-start">
          
          {/* Left Column: Logo, Heading & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* InnoExpo GL Logo with .logo-wrapper Ambient Radial Glow */}
            <div className="logo-wrapper py-1">
              <img
                src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png"
                alt="InnoExpo GL"
                className="relative z-10 h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-zinc-950 tracking-tight leading-[1.15]">
              Stay connected &amp; <br />
              <span className="font-sans font-normal text-zinc-950">keep </span>
              <span className="font-serif italic font-light text-blue-600">building</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 font-normal pt-1">
              Join thousands of students and builders in Bangladesh and worldwide.
            </p>

            <div className="pt-2">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-md shadow-zinc-900/10"
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
                className="block text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
              >
                Game Categories
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href="#events"
                  className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
                >
                  Schedule
                </Link>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.2 rounded-full">
                  NEW
                </span>
              </div>

              <Link
                href="/about"
                className="block text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
              >
                About InnoExpo GL
              </Link>

              <Link
                href="#faq"
                className="block text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
              >
                FAQ
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              <Link
                href="/contact"
                className="block text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
              >
                Help &amp; Support
              </Link>

              <Link
                href="/privacy"
                className="block text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
              >
                Terms of Participation
              </Link>

              <Link
                href="/register"
                className="block text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-150"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Metadata 4-Column Bar */}
        <div className="pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] sm:text-xs text-zinc-500 font-normal">
          
          <div>
            <div className="text-zinc-950 font-medium">© {new Date().getFullYear()} InnoExpo GL</div>
            <div className="text-zinc-500 mt-0.5">Youth Robotics &amp; STEM Platform</div>
          </div>

          <div>
            <div className="text-zinc-950 font-medium">Community</div>
            <Link
              href="https://ioexo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 hover:text-blue-600 transition-colors mt-0.5 block"
            >
              @innoexpo.gl
            </Link>
          </div>

          <div>
            <div className="text-zinc-950 font-medium">Your device</div>
            <div className="text-zinc-500 font-mono mt-0.5">{deviceInfo}</div>
          </div>

          <div>
            <div className="text-zinc-950 font-medium">World Finals</div>
            <div className="text-zinc-500 mt-0.5">Chiba Port Arena, Japan</div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
