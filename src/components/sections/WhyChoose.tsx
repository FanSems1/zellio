"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BadgeCheck,
  ClipboardList,
  MessageSquare,
  ClipboardCheck,
  Award,
  CheckCircle2,
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Palette,
} from "lucide-react";
import { whyChooseItems, learningSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  BadgeCheck,
  ClipboardList,
  MessageSquare,
  ClipboardCheck,
  Award,
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Palette,
};

// ══════════════════════════════════════
// MOCKUP PREVIEW COMPONENTS
// ══════════════════════════════════════

function ConsultationMockup() {
  return (
    <div className="w-full h-full bg-white/40 backdrop-blur-3xl rounded-[32px] border border-white/60 shadow-[inset_0_0_20px_rgba(255,255,255,0.8)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px]"></div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-sm bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-8 border border-gray-100 relative z-10"
      >
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-blue-100">
          <MessageSquare className="text-blue-600" size={32} />
        </div>
        <h4 className="text-center text-lg font-extrabold text-slate-800 mb-2">Project Discovery</h4>
        <p className="text-center text-sm text-slate-500 mb-8">Discussing custom dashboard requirements & technical scope.</p>
        
        <div className="space-y-3 bg-slate-50 p-4 rounded-2xl mb-4 border border-slate-100">
          <div className="flex justify-between text-xs font-semibold text-slate-600">
            <span>Primary Focus:</span>
            <span className="text-blue-600">Admin Dashboard</span>
          </div>
          <div className="flex justify-between text-xs font-semibold text-slate-600">
            <span>Timeline Goal:</span>
            <span className="text-blue-600">8 Weeks</span>
          </div>
        </div>
        
        <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
          Book Kickoff Call
        </button>
      </motion.div>
    </div>
  );
}

