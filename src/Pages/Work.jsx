// Work.jsx — Portfolio & Case Studies Section
// Stack: React + Tailwind CSS + Framer Motion
// npm install framer-motion

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── FONT INJECTION ──────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  `}</style>
);

// ─── DATA ────────────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    id: "app-acquisition-scale",
    category: "Mobile App Growth · Attribution",
    title: "Scaled App Acquisition to 10K+ Installs",
    description: "Led mobile growth initiatives managing monthly budgets across Google, Meta, and Snapchat Ads. Integrated AppsFlyer and SKAN tracking to attribute conversion signals accurately, reducing CPA by 18%.",
    metrics: [
      { label: "CPA Reduction", value: "18%" },
      { label: "Installs", value: "10K+" },
      { label: "Attribution", value: "AppsFlyer" }
    ],
    tools: ["Google Ads", "Meta Ads", "AppsFlyer", "SKAN"],
    accentColor: "#0f766e", // teal-700
    bgColor: "#F0FDFA", // teal-50
  },
  {
    id: "lead-gen-automation",
    category: "B2B Lead Gen · Automation",
    title: "Generated 1,500+ Qualified Leads",
    description: "Managed 15L+ monthly budgets across Google Search, PMax, and Reddit Ads. Built automated lead workflows with Pabbly Connect, reducing manual effort by 70% while dropping CPL by 20%.",
    metrics: [
      { label: "Leads Generated", value: "1,500+" },
      { label: "CPL Reduction", value: "20%" },
      { label: "Manual Effort", value: "-70%" }
    ],
    tools: ["Google Ads", "Reddit Ads", "Pabbly Connect", "GTM"],
    accentColor: "#2563eb", // blue-600
    bgColor: "#EFF6FF", // blue-50
  },
  {
    id: "frontend-dev-cro",
    category: "React Dev · CRO",
    title: "Boosted Landing Page Conversions by 30%",
    description: "Designed and developed fast-loading React & Tailwind landing pages. Utilized Microsoft Clarity heatmaps, session recordings, and GA4 tracking to optimize user flows and reduce bounce rates.",
    metrics: [
      { label: "Conversion Lift", value: "30%" },
      { label: "Bounce Rate", value: "-25%" },
      { label: "Framework", value: "React" }
    ],
    tools: ["React.js", "Tailwind CSS", "Clarity", "GA4"],
    accentColor: "#4f46e5", // indigo-600
    bgColor: "#EEF2FF", // indigo-50
  },
  {
    id: "tracking-infrastructure",
    category: "MarTech · Analytics",
    title: "Zero-Data Loss Tracking Infrastructure",
    description: "Engineered a robust server-side tracking environment using GA4, GTM, Meta Pixel, and Conversion API (CAPI) to bypass cookie restrictions and recover attribution accuracy.",
    metrics: [
      { label: "Attributed Conv.", value: "+30%" },
      { label: "Event Match Score", value: "9.2/10" },
      { label: "Data Recovery", value: "99%" }
    ],
    tools: ["Google Tag Manager", "Meta CAPI", "GA4", "Server-Side Tagging"],
    accentColor: "#ea580c", // orange-600
    bgColor: "#FFF7ED", // orange-50
  }
];

const BRANDS = [
  "Federal Soft Systems Pvt Ltd",
  "MK DIGITALMARE PVT LTD",
  "SameBoat",
  "1HourDeveloper",
  "Newageinterio",
  "PropNest",
  "StyleCart"
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const staggerWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// ─── HELPER COMPONENTS ───────────────────────────────────────────────────────
function SLabel({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
      <div className="w-6 h-px bg-[#2563eb] flex-shrink-0" />
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2563eb]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {children}
      </span>
    </div>
  );
}

function DHead({ children, className = "", center = false }) {
  return (
    <h2
      className={`font-light leading-[1.1] tracking-tight text-[#111827] ${center ? "text-center" : ""} ${className}`}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(30px, 4vw, 50px)",
      }}
    >
      {children}
    </h2>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Work() {
  return (
    <section className="bg-white overflow-hidden min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <FontStyle />

      {/* ══════════════════════════════════════════════
          BLOCK 1 — HERO SECTION
      ══════════════════════════════════════════════ */}
      <div className="pt-32 pb-20 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb] relative">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <SLabel>Portfolio</SLabel>
              <DHead className="mb-6">
                Case studies & <br />
                <em style={{ color: "#2563eb", fontStyle: "italic" }}>proven growth systems.</em>
              </DHead>
              <p className="text-[16px] text-[#6b7280] leading-relaxed font-light max-w-xl">
                I don't just run ads; I build high-converting marketing architectures. 
                Explore how I've helped D2C brands, SaaS companies, and B2B enterprises scale their revenue profitably.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-4 lg:items-end w-full lg:w-auto"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 w-full">
                {[
                  { n: "₹3.0Cr+", l: "Spend Managed" },
                  { n: "10K+", l: "Leads Generated" },
                  { n: "4.8x", l: "Average ROAS" },
                  { n: "30+", l: "Brands Scaled" },
                ].map((s, i) => (
                  <div key={i} className="border border-[#e5e7eb] rounded-xl p-4 text-center bg-[#f9fafb]">
                    <div
                      className="font-light text-[#2563eb] leading-none mb-1.5"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 2.5vw, 32px)" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-[10px] text-[#6b7280] font-semibold uppercase tracking-wide">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 2 — BENTO GRID CASE STUDIES
      ══════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {CASE_STUDIES.map((study, idx) => (
              <motion.div
                key={study.id}
                variants={staggerItem}
                className="group bg-white border border-[#e5e7eb] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#2563eb]/5 hover:border-[#2563eb]/20 transition-all duration-500 flex flex-col"
              >
                {/* Visual Header Banner */}
                <div 
                  className="h-2 relative overflow-hidden transition-all duration-500"
                  style={{ backgroundColor: study.accentColor }}
                />

                <div className="p-8 sm:p-10 flex-1 flex flex-col">
                  {/* Category Tag */}
                  <div className="mb-6">
                    <span 
                      className="text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: study.bgColor, color: study.accentColor }}
                    >
                      {study.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#111827] mb-4 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-[#6b7280] text-[14px] sm:text-[15px] leading-relaxed font-light mb-8 flex-1">
                    {study.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col border-l-2 pl-4" style={{ borderColor: `${study.accentColor}30` }}>
                        <span 
                          className="font-light leading-none mb-1.5"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 3vw, 32px)", color: study.accentColor }}
                        >
                          {metric.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-wide text-[#9ca3af] font-semibold">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tools / Footer */}
                  <div className="pt-6 border-t border-[#f3f4f6] flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] mr-2">
                      Stack:
                    </span>
                    {study.tools.map((tool, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 bg-[#f9fafb] border border-[#e5e7eb] text-[#4b5563] rounded-md font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 3 — BRANDS LOGO MARQUEE / GRID
      ══════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 border-y border-[#e5e7eb] bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <SLabel center>Trusted By</SLabel>
          <DHead center className="mb-12">
            Brands I've scaled
          </DHead>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {BRANDS.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl text-[#4b5563] font-semibold text-[14px] hover:border-[#2563eb]/30 hover:text-[#2563eb] transition-all duration-300"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 4 — CTA
      ══════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#111827] rounded-3xl p-10 sm:p-16 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <SLabel center><span className="text-[#3b82f6]">Next Steps</span></SLabel>
              <h3 
                className="text-white font-light mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                Want results like these? <br/>
                <em className="text-[#3b82f6]">Let's talk growth.</em>
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a
                  href="#contact"
                  className="bg-[#2563eb] text-white font-semibold text-[14px] px-8 py-4 rounded-xl hover:bg-[#1d4ed8] transition-colors duration-200"
                >
                  Book Free Audit →
                </a>
                <a
                  href="https://wa.me/919492919173"
                  className="border border-white/20 text-white font-medium text-[14px] px-8 py-4 rounded-xl hover:bg-white/5 transition-colors duration-200"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
