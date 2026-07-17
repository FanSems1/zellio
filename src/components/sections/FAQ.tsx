"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";

const faqItems = [
  {
    q: "Who are Digifore's programs designed for?",
    a: "Our programs cater to a wide range of learners — from fresh graduates and career-changers to working professionals and corporate teams. Whether you're starting from scratch or advancing your existing skill set, we have a track built for your level.",
    tag: "Getting Started",
  },
  {
    q: "Do I need prior experience to enroll?",
    a: "Not necessarily. Most of our beginner tracks assume zero prior knowledge. For intermediate or advanced programs, we recommend a brief skills assessment during the consultation phase to ensure you're placed in the right cohort.",
    tag: "Getting Started",
  },
  {
    q: "Are classes held online, offline, or both?",
    a: "We offer full flexibility. You can choose from fully online (live sessions + recorded), fully offline (at our training centers), or a hybrid model. Corporate clients also have the option of on-site training at their premises.",
    tag: "Getting Started",
  },
  {
    q: "How are the training programs structured?",
    a: "Each program consists of live instructor-led sessions, self-paced learning modules, hands-on projects, peer collaboration, and a final capstone assessment. The curriculum is reviewed quarterly with industry advisors to keep content relevant.",
    tag: "Programs",
  },
  {
    q: "Will I receive a certificate after completing a program?",
    a: "Yes. Upon successful completion and passing the assessment, you'll receive a Digifore certificate recognized by our industry partners. Select programs also prepare you for internationally recognized certifications (AWS, Google Cloud, etc.).",
    tag: "Programs",
  },
  {
    q: "Can my company enroll a group of employees?",
    a: "Absolutely. Our Corporate Training package is designed for teams of 5 or more. We offer customized curriculum, dedicated trainers, flexible scheduling, and a company dashboard to track your team's learning progress.",
    tag: "Corporate",
  },
  {
    q: "How much do your training programs cost?",
    a: "Pricing varies by program, duration, and delivery format. We offer individual enrollment, team packages, and corporate bundles. Contact us for a tailored quote — we also have scholarship options for qualified applicants.",
    tag: "Pricing",
  },
  {
    q: "What kind of support will I receive during the program?",
    a: "You'll have access to dedicated mentors, a private community forum, weekly Q&A sessions, and a personal learning advisor for check-ins. We're committed to your success throughout the entire learning journey.",
    tag: "Support",
  },
  {
    q: "Is there a refund or trial policy?",
    a: "We offer a 7-day satisfaction guarantee for individual enrollments. If you're not satisfied within the first week, we'll provide a full refund — no questions asked. Corporate contracts are governed by a separate SLA.",
    tag: "Pricing",
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  "Getting Started": { bg: "#EFF6FF", text: "#2563EB" },
  Programs:         { bg: "#F0FDF4", text: "#16A34A" },
  Corporate:        { bg: "#FFF7ED", text: "#D97706" },
  Pricing:          { bg: "#F5F3FF", text: "#7C3AED" },
  Support:          { bg: "#ECFEFF", text: "#0891B2" },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="section-container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-5 border border-blue-100">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Are we the{" "}
            <span className="gradient-text">right fit</span> for you?
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Everything you need to know before getting started. Can't find the
            answer you're looking for?{" "}
            <a href="#contact" className="text-[#2563EB] font-medium hover:underline">
              Talk to our team.
            </a>
          </p>
        </motion.div>

        {/* ── FAQ accordion — Two Columns ── */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {faqItems.filter((_, i) => i % 2 === 0).map((item, idx) => {
              const i = idx * 2;
              const isOpen = openIndex === i;
              const tag = tagColors[item.tag] ?? tagColors["Getting Started"];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#2563EB]/25 bg-white shadow-lg shadow-blue-50"
                      : "border-gray-100 bg-[#F8FAFC] hover:bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Index number */}
                    <span
                      className={`text-xs font-bold w-6 flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-[#2563EB]" : "text-[#CBD5E1]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span
                      className={`flex-1 text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#2563EB]" : "text-[#0F172A]"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Tag — hidden on mobile */}
                    <span
                      className="hidden xl:inline-flex text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tag.bg, color: tag.text }}
                    >
                      {item.tag}
                    </span>

                    {/* Toggle icon */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#2563EB] text-white shadow-md shadow-blue-400/30"
                          : "bg-white border border-gray-200 text-[#94A3B8]"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-16 pr-6 pb-6">
                          <p className="text-[#64748B] text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqItems.filter((_, i) => i % 2 !== 0).map((item, idx) => {
              const i = idx * 2 + 1;
              const isOpen = openIndex === i;
              const tag = tagColors[item.tag] ?? tagColors["Getting Started"];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#2563EB]/25 bg-white shadow-lg shadow-blue-50"
                      : "border-gray-100 bg-[#F8FAFC] hover:bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Index number */}
                    <span
                      className={`text-xs font-bold w-6 flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-[#2563EB]" : "text-[#CBD5E1]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span
                      className={`flex-1 text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#2563EB]" : "text-[#0F172A]"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Tag — hidden on mobile */}
                    <span
                      className="hidden xl:inline-flex text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tag.bg, color: tag.text }}
                    >
                      {item.tag}
                    </span>

                    {/* Toggle icon */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#2563EB] text-white shadow-md shadow-blue-400/30"
                          : "bg-white border border-gray-200 text-[#94A3B8]"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-16 pr-6 pb-6">
                          <p className="text-[#64748B] text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-[#2563EB]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0F172A]">
                  Still have questions?
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">
                  Our team responds within 1 business day
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              Contact Us
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
