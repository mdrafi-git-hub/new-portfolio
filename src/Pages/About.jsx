// About.jsx — Rich Portfolio About Section
// Stack: React + Tailwind CSS + Framer Motion
// Install: npm install framer-motion

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// ─── DATA ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "3.5",     suffix: "+",  label: "Years Experience",     icon: "🗓" },
  { value: "50",      suffix: "+",  label: "Campaigns Managed",    icon: "🚀" },
  { value: "4.8",     suffix: "x",  label: "Average ROAS",         icon: "📈" },
  { value: "₹3.0",    suffix: "Cr+",label: "Ad Spend Managed",     icon: "💰" },
  { value: "10",      suffix: "K+", label: "Leads Generated",      icon: "🎯" },
  { value: "35",      suffix: "%",  label: "Avg CPA Reduction",    icon: "⚡" },
];

const SKILLS = [
  { name: "Google Ads",         level: 95, color: "#4285F4" },
  { name: "Meta Ads",           level: 92, color: "#0668E1" },
  { name: "SEO & Content",      level: 85, color: "#34A853" },
  { name: "Conversion Tracking",level: 90, color: "#EA4335" },
  { name: "GTM / GA4",          level: 88, color: "#F9AB00" },
  { name: "React.js / Frontend",level: 75, color: "#61DAFB" },
  { name: "Meta CAPI",          level: 85, color: "#0668E1" },
  { name: "CRO & A/B Testing",  level: 80, color: "#FF6B35" },
];

const SERVICES = [
  {
    icon: "📊",
    title: "Paid Ads Management",
    desc: "Google Search, Shopping, PMax, YouTube & Meta campaigns — built for ROAS, not reach.",
    tags: ["Search", "PMax", "Meta", "YouTube"],
  },
  {
    icon: "🎯",
    title: "Conversion Tracking",
    desc: "GTM, GA4, Meta Pixel, CAPI & server-side tagging. Full attribution, zero blind spots.",
    tags: ["GTM", "GA4", "CAPI", "Server-Side"],
  },
  {
    icon: "🔍",
    title: "SEO & Content Strategy",
    desc: "Technical SEO, content clusters, Core Web Vitals & link building for compound growth.",
    tags: ["On-Page", "Technical", "CWV", "GSC"],
  },
  {
    icon: "⚛️",
    title: "Landing Page Development",
    desc: "High-converting React.js landing pages with pixel-perfect tracking & CRO optimizations.",
    tags: ["React", "Tailwind", "CRO", "Speed"],
  },
];

const PROCESS = [
  { step: "01", title: "Audit & Discovery",     desc: "I start with a deep audit of your current ads, tracking setup, and analytics to find what's leaking money and what's working." },
  { step: "02", title: "Strategy & Structure",  desc: "I build a custom full-funnel strategy — from targeting and messaging to landing pages and measurement — before spending a rupee." },
  { step: "03", title: "Launch & Track",        desc: "Campaigns go live with bulletproof tracking. Every click, lead, and conversion is measured and attributed correctly from day one." },
  { step: "04", title: "Optimize & Scale",      desc: "Weekly data review, A/B testing, bid adjustments and audience refinement — until ROAS improves and scaling becomes predictable." },
];

const INDUSTRIES = [
  { icon: "🛍", name: "E-Commerce / D2C",      result: "Avg 4.5x ROAS" },
  { icon: "🏠", name: "Real Estate",            result: "↓ 65% CPL"     },
  { icon: "💻", name: "SaaS & Startups",        result: "+300% Traffic"  },
  { icon: "🏥", name: "Healthcare & Wellness",  result: "+180% Leads"   },
  { icon: "🎓", name: "Ed-Tech",                result: "↓ 50% CAC"     },
  { icon: "🔧", name: "Local Services",         result: "3x Conversions" },
];

const BRANDS = [
  "Federal Soft Systems Pvt Ltd",
  "SameBoat",
  "1HourDeveloper",
  "Newageinterio",
  "PropNest",
  "StyleCart",
];

