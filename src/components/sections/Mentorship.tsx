"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const Mentorship = () => {
  const mentors = [
    {
      name: "Dr. Kenji Takahashi",
      role: "Lead Robotics Researcher",
      org: "Tokyo Institute of Technology",
      focus: "Bipedal Locomotion & Autonomous Navigation",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Elena Rostova",
      role: "AI Research Fellow",
      org: "Oxford Robotics Lab",
      focus: "Neural Motion Planning & Computer Vision",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Marcus Vance",
      role: "Senior Systems Architect",
      org: "MIT CSAIL Alumni",
      focus: "Embedded Firmware & Real-Time Sensors",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amina Al-Mansoor",
      role: "Quantum Computing Fellow",
      org: "CERN OpenLab",
      focus: "Quantum Algorithms & Hardware Acceleration",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section id="mentorship" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
          Expert Network
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
          World-class mentorship from <br />
          <span className="font-serif italic font-light text-blue-200">leading researchers</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
          Every registered team and fellow is paired with international researchers who provide weekly technical reviews, hardware guidance, and competition strategy.
        </p>
      </div>

      {/* Mentors 4-Column Grid with Vertical Dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
        {mentors.map((mentor, i) => (
          <div
            key={i}
            className="p-8 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left"
          >
            <div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border border-white/[0.08] bg-zinc-900">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <h3 className="text-base sm:text-lg font-serif text-white mb-1">
                {mentor.name}
              </h3>
              <div className="text-xs text-zinc-300 font-medium mb-0.5">{mentor.role}</div>
              <div className="text-xs text-zinc-500 mb-3">{mentor.org}</div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                {mentor.focus}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between">
              <span>2026 Mentor Cohort</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Mentorship;
