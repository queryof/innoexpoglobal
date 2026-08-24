"use client";

import React from "react";

export const SuccessStories = () => {
  const stories = [
    {
      name: "Team CyberKinetics",
      title: "WRB Games 2025 Grand Champions",
      institution: "Tokyo Tech & Dhaka Regional Hub",
      quote: "Inno Expo GL’s international qualifiers provided the rigorous technical stage we needed. Winning the Tokyo round accelerated our autonomous drone venture into Y-Combinator.",
      metric: "$1.8M Raised in Seed",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sophia Lin",
      title: "Science Olympiad Gold Medalist",
      institution: "Singapore National Science Academy",
      quote: "The 1-on-1 mentorship with CERN researchers helped refine my low-cost water purification membrane from a lab sketch into a patented deployable system.",
      metric: "Patent Granted & MIT Admit",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Arjun Mehta & Team NeuralSync",
      title: "CSE Hackathon Global 1st Place",
      institution: "IIT Bombay & London Hub",
      quote: "We built an open-source real-time brain-computer interface algorithm over 48 hours. The mentorship and cloud grants were invaluable.",
      metric: "12,000+ GitHub Stars",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="stories" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
          Alumni &amp; Impact
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
          Stories of breakthrough <br />
          <span className="font-serif italic font-light text-blue-200">success &amp; inventions</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
          See how past participants used Inno Expo GL competitions and fellowships as launchpads for patents, university admissions, and venture startups.
        </p>
      </div>

      {/* 3 Columns with Vertical Grid Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
        {stories.map((story, i) => (
          <div
            key={i}
            className="p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left"
          >
            <div>
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-white/[0.08]">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-blue-200 border border-white/10">
                  {story.metric}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6 italic">
                "{story.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <h3 className="text-base font-serif text-white mb-0.5">
                {story.name}
              </h3>
              <div className="text-xs text-zinc-400 font-light">{story.title}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{story.institution}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SuccessStories;
