"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BookOpen,
  BadgeCheck,
  ClipboardList,
  MessageSquare,
  ClipboardCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Video,
} from "lucide-react";
import { whyChooseItems, learningSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Code2,
  BookOpen,
  BadgeCheck,
  ClipboardList,
  MessageSquare,
  ClipboardCheck,
  Award,
};

// ══════════════════════════════════════
// MOCKUP PREVIEW COMPONENTS
// ══════════════════════════════════════

function RegistrationMockup() {
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
        <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-green-100">
          <CheckCircle2 className="text-green-500" size={32} />
        </div>
        <h4 className="text-center text-lg font-extrabold text-slate-800 mb-2">Enrollment Success</h4>
        <p className="text-center text-sm text-slate-500 mb-8">Welcome to Digifore! Your learning journey begins now.</p>
        
        <div className="space-y-4">
          <div className="h-2 bg-slate-100 rounded-full w-full"></div>
          <div className="h-2 bg-slate-100 rounded-full w-4/5 mx-auto"></div>
        </div>
        
        <button className="w-full mt-8 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
          Go to Student Dashboard
        </button>
      </motion.div>
    </div>
  );
}

function ConsultationMockup() {
  return (
    <div className="w-full h-full bg-slate-100/50 backdrop-blur-xl rounded-[32px] border border-white/60 flex flex-col p-6 relative overflow-hidden items-center justify-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-sm h-full max-h-[360px] bg-white rounded-3xl border border-gray-100 shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden"
      >
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-100 flex items-center px-5 gap-4 bg-white z-10 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-blue-700">SA</span>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800">Sarah Advisor</div>
            <div className="text-xs text-green-600 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online
            </div>
          </div>
        </div>
        {/* Chat Body */}
        <div className="flex-grow p-5 flex flex-col justify-end gap-4 bg-slate-50/50">
          <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white border border-gray-100 shadow-sm text-slate-700 text-sm p-4 rounded-2xl rounded-tl-sm self-start max-w-[85%]">
            Hi! Let's align your goals with the perfect curriculum today.
          </motion.div>
          <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-blue-600 text-white shadow-md shadow-blue-600/20 text-sm p-4 rounded-2xl rounded-tr-sm self-end max-w-[85%]">
            I'm looking to pivot into Cloud Architecture. Any recommendations?
          </motion.div>
        </div>
        {/* Chat Input */}
        <div className="h-16 border-t border-gray-100 bg-white flex items-center px-4 gap-3">
          <div className="h-10 flex-grow bg-slate-100 rounded-xl px-4 flex items-center text-xs text-slate-400 font-medium">Type your message...</div>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20 cursor-pointer hover:scale-105 transition-transform">
            <MessageSquare size={16} className="text-white fill-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TrainingMockup() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl flex flex-col overflow-hidden relative group items-center justify-center p-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full h-full max-h-[320px] bg-black rounded-2xl relative flex items-center justify-center overflow-hidden border border-slate-700/50 shadow-inner"
      >
         <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
         <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/20 transition-all cursor-pointer z-10 shadow-xl shadow-black/50">
           <Video size={32} className="text-white ml-1 fill-white/80" />
         </div>
         {/* Fake Terminal Background */}
         <div className="absolute bottom-6 left-6 text-xs text-green-400/40 font-mono hidden sm:block">
           &gt; initializing training module_03...<br/>
           &gt; loading interactive resources: 100%<br/>
           &gt; instructor online<br/>
           <span className="animate-pulse">_</span>
         </div>
         {/* Video Progress */}
         <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end px-6 pb-4 gap-4">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
            <div className="flex-grow h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
            </div>
            <div className="text-xs text-slate-300 font-medium">14:20 / 45:00</div>
         </div>
      </motion.div>
    </div>
  );
}

