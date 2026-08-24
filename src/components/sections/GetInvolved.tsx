"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const GetInvolved = () => {
  const pathways = [
    {
      title: "Join as a Player",
      desc: "Form a team with friends or join solo to take part in the 2026 Bangladesh National Qualifier.",
      action: "Register team",
      link: "/register",
    },
    {
      title: "Mentor a Team",
      desc: "If you have robotics experience, guide school students with coding, electronics, and game strategy.",
      action: "Become a mentor",
      link: "/contact",
    },
    {
      title: "Schools & Clubs",
      desc: "Bring WRG robotics challenges to your school or community club with starter kits and workshops.",
      action: "Partner with us",
      link: "/contact",
    },
    {
      title: "Volunteer with Us",
      desc: "Help organize qualifier game days, referee matches, and assist young participants at events.",
      action: "Join as volunteer",
      link: "/contact",
    },
  ];

  return (
    <section id="get-involved" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            Four simple ways to <br />
            <span className="font-serif italic font-light text-blue-200">be part of the fun</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
            Whether you are a student, teacher, coach, or robotics fan, anyone can join Inno Expo GL.
          </p>
        </AppleReveal>
      </div>

      {/* 4 Pathways Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
        {pathways.map((pathway, i) => (
          <div
            key={i}
            className="p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left"
          >
            <AppleReveal delay={i * 0.1}>
              <div>
                <div className="text-xs text-zinc-500 font-serif mb-3">Option 0{i + 1}</div>
                <h3 className="text-lg sm:text-xl font-serif text-white mb-2.5">
                  {pathway.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  {pathway.desc}
                </p>
              </div>

              <Link
                href={pathway.link}
                className="inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors duration-150 pt-4 border-t border-white/[0.06]"
              >
                <span>{pathway.action}</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
            </AppleReveal>
          </div>
        ))}
      </div>

    </section>
  );
};

export default GetInvolved;
