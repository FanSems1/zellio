"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import TrustedBy from "./TrustedBy";

const floatingCards = [
  { label: "150+ Projects Delivered", delay: 0, accent: "#2563EB" },
  { label: "Elite Tech Team", delay: 1, accent: "#9FA1FF" },
  { label: "Scalable Architecture", delay: 2, accent: "#2563EB" },
  { label: "99.9% System Uptime", delay: 0.5, accent: "#9FA1FF" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
    >
      {/* Background: blue stays dominant, lavender + mint as soft accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-[#E8E9FF]/20" />
      {/* Blue glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/60 to-[#B5BAFF]/20 blur-3xl -translate-y-1/3 translate-x-1/4" />
      {/* Mint glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#D9F9DF]/50 to-[#9FA1FF]/15 blur-3xl translate-y-1/3 -translate-x-1/4" />
      {/* Lavender center-right accent */}
      <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] rounded-full bg-[#9FA1FF]/10 blur-3xl" />

      <div className="section-container relative z-10 pt-12 lg:pt-20 pb-8 flex flex-col gap-16 lg:gap-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge – Blue with mint dot */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs font-semibold text-[#2563EB] tracking-wide uppercase">
                  Available for New Projects
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] text-[#0F172A] mb-6">
                Transforming Ideas
                <br />
                Into{" "}
                <span className="gradient-text">Premium Software</span>
              </h1>

              <p className="text-lg text-[#64748B] leading-relaxed max-w-lg mb-8">
                Digifore is a top-tier software house delivering custom websites, 
                high-performance dashboards, and robust IT systems for enterprises and startups.
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Primary CTA – Blue */}
                <a
                  href="#services"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </a>
                {/* Secondary CTA – lavender outline */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#2563EB] font-semibold rounded-2xl border border-[#B5BAFF] hover:border-[#9FA1FF] hover:bg-[#E8E9FF]/40 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right – Illustration & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Main illustration */}
            <div className="relative w-full max-w-[520px] aspect-square">
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-100/60 via-[#B5BAFF]/20 to-[#D9F9DF]/30 blur-xl" />
              <Image
                src="/hero-illustration.png"
                alt="Digital learning platform illustration"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className={`absolute z-20 ${
                  i === 0
                    ? "top-4 -left-2 sm:left-0"
                    : i === 1
                    ? "top-1/4 -right-2 sm:right-0"
                    : i === 2
                    ? "bottom-1/4 -left-2 sm:left-0"
                    : "bottom-4 -right-2 sm:right-0"
                }`}
                style={{
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${card.delay}s`,
                }}
              >
                <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100/80">
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0"
                    style={{ color: card.accent }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-[#0F172A] whitespace-nowrap">
                    {card.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Embedded Trusted By Section */}
        <TrustedBy />
      </div>
    </section>
  );
}
