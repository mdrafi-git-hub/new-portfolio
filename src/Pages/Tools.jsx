// Tools.jsx — Marketing & Development Tech Stack (Interactive Dashboard)
// Stack: React + Tailwind CSS + Framer Motion
// npm install framer-motion lucide-react

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Megaphone,
  Briefcase,
  LineChart,
  Tag,
  RefreshCcw,
  Target,
  Search,
  Globe,
  Wrench,
  Eye,
  MousePointerClick,
  Code2,
  Layers,
  Database,
  GitBranch,
  Users,
  Workflow,
  Monitor,
  TableProperties,
  ChevronRight
} from "lucide-react";

// ─── FONT INJECTION ──────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
    
    /* Hide scrollbar for tab list on mobile */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

// ─── SKILL BADGES ────────────────────────────────────────────────────────────
const SKILL_BADGES = [
  "Performance Marketing",
  "Funnel Building",
  "Lead Generation",
  "E-commerce Scaling",
  "Conversion Tracking Expert",
  "Data-Driven Marketing"
];

// ─── DATA (7 Categories) ─────────────────────────────────────────────────────
const TOOL_CATEGORIES = [
  {
    title: "1. Paid Advertising",
    description: "The core engines I use to drive high-intent traffic and scale revenue.",
    color: "#2563eb", // blue-600
    bgLight: "#EFF6FF",
    tools: [
      { name: "Google Ads", icon: <BarChart3 size={20} strokeWidth={1.5} />, action: "Campaign Structuring, Scaling, ROAS Optimization (Search, Display, PMax, YouTube)" },
      { name: "Meta Ads", icon: <Megaphone size={20} strokeWidth={1.5} />, action: "Advanced Audience Architecture & Creative Funnels (FB & IG)" },
      { name: "LinkedIn Ads", icon: <Briefcase size={20} strokeWidth={1.5} />, action: "B2B Lead Gen & Account-Based Marketing" },
    ]
  },
  {
    title: "2. Analytics & Tracking",
    description: "My big differentiator. Fixing the data leaks 90% of marketers ignore.",
    color: "#0f766e", // teal-700
    bgLight: "#F0FDFA",
    tools: [
      { name: "Google Analytics 4 (GA4)", icon: <LineChart size={20} strokeWidth={1.5} />, action: "Event Tracking, Funnel Exploration, & Attribution" },
      { name: "Google Tag Manager", icon: <Tag size={20} strokeWidth={1.5} />, action: "Tag Architecture & Data Layer Implementation" },
      { name: "Meta CAPI & Pixel", icon: <RefreshCcw size={20} strokeWidth={1.5} />, action: "Server-Side Signal Optimization & Matching" },
      { name: "Ads Conversion Tracking", icon: <Target size={20} strokeWidth={1.5} />, action: "Enhanced Conversions & Value-Based Bidding setup" },
    ]
  },
  {
    title: "3. SEO & Growth Tools",
    description: "Compounding organic traffic through deep research and technical fixes.",
    color: "#4f46e5", // indigo-600
    bgLight: "#EEF2FF",
    tools: [
      { name: "Search Console", icon: <Globe size={20} strokeWidth={1.5} />, action: "Indexing & CTR Optimization" },
      { name: "Ahrefs", icon: <Search size={20} strokeWidth={1.5} />, action: "Backlink Analysis & Competitor Research" },
      { name: "SEMrush", icon: <Target size={20} strokeWidth={1.5} />, action: "Topical Authority & Gap Analysis" },
    ]
  },
  {
    title: "4. Conversion Optimization",
    description: "Understanding user behavior to fix leaks in the funnel.",
    color: "#be185d", // pink-700
    bgLight: "#FDF2F8",
    tools: [
      { name: "Hotjar", icon: <Wrench size={20} strokeWidth={1.5} />, action: "Heatmaps & Session Recordings" },
      { name: "Microsoft Clarity", icon: <Eye size={20} strokeWidth={1.5} />, action: "User Behavior & Rage Click Detection" },
      { name: "A/B Testing", icon: <MousePointerClick size={20} strokeWidth={1.5} />, action: "Variant testing for UI/UX improvements" },
    ]
  },
  {
    title: "5. Landing Page & Dev",
    description: "My unique edge: building the fast, dynamic funnels we send traffic to.",
    color: "#ea580c", // orange-600
    bgLight: "#FFF7ED",
    tools: [
      { name: "React.js & JS", icon: <Code2 size={20} strokeWidth={1.5} />, action: "Fast, Dynamic SPA Development" },
      { name: "HTML5 & Tailwind CSS", icon: <Layers size={20} strokeWidth={1.5} />, action: "Responsive, Pixel-Perfect Layouts" },
      { name: "Git & GitHub", icon: <GitBranch size={20} strokeWidth={1.5} />, action: "Version Control & Deployment Pipelines" },
    ]
  },
  {
    title: "6. CRM & Automation",
    description: "Connecting the marketing pipeline to sales operations.",
    color: "#b45309", // amber-700
    bgLight: "#FFFBEB",
    tools: [
      { name: "HubSpot", icon: <Users size={20} strokeWidth={1.5} />, action: "Lead Nurturing & Pipeline Management" },
      { name: "Zapier & Webhooks", icon: <Workflow size={20} strokeWidth={1.5} />, action: "Seamless Cross-Platform Data Syncing" },
    ]
  },
  {
    title: "7. Reporting & Dashboards",
    description: "Clear visualization for professional stakeholder reporting.",
    color: "#15803d", // green-700
    bgLight: "#F0FDF4",
    tools: [
      { name: "Looker Studio", icon: <Monitor size={20} strokeWidth={1.5} />, action: "Multi-Channel Executive Dashboards" },
      { name: "Advanced Excel/Sheets", icon: <TableProperties size={20} strokeWidth={1.5} />, action: "Custom Pivot Tables & Data Blending" },
    ]
  }
];

