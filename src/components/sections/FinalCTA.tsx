"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const FinalCTA = () => {
  return (
    <section className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Main CTA Grid Area */}
      <div className="py-24 sm:py-32 px-6 sm:px-12 max-w-4xl text-left relative z-10">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            Inno Expo GL
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12] mb-5">
            Ready to build, learn &amp; <br />
            <span className="font-serif italic font-light text-blue-200">move forward with us?</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed mb-10">
            Join the Inno Expo GL community today. Register for upcoming national qualifiers, connect with other builders, and take your robots to global stages like Japan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-white/10 active:scale-95"
            >
              <span>Join Inno Expo GL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="#events"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white backdrop-blur-md px-6 py-3 border border-white/15 text-xs sm:text-sm font-medium transition-all hover:border-white/25 active:scale-95 shadow-lg shadow-black/40"
            >
              <span>Explore All Events</span>
            </Link>
          </div>
        </AppleReveal>
      </div>

      {/* 4-Column Metadata Grid */}
      <div className="border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] text-xs text-zinc-400 font-light">
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.05}>
            <div className="text-zinc-300 font-normal">Organization</div>
            <div className="text-zinc-500 mt-0.5">Inno Expo GL</div>
          </AppleReveal>
        </div>
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.1}>
            <div className="text-zinc-300 font-normal">Featured Event</div>
            <div className="text-zinc-500 mt-0.5">WRG 2026 Bangladesh Round</div>
          </AppleReveal>
        </div>
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.15}>
            <div className="text-zinc-300 font-normal">World Finals</div>
            <div className="text-zinc-500 mt-0.5">Chiba Port Arena, Japan</div>
          </AppleReveal>
        </div>
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.2}>
            <div className="text-zinc-300 font-normal">Event Partner</div>
            <div className="text-zinc-500 mt-0.5">Tech Autocrats</div>
          </AppleReveal>
        </div>
      </div>

    </section>
  );
};

export default FinalCTA;