function DesignMockup() {
  return (
    <div className="w-full h-full bg-slate-100/50 backdrop-blur-xl rounded-[32px] border border-white/60 flex flex-col p-6 relative overflow-hidden items-center justify-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-sm h-full max-h-[360px] bg-white rounded-3xl border border-gray-100 shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden"
      >
        {/* Figma Header */}
        <div className="h-12 border-b border-gray-100 flex items-center justify-between px-5 bg-white z-10 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-violet-600 flex items-center justify-center text-[8px] font-bold text-white">F</div>
            <span className="text-xs font-bold text-slate-700">digifore-dashboard-v2</span>
          </div>
          <div className="px-2.5 py-1 rounded bg-[#E8E9FF] text-[#2563EB] text-[10px] font-bold">100% UI Approved</div>
        </div>
        {/* Design System Preview */}
        <div className="flex-grow p-5 bg-slate-50 flex flex-col gap-4">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Design System Tokens</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-6 h-6 rounded-md bg-[#2563EB] mb-2"></div>
              <div className="text-xs font-bold text-slate-800">Primary Blue</div>
              <div className="text-[9px] font-mono text-slate-400">#2563EB</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-6 h-6 rounded-md bg-[#0F172A] mb-2"></div>
              <div className="text-xs font-bold text-slate-800">Slate Dark</div>
              <div className="text-[9px] font-mono text-slate-400">#0F172A</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-[10px] font-bold">Button Primary</button>
            <button className="px-4 py-2 bg-white text-slate-700 border border-gray-200 rounded-lg text-[10px] font-bold">Secondary</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DevelopmentMockup() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl flex flex-col overflow-hidden relative group items-center justify-center p-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full h-full max-h-[320px] bg-[#0B0F19] rounded-2xl relative flex flex-col overflow-hidden border border-slate-800/80 shadow-inner"
      >
        {/* Editor Tabs */}
        <div className="h-10 bg-[#0F172A] border-b border-slate-800/50 flex items-center px-4 justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-[11px] font-mono text-slate-400 ml-4">pages/api/dashboard.ts</span>
          </div>
        </div>
        
        {/* Code Snippet */}
        <div className="flex-grow p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-hidden">
          <span className="text-purple-400">import</span> &#123; NextApiRequest, NextApiResponse &#125; <span className="text-purple-400">from</span> <span className="text-green-300">'next'</span>;<br/>
          <span className="text-purple-400">export default async function</span> <span className="text-blue-400">handler</span>(req, res) &#123;<br/>
          &nbsp;&nbsp;<span className="text-slate-500">// Fetching analytics metrics</span><br/>
          &nbsp;&nbsp;<span className="text-purple-400">const</span> metrics = <span className="text-purple-400">await</span> db.select().from(analytics);<br/>
          &nbsp;&nbsp;res.status(<span className="text-yellow-400">200</span>).json(&#123; success: <span className="text-purple-400">true</span>, data: metrics &#125;);<br/>
          &#125;
        </div>
        
        {/* Progress */}
        <div className="h-10 bg-[#0F172A] border-t border-slate-800/50 flex items-center justify-between px-4">
          <span className="text-[10px] font-mono text-slate-400">Compiled successfully</span>
          <span className="text-[10px] font-mono text-green-400">NextJS v14.2.0</span>
        </div>
      </motion.div>
    </div>
  );
}

function QAMockup() {
  return (
    <div className="w-full h-full bg-slate-100/50 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-inner flex flex-col items-center justify-center p-6 relative">
       <motion.div 
         initial={{ scale: 0.95, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ delay: 0.2 }}
         className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-6"
       >
         <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-50">
           <h4 className="font-extrabold text-slate-800 text-sm">System Quality Assurance</h4>
           <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg border border-green-100">Ready to Deploy</span>
         </div>
         <div className="space-y-4">
           {/* Lighthouse scores */}
           <div className="flex justify-around items-center py-2 bg-slate-50 rounded-2xl">
             <div className="text-center">
               <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-xs font-bold text-green-600">100</div>
               <span className="text-[9px] font-medium text-slate-400">Perf</span>
             </div>
             <div className="text-center">
               <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-xs font-bold text-green-600">100</div>
               <span className="text-[9px] font-medium text-slate-400">SEO</span>
             </div>
             <div className="text-center">
               <div className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-xs font-bold text-green-600">100</div>
               <span className="text-[9px] font-medium text-slate-400">Access</span>
             </div>
           </div>
           {/* Testing logs */}
           <div className="space-y-2">
             <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
               <CheckCircle2 size={14} className="text-green-500" />
               <span>E2E Dashboard flow test completed</span>
             </div>
             <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
               <CheckCircle2 size={14} className="text-green-500" />
               <span>API security scanning: 0 vulnerabilities</span>
             </div>
             <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
               <CheckCircle2 size={14} className="text-green-500" />
               <span>Cross-browser responsiveness checked</span>
             </div>
           </div>
         </div>
       </motion.div>
    </div>
  );
}

function DeploymentMockup() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl flex items-center justify-center p-8 relative overflow-hidden">
       {/* Ambient glow */}
       <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
       
       <motion.div 
         initial={{ y: 20, rotateY: -10, opacity: 0 }}
         animate={{ y: 0, rotateY: 0, opacity: 1 }}
         transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
         className="w-full max-w-sm aspect-[4/3] border-[3px] border-green-500/30 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-2 flex flex-col relative group hover:border-green-400/80 transition-colors shadow-2xl shadow-green-900/20"
       >
          <div className="w-full h-full border border-green-500/20 rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <BadgeCheck size={56} className="text-green-400 mb-4 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="text-[10px] font-black tracking-[0.25em] text-green-400 mb-2 uppercase">System Deployed</div>
            <h3 className="text-xl font-bold text-white mb-2">dashboard.client.com</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent mb-4"></div>
            <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed">Infrastructure status: Healthy.<br/>3-month maintenance support is now active.</p>
          </div>
       </motion.div>
    </div>
  );
}

const mockups = [
  ConsultationMockup,
  DesignMockup,
  DevelopmentMockup,
  QAMockup,
  DeploymentMockup,
];

// ══════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════

export default function WhyChoose() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="why-choose" className="py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden relative">
      <div className="section-container relative z-10 max-w-7xl mx-auto">
        
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">
            The Digifore Advantage
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We combine elite engineering with an agile, transparent development process to guarantee your project's success.
          </p>
        </motion.div>

        {/* ── BOLD PHILOSOPHY CALLOUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-4xl mx-auto mb-20 p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#FFF7ED] via-[#FFF1F2]/80 to-transparent border border-[#FECDD3] flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-rose-500/[0.02]"
        >
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-600 shrink-0 shadow-inner">
            <ShieldAlert size={28} />
          </div>
          <div>
            <h4 className="text-lg font-black text-slate-800 mb-1 tracking-tight flex items-center gap-2">
              Invest in Quality, Avoid Broken Systems
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Banyak bisnis terjebak dengan penawaran pembuatan sistem murah yang akhirnya berakhir kacau — kode tidak bisa dikembangkan, sistem sering <i>crash</i>, dan proyek mangkrak. Kami di Digifore percaya bahwa sistem IT adalah investasi jangka panjang bisnis Anda. Kami membangun fondasi kode yang kokoh, aman, dan siap berkembang dari awal.
            </p>
          </div>
        </motion.div>

        {/* ── PART 1: WHY CHOOSE US (Minimalist Borderless Highlights) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {whyChooseItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25, scale: 0.95, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="group relative flex gap-5 items-start p-4 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default"
              >
                <div className="w-14 h-14 rounded-[20px] flex items-center justify-center shrink-0 border border-slate-200 bg-white group-hover:bg-gradient-to-br group-hover:from-[#9FA1FF] group-hover:to-[#2563EB] group-hover:border-transparent transition-colors duration-300 shadow-sm">
                  {Icon && <Icon size={24} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#9FA1FF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── PART 2: DEVELOPMENT PROCESS (Interactive UI Dashboard) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.97, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[40px] border border-gray-200 shadow-2xl shadow-slate-200/50 p-6 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-[600px]"
        >
           
           {/* LEFT COLUMN: Interactive Stepper List */}
           <div className="lg:w-2/5 flex flex-col justify-center py-4">
              <h3 className="text-3xl font-black text-slate-900 mb-8 px-4">Development Flow</h3>
              <div className="space-y-3 relative">
                 
                 {/* Background connecting line */}
                 <div className="absolute left-[38px] top-6 bottom-6 w-px bg-slate-100 z-0 hidden lg:block"></div>

                 {learningSteps.map((step, index) => {
                    const isActive = activeStep === index;
                    const Icon = iconMap[step.icon];
                    return (
                       <div 
                         key={step.step}
                         onMouseEnter={() => setActiveStep(index)}
                         onClick={() => setActiveStep(index)}
                         className={`relative z-10 p-4 rounded-3xl cursor-pointer transition-all duration-300 flex gap-5 items-start ${
                           isActive ? "bg-slate-50 shadow-inner border border-slate-100" : "hover:bg-slate-50/50 border border-transparent"
                         }`}
                       >
                         {/* Active glow indicator on the left edge */}
                         {isActive && (
                           <motion.div layoutId="activeStepGlow" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-[#9FA1FF] rounded-r-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                         )}

                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 mt-1 relative ${
                           isActive ? "bg-gradient-to-br from-[#2563EB] to-[#9FA1FF] text-white shadow-lg shadow-violet-600/30" : "bg-white border border-slate-200 text-slate-400"
                         }`}>
                            {isActive && <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-20"></div>}
                            {Icon && <Icon size={20} />}
                         </div>
                         
                         <div className="pt-1">
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 block transition-colors duration-300 ${
                              isActive ? "text-[#9FA1FF]" : "text-slate-400"
                            }`}>
                               Step 0{step.step}
                            </span>
                            <h4 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                              isActive ? "text-slate-900" : "text-slate-600"
                            }`}>
                               {step.title}
                            </h4>
                            <AnimatePresence>
                              {isActive && (
                                 <motion.div 
                                   initial={{ opacity: 0, height: 0 }} 
                                   animate={{ opacity: 1, height: "auto" }} 
                                   exit={{ opacity: 0, height: 0 }}
                                   transition={{ duration: 0.3 }}
                                   className="overflow-hidden"
                                 >
                                   <p className="text-sm text-slate-500 leading-relaxed font-medium mt-2 pb-2">
                                     {step.description}
                                   </p>
                                 </motion.div>
                              )}
                            </AnimatePresence>
                         </div>
                       </div>
                    );
                 })}
              </div>
           </div>

           {/* RIGHT COLUMN: Interactive Mockup Screen */}
           <div className="lg:w-3/5 bg-slate-50 rounded-[32px] border border-slate-100 overflow-hidden p-2 sm:p-4 relative min-h-[400px] lg:min-h-0 flex items-center justify-center">
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
              
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeStep}
                   initial={{ opacity: 0, scale: 0.96, y: 10 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.96, y: -10 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className="w-full h-full flex items-center justify-center relative z-10"
                 >
                   {(() => {
                      const MockupComponent = mockups[activeStep];
                      return <MockupComponent />;
                   })()}
                 </motion.div>
              </AnimatePresence>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
