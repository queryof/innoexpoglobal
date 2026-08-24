"use client";

import React from "react";
import { Cpu, Globe, Orbit, Radio, Zap } from "lucide-react";

export const HeroIllustration = () => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center select-none pointer-events-none sm:pointer-events-auto">
      {/* Background Soft Blue Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-blue-500/15 blur-[90px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="absolute w-3/4 h-3/4 bg-cyan-400/10 blur-[80px] rounded-full"
      />

      {/* Main SVG Container */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_40px_rgba(59,130,246,0.25)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#2563eb" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Keyframe pulse animation in SVG */}
          <style>{`
            @keyframes spinClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes spinCounter {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            @keyframes floatCore {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes pulseRing {
              0%, 100% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.03); opacity: 0.9; }
            }
            .animate-spin-cw {
              transform-origin: 250px 250px;
              animation: spinClockwise 35s linear infinite;
            }
            .animate-spin-ccw {
              transform-origin: 250px 250px;
              animation: spinCounter 28s linear infinite;
            }
            .animate-float-core {
              transform-origin: 250px 250px;
              animation: floatCore 5s ease-in-out infinite;
            }
            .animate-pulse-ring {
              transform-origin: 250px 250px;
              animation: pulseRing 6s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx="250" cy="250" r="160" fill="url(#centerGlow)" />

        {/* Outer Minimal Geometric Target Grid */}
        <circle
          cx="250"
          cy="250"
          r="215"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Outer Orbit Ring 1 (Rotating Clockwise) */}
        <g className="animate-spin-cw">
          <circle
            cx="250"
            cy="250"
            r="190"
            stroke="url(#orbitGrad1)"
            strokeWidth="1.5"
            strokeDasharray="140 30 60 50"
          />
          {/* Orbital Satellite Node 1 */}
          <circle cx="440" cy="250" r="4.5" fill="#38bdf8" className="shadow-lg" />
          <circle cx="440" cy="250" r="8" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
          
          <circle cx="60" cy="250" r="3.5" fill="#60a5fa" />
        </g>

        {/* Inner Orbit Ring 2 (Rotating Counter-Clockwise) */}
        <g className="animate-spin-ccw">
          <circle
            cx="250"
            cy="250"
            r="145"
            stroke="url(#orbitGrad2)"
            strokeWidth="1.5"
            strokeDasharray="90 40 40 40"
          />
          {/* Orbital Satellite Node 2 */}
          <circle cx="250" cy="105" r="4" fill="#60a5fa" />
          <circle cx="250" cy="395" r="3" fill="#93c5fd" />
        </g>

        {/* Diagonal Elliptical Orbits */}
        <ellipse
          cx="250"
          cy="250"
          rx="175"
          ry="75"
          stroke="rgba(56, 189, 248, 0.25)"
          strokeWidth="1"
          transform="rotate(45 250 250)"
          className="animate-pulse-ring"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="175"
          ry="75"
          stroke="rgba(99, 102, 241, 0.2)"
          strokeWidth="1"
          transform="rotate(-45 250 250)"
        />

        {/* Crosshair Coordinate Rays */}
        <line x1="250" y1="25" x2="250" y2="65" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="250" y1="435" x2="250" y2="475" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="25" y1="250" x2="65" y2="250" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="435" y1="250" x2="475" y2="250" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />

        {/* Central Geometric Tech Core (Floating) */}
        <g className="animate-float-core">
          {/* Outer Hexagon / Prism wireframe */}
          <polygon
            points="250,175 315,212 315,288 250,325 185,288 185,212"
            stroke="rgba(96, 165, 250, 0.5)"
            strokeWidth="1.5"
            fill="rgba(15, 23, 42, 0.75)"
          />

          {/* Inner Hexagon Facet Lines */}
          <line x1="250" y1="175" x2="250" y2="250" stroke="rgba(147, 197, 253, 0.6)" strokeWidth="1" />
          <line x1="315" y1="212" x2="250" y2="250" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1" />
          <line x1="315" y1="288" x2="250" y2="250" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
          <line x1="250" y1="325" x2="250" y2="250" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1" />
          <line x1="185" y1="288" x2="250" y2="250" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
          <line x1="185" y1="212" x2="250" y2="250" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1" />

          {/* Radiant Center Node */}
          <circle cx="250" cy="250" r="14" fill="url(#coreGlow)" />
          <circle cx="250" cy="250" r="6" fill="#ffffff" />
          <circle cx="250" cy="250" r="22" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1" strokeDasharray="3 3" />
        </g>
      </svg>

      {/* Floating Minimal HUD Badges (Glassmorphism) */}
      {/* Badge 1: Robotics Summit */}
      <div className="absolute -top-1 right-2 sm:right-6 bg-zinc-950/80 border border-white/15 backdrop-blur-xl px-3 py-1.5 rounded-xl shadow-xl shadow-black/60 flex items-center gap-2 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"></span>
        <span className="text-[11px] font-medium text-zinc-200">WRB Robotics 2026</span>
      </div>

      {/* Badge 2: Science & CSE Olympiad */}
      <div className="absolute -bottom-2 left-2 sm:left-6 bg-zinc-950/80 border border-white/15 backdrop-blur-xl px-3 py-1.5 rounded-xl shadow-xl shadow-black/60 flex items-center gap-2">
        <Cpu className="w-3.5 h-3.5 text-blue-400" />
        <span className="text-[11px] font-medium text-zinc-200">CSE &amp; AI Olympiad</span>
      </div>
    </div>
  );
};

export default HeroIllustration;
