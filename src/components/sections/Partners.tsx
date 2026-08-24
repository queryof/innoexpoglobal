"use client";

import React from "react";

export const Partners = () => {
  const partners = [
    { name: "Tokyo Institute of Technology", category: "Academic Partner", location: "Tokyo, Japan" },
    { name: "Global Robotics Federation", category: "Governing Body", location: "Zurich, Switzerland" },
    { name: "CERN Open Science Network", category: "Research Alliance", location: "Geneva, Switzerland" },
    { name: "MIT CSAIL Alumni Network", category: "Innovation Partner", location: "Cambridge, USA" },
    { name: "Singapore Science Academy", category: "Regional Hub", location: "Singapore" },
    { name: "Asian Robotics League", category: "Qualifier Partner", location: "Dhaka & Bangkok" },
  ];

  return (
    <section id="partners" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
          Global Alliance
        </p>
        <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight leading-[1.15]">
          Supported by leading universities, <br />
          <span className="font-serif italic font-light text-blue-200">laboratories &amp; enterprise allies</span>
        </h2>
      </div>

      {/* 6 Partners Grid with Vertical Dividers */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="p-6 sm:p-8 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col items-start text-left"
          >
            <h3 className="text-xs font-serif text-white mb-1.5 leading-snug">
              {partner.name}
            </h3>
            <div className="text-[11px] text-zinc-400 font-light">{partner.category}</div>
            <div className="text-[10px] text-zinc-500 mt-1">{partner.location}</div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Partners;