const ARCHITECTURE_STEPS = [
  {
    title: "1. Traffic Generation",
    desc: "Targeted users click high-intent Google/Meta Ads.",
    icon: <Megaphone size={20} className="text-[#2563eb]" />
  },
  {
    title: "2. Custom Landing Page",
    desc: "Users land on a fast, optimized React.js funnel.",
    icon: <Code2 size={20} className="text-[#0f766e]" />
  },
  {
    title: "3. Conversion Fired",
    desc: "User submits lead form or completes checkout.",
    icon: <Target size={20} className="text-[#ea580c]" />
  },
  {
    title: "4. Server-Side Tracking",
    desc: "GTM sends secure 1st-party data via CAPI to ad platforms.",
    icon: <Workflow size={20} className="text-[#4f46e5]" />
  }
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const staggerWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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
export default function Tools() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="bg-white overflow-hidden min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <FontStyle />

      {/* ══════════════════════════════════════════════
          BLOCK 1 — HERO SECTION
      ══════════════════════════════════════════════ */}
      <div className="pt-32 pb-20 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb] relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <SLabel>Tech Stack</SLabel>
            <DHead className="mb-6">
              The tools I use to <br />
              <em style={{ color: "#2563eb", fontStyle: "italic" }}>engineer growth.</em>
            </DHead>
            <p className="text-[16px] text-[#6b7280] leading-relaxed font-light max-w-xl mb-10">
              True performance marketing requires bridging the gap between ad platforms and code. 
              Here is the complete MarTech and Development stack I use to build scalable acquisition systems.
            </p>

            {/* SKILL BADGES */}
            <div className="flex flex-wrap gap-2.5">
              {SKILL_BADGES.map((badge, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 rounded-full border border-[#e5e7eb] bg-[#f9fafb] text-[#111827] text-[13px] font-medium shadow-sm hover:border-[#2563eb]/30 hover:text-[#2563eb] transition-all duration-300"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 2 — INTERACTIVE DASHBOARD (TABBED UI)
      ══════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* LEFT SIDEBAR: TAB LIST */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3 flex-shrink-0"
            >
              <div className="sticky top-28">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#9ca3af] mb-6 px-4">
                  Categories
                </h3>
                
                {/* Tabs Container */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar pb-4 lg:pb-0 gap-2">
                  {TOOL_CATEGORIES.map((category, idx) => {
                    const isActive = activeCategory === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveCategory(idx)}
                        className={`flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink whitespace-nowrap lg:whitespace-normal group border ${
                          isActive 
                            ? "bg-white border-[#e5e7eb] shadow-sm" 
                            : "bg-transparent border-transparent hover:bg-[#f3f4f6]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className={`w-2 h-2 rounded-full transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-50 opacity-50'}`}
                            style={{ backgroundColor: category.color }}
                          />
                          <span className={`font-medium text-[15px] ${isActive ? 'text-[#111827]' : 'text-[#6b7280] group-hover:text-[#111827]'}`}>
                            {category.title}
                          </span>
                        </div>
                        {isActive && (
                          <ChevronRight size={16} className="text-[#9ca3af] hidden lg:block" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* RIGHT MAIN AREA: DYNAMIC CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#e5e7eb] rounded-3xl p-8 sm:p-10 shadow-sm"
                >
                  {/* Category Header */}
                  <div className="mb-10 pb-8 border-b border-[#f3f4f6]">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-md" style={{ backgroundColor: TOOL_CATEGORIES[activeCategory].bgLight }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TOOL_CATEGORIES[activeCategory].color }} />
                      <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: TOOL_CATEGORIES[activeCategory].color }}>
                        Category Overview
                      </span>
                    </div>
                    <h2 className="text-3xl font-semibold text-[#111827] mb-3 leading-tight">
                      {TOOL_CATEGORIES[activeCategory].title.replace(/^\d+\.\s*/, '')}
                    </h2>
                    <p className="text-[16px] text-[#6b7280] font-light leading-relaxed max-w-xl">
                      {TOOL_CATEGORIES[activeCategory].description}
                    </p>
                  </div>

                  {/* Horizontal Tool Cards */}
                  <div className="flex flex-col gap-4">
                    {TOOL_CATEGORIES[activeCategory].tools.map((tool, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        key={i} 
                        className="group flex flex-col sm:flex-row sm:items-center p-5 rounded-2xl border border-[#e5e7eb] hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-300 bg-white"
                      >
                        {/* Icon Block */}
                        <div className="flex items-center gap-4 mb-3 sm:mb-0 sm:w-1/3 flex-shrink-0">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                            style={{ backgroundColor: TOOL_CATEGORIES[activeCategory].bgLight, color: TOOL_CATEGORIES[activeCategory].color }}
                          >
                            {tool.icon}
                          </div>
                          <h4 className="font-semibold text-[#111827] text-[15px]">
                            {tool.name}
                          </h4>
                        </div>
                        
                        {/* Divider for mobile */}
                        <div className="w-full h-px bg-[#f3f4f6] sm:hidden mb-3" />

                        {/* Action Statement Block */}
                        <div className="sm:w-2/3 sm:pl-6 sm:border-l border-[#f3f4f6]">
                          <p className="text-[14px] text-[#4b5563] font-light leading-relaxed group-hover:text-[#111827] transition-colors duration-300">
                            {tool.action}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 3 — ARCHITECTURE FLOW
      ══════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 border-y border-[#e5e7eb] bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SLabel center>Integration</SLabel>
            <DHead center>
              How it all <em style={{ color: "#2563eb", fontStyle: "italic" }}>connects together.</em>
            </DHead>
            <p className="mt-4 text-[15px] text-[#6b7280] max-w-xl mx-auto font-light leading-relaxed">
              Tools are useless in isolation. The real magic happens when they are integrated into a seamless data pipeline. Here is a standard tracking architecture I build for clients:
            </p>
          </motion.div>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 md:gap-0 relative"
          >
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-[#e5e7eb] z-0" />

            {ARCHITECTURE_STEPS.map((step, i) => (
              <motion.div key={i} variants={staggerItem} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-2 border-[#e5e7eb] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-[#111827] text-[15px] mb-2 px-2">
                  {step.title}
                </h4>
                <p className="text-[13px] text-[#6b7280] font-light px-4 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 4 — CTA
      ══════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 bg-white">
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
              <SLabel center><span className="text-[#3b82f6]">Your Stack</span></SLabel>
              <h3 
                className="text-white font-light mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                Is your current tracking <br/>
                <em className="text-[#3b82f6]">leaking money?</em>
              </h3>
              <p className="text-[#9ca3af] max-w-lg mx-auto mb-10 text-[15px] leading-relaxed font-light">
                Let's do a deep dive into your Google Ads, Meta Ads, and GA4 setup. I'll find the holes in your tracking and show you how to fix them.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="bg-[#2563eb] text-white font-semibold text-[14px] px-8 py-4 rounded-xl hover:bg-[#1d4ed8] transition-colors duration-200"
                >
                  Audit My Tracking →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
