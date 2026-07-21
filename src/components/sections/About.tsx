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
      initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="text-center"
    >
      <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#9FA1FF] to-[#2563EB] mb-2 select-none tracking-tight">
        {count}{suffix}
      </div>
      <p className="text-sm font-semibold text-slate-500 tracking-wide">{label}</p>
    </motion.div>
  );
}

const coreValues = [
  { icon: Target, title: "Client Success", desc: "We build IT systems that directly drive business growth and productivity." },
  { icon: Heart, title: "User-Centric", desc: "We prioritize intuitive, fast, and accessible user interfaces in every project." },
  { icon: Zap, title: "Modern Tech", desc: "We leverage cutting-edge tech stacks for performance and scalability." },
  { icon: TrendingUp, title: "Elite Quality", desc: "We adhere to strict coding standards to deliver clean and secure codebases." },
];

export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-100">
            About Digifore
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Building the Future of{" "}
            <span className="gradient-text">Digital Systems</span>
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Digifore is a premium software development agency providing end-to-end IT services
            to help businesses scale through robust digital platforms.
          </p>
        </motion.div>

        {/* Zig-zag Section 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#2563EB]/5 via-transparent to-[#06B6D4]/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#9FA1FF] to-[#2563EB] flex items-center justify-center shadow-xl shadow-violet-500/20">
                    <span className="text-white text-3xl font-extrabold">DF</span>
                  </div>
                  <p className="text-lg font-semibold text-[#0F172A]">Since 2018</p>
                  <p className="text-sm text-[#64748B] mt-1">Pioneering digital innovation in Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Who We Are
            </h3>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Founded in 2018, Digifore has grown into one of Indonesia&apos;s
              leading software development houses. We combine cutting-edge
              technologies with top-tier engineers to deliver systems that drive real business impact.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-6">
              Our approach is simple: write clean code, focus on pixel-perfect UI/UX, and deploy robust architectures. 
              Whether you need a custom corporate dashboard, a mobile application, or a full enterprise system, 
              we build solutions tailored for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "150+ Projects delivered",
                "98% Client satisfaction rate",
                "50+ Enterprise clients",
                "8+ Years of expertise",
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
        <div className="mb-28 p-8 sm:p-12 lg:p-16 rounded-[40px] bg-gradient-to-b from-slate-50 to-white border border-slate-100/80 shadow-sm relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          {/* Ambient Glows */}
          <div className="absolute -top-48 -left-48 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-48 -right-48 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Section Header (Full Width at Top) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mb-12 sm:mb-16"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-[10px] font-black uppercase tracking-widest mb-3 border border-blue-100">
                Our Core DNA
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
                Driven by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#9FA1FF] to-[#2563EB]">
                  Values
                </span>
              </h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-medium">
                Every decision we make is guided by a set of principles that
                reflect our commitment to clients, coding excellence, and technology innovation.
              </p>
            </motion.div>

            {/* Split Grid */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
              {/* Left Column (Typographic Interactive List) */}
              <div className="border-t border-slate-100/60 divide-y divide-slate-100/60">
                {coreValues.map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                    className="py-6 sm:py-7 group relative cursor-pointer overflow-hidden transition-all duration-300 flex items-center gap-6 pl-4 pr-4 hover:pl-8"
                  >
                    {/* Hover Slide Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-indigo-500/[0.01] to-transparent -z-10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-10 bg-gradient-to-b from-[#2563EB] to-[#9FA1FF] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-full" />

                    {/* Serial Number */}
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#E2E8F0] group-hover:text-[#2563EB] transition-colors duration-300 shrink-0">
                      0{i + 1}
                    </span>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-br group-hover:from-[#2563EB] group-hover:to-[#9FA1FF] group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 shrink-0">
                      <Icon size={20} className="transition-transform duration-300 group-hover:rotate-[15deg]" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-black text-[#0F172A] mb-1 tracking-tight transition-colors duration-300 group-hover:text-[#2563EB]">
                        {title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-medium transition-colors duration-300 group-hover:text-[#475569]">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column (IDE Mockup) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex items-start justify-center lg:mt-2"
              >
                {/* Premium IDE Mockup */}
                <div className="relative rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl p-6 sm:p-8 overflow-hidden font-mono text-xs sm:text-[13px] text-slate-400 w-full max-w-lg">
                  {/* Title bar */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold select-none">core-dna.config.ts</span>
                    <div className="w-8" />
                  </div>
                  {/* Code Content */}
                  <div className="space-y-2 leading-relaxed select-none">
                    <div className="text-slate-500">// Digifore Core Quality Standards</div>
                    <div>
                      <span className="text-[#F43F5E]">const</span>{" "}
                      <span className="text-[#38BDF8]">projectConfig</span> = {"{"}
                    </div>
                    <div className="pl-4">
                      <span className="text-[#34D399]">clientFirst</span>:{" "}
                      <span className="text-[#FB923C]">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#34D399]">cleanCode</span>:{" "}
                      <span className="text-[#FB923C]">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#34D399]">techStack</span>: [
                      <span className="text-[#FB923C]">&apos;React&apos;</span>,{" "}
                      <span className="text-[#FB923C]">&apos;Next.js&apos;</span>,{" "}
                      <span className="text-[#FB923C]">&apos;Tailwind&apos;</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#34D399]">coverage</span>:{" "}
                      <span className="text-[#FB923C]">&apos;98%&apos;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#34D399]">deployment</span>:{" "}
                      <span className="text-[#FB923C]">&apos;Automated CI/CD&apos;</span>
                    </div>
                    <div>{"};"}</div>
                    
                    <div className="pt-3 border-t border-slate-800/80 text-slate-500">// Running checks...</div>
                    <div className="flex items-center gap-2 text-[#10B981]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                      <span>[PASS] Clean Code Standard Verified</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#38BDF8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                      <span>[INFO] Ready to scale-up securely</span>
                    </div>
                  </div>

                  {/* Ambient glow in background */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-[#38BDF8]/10 blur-xl pointer-events-none" />
                </div>
              </motion.div>
            </div>
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
