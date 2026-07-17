"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rizky Pratama",
    position: "Senior Frontend Developer",
    company: "Tokopedia",
    avatar: "/avatar-rizky.png",
    rating: 5,
    review:
      "DIGIFORE's React & Next.js program completely transformed my career. The hands-on projects and mentorship from certified instructors gave me the confidence to land a senior role at a top tech company.",
  },
  {
    id: 2,
    name: "Sari Dewi Kusuma",
    position: "UI/UX Designer",
    company: "Gojek",
    avatar: "/avatar-sari.png",
    rating: 5,
    review:
      "The UI/UX Design program is world-class. I went from zero design knowledge to building a full design system used by a product team of 50. The curriculum is practical and deeply industry-aligned.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "DevOps Engineer",
    company: "Bank BCA",
    avatar: "/avatar-budi.png",
    rating: 5,
    review:
      "DIGIFORE helped our entire IT team upskill in cloud and DevOps. The corporate training package was flexible, well-structured, and immediately applicable to our infrastructure modernization project.",
  },
  {
    id: 4,
    name: "Anisa Rahman",
    position: "Data Scientist",
    company: "Traveloka",
    avatar: "/avatar-anisa.png",
    rating: 5,
    review:
      "Outstanding data science curriculum. From Python fundamentals to deploying ML models in production — every concept is taught with industry context. I now lead a team of 8 data engineers.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-4 border border-blue-100">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            What Our Learners Say
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Real results from real people who transformed their careers with
            Digifore.
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: 50 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 * direction }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] rounded-3xl bg-[#F8FAFC] border border-gray-100 overflow-hidden shadow-sm"
            >
              {/* Left — Photo */}
              <div className="relative h-56 md:h-auto bg-gradient-to-br from-blue-50 to-cyan-50">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
                {/* Overlay gradient on bottom for mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#F8FAFC]/20" />
              </div>

              {/* Right — Content */}
              <div className="p-7 sm:p-8 lg:p-10 flex flex-col justify-center relative">
                {/* Quote decoration */}
                <Quote
                  size={48}
                  className="absolute top-6 right-6 text-blue-100/60 rotate-180"
                  fill="currentColor"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-medium mb-6 relative z-10">
                  &ldquo;{t.review}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0F172A]">{t.name}</div>
                    <div className="text-xs text-[#64748B]">
                      {t.position} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Avatar pills — shows all reviewers */}
            <div className="hidden sm:flex items-center gap-2">
              {testimonials.map((person, i) => (
                <button
                  key={person.id}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    i === current
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={person.avatar}
                      alt={person.name}
                      width={24}
                      height={24}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span
                    className={`text-xs font-medium whitespace-nowrap ${
                      i === current ? "text-[#2563EB]" : "text-[#64748B]"
                    }`}
                  >
                    {person.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile dots */}
            <div className="flex sm:hidden gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2.5 bg-[#2563EB]"
                      : "w-2.5 h-2.5 bg-gray-200"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB] transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB] transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
