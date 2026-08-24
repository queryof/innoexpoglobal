import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ShaderBackground } from "@/components/ui/waves-background";
import ScrollToTop from "@/components/ui/scroll-to-top";

// Landing Page Sections
import AboutUs from "@/components/sections/AboutUs";
import WhatWeDo from "@/components/sections/WhatWeDo";
import GlobalCompetitions from "@/components/sections/GlobalCompetitions";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import BlogsNews from "@/components/sections/BlogsNews";
import GetInvolved from "@/components/sections/GetInvolved";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f7ff] text-zinc-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white relative">
      
      {/* 1. Fixed Floating Glass Pill Header */}
      <Header />

      {/* 2. Unified Hero Backdrop with Light Sky Shader Flow */}
      <div className="relative w-full overflow-hidden">
        {/* Waves Animation: Soft sky waves fading into pure white */}
        <div className="absolute inset-x-0 top-0 h-[620px] sm:h-[680px] pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_80%_75%_at_50%_15%,black_30%,rgba(0,0,0,0.5)_60%,transparent_85%)]">
          <ShaderBackground className="w-full h-full opacity-80" />
        </div>

        {/* Ambient Sky Blue Glow Base */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[720px] h-[450px] bg-blue-500/10 blur-[120px] rounded-full"
        />

        {/* Soft Light Fade Layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-[720px] bg-[radial-gradient(ellipse_90%_80%_at_50%_30%,transparent_30%,rgba(240,247,255,0.7)_65%,#f0f7ff_95%)]"
        />

        {/* Hero Content */}
        <Hero />
      </div>

      {/* 3. Structured Architectural Grid Sections */}
      <div className="relative z-10 w-full max-w-7xl mx-auto border-x border-zinc-200">
        
        {/* 1. About Us Section */}
        <AboutUs />

        {/* 2. What We Do Section */}
        <WhatWeDo />

        {/* 3. Global Competitions (WRG 2026 Segments & Road to Japan) */}
        <GlobalCompetitions />

        {/* 4. Upcoming Events & Schedules */}
        <UpcomingEvents />

        {/* 5. Blogs & Editorial News */}
        <BlogsNews />

        {/* 6. Get Involved Pathways */}
        <GetInvolved />

        {/* 7. Structured 2-Column FAQ Section with Vertical Divider */}
        <FAQ />

        {/* 8. Final High-Impact CTA Banner */}
        <FinalCTA />
      </div>

      {/* Atmospheric Footer */}
      <Footer />

      {/* Go To Top & Scroll Pointer Progress Ring */}
      <ScrollToTop />
    </main>
  );
}
