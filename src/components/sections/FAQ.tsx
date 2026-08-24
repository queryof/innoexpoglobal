"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Plus, Minus, ArrowRight } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

interface FAQItem {
  id: string;
  category: "General" | "Games" | "Rules" | "Japan Trip" | "Registration";
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    category: "General",
    question: "What is World Robot Games (WRG 2026)?",
    answer:
      "World Robot Games is an international robotics tournament for students and young builders. The 2026 theme is 'RoboBuild: Engineering Sustainable Cities', where teams build robots to solve fun games and environmental challenges.",
  },
  {
    id: "2",
    category: "Registration",
    question: "How do I register my team?",
    answer:
      "You can register directly on the InnoExpo GL website. Choose your game category, enter your team member details, and submit your registration.",
  },
  {
    id: "3",
    category: "Japan Trip",
    question: "When and where is the Japan International Round?",
    answer:
      "The 2026 World Finals will be held at Chiba Port Arena in Japan from November 16 to 19, 2026. Top winners from the Bangladesh round will travel to Japan to compete.",
  },
  {
    id: "4",
    category: "Games",
    question: "What game categories can I join?",
    answer:
      "You can join Soccer Robot 1x1 (ages 8–99), Line Following Robot (Junior 8–14 and Senior 15–19), Innovative Project (Junior & Senior), and OMG Shoot the Ball (Junior 8–14).",
  },
  {
    id: "5",
    category: "Rules",
    question: "Where can I find the official rulebooks?",
    answer:
      "Every game has clear rules explaining robot dimensions, weight limits, and playing field measurements. You can read and download the rulebooks before joining.",
  },
  {
    id: "6",
    category: "Registration",
    question: "How much is the registration fee?",
    answer:
      "Solo player categories (like Soccer 1x1, Line Robot, and Shoot the Ball) are 300 BDT. Team project categories (like Innovative Project for 1–2 members) are 600 BDT.",
  },
];

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "1": true });

  const categories = ["All", "General", "Games", "Rules", "Japan Trip", "Registration"];

  const filteredFAQs =
    activeCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="relative z-10 w-full border-t border-zinc-200 bg-[#f0f7ff] text-zinc-900">
      {/* 2-Column Structured Grid Layout (Light Theme) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
        
        {/* Left Column */}
        <div className="lg:col-span-5 py-20 sm:py-28 px-6 sm:px-12 flex flex-col justify-between text-left lg:sticky lg:top-24 h-full">
          <AppleReveal>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
                FAQ
              </p>

              <h2 className="text-3xl sm:text-5xl font-serif text-zinc-950 tracking-tight leading-[1.15] mb-4">
                Frequently <br />
                <span className="font-serif italic font-light text-blue-600">asked questions</span>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-8">
                Got questions about the competition, rules, or the Japan trip? Find quick and simple answers here.
              </p>
            </div>

            {/* "Still have questions?" Card */}
            <Link
              href="/contact"
              className="group rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 backdrop-blur-xl transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-100/80 shadow-xs flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shadow-2xs">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors">
                    Still have questions?
                  </div>
                  <div className="text-[11px] text-zinc-500 font-normal">
                    Send our team a message
                  </div>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </AppleReveal>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 py-20 sm:py-28 px-6 sm:px-12 flex flex-col gap-6 text-left">
          
          {/* Filter Pills Bar */}
          <AppleReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border ${
                    activeCategory === cat
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-xs"
                      : "bg-zinc-100 text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-200/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AppleReveal>

          {/* Rounded Accordion Box */}
          <AppleReveal delay={0.2}>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-2 sm:p-4 backdrop-blur-xl shadow-xs divide-y divide-zinc-200">
              {filteredFAQs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div key={faq.id} className="p-4 sm:p-5 transition-colors">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between gap-4 text-left group"
                    >
                      <span className="text-sm sm:text-base font-serif text-zinc-950 group-hover:text-blue-600 transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-zinc-950 shrink-0 transition-all shadow-2xs">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pt-3.5 pr-8 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </AppleReveal>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
