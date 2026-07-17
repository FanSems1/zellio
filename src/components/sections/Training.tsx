"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Monitor,
  Server,
  Layers,
  Cloud,
  GitBranch,
  Shield,
  Brain,
  BarChart2,
  Smartphone,
  Clock,
  Signal,
  ArrowRight,
} from "lucide-react";
import { trainingPrograms } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Monitor,
  Server,
  Layers,
  Cloud,
  GitBranch,
  Shield,
  Brain,
  BarChart2,
  Smartphone,
};

const categories = [
  "All",
  ...Array.from(new Set(trainingPrograms.map((p) => p.category))),
];

export default function Training() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? trainingPrograms
      : trainingPrograms.filter((p) => p.category === active);

  return (
    <section id="training" className="py-24 lg:py-28 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-4 border border-blue-100">
            Training Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Comprehensive{" "}
            <span className="gradient-text">Digital Training</span>
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            From design to deployment, we offer end-to-end training programs
            that equip you with in-demand digital skills.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                active === cat
                  ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-50 text-[#64748B] hover:bg-blue-50 hover:text-[#2563EB] border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Training Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((program, i) => {
              const Icon = iconMap[program.icon];
              return (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover"
                >
                  {/* Card Header / Image area */}
                  <div
                    className="h-40 flex items-center justify-center overflow-hidden relative"
                    style={{ backgroundColor: program.bgColor }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                    {Icon && (
                      <Icon
                        size={52}
                        className="transition-transform duration-500 group-hover:scale-110"
                        style={{ color: program.color }}
                      />
                    )}
                    {/* Category badge */}
                    <span
                      className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: program.color }}
                    >
                      {program.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                        <Clock size={13} />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                        <Signal size={13} />
                        <span>{program.level}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:gap-3 transition-all duration-300 group/btn">
                      Learn More
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
