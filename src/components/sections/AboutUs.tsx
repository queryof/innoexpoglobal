"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const AboutUs = () => {
  return (
    <section id="about" className="relative z-10 w-full border-t border-zinc-200 bg-white text-zinc-900">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            About InnoExpo GL
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-950 tracking-tight leading-[1.15]">
            A pupil-led platform making <br />
            <span className="font-serif italic font-light text-blue-600">STEM education accessible</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-normal mt-5 leading-relaxed">
            InnoExpo GL is a non-profit innovation platform run by pupils and is committed to making STEM education more accessible, giving students the opportunity to turn their ideas into real-world solutions.
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-3 leading-relaxed">
            The organisation promotes project-based learning, innovation, mentorship and hands-on experiences, providing students from underserved and rural areas with the chance to take part in national and global events.
          </p>
        </AppleReveal>
      </div>

      {/* 3 Core Highlights Split */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
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
          <div key={idx} className="p-8 sm:p-10 text-left transition-colors hover:bg-zinc-50/70">
            <AppleReveal delay={idx * 0.1}>
              <div className="flex items-center gap-2 text-blue-600 mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-mono uppercase text-zinc-500">Core Value 0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-serif text-zinc-950 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">{item.desc}</p>
            </AppleReveal>
          </div>
        ))}
      </div>

      {/* Bottom CTA Row */}
      <div className="border-t border-zinc-200 p-8 sm:p-10 flex flex-wrap items-center justify-between gap-4 bg-zinc-50/40">
        <AppleReveal>
          <div className="text-xs sm:text-sm text-zinc-600 font-normal">
            Want to learn more about our student-run community and initiatives?
          </div>
        </AppleReveal>
        <AppleReveal delay={0.15}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 backdrop-blur-md px-5 py-2.5 border border-zinc-200 text-xs sm:text-sm font-medium transition-all hover:border-zinc-300 active:scale-95 shadow-xs"
          >
            <span>Learn More About Us</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </AppleReveal>
      </div>

    </section>
  );
};

export default AboutUs;