const TOOLS = [
  { icon: "📊", name: "Google Ads"   },
  { icon: "📱", name: "Meta Ads"     },
  { icon: "🏷",  name: "GTM"         },
  { icon: "📈", name: "GA4"          },
  { icon: "🔍", name: "Ahrefs"       },
  { icon: "🎯", name: "Semrush"      },
  { icon: "🔄", name: "Meta CAPI"    },
  { icon: "📉", name: "Looker Studio"},
  { icon: "💼", name: "HubSpot"      },
  { icon: "⚛️", name: "React.js"     },
  { icon: "🛠",  name: "Hotjar"       },
  { icon: "🌐", name: "Search Console"},
  { icon: "📋", name: "AppsFlyer"    },
  { icon: "🧪", name: "VWO / A/B"    },
  { icon: "🤖", name: "Zapier"       },
  { icon: "📦", name: "Klaviyo"      },
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

/** Animated skill bar */
function SkillBar({ name, level, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="group"
    >
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs font-semibold tabular-nums" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

/** Section label */
function SLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-6 h-px bg-[#2563eb]" />
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563eb]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {children}
      </span>
    </div>
  );
}

/** Display heading */
function DHeading({ children, className = "" }) {
  return (
    <h2
      className={`font-light leading-[1.12] tracking-tight text-[#111827] ${className}`}
      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4.5vw, 52px)" }}
    >
      {children}
    </h2>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function About() {
  const [hoveredProcess, setHoveredProcess] = useState(null);

  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Outfit', sans-serif" }}
    >
      {/* Google Fonts — add to index.html in production */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        .gold { color: #2563eb; }
        .gold-bg { background: #2563eb; }
        .ink { color: #111827; }
      `}</style>

      {/* ════════════════════════════════════════════════
          BLOCK 1 — HERO INTRO
      ════════════════════════════════════════════════ */}
      <div className="pt-28 pb-20 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SLabel>About Me</SLabel>
              <DHeading className="mb-6">
                I don't run ads.<br />
                <em className="not-italic" style={{ color: "#2563eb" }}>I engineer growth</em><br />
                systems that compound.
              </DHeading>
              <p className="text-[15px] leading-relaxed text-gray-500 max-w-[500px] mb-8 font-light">
                I'm <strong className="font-semibold text-gray-800">Rafi Mahammad</strong> — a Performance Marketer and MarTech specialist based in Hyderabad with 3.5+ years of experience building full-funnel marketing systems for D2C brands, SaaS companies, and service businesses across India and the US.
              </p>
              <p className="text-[15px] leading-relaxed text-gray-500 max-w-[500px] mb-10 font-light">
                My edge? I bridge the gap between <strong className="font-medium text-gray-700">marketing strategy</strong> and <strong className="font-medium text-gray-700">technical execution</strong> — combining deep paid media expertise with React.js development, pixel-perfect tracking, and data systems most marketers can't touch.
              </p>

              {/* AVAILABILITY PILL */}
              <div className="inline-flex items-center gap-3 border border-[#e5e7eb] rounded-full px-5 py-2.5 bg-[#f9fafb]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[13px] text-gray-600 font-medium">Available for new projects · Hyderabad, India</span>
              </div>
            </motion.div>

            {/* RIGHT — PROFILE CARD */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="relative">
                {/* decorative rule */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#e5e7eb] rounded-sm pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#2563eb]/30 rounded-sm pointer-events-none" />

                <div className="relative bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-8 lg:p-10">
                  {/* avatar row */}
                  <div className="flex items-center gap-5 mb-8 pb-8 border-b border-[#e5e7eb]">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      MR
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-[17px]">Rafi Mahammad</div>
                      <div className="text-sm text-gray-500 mt-0.5">Digital & Performance Marketer</div>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        {["Google", "Meta"].map(c => (
                          <span key={c} className="text-[10px] px-2 py-0.5 rounded border border-[#2563eb]/40 text-[#2563eb] font-medium tracking-wide">
                            {c} Certified
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* quick facts */}
                  <div className="space-y-3.5">
                    {[
                      { icon: "📍", label: "Location",    val: "Hyderabad, Telangana" },
                      { icon: "🏢", label: "Current",     val: "Federal Soft Systems Pvt Ltd" },
                      { icon: "🎓", label: "Education",   val: "Kakatiya University" },
                      { icon: "🌐", label: "Markets",     val: "India · USA · Middle East" },
                      { icon: "💬", label: "Response",    val: "Within 4 hours" },
                    ].map(({ icon, label, val }) => (
                      <div key={label} className="flex items-start gap-3 text-sm">
                        <span className="text-base flex-shrink-0">{icon}</span>
                        <span className="text-gray-400 w-20 flex-shrink-0">{label}</span>
                        <span className="text-gray-700 font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 2 — METRICS STRIP
      ════════════════════════════════════════════════ */}
      <div className="bg-[#111827] py-14 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-[#111827] px-6 py-8 text-center group hover:bg-[#1f2937] transition-colors duration-200"
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <div
                  className="font-light leading-none mb-2 text-[#2563eb]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.5vw, 40px)" }}
                >
                  {s.value}<span style={{ fontSize: "0.6em" }}>{s.suffix}</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 3 — SKILLS + SERVICES
      ════════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* SKILL BARS */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SLabel>Expertise Levels</SLabel>
              <DHeading className="mb-10">
                Skills &<br /><em style={{ color: "#2563eb", fontStyle: "italic" }}>Proficiency</em>
              </DHeading>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {SKILLS.map((s, i) => (
                  <SkillBar key={s.name} {...s} index={i} />
                ))}
              </motion.div>
            </motion.div>

            {/* SERVICES GRID */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SLabel>What I Offer</SLabel>
              <DHeading className="mb-10">
                Services I<br /><em style={{ color: "#2563eb", fontStyle: "italic" }}>deliver for you</em>
              </DHeading>
              <div className="grid sm:grid-cols-2 gap-4">
                {SERVICES.map((svc, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                    className="border border-[#e5e7eb] rounded-xl p-5 bg-[#f9fafb] transition-all duration-300 group cursor-default"
                  >
                    <div className="text-2xl mb-3">{svc.icon}</div>
                    <h4 className="font-semibold text-[15px] text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors duration-200">
                      {svc.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 mb-3 font-light">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 bg-white border border-[#e5e7eb] rounded text-gray-500 font-medium tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 4 — WORKING PROCESS
      ════════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 bg-[#f9fafb] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <SLabel>How I Work</SLabel>
            <DHeading>
              My Working<br />
              <em style={{ color: "#2563eb", fontStyle: "italic" }}>Process & Model</em>
            </DHeading>
            <p className="mt-4 text-[15px] text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
              Every engagement follows a structured 4-step framework that eliminates guesswork and makes your growth predictable.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setHoveredProcess(i)}
                onHoverEnd={() => setHoveredProcess(null)}
                className={`
                  relative border rounded-2xl p-7 cursor-default transition-all duration-300 overflow-hidden
                  ${hoveredProcess === i
                    ? "bg-[#111827] border-[#111827] shadow-2xl -translate-y-1"
                    : "bg-white border-[#e5e7eb]"
                  }
                `}
              >
                {/* connector line (desktop) */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2.5 z-10">
                    <div className={`w-5 h-px ${hoveredProcess === i ? "bg-[#2563eb]" : "bg-[#e5e7eb]"} transition-colors duration-300`} />
                  </div>
                )}

                {/* step number */}
                <div
                  className={`text-[42px] font-light mb-5 leading-none transition-colors duration-300 ${hoveredProcess === i ? "text-[#2563eb]" : "text-[#e5e7eb]"}`}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {p.step}
                </div>
                <h4
                  className={`font-semibold text-[16px] mb-3 transition-colors duration-300 ${hoveredProcess === i ? "text-white" : "text-gray-900"}`}
                >
                  {p.title}
                </h4>
                <p className={`text-[13px] leading-relaxed font-light transition-colors duration-300 ${hoveredProcess === i ? "text-gray-400" : "text-gray-500"}`}>
                  {p.desc}
                </p>

                {/* hover accent */}
                <div className={`absolute bottom-0 left-0 h-0.5 w-full gold-bg transform origin-left transition-transform duration-300 ${hoveredProcess === i ? "scale-x-100" : "scale-x-0"}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 5 — HOW I HELP YOUR BUSINESS
      ════════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <SLabel>How I Help</SLabel>
              <DHeading className="mb-6">
                What changes when<br />
                <em style={{ color: "#2563eb", fontStyle: "italic" }}>you work with me</em>
              </DHeading>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 font-light">
                Most businesses are losing money on ads without knowing it — wrong tracking, no attribution, bloated budgets on low-intent audiences. I fix the system, not just the ads.
              </p>

              {/* BEFORE / AFTER */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#fecaca] bg-[#fff5f5] p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-red-400 mb-4">Before</div>
                  {[
                    "No idea what's actually converting",
                    "Wasted budget on wrong audiences",
                    "Tracking broken or missing",
                    "No clear growth system",
                    "Reactive, not strategic",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 mb-2.5 text-[13px] text-gray-600">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-emerald-500 mb-4">After</div>
                  {[
                    "100% attribution & measurement",
                    "Ads targeting high-intent buyers",
                    "Tracking accurate to every event",
                    "Scalable, repeatable growth system",
                    "Proactive weekly optimization",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 mb-2.5 text-[13px] text-gray-600">
                      <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* INDUSTRIES */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <SLabel>Industries</SLabel>
              <DHeading className="mb-8">
                Sectors I've<br />
                <em style={{ color: "#2563eb", fontStyle: "italic" }}>driven results in</em>
              </DHeading>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {INDUSTRIES.map((ind, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between border border-[#e5e7eb] rounded-xl px-5 py-4 bg-[#f9fafb] group hover:border-[#2563eb]/40 hover:bg-white transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{ind.icon}</span>
                      <span className="text-[14px] font-medium text-gray-800">{ind.name}</span>
                    </div>
                    <span className="text-[12px] font-semibold text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {ind.result}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* ENGAGEMENT MODELS */}
              <div className="border border-[#e5e7eb] rounded-2xl p-6 bg-[#f9fafb]">
                <h4 className="font-semibold text-gray-900 text-[15px] mb-5">Engagement Models</h4>
                <div className="space-y-3">
                  {[
                    { model: "Monthly Retainer",    desc: "Ongoing campaign management & optimization", badge: "Most Popular" },
                    { model: "Project-Based",        desc: "Tracking setup, landing page, one-time audit", badge: "" },
                    { model: "Performance-Based",    desc: "Commission structure tied to measurable results", badge: "ROI-Driven" },
                  ].map(({ model, desc, badge }) => (
                    <div key={model} className="flex items-start gap-3 p-4 border border-[#e5e7eb] rounded-xl bg-white">
                      <div className="w-2 h-2 rounded-full bg-[#2563eb] mt-1.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[14px] font-semibold text-gray-800">{model}</span>
                          {badge && (
                            <span className="text-[10px] px-2 py-0.5 bg-[#2563eb]/10 border border-[#2563eb]/25 text-[#2563eb] rounded font-semibold tracking-wide">
                              {badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[12px] text-gray-500 mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 5.5 — WORK EXPERIENCE & EDUCATION
      ════════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: WORK EXPERIENCE */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SLabel>My Journey</SLabel>
              <DHeading className="mb-10">
                Work<br /><em style={{ color: "#2563eb", fontStyle: "italic" }}>Experience</em>
              </DHeading>

              <div className="relative border-l border-[#e5e7eb] pl-6 ml-2 space-y-12">
                {/* Job 1 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-[#2563eb] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb] bg-[#2563eb]/10 px-2.5 py-1 rounded">
                      Dec 2025 – Present
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-3">Senior Digital Marketing Executive</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">Federal Soft Systems Pvt Ltd · Hyderabad, TS</p>
                    
                    <ul className="mt-4 space-y-2.5 text-[13px] text-gray-600 font-light leading-relaxed">
                      <li>• Manage and optimize <strong>15L+ monthly</strong> budgets across Google Ads, Meta Ads, Reddit Ads, and Snapchat Ads.</li>
                      <li>• Generated <strong>1,500+ qualified leads</strong> across SaaS, EdTech, and Consumer Product campaigns (CPL reduced by 20%, CPA by 18%).</li>
                      <li>• Scaled Search, Display, YouTube, Performance Max, and App campaigns, boosting conversion rates by <strong>25%</strong>.</li>
                      <li>• Led mobile app growth driving <strong>10,000+ app installs</strong> via AppsFlyer attribution & SKAN measurement.</li>
                      <li>• Setup end-to-end tracking/attribution frameworks using GA4, GTM, Meta Pixel, Meta CAPI, and AppsFlyer.</li>
                      <li>• Automated lead flows using Pabbly Connect, reducing manual effort by <strong>70%</strong>.</li>
                    </ul>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                      July 2022 – Aug 2025
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-3">Digital Marketing Associate</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">MK DIGITALMARE PVT LTD · Hyderabad, TS</p>
                    
                    <ul className="mt-4 space-y-2.5 text-[13px] text-gray-600 font-light leading-relaxed">
                      <li>• Planned performance campaigns across Google & Meta Ads, managing <strong>8L–10L monthly budgets</strong>.</li>
                      <li>• Conducted market research, competitor analysis, and audience segmentation to find high-ROI search keywords.</li>
                      <li>• Integrated tracking setups with GTM & GA4 for robust attribution and custom conversion paths.</li>
                      <li>• Led technical, on-page, and off-page SEO initiatives to grow organic traffic.</li>
                      <li>• Built high-converting landing pages and WordPress/React websites using HTML, CSS, JS, Tailwind, and React.</li>
                      <li>• Utilized Microsoft Clarity heatmaps and behavioral analytics to improve CRO and UI/UX flows.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: EDUCATION & CERTIFICATIONS */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-12"
            >
              {/* Education */}
              <div>
                <SLabel>Credentials</SLabel>
                <DHeading className="mb-10">
                  Education &<br /><em style={{ color: "#2563eb", fontStyle: "italic" }}>Academia</em>
                </DHeading>
                
                <div className="space-y-6">
                  <div className="border border-[#e5e7eb] rounded-2xl p-5 bg-[#f9fafb]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563eb] bg-[#2563eb]/10 px-2 py-0.5 rounded">
                      2020 – 2022
                    </span>
                    <h4 className="font-semibold text-gray-900 text-[16px] mt-2">Master of Science (M.Sc)</h4>
                    <p className="text-xs text-gray-500">Kakatiya University</p>
                    <p className="text-xs font-semibold text-gray-700 mt-1">GPA: 6.5 / 10.0</p>
                  </div>

                  <div className="border border-[#e5e7eb] rounded-2xl p-5 bg-[#f9fafb]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      2016 – 2019
                    </span>
                    <h4 className="font-semibold text-gray-900 text-[16px] mt-2">Bachelor of Science (B.Sc)</h4>
                    <p className="text-xs text-gray-500">Kakatiya University</p>
                    <p className="text-xs font-semibold text-gray-700 mt-1">GPA: 7.02 / 10.0</p>
                  </div>
                </div>
              </div>

              {/* Certifications & Languages */}
              <div className="border border-[#e5e7eb] rounded-2xl p-6 bg-[#f9fafb]">
                <h4 className="font-semibold text-gray-900 text-[15px] mb-4">Certifications</h4>
                <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Google Ads Search Certified (Aug 2025)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Google Analytics Certified (Oct 2025)
                  </li>
                </ul>

                <h4 className="font-semibold text-gray-900 text-[15px] mt-6 mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 bg-white border border-[#e5e7eb] rounded-lg text-gray-700 font-medium">
                    English (Intermediate)
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-white border border-[#e5e7eb] rounded-lg text-gray-700 font-medium">
                    Hindi (Intermediate)
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-white border border-[#e5e7eb] rounded-lg text-gray-700 font-medium">
                    Telugu (Proficient)
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 6 — TOOLS GRID
      ════════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16 bg-[#f9fafb] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <SLabel>My Stack</SLabel>
            <DHeading>
              Tools I use<br />
              <em style={{ color: "#2563eb", fontStyle: "italic" }}>every single day</em>
            </DHeading>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-px bg-[#e5e7eb] border border-[#e5e7eb] rounded-2xl overflow-hidden"
          >
            {TOOLS.map((t, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.08, zIndex: 10 }}
                className="bg-white px-3 py-5 flex flex-col items-center gap-2 cursor-default hover:bg-[#2563eb]/5 transition-colors duration-200"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="text-[10px] text-gray-500 font-medium text-center leading-tight">{t.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 7 — BRANDS WORKED WITH
      ════════════════════════════════════════════════ */}
      <div className="py-20 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
            <SLabel>Trusted By</SLabel>
            <DHeading>
              Brands I've worked<br />
              <em style={{ color: "#2563eb", fontStyle: "italic" }}>with & grown</em>
            </DHeading>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {BRANDS.map((b, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                className="border border-[#e5e7eb] rounded-xl px-7 py-4 bg-white min-w-[150px] text-center cursor-default transition-all duration-200 hover:border-[#2563eb]/35"
              >
                <span className="text-[15px] font-semibold text-gray-700">{b}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          BLOCK 8 — CTA
      ════════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative rounded-3xl overflow-hidden bg-[#111827] px-8 py-16 md:px-16 text-center"
          >
            {/* bg detail */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <SLabel>
                <span className="text-[#2563eb]">Ready to Scale?</span>
              </SLabel>
              <h3
                className="font-light text-white mb-4 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 4vw, 48px)" }}
              >
                Let's build a growth system<br />
                <em className="text-[#2563eb]">your business can rely on.</em>
              </h3>
              <p className="text-gray-500 max-w-lg mx-auto mb-10 text-[15px] leading-relaxed font-light">
                Free 30-minute strategy call. No fluff — I'll audit your current setup and tell you exactly where the money is being left on the table.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#2563eb] text-[#111827] font-semibold text-[14px] px-8 py-4 rounded-xl hover:bg-[#3b82f6] transition-colors duration-200 no-underline"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Book a Free Call
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://wa.me/919492919173"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 border border-white/15 text-white font-medium text-[14px] px-8 py-4 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all duration-200 no-underline"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  💬 WhatsApp Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}