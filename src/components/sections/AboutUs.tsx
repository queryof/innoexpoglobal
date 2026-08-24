"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const AboutUs = () => {
  return (
    <section id="about" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            About InnoExpo GL
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            A pupil-led platform making <br />
            <span className="font-serif italic font-light text-blue-200">STEM education accessible</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light mt-5 leading-relaxed">
            InnoExpo GL is a non-profit innovation platform run by pupils and is committed to making STEM education more accessible, giving students the opportunity to turn their ideas into real-world solutions.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-3 leading-relaxed">
            The organisation promotes project-based learning, innovation, mentorship and hands-on experiences, providing students from underserved and rural areas with the chance to take part in national and global events.
          </p>
        </AppleReveal>
      </div>

      {/* 3 Core Highlights Split */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
        {[
          {
            title: "Project-Based Learning",
            desc: "Students learn by building real projects from scratch rather than relying only on classroom textbooks.",
          },
          {
            title: "Rural & Underserved Access",
            desc: "Bridging the resource gap by providing free hardware and mentoring to students across all backgrounds.",
          },
          {
            title: "Pathway to Global Stages",
            desc: "Connecting local talent to prestigious national expos and international championships worldwide.",
          },
        ].map((item, idx) => (
          <div key={idx} className="p-8 sm:p-10 text-left transition-colors hover:bg-white/[0.02]">
            <AppleReveal delay={idx * 0.1}>
              <div className="flex items-center gap-2 text-blue-400 mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-mono uppercase text-zinc-400">Core Value 0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">{item.desc}</p>
            </AppleReveal>
          </div>
        ))}
      </div>

      {/* Bottom CTA Row */}
      <div className="border-t border-white/[0.08] p-8 sm:p-10 flex flex-wrap items-center justify-between gap-4">
        <AppleReveal>
          <div className="text-xs sm:text-sm text-zinc-400 font-light">
            Want to learn more about our student-run community and initiatives?
          </div>
        </AppleReveal>
        <AppleReveal delay={0.15}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white backdrop-blur-md px-5 py-2.5 border border-white/15 text-xs sm:text-sm font-medium transition-all hover:border-white/25 active:scale-95 shadow-lg shadow-black/40"
          >
            <span>Learn More About Us</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-300" />
          </Link>
        </AppleReveal>
      </div>

    </section>
  );
};

export default AboutUs;
