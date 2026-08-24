"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative z-10 w-full text-zinc-900 pt-28 sm:pt-36 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Moto Badge (Light Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/90 px-4 py-1.5 backdrop-blur-xl shadow-sm mb-8 hover:border-zinc-300 transition-all group"
        >
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
            MOTO
          </span>
          <span className="text-xs text-zinc-700 font-medium">
            Dare to think different
          </span>
        </motion.div>

        {/* Hero Headline (Light Theme) */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif text-zinc-950 tracking-tight leading-[1.15] mb-6"
        >
          Build. Connect. <br />
          <span className="inline-block mt-2 sm:mt-1 px-5 py-1 sm:px-6 sm:py-1.5 rounded-2xl sm:rounded-3xl bg-blue-50/90 border border-blue-200/80 text-blue-700 backdrop-blur-xl shadow-xs font-serif italic font-light">
            Move forward.
          </span>
        </motion.h1>

        {/* Subtitle in Crisp Light Mode Typography */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed mb-10"
        >
          InnoExpo GL is a pupil-led non-profit innovation platform committed to making STEM education accessible. We help students turn ideas into real-world solutions through mentorship, free project materials, and global competition stages.
        </motion.p>

        {/* Action Buttons (Light Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#what-we-do"
            className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 backdrop-blur-xl px-6 py-3 border border-zinc-200 text-xs sm:text-sm font-medium transition-all hover:border-zinc-300 active:scale-95 shadow-sm"
          >
            <Compass className="w-4 h-4 text-blue-600" />
            <span>What We Do</span>
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 text-white hover:bg-zinc-800 px-6 py-3 text-xs sm:text-sm font-semibold transition-all shadow-md shadow-zinc-900/10 active:scale-95"
          >
            <span>Join InnoExpo GL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
