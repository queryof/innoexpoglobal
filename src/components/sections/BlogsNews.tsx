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
    <section id="news" className="relative z-10 w-full border-t border-zinc-200 bg-white text-zinc-900">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            News &amp; Guides
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-950 tracking-tight leading-[1.15]">
            Helpful tips, guides &amp; <br />
            <span className="font-serif italic font-light text-blue-600">competition news</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal mt-4 leading-relaxed">
            Read simple guides on building your robot, downloading rulebooks, and getting ready for match day.
          </p>
        </AppleReveal>
      </div>

      {/* 3 Articles Grid (Light Theme) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
        {articles.map((article, i) => (
          <div
            key={i}
            className="p-8 sm:p-10 transition-colors duration-200 hover:bg-zinc-50/70 flex flex-col justify-between text-left"
          >
            <AppleReveal delay={i * 0.15}>
              <div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-zinc-200 shadow-xs">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[11px] font-medium text-zinc-800 border border-zinc-200 shadow-xs">
                    {article.category}
                  </div>
                </div>

                <div className="text-xs text-zinc-400 mb-2">
                  {article.date} · {article.readTime}
                </div>

                <h3 className="text-base sm:text-lg font-serif text-zinc-950 mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-600 font-normal leading-relaxed mb-6">
                  {article.snippet}
                </p>
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-xs font-medium text-zinc-900 hover:text-blue-600 transition-colors duration-150 pt-4 border-t border-zinc-100"
              >
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </Link>
            </AppleReveal>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BlogsNews;
