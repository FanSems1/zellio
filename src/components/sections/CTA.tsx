"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#06B6D4]/10 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
            <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest">
              Start Today
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Digital Talent?
            </span>
          </h2>

          <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
            Help your team improve digital skills through professional training.
            Join 100+ companies already growing with Digifore.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#training"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Explore Training
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <Mail size={18} />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
