"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Heart,
  Zap,
  TrendingUp,
} from "lucide-react";
import { stats } from "@/lib/data";

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2 select-none tracking-tight">
        {count}{suffix}
      </div>
      <p className="text-sm font-semibold text-slate-500 tracking-wide">{label}</p>
    </motion.div>
  );
}

const coreValues = [
  { icon: Target, title: "Goal-Driven", desc: "Every program is designed to achieve measurable outcomes." },
  { icon: Heart, title: "People First", desc: "We put learners at the center of everything we build." },
  { icon: Zap, title: "Innovation", desc: "Continuously evolving methods and technology." },
  { icon: TrendingUp, title: "Excellence", desc: "Committed to the highest standards of quality." },
];

export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-4">
            About Digifore
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Building the Future of{" "}
            <span className="gradient-text">Digital Talent</span>
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Digifore is a professional digital learning company focused on
            equipping individuals and organizations with the skills needed to
            thrive in the digital economy.
          </p>
        </motion.div>

        {/* Zig-zag Section 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#2563EB]/5 via-transparent to-[#06B6D4]/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shadow-xl shadow-blue-500/20">
                    <span className="text-white text-3xl font-extrabold">DF</span>
                  </div>
                  <p className="text-lg font-semibold text-[#0F172A]">Since 2014</p>
                  <p className="text-sm text-[#64748B] mt-1">Pioneering digital education in Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Who We Are
            </h3>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Founded in 2014, Digifore has grown into one of Indonesia&apos;s
              leading digital training providers. We combine cutting-edge
              curriculum design with industry-experienced trainers to deliver
              programs that make a real impact.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-6">
              Our approach is simple: make high-quality digital education
              accessible, practical, and results-oriented. Whether you&apos;re an
              individual looking to pivot your career or an enterprise seeking to
              upskill your workforce, Digifore has a program tailored for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "500+ Programs delivered",
                "95% Satisfaction rate",
                "100+ Corporate clients",
                "10+ Years of expertise",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#22C55E] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#0F172A]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              Our Core Values
            </h3>
            <p className="text-[#64748B] leading-relaxed">
              Every decision we make is guided by a set of principles that
              reflect our commitment to learners, excellence, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50/50 flex items-center justify-center text-[#2563EB] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{title}</h4>
                <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Statistics (Borderless Layout) */}
        <div className="mt-28 border-t border-b border-slate-100 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 gap-x-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
