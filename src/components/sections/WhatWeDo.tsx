"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Lightbulb, 
  Package, 
  Users, 
  BarChart3, 
  Globe, 
  Cpu, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const WhatWeDo = () => {
  const activities = [
    {
      num: "01",
      icon: Sparkles,
      title: "Early STEM Awareness",
      desc: "We introduce students to science, technology and innovation from an early age and cultivate their curiosity, creative thinking and problem solving.",
    },
    {
      num: "02",
      icon: Lightbulb,
      title: "Idea Development",
      desc: "Students can share their own ideas and get guidance on how to turn creative ideas into meaningful projects. All ideas are welcome, and promising ones are helped to grow.",
    },
    {
      num: "03",
      icon: Package,
      title: "Free Project Materials",
      desc: "Selected projects are provided with required materials at no charge. This removes financial barriers so good ideas are never limited by economic background.",
    },
    {
      num: "04",
      icon: Users,
      title: "Guidance & Mentorship",
      desc: "Students are guided individually according to their skills and project needs with direct support from mentors and technical experts.",
    },
    {
      num: "05",
      icon: BarChart3,
      title: "Project Monitoring",
      desc: "Projects are regularly reviewed to assess progress, identify challenges, and ensure they remain on course to meet their objectives.",
    },
    {
      num: "06",
      icon: Globe,
      title: "National & Global Opportunities",
      desc: "Outstanding projects are supported to participate in national science fairs, with chances to compete on international stages like WRG Japan.",
    },
  ];

  const impactSteps = [
    { step: "Idea", label: "01" },
    { step: "Prototype", label: "02" },
    { step: "Mentorship", label: "03" },
    { step: "Competition", label: "04" },
    { step: "National", label: "05" },
    { step: "Global", label: "06" },
  ];

  return (
    <section id="what-we-do" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            From the first idea to <br />
            <span className="font-serif italic font-light text-blue-200">the global stage</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
            InnoExpo GL supports students through every step of their project journey with training, free resources, coaching, and international pathways.
          </p>
        </AppleReveal>
      </div>

      {/* 3x2 Grid of Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {activities.slice(0, 3).map((act, i) => {
          const Icon = act.icon;
          return (
            <div
              key={i}
              className="p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left min-h-[260px]"
            >
              <AppleReveal delay={i * 0.1}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{act.num}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif text-white mb-2.5">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </AppleReveal>
            </div>
          );
        })}
      </div>

      {/* Row 2 of Activities (4, 5, 6) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {activities.slice(3, 6).map((act, i) => {
          const Icon = act.icon;
          return (
            <div
              key={i}
              className="p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left min-h-[260px]"
            >
              <AppleReveal delay={(i + 3) * 0.1}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{act.num}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif text-white mb-2.5">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </AppleReveal>
            </div>
          );
        })}
      </div>

      {/* Activity 7: Innovation Workshops & Camps Banner */}
      <div className="border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] items-center">
        <div className="lg:col-span-8 p-8 sm:p-10 text-left">
          <AppleReveal>
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono uppercase text-zinc-400">Activity 07</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
              Innovation Workshops &amp; Camps
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              We deliver hands-on workshops, innovation bootcamps and STEM activities to provide students with practical engineering experience beyond traditional classrooms.
            </p>
          </AppleReveal>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-10 flex items-center justify-start lg:justify-center">
          <AppleReveal delay={0.15}>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white backdrop-blur-md px-6 py-3 border border-white/15 text-xs sm:text-sm font-medium transition-all hover:border-white/25 active:scale-95 shadow-lg shadow-black/40"
            >
              <span>Join a Workshop</span>
              <ArrowRight className="w-4 h-4 text-zinc-300" />
            </Link>
          </AppleReveal>
        </div>
      </div>

      {/* From Idea to Impact Banner */}
      <div className="border-t border-white/[0.08] p-8 sm:p-12 text-left bg-zinc-950/40">
        <AppleReveal>
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              FROM IDEA TO IMPACT
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">
            A complete roadmap for student innovators
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed mb-8">
            How your concept travels from an initial spark into a fully functional, competitive project on national and international stages.
          </p>

          {/* Sequential Step Progression */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {impactSteps.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-zinc-900/50 p-4 text-left flex flex-col justify-between relative group hover:border-blue-400/30 transition-colors"
              >
                <div className="text-[10px] font-mono text-zinc-500 mb-1">
                  Step {item.label}
                </div>
                <div className="text-sm font-serif text-white font-medium flex items-center justify-between">
                  <span>{item.step}</span>
                  {idx < impactSteps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-blue-400 transition-colors hidden lg:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </AppleReveal>
      </div>

    </section>
  );
};

export default WhatWeDo;
