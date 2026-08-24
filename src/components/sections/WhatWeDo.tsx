"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const WhatWeDo = () => {
  const pillars = [
    {
      title: "Global Competitions",
      category: "Flagship Events",
      desc: "We host and support sanctioned robotics olympiads, including the official World Robot Games (WRG) Bangladesh qualifiers and international tournaments.",
      link: "#competitions",
    },
    {
      title: "Workshops & Training",
      category: "Youth Learning",
      desc: "Hands-on learning programs where students learn how to code microcontrollers, wire sensors, assemble motors, and build real machines.",
      link: "/programs",
    },
    {
      title: "Innovation Summits",
      category: "Expos & Demos",
      desc: "Live project exhibitions and technology showcases where young builders present their working inventions to mentors, teachers, and industry leaders.",
      link: "#events",
    },
    {
      title: "Community & Network",
      category: "Global Reach",
      desc: "A growing network connecting students, schools, robotics clubs, and mentors across Bangladesh and partner countries.",
      link: "#get-involved",
    },
  ];

  return (
    <section id="what-we-do" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            Everything built to support <br />
            <span className="font-serif italic font-light text-blue-200">curious young builders</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
            Inno Expo GL creates the events, training, and community that help students explore robotics, science, and computer technology.
          </p>
        </AppleReveal>
      </div>

      {/* 4 Pillars Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
        {/* Left Column (Items 0, 1) */}
        <div className="divide-y divide-white/[0.08]">
          {pillars.slice(0, 2).map((pillar, i) => (
            <div
              key={i}
              className="p-8 sm:p-12 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left min-h-[260px]"
            >
              <AppleReveal delay={i * 0.15}>
                <div>
                  <div className="text-xs text-zinc-500 font-medium mb-4">
                    {pillar.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                </div>

                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors duration-150"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </Link>
              </AppleReveal>
            </div>
          ))}
        </div>

        {/* Right Column (Items 2, 3) */}
        <div className="divide-y divide-white/[0.08]">
          {pillars.slice(2, 4).map((pillar, i) => (
            <div
              key={i}
              className="p-8 sm:p-12 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left min-h-[260px]"
            >
              <AppleReveal delay={i * 0.15}>
                <div>
                  <div className="text-xs text-zinc-500 font-medium mb-4">
                    {pillar.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                </div>

                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors duration-150"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                </Link>
              </AppleReveal>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default WhatWeDo;
