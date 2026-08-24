"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const AboutUs = () => {
  return (
    <section id="about" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            Helping young minds learn <br />
            <span className="font-serif italic font-light text-blue-200">robotics and science</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
            Inno Expo GL is an international non-profit platform. We help students and young builders take part in world-class robotics games, learn practical technology, and share their ideas globally.
          </p>
        </AppleReveal>
      </div>

      {/* 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] items-center">
        <div className="lg:col-span-8 p-8 sm:p-12 text-left">
          <AppleReveal delay={0.1}>
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-2.5">
              From your school lab to the global tournament stage.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              We make it easy for teams to sign up, download rulebooks, build robots, and qualify for major events like the World Robot Games in Japan.
            </p>
          </AppleReveal>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 flex items-center justify-start lg:justify-center">
          <AppleReveal delay={0.2}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white backdrop-blur-md px-6 py-3 border border-white/15 text-xs sm:text-sm font-medium transition-all hover:border-white/25 active:scale-95 shadow-lg shadow-black/40"
            >
              <span>Learn More About Us</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-300" />
            </Link>
          </AppleReveal>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
