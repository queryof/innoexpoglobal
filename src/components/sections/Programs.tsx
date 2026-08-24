"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Programs = () => {
  const programs = [
    {
      title: "Youth Robotics Academy",
      category: "K-12 & High School",
      duration: "12-Week Intensive",
      desc: "Comprehensive hands-on curriculum covering microcontrollers, motor drivers, sensor fusion, PID controllers, and autonomous trajectory tracking.",
      highlights: ["Complimentary Hardware Kit", "Weekly Live Lab Coaching", "WRB Qualifier Fast-Track"],
    },
    {
      title: "Frontier AI & ML Fellowship",
      category: "Undergraduate & Research",
      duration: "6-Month Cohort",
      desc: "Deep dive into PyTorch, diffusion models, reinforcement learning for robotics, and distributed high-performance model training.",
      highlights: ["GPU Cloud Compute Credits", "Paper Publishing Support", "CERN/MIT Alumni Mentors"],
    },
    {
      title: "Open Science Hardware Grant",
      category: "Independent Innovators",
      duration: "Rolling Applications",
      desc: "Equity-free seed grants ranging from $5,000 to $25,000 awarded directly to high-impact scientific prototypes and hardware tools.",
      highlights: ["$5K–$25K Seed Funding", "Lab Testing Facilities", "Patent & IP Guidance"],
    },
    {
      title: "Olympiad Masterclass Series",
      category: "All Competitors",
      duration: "Year-Round Modules",
      desc: "World-class algorithmic problem-solving, competitive coding, kinematics, and past championship case analysis sessions.",
      highlights: ["500+ Practice Problems", "Live Mock Qualifiers", "Official Certificate"],
    },
  ];

  return (
    <section id="programs" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
          Learning Pathways
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
          World-class educational &amp; <br />
          <span className="font-serif italic font-light text-blue-200">fellowship programs</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
          Tailored programs crafted to bridge knowledge gaps, provide hardware resources, and prepare innovators for world-stage competitions.
        </p>
      </div>

      {/* 2x2 Grid with Explicit Vertical & Horizontal Grid Separators */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
        {/* Left Column */}
        <div className="divide-y divide-white/[0.08]">
          {programs.slice(0, 2).map((prog, i) => (
            <div
              key={i}
              className="p-8 sm:p-12 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left min-h-[340px]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                  <span>{prog.category}</span>
                  <span>{prog.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {prog.desc}
                </p>

                <div className="space-y-2 mb-8">
                  {prog.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-zinc-300 font-light flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-300" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors duration-150"
              >
                <span>Apply for next cohort</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="divide-y divide-white/[0.08]">
          {programs.slice(2, 4).map((prog, i) => (
            <div
              key={i}
              className="p-8 sm:p-12 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left min-h-[340px]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                  <span>{prog.category}</span>
                  <span>{prog.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {prog.desc}
                </p>

                <div className="space-y-2 mb-8">
                  {prog.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-zinc-300 font-light flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-300" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors duration-150"
              >
                <span>Apply for next cohort</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Programs;