function AssessmentMockup() {
  return (
    <div className="w-full h-full bg-slate-100/50 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-inner flex flex-col items-center justify-center p-6 relative">
       <motion.div 
         initial={{ scale: 0.95, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ delay: 0.2 }}
         className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-8"
       >
         <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-50">
           <h4 className="font-extrabold text-slate-800 text-base">Module 3 Final Assessment</h4>
           <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">Time: 12:45</span>
         </div>
         <div className="space-y-6">
           <div className="text-sm text-slate-700 font-bold leading-relaxed">Q4. Which of the following best describes the principle of "Infrastructure as Code"?</div>
           <div className="space-y-3">
             {["Manual server configuration", "Managing infrastructure via config files", "Compiling server software", "Database indexing"].map((opt, i) => (
               <div key={i} className={`p-4 rounded-xl border text-sm flex items-center gap-4 cursor-pointer transition-colors ${i === 1 ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-200 hover:border-blue-200 hover:bg-slate-50'}`}>
                 <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${i === 1 ? 'border-blue-600' : 'border-gray-300'}`}>
                    {i === 1 && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                 </div>
                 <span className={i === 1 ? 'text-blue-800 font-bold' : 'text-slate-600 font-medium'}>{opt}</span>
               </div>
             ))}
           </div>
         </div>
         <div className="mt-8 flex justify-end">
           <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-slate-800">Next Question</button>
         </div>
       </motion.div>
    </div>
  );
}

function CertificationMockup() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-[32px] border border-slate-800 shadow-2xl flex items-center justify-center p-8 relative overflow-hidden">
       {/* Ambient gold glow */}
       <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
       
       <motion.div 
         initial={{ y: 20, rotateY: -10, opacity: 0 }}
         animate={{ y: 0, rotateY: 0, opacity: 1 }}
         transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
         className="w-full max-w-sm aspect-[4/3] border-[3px] border-amber-500/40 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-2 flex flex-col relative group hover:border-amber-400/80 transition-colors shadow-2xl shadow-amber-900/20"
       >
          <div className="w-full h-full border border-amber-500/20 rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <Award size={200} />
            </div>
            
            <Award size={56} className="text-amber-400 mb-6 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="text-[11px] font-black tracking-[0.25em] text-amber-500/90 mb-3 uppercase">Certificate of Excellence</div>
            <h3 className="text-3xl font-serif text-white mb-4">Jane Smith</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-4"></div>
            <p className="text-xs text-slate-400 max-w-[240px] leading-relaxed">For the successful completion of<br/>Advanced Digital Transformation Program.</p>
            
            <div className="absolute bottom-6 right-6 opacity-60">
               <div className="w-14 h-14 bg-amber-500/10 rounded-full flex flex-col items-center justify-center border border-amber-500/20">
                 <BadgeCheck size={16} className="text-amber-400 mb-0.5" />
                 <div className="text-[7px] font-bold text-amber-200/80 uppercase">Verified</div>
               </div>
            </div>
          </div>
       </motion.div>
    </div>
  );
}

const mockups = [
  RegistrationMockup,
  ConsultationMockup,
  TrainingMockup,
  AssessmentMockup,
  CertificationMockup,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">
            The Digifore Advantage
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We combine industry-leading expert training with a structured, step-by-step learning journey designed for your ultimate success.
          </p>
        </motion.div>

        {/* ── PART 1: WHY CHOOSE US (Minimalist Borderless Highlights) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {whyChooseItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex gap-5 items-start p-4 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default"
              >
                <div className="w-14 h-14 rounded-[20px] flex items-center justify-center shrink-0 border border-slate-200 bg-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 shadow-sm">
                  {Icon && <Icon size={24} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
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

        {/* ── PART 2: LEARNING PROCESS (Interactive UI Dashboard) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[40px] border border-gray-200 shadow-2xl shadow-slate-200/50 p-6 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-[600px]"
        >
           
           {/* LEFT COLUMN: Interactive Stepper List */}
           <div className="lg:w-2/5 flex flex-col justify-center py-4">
              <h3 className="text-3xl font-black text-slate-900 mb-8 px-4">Your Journey</h3>
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
                           <motion.div layoutId="activeStepGlow" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-blue-600 rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                         )}

                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 mt-1 relative ${
                           isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-white border border-slate-200 text-slate-400"
                         }`}>
                            {isActive && <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-20"></div>}
                            {Icon && <Icon size={20} />}
                         </div>
                         
                         <div className="pt-1">
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 block transition-colors duration-300 ${
                              isActive ? "text-blue-600" : "text-slate-400"
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
