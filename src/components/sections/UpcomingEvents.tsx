"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const UpcomingEvents = () => {
  const events = [
    {
      title: "Bangladesh National Qualifier Round",
      category: "National Round",
      dateShort: "TBD",
      day: "2026",
      status: "Date coming soon · Sign up early",
      location: "Dhaka, Bangladesh",
      time: "Full Day Event",
    },
    {
      title: "World Robot Games 2026 International Finals",
      category: "World Championship",
      dateShort: "Nov",
      day: "16–19",
      status: "Qualified Teams Only",
      location: "Chiba Port Arena, Japan",
      time: "4-Day Global Tournament",
    },
  ];

  return (
    <section id="events" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            Schedule
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            Two big rounds. <br />
            <span className="font-serif italic font-light text-blue-200">one world stage.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
            Here are the key tournament dates. Sign up on Inno Expo GL to get ready.
          </p>
        </AppleReveal>
      </div>

      {/* Events List */}
      <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
        {events.map((evt, i) => (
          <div
            key={i}
            className="p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center text-left"
          >
            {/* Date Block */}
            <div className="lg:col-span-3">
              <AppleReveal delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-20 rounded-xl bg-white/[0.04] border border-white/[0.06] p-2.5 text-center shrink-0">
                    <div className="text-[10px] text-zinc-400 font-medium uppercase">
                      {evt.dateShort}
                    </div>
                    <div className="text-xl font-serif text-white">
                      {evt.day}
                    </div>
                    <div className="text-[9px] text-zinc-500">2026</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500">{evt.category}</div>
                    <div className="text-xs text-blue-300 font-light mt-0.5">{evt.status}</div>
                  </div>
                </div>
              </AppleReveal>
            </div>

            {/* Title & Info */}
            <div className="lg:col-span-6">
              <AppleReveal delay={i * 0.15}>
                <h3 className="text-lg sm:text-xl font-serif text-white mb-2">
                  {evt.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-light">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{evt.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{evt.time}</span>
                  </span>
                </div>
              </AppleReveal>
            </div>

            {/* CTA Button */}
            <div className="lg:col-span-3 flex lg:justify-end">
              <AppleReveal delay={i * 0.2}>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white backdrop-blur-md px-5 py-2.5 border border-white/15 text-xs sm:text-sm font-medium transition-all hover:border-white/25 active:scale-95 shadow-lg shadow-black/40"
                >
                  <span>Register Team</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-300" />
                </Link>
              </AppleReveal>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default UpcomingEvents;
