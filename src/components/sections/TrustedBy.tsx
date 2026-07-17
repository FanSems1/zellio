"use client";

import { motion } from "framer-motion";
import { trustedCompanies } from "@/lib/data";

const brandColors: Record<string, string> = {
  Google: "#4285F4",
  Microsoft: "#00A4EF",
  Amazon: "#FF9900",
  Meta: "#0082FB",
  Tokopedia: "#42B549",
  Gojek: "#00AA13",
  Traveloka: "#0068EB",
  "Bank BRI": "#003366",
};

function LogoChip({ name, abbrev }: { name: string; abbrev: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm flex-shrink-0 mx-3 select-none cursor-default hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: brandColors[name] ?? "#64748B" }}
      >
        {abbrev.slice(0, 2)}
      </div>
      <span className="text-sm font-semibold text-[#64748B] group-hover:text-[#0F172A] transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function TrustedBy() {
  // Duplicate the array so the marquee loops seamlessly
  const doubled = [...trustedCompanies, ...trustedCompanies];

  return (
    <div className="w-full pb-4">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-semibold text-[#94A3B8] uppercase tracking-[0.2em] mb-8"
      >
        Trusted by Companies &amp; Organizations
      </motion.p>

      {/* Marquee ticker */}
      <div className="overflow-hidden marquee-fade">
        <div className="animate-marquee">
          {doubled.map((company, i) => (
            <LogoChip key={`${company.name}-${i}`} name={company.name} abbrev={company.abbrev} />
          ))}
        </div>
      </div>
    </div>
  );
}
