"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import TrustedBy from "./TrustedBy";

const floatingCards = [
  { label: "100+ Training Programs", delay: 0 },
  { label: "Certified Trainers", delay: 1 },
  { label: "Online & Offline Classes", delay: 2 },
  { label: "Industry Certification", delay: 0.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/50 to-cyan-100/30 blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-50/60 to-purple-50/30 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="section-container relative z-10 pt-12 lg:pt-20 pb-8 flex flex-col gap-16 lg:gap-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs font-semibold text-[#2563EB] tracking-wide uppercase">
                  Enrollment Open for 2025
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] text-[#0F172A] mb-6">
                Empowering People
                <br />
                Through{" "}
                <span className="gradient-text">Digital Learning</span>
              </h1>

              <p className="text-lg text-[#64748B] leading-relaxed max-w-lg mb-8">
                Digifore helps individuals and companies improve digital
                competencies through professional training programs — online and
                offline, from beginner to expert.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#training"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  Explore Training
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0F172A] font-semibold rounded-2xl border border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/50 shadow-sm hover:shadow-md transition-all duration-200"
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
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-100/60 to-cyan-100/40 blur-xl" />
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
                    className="text-[#22C55E] flex-shrink-0"
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
