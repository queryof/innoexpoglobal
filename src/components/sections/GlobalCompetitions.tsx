"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Users, MapPin, Calendar, Building2 } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const GlobalCompetitions = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const segments = [
    {
      id: "soccer-robot",
      name: "Soccer Robot 1x1",
      division: "Open",
      age: "Ages 8–99",
      teamSize: "1 player",
      fee: "300 BDT",
      tag: "Soccer",
      desc: "Play 1-on-1 robot football on a mini walled pitch. Control your robot or make it autonomous and score more goals than your rival.",
    },
    {
      id: "line-robot-junior",
      name: "Line Following Robot — Junior",
      division: "Junior",
      age: "Ages 8–14",
      teamSize: "1 player",
      fee: "300 BDT",
      tag: "Line Following",
      desc: "Build an autonomous robot that follows a black line track with sharp turns and finishes the race in the shortest time.",
    },
    {
      id: "line-robot-senior",
      name: "Line Following Robot — Senior",
      division: "Senior",
      age: "Ages 15–19",
      teamSize: "1 player",
      fee: "300 BDT",
      tag: "Line Following",
      desc: "Fast-speed line following challenge. Tune your light sensors and motor speed to race through difficult curves cleanly.",
    },
    {
      id: "innovative-robot-junior",
      name: "Innovative Project — Junior",
      division: "Junior",
      age: "Ages 8–14",
      teamSize: "1–2 members",
      fee: "600 BDT",
      tag: "RoboBuild",
      desc: "Build an original robot project that solves a city or environment problem. Present your working demo to the judges.",
    },
    {
      id: "innovative-robot-senior",
      name: "Innovative Project — Senior",
      division: "Senior",
      age: "Ages 15–19",
      teamSize: "1–2 members",
      fee: "600 BDT",
      tag: "RoboBuild",
      desc: "Design and build a smart robotics invention for sustainable and green cities. Show your project prototype and live demo.",
    },
    {
      id: "omg-shoot-ball",
      name: "OMG Shoot the Ball — Junior",
      division: "Junior",
      age: "Ages 8–14",
      teamSize: "1 player",
      fee: "300 BDT",
      tag: "Shoot the Ball",
      desc: "A fun one-minute challenge. Your robot must follow the track, pick up ping-pong balls, and shoot them into the goal.",
    },
  ];

  const filteredSegments =
    activeCategory === "All"
      ? segments
      : segments.filter((s) => s.division === activeCategory);

  return (
    <section id="competitions" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            Featured Competition · WRG 2026
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            World Robot Games <br />
            <span className="font-serif italic font-light text-blue-200">Bangladesh round &amp; Japan finals</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
            Inno Expo GL brings you the official Bangladesh qualifying rounds for WRG 2026 in partnership with Tech Autocrats. Pick your game, build your robot, and qualify for the World Finals in Japan.
          </p>
        </AppleReveal>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 sm:px-12 pb-8 flex flex-wrap items-center gap-2">
        <AppleReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Junior", "Senior", "Open"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border ${
                  activeCategory === cat
                    ? "bg-white text-zinc-950 border-white shadow-md shadow-white/10"
                    : "bg-zinc-950/70 text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
              >
                {cat} Category
              </button>
            ))}
          </div>
        </AppleReveal>
      </div>

      {/* Segments 2x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
        {filteredSegments.map((seg, i) => (
          <div
            key={seg.id}
            className="p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left"
          >
            <AppleReveal delay={(i % 3) * 0.1}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300">
                    {seg.division} · {seg.age}
                  </span>
                  <span className="text-xs text-blue-300 font-medium">
                    {seg.fee}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-white mb-2.5">
                  {seg.name}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  {seg.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Users className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{seg.teamSize}</span>
                </span>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Register on Inno Expo GL</span>
                  <ArrowRight className="w-3 h-3 text-zinc-500" />
                </Link>
              </div>
            </AppleReveal>
          </div>
        ))}
      </div>

      {/* Road to Japan 4-Stage Banner */}
      <div className="border-t border-white/[0.08]">
        <div className="p-8 sm:p-12 text-left bg-zinc-950/40">
          <AppleReveal>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-1">
              Road to Japan
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
              Your 4 steps to the world stage
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed mb-8">
              Win in Bangladesh, pack your bags, and take your robot to the World Finals at Chiba Port Arena in Japan (Nov 16–19, 2026).
            </p>
          </AppleReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "1", title: "Sign Up", desc: "Register your team on the Inno Expo GL platform." },
              { num: "2", title: "Build & Test", desc: "Make your robot and test it on the competition field." },
              { num: "3", title: "Win Locally", desc: "Compete and win in the Bangladesh National round." },
              { num: "4", title: "Fly to Japan", desc: "Travel to Japan and compete against global teams." },
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="rounded-xl border border-white/[0.06] bg-zinc-900/40 p-5 text-left"
              >
                <AppleReveal delay={sIdx * 0.1}>
                  <div className="text-xs font-serif text-zinc-500 mb-1.5">Step 0{step.num}</div>
                  <div className="text-sm font-serif text-white mb-1">{step.title}</div>
                  <div className="text-xs text-zinc-400 font-light leading-relaxed">{step.desc}</div>
                </AppleReveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Japan Trip Details */}
      <div className="border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] items-center">
        <div className="lg:col-span-8 p-8 sm:p-12 text-left">
          <AppleReveal>
            <div className="text-xs text-zinc-500 mb-1">Trip to Japan</div>
            <h4 className="text-xl font-serif text-white mb-2">
              More than a tournament — an unforgettable experience.
            </h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Explore Tokyo and Chiba, ride bullet trains, see Japanese robotics labs, and make friends with young builders from around the world.
            </p>
          </AppleReveal>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col gap-3 text-xs text-zinc-300">
          <AppleReveal delay={0.15}>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span><strong className="text-white font-medium">Place:</strong> Chiba Port Arena, Japan</span>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span><strong className="text-white font-medium">Dates:</strong> November 16–19, 2026</span>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span><strong className="text-white font-medium">Partner:</strong> Tech Autocrats</span>
            </div>
          </AppleReveal>
        </div>
      </div>

    </section>
  );
};

export default GlobalCompetitions;
