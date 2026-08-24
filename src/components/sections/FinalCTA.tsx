"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const FinalCTA = () => {
  return (
    <section className="relative z-10 w-full border-t border-zinc-200 bg-[#f0f7ff] text-zinc-900">
      
      {/* Main CTA Grid Area (Light Theme) */}
      <div className="py-24 sm:py-32 px-6 sm:px-12 max-w-4xl text-left relative z-10">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            InnoExpo GL
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-zinc-950 tracking-tight leading-[1.12] mb-5">
            Ready to build, learn &amp; <br />
            <span className="font-serif italic font-light text-blue-600">move forward with us?</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl leading-relaxed mb-10">
            Join the InnoExpo GL community today. Register for upcoming national qualifiers, connect with other builders, and take your robots to global stages like Japan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 px-6 py-3 text-xs sm:text-sm font-semibold transition-all shadow-md shadow-zinc-900/10 active:scale-95"
            >
              <span>Join InnoExpo GL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="#events"
              className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 backdrop-blur-md px-6 py-3 border border-zinc-200 text-xs sm:text-sm font-medium transition-all hover:border-zinc-300 active:scale-95 shadow-xs"
            >
              <span>Explore All Events</span>
            </Link>
          </div>
        </AppleReveal>
      </div>

      {/* 4-Column Metadata Grid (Light Theme) */}
      <div className="border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 text-xs text-zinc-500 font-normal bg-zinc-50/60">
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.05}>
            <div className="text-zinc-950 font-medium">Organization</div>
            <div className="text-zinc-500 mt-0.5">InnoExpo GL</div>
          </AppleReveal>
        </div>
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.1}>
            <div className="text-zinc-950 font-medium">Featured Event</div>
            <div className="text-zinc-500 mt-0.5">WRG 2026 Bangladesh Round</div>
          </AppleReveal>
        </div>
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.15}>
            <div className="text-zinc-950 font-medium">World Finals</div>
            <div className="text-zinc-500 mt-0.5">Chiba Port Arena, Japan</div>
          </AppleReveal>
        </div>
        <div className="p-6 sm:p-8">
          <AppleReveal delay={0.2}>
            <div className="text-zinc-950 font-medium">Event Partner</div>
            <div className="text-zinc-500 mt-0.5">Tech Autocrats</div>
          </AppleReveal>
        </div>
      </div>

    </section>
  );
};

export default FinalCTA;
