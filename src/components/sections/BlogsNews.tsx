"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const BlogsNews = () => {
  const articles = [
    {
      title: "2026 Game Rules & Field Sizes Now Available",
      category: "Rulebooks",
      date: "April 18, 2026",
      readTime: "3 min read",
      snippet: "Find out the exact robot sizes, weight limits, and playing field measurements for Soccer and Line Robot challenges.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "5 Tips to Build a Fast Line-Following Robot",
      category: "Guide",
      date: "April 10, 2026",
      readTime: "4 min read",
      snippet: "Learn how to position your light sensors, adjust motor speeds, and keep your robot stable around sharp turns.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "What to Look Forward to in Japan",
      category: "Japan Finals",
      date: "March 28, 2026",
      readTime: "3 min read",
      snippet: "What it is like competing at Chiba Port Arena, meeting international teams, and discovering Japan's robot culture.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="news" className="relative z-10 w-full border-t border-white/[0.08] bg-black text-white">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            News &amp; Guides
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15]">
            Helpful tips, guides &amp; <br />
            <span className="font-serif italic font-light text-blue-200">competition news</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-4 leading-relaxed">
            Read simple guides on building your robot, downloading rulebooks, and getting ready for match day.
          </p>
        </AppleReveal>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
        {articles.map((article, i) => (
          <div
            key={i}
            className="p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02] flex flex-col justify-between text-left"
          >
            <AppleReveal delay={i * 0.15}>
              <div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-white/[0.08]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[11px] text-zinc-300 border border-white/10">
                    {article.category}
                  </div>
                </div>

                <div className="text-xs text-zinc-500 mb-2">
                  {article.date} · {article.readTime}
                </div>

                <h3 className="text-base sm:text-lg font-serif text-white mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  {article.snippet}
                </p>
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors duration-150 pt-4 border-t border-white/[0.06]"
              >
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
            </AppleReveal>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BlogsNews;
