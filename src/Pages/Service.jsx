// Services.jsx — Full Services Section
// Stack: React + Tailwind CSS + Framer Motion
// npm install framer-motion

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── FONT INJECTION (add to index.html in production) ───────────────────────
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  `}</style>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "google-ads",
    index: "01",
    icon: "📊",
    color: "#4285F4",
    colorLight: "#EBF1FF",
    title: "Google Ads Management",
    tagline: "Turn search intent into revenue — at scale.",
    shortDesc:
      "Full-funnel Google Ads strategy across Search, Shopping, PMax, Display & YouTube. Built for measurable ROAS — not just impressions.",
    longDesc:
      "I build and manage Google Ads accounts that are engineered for profit, not just traffic. From keyword architecture and match type strategy to smart bidding configuration and negative keyword hygiene — every layer of your campaign is structured to maximize the value of every rupee spent.",
    deliverables: [
      "Full account audit & restructure",
      "Search, Shopping & PMax campaign setup",
      "Smart bidding strategy & target CPA/ROAS config",
      "Negative keyword lists & search term mining",
      "Ad copy creation & A/B testing",
      "Weekly performance reports with insights",
      "Competitor analysis & market benchmarking",
      "Google Tag Manager + GA4 conversion setup",
    ],
    metrics: [
      { label: "Avg ROAS Achieved", value: "5.2x" },
      { label: "Avg CPA Reduction", value: "42%" },
      { label: "Campaigns Managed", value: "30+" },
    ],
    tools: ["Google Ads", "GA4", "GTM", "Keyword Planner", "Looker Studio", "Search Console"],
    idealFor: ["E-Commerce / D2C", "SaaS & Tech", "Service Businesses", "Lead Generation"],
    caseStudy: {
      industry: "E-Commerce",
      result: "Scaled from ₹3L → ₹12L/month revenue",
      metric: "5.2x ROAS · ↓42% CPA",
    },
  },
  {
    id: "meta-ads",
    index: "02",
    icon: "📱",
    color: "#0668E1",
    colorLight: "#EBF3FF",
    title: "Meta Ads Strategy",
    tagline: "Reach the right people, at the right moment, on the right device.",
    shortDesc:
      "Facebook & Instagram campaigns with advanced audience architecture, creative strategy, retargeting funnels, and Conversion API (CAPI) for signal accuracy.",
    longDesc:
      "Meta advertising is broken for most businesses because they're running ads without proper signal quality. I fix that from the ground up — starting with CAPI integration to give Meta the data it needs to find your best customers, then building creative-led funnels that move people from cold audiences to repeat buyers.",
    deliverables: [
      "Meta Pixel + Conversions API (CAPI) setup",
      "Audience research — cold, warm, lookalike",
      "Full-funnel campaign structure (TOF / MOF / BOF)",
      "Creative strategy & ad copy development",
      "A/B testing framework for creatives & audiences",
      "Retargeting sequences & dynamic ads",
      "Meta Business Manager & ad account audit",
      "Weekly reporting & optimization cadence",
    ],
    metrics: [
      { label: "CPL Reduction Achieved", value: "72%" },
      { label: "Avg ROAS on Meta", value: "3.8x" },
      { label: "Leads Generated", value: "5K+" },
    ],
    tools: ["Meta Ads Manager", "Meta CAPI", "Facebook Pixel", "Ads Library", "Canva/Figma", "HubSpot"],
    idealFor: ["Real Estate", "E-Commerce", "Coaches & Consultants", "App Installs"],
    caseStudy: {
      industry: "Real Estate",
      result: "200+ qualified leads at ₹180 CPL",
      metric: "↓72% CPL · 3.8x ROAS",
    },
  },
  {
    id: "seo",
    index: "03",
    icon: "🔍",
    color: "#34A853",
    colorLight: "#EDFAF1",
    title: "SEO & Content Strategy",
    tagline: "Build traffic that compounds — not traffic you rent.",
    shortDesc:
      "Technical SEO, keyword clustering, content strategy, Core Web Vitals optimization, and link building for sustainable organic growth that reduces dependence on paid ads.",
    longDesc:
      "SEO done right is a compounding asset. I approach it as an engineer — starting with a technical audit to fix what's broken, then building content architecture that captures demand across the entire buyer journey. The result is consistent, high-intent organic traffic that grows month over month without increasing ad spend.",
    deliverables: [
      "Full technical SEO audit (100+ point checklist)",
      "Keyword research & topic cluster mapping",
      "On-page optimization (titles, meta, schema, structure)",
      "Core Web Vitals & page speed improvements",
      "Content brief creation & editorial calendar",
      "Internal linking architecture",
      "Link building outreach strategy",
      "Monthly GSC + rank tracking reports",
    ],
    metrics: [
      { label: "Traffic Growth (6 months)", value: "+340%" },
      { label: "Keyword Rankings Achieved", value: "#1–3" },
      { label: "Organic Conversion Lift", value: "+120%" },
    ],
    tools: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "PageSpeed Insights", "Surfer SEO"],
    idealFor: ["SaaS & Startups", "Content Businesses", "Local Services", "E-Commerce"],
    caseStudy: {
      industry: "SaaS",
      result: "2K → 8.8K organic visits/month in 6 months",
      metric: "+340% Traffic · #1 Rankings",
    },
  },
  {
    id: "conversion-tracking",
    index: "04",
    icon: "🎯",
    color: "#EA4335",
    colorLight: "#FEF0EF",
    title: "Conversion Tracking & MarTech",
    tagline: "If you can't measure it, you can't grow it.",
    shortDesc:
      "End-to-end tracking setup with GTM, GA4, Meta Pixel, CAPI, and server-side tagging. Full attribution from first click to final conversion — no blind spots.",
    longDesc:
      "Most businesses are flying blind. Their tracking setup is broken, their attribution is wrong, and their ad platforms are optimizing for the wrong events. I build measurement infrastructure that captures every meaningful user action and sends clean, enriched signals to your ad platforms — enabling smarter bidding and accurate reporting.",
    deliverables: [
      "GTM container setup & tag architecture",
      "GA4 full implementation with custom events",
      "Meta Pixel + CAPI (server-side) integration",
      "Google Ads conversion tracking & enhanced conversions",
      "Server-side tagging setup (Node.js / GTM server)",
      "Attribution model configuration",
      "Funnel visualization in GA4 / Looker Studio",
      "Data layer implementation & QA audit",
    ],
    metrics: [
      { label: "Data Accuracy Achieved", value: "98%" },
      { label: "Wasted Spend Eliminated", value: "30%" },
      { label: "Tracking Setups Completed", value: "20+" },
    ],
    tools: ["GTM", "GA4", "Meta CAPI", "Google Ads", "BigQuery", "Looker Studio", "Node.js", "AppsFlyer"],
    idealFor: ["Any Business Running Paid Ads", "E-Commerce", "App Businesses", "SaaS"],
    caseStudy: {
      industry: "D2C Brand",
      result: "98% event accuracy, 30% budget recovered",
      metric: "↓30% Wasted Spend · 98% Data Accuracy",
    },
  },
  {
    id: "landing-pages",
    index: "05",
    icon: "⚛️",
    color: "#61DAFB",
    colorLight: "#F0FEFF",
    title: "Landing Page Development",
    tagline: "Pages that convert visitors into customers — by design.",
    shortDesc:
      "High-converting React.js landing pages built with CRO principles, pixel-perfect tracking integration, and mobile-first performance optimization.",
    longDesc:
      "A great ad campaign is only as good as the page it sends traffic to. I design and develop landing pages in React.js that are engineered for conversion — with clear messaging hierarchy, trust signals, fast load times, and every tracking event wired correctly from day one. No guesswork, no missed conversions.",
    deliverables: [
      "Custom React.js + Tailwind CSS development",
      "CRO-optimized copy & layout architecture",
      "Mobile-first, responsive design",
      "Page speed optimization (90+ Lighthouse score)",
      "Full GTM / GA4 / Pixel tracking integration",
      "A/B testing setup with variant tracking",
      "WhatsApp & lead form CTA integration",
      "Post-launch performance monitoring",
    ],
    metrics: [
      { label: "Avg Conversion Rate Lift", value: "+85%" },
      { label: "Lighthouse Performance", value: "90+" },
      { label: "Pages Built & Live", value: "15+" },
    ],
    tools: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion", "GTM", "Hotjar", "Vercel"],
    idealFor: ["Google Ads Traffic", "Meta Ads Traffic", "Product Launches", "Lead Gen Funnels"],
    caseStudy: {
      industry: "Developer Hiring SaaS",
      result: "Built 1HourDeveloper.com — live & converting",
      metric: "+85% CVR vs previous page",
    },
  },
  {
    id: "analytics-reporting",
    index: "06",
    icon: "📈",
    color: "#F9AB00",
    colorLight: "#FFFBEB",
    title: "Analytics & Performance Reporting",
    tagline: "Know exactly what's working — and what isn't.",
    shortDesc:
      "Custom Looker Studio dashboards, GA4 funnels, and weekly performance reports that turn data into clear, actionable decisions for your marketing team.",
    longDesc:
      "Data without clarity is just noise. I build reporting systems that give you a real-time view of your full marketing performance — from ad spend and ROAS to funnel drop-off and cohort behaviour. No more guessing. No more spreadsheet chaos. Just clear, visual dashboards that tell you where to invest next.",
    deliverables: [
      "Custom Looker Studio dashboard (multi-channel)",
      "GA4 funnel & path exploration setup",
      "Weekly / monthly performance reports",
      "ROAS, CPL, CPA, LTV tracking by channel",
      "Cohort analysis & retention reporting",
      "Competitor benchmarking reports",
      "Attribution window analysis",
      "Executive-level summary slides",
    ],
    metrics: [
      { label: "Avg Decision Speed Improvement", value: "3x" },
      { label: "Dashboards Built", value: "25+" },
      { label: "Reporting Accuracy", value: "99%" },
    ],
    tools: ["Looker Studio", "GA4", "Google Ads", "Meta Ads", "BigQuery", "Google Sheets", "Supermetrics"],
    idealFor: ["Marketing Teams", "Agency Clients", "Founders & CEOs", "D2C Brands"],
    caseStudy: {
      industry: "Multi-Channel Brand",
      result: "Single dashboard for 5 ad channels",
      metric: "3x faster decisions · 99% accuracy",
    },
  },
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
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
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

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────

function ServiceCard({ svc, isActive, onClick }) {
  return (
    <motion.div
      variants={staggerItem}
      onClick={onClick}
      className={`
        relative cursor-pointer border rounded-2xl p-7 transition-all duration-300 overflow-hidden group
        ${isActive
          ? "border-[#111827] bg-[#111827] shadow-2xl"
          : "border-[#e5e7eb] bg-white hover:border-[#2563eb]/40 hover:shadow-lg"
        }
      `}
    >
      {/* accent bar */}
      <div
        className="absolute top-0 left-0 w-full h-0.5 transition-all duration-300"
        style={{
          background: isActive ? svc.color : "transparent",
        }}
      />

      {/* icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{
          background: isActive ? `${svc.color}22` : svc.colorLight,
        }}
      >
        {svc.icon}
      </div>

      {/* index */}
      <div
        className={`text-[11px] font-mono mb-2 transition-colors duration-300 ${isActive ? "text-[#2563eb]" : "text-[#9ca3af]"}`}
      >
        {svc.index}
      </div>

      {/* title */}
      <h3
        className={`font-semibold text-[16px] mb-2 leading-snug transition-colors duration-300 ${isActive ? "text-white" : "text-[#111827] group-hover:text-[#2563eb]"}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {svc.title}
      </h3>

      {/* tagline */}
      <p
        className={`text-[12px] leading-relaxed font-light transition-colors duration-300 ${isActive ? "text-[#9ca3af]" : "text-[#6b7280]"}`}
      >
        {svc.tagline}
      </p>

      {/* hover arrow */}
      <div
        className={`absolute bottom-5 right-5 text-[18px] transition-all duration-300 ${isActive ? "text-[#2563eb] translate-x-0" : "text-[#e5e7eb] translate-x-1 group-hover:translate-x-0 group-hover:text-[#2563eb]"}`}
      >
        →
      </div>
    </motion.div>
  );
}

// ─── SERVICE DETAIL PANEL ─────────────────────────────────────────────────────

function ServiceDetail({ svc }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      key={svc.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16"
    >
      {/* LEFT */}
      <div>
        {/* header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: svc.colorLight }}
          >
            {svc.icon}
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#2563eb] mb-1">{svc.index}</div>
            <h3
              className="text-[22px] font-semibold text-[#111827] leading-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {svc.title}
            </h3>
            <p className="text-[13px] text-[#6b7280] mt-1 font-light italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px" }}>
              {svc.tagline}
            </p>
          </div>
        </div>

        <p className="text-[14px] text-[#4b5563] leading-[1.85] mb-8 font-light">{svc.longDesc}</p>

        {/* METRICS */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {svc.metrics.map((m, i) => (
            <div
              key={i}
              className="border border-[#e5e7eb] rounded-xl p-4 bg-[#f9fafb] text-center"
            >
              <div
                className="font-light leading-none mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  color: svc.color,
                }}
              >
                {m.value}
              </div>
              <div className="text-[10px] text-[#6b7280] font-medium tracking-wide uppercase leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* CASE STUDY */}
        <div
          className="rounded-2xl p-5 border mb-8"
          style={{ background: `${svc.color}08`, borderColor: `${svc.color}25` }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
              style={{ background: `${svc.color}20` }}
            >
              📁
            </div>
            <div>
              <div
                className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-1"
                style={{ color: svc.color }}
              >
                Case Study · {svc.caseStudy.industry}
              </div>
              <div className="text-[14px] font-semibold text-[#111827] mb-1">{svc.caseStudy.result}</div>
              <div className="text-[12px] text-[#6b7280] font-medium">{svc.caseStudy.metric}</div>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9ca3af] mb-3">
            Tools Used
          </div>
          <div className="flex flex-wrap gap-2">
            {svc.tools.map((t) => (
              <span
                key={t}
                className="text-[11px] px-3 py-1 border border-[#e5e7eb] rounded-full text-[#6b7280] bg-[#f9fafb] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        {/* DELIVERABLES */}
        <div className="border border-[#e5e7eb] rounded-2xl overflow-hidden mb-6 bg-[#f9fafb]">
          <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111827]">
              What You Get
            </span>
            <span
              className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded"
              style={{ background: svc.colorLight, color: svc.color }}
            >
              {svc.deliverables.length} Deliverables
            </span>
          </div>
          <div className="p-4">
            {svc.deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-start gap-3 py-3 border-b border-[#e5e7eb] last:border-0"
              >
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${svc.color}18` }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: svc.color }}
                  />
                </div>
                <span className="text-[13px] text-[#374151] font-light leading-snug">{d}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IDEAL FOR */}
        <div className="border border-[#e5e7eb] rounded-2xl p-5 bg-white mb-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9ca3af] mb-4">
            Ideal For
          </div>
          <div className="grid grid-cols-2 gap-2">
            {svc.idealFor.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[13px] text-[#374151] font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA BOX */}
        <div className="bg-[#111827] rounded-2xl p-6 text-center">
          <div
            className="font-light text-white mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px" }}
          >
            Ready for <em style={{ color: "#2563eb" }}>{svc.title}?</em>
          </div>
          <p className="text-[12px] text-[#6b7280] mb-5 font-light">
            Book a free 30-min call. I'll audit your current setup and show you exactly what needs to change.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#2563eb] text-[#111827] font-semibold text-[12px] px-5 py-2.5 rounded-lg hover:bg-[#3b82f6] transition-colors duration-200 no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book Free Call →
            </a>
            <a
              href="https://wa.me/919492919173"
              className="inline-flex items-center gap-1.5 border border-white/15 text-white text-[12px] font-medium px-5 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-200 no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── PRICING CARD ─────────────────────────────────────────────────────────────

function PricingCard({ plan, index }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={!plan.highlight ? { y: -4 } : {}}
      className={`
        relative border rounded-2xl p-8 flex flex-col transition-all duration-300
        ${plan.highlight
          ? "bg-[#111827] border-[#111827] shadow-2xl scale-[1.03]"
          : "bg-white border-[#e5e7eb] hover:shadow-lg hover:border-[#2563eb]/30"
        }
      `}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#2563eb] text-[#111827] text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-1 rounded-full whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h4
          className={`font-semibold text-[18px] mb-1 ${plan.highlight ? "text-white" : "text-[#111827]"}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {plan.name}
        </h4>
        <p className={`text-[13px] font-light ${plan.highlight ? "text-[#9ca3af]" : "text-[#6b7280]"}`}>
          {plan.desc}
        </p>
      </div>

      <div className="mb-8">
        <div
          className="font-light leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 4vw, 48px)",
            color: plan.highlight ? "#2563eb" : "#111827",
          }}
        >
          {plan.price}
          <span
            className={`text-[16px] font-normal ml-1 ${plan.highlight ? "text-[#6b7280]" : "text-[#6b7280]"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {plan.period}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-3 mb-8">
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? "bg-[#2563eb]/20" : "bg-[#2563eb]/10"}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
            </div>
            <span className={`text-[13px] font-light ${plan.highlight ? "text-[#d1d5db]" : "text-[#4b5563]"}`}>
              {f}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className={`
          w-full py-3.5 rounded-xl text-[13px] font-semibold text-center transition-all duration-200 no-underline block
          ${plan.highlight
            ? "bg-[#2563eb] text-[#111827] hover:bg-[#3b82f6]"
            : "border border-[#e5e7eb] text-[#111827] hover:border-[#111827] hover:bg-[#f9fafb]"
          }
        `}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {plan.cta} →
      </a>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="bg-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Outfit', sans-serif" }}
    >
      <FontStyle />

      {/* ══════════════════════════════════════════════
          BLOCK 1 — SECTION HERO
      ══════════════════════════════════════════════ */}
      <div className="pt-28 pb-20 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb] relative overflow-hidden">
        {/* bg decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#2563eb]/4 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#111827]/3 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SLabel>What I Do</SLabel>
              <DHead className="mb-6">
                Services built for<br />
                <em style={{ color: "#2563eb", fontStyle: "italic" }}>growth at every stage.</em>
              </DHead>
              <p className="text-[15px] text-[#6b7280] leading-relaxed font-light max-w-[460px]">
                From full-funnel paid media and SEO to pixel-perfect tracking and custom landing pages — every service I offer is tied directly to measurable business outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-4 lg:items-end"
            >
              {/* QUICK STATS ROW */}
              <div className="grid grid-cols-3 gap-4 w-full lg:max-w-[420px]">
                {[
                  { n: "6", l: "Core Services" },
                  { n: "3.5+", l: "Years Delivering" },
                  { n: "₹3.0Cr+", l: "Spend Managed" },
                ].map((s, i) => (
                  <div key={i} className="border border-[#e5e7eb] rounded-xl p-4 text-center bg-[#f9fafb]">
                    <div
                      className="font-light text-[#2563eb] leading-none mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 2.5vw, 30px)" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-[10px] text-[#6b7280] font-medium uppercase tracking-wide">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#111827] text-white font-semibold text-[13px] px-6 py-3 rounded-xl hover:bg-[#1f2937] transition-colors duration-200 no-underline"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Start a Project →
                </a>
                <a
                  href="https://wa.me/919492919173"
                  className="inline-flex items-center gap-2 border border-[#e5e7eb] text-[#111827] font-medium text-[13px] px-6 py-3 rounded-xl hover:border-[#111827] transition-all duration-200 no-underline"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  💬 Quick Chat
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 2 — SERVICE CARDS GRID + DETAIL PANEL
      ══════════════════════════════════════════════ */}
      <div className="py-20 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">

          {/* CARD GRID */}
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14"
          >
            {SERVICES.map((svc, i) => (
              <ServiceCard
                key={svc.id}
                svc={svc}
                isActive={activeService === i}
                onClick={() => setActiveService(i)}
              />
            ))}
          </motion.div>

          {/* DETAIL PANEL */}
          <div className="border border-[#e5e7eb] rounded-3xl p-6 sm:p-8 lg:p-12 bg-[#f9fafb]">
            <AnimatePresence mode="wait">
              <ServiceDetail key={SERVICES[activeService].id} svc={SERVICES[activeService]} />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 3 — FULL SERVICE LIST (accordion style)
      ══════════════════════════════════════════════ */}
      <ServiceListAccordion />


      {/* ══════════════════════════════════════════════
          BLOCK 5 — WHY CHOOSE ME
      ══════════════════════════════════════════════ */}
      <WhyChooseMe />

      {/* ══════════════════════════════════════════════
          BLOCK 6 — FINAL CTA
      ══════════════════════════════════════════════ */}
      <div className="py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-[#111827] px-8 py-20 text-center"
          >
            {/* glow blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563eb]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <SLabel center>
                <span className="text-[#2563eb]">Let's Work Together</span>
              </SLabel>
              <h3
                className="font-light text-white mb-4 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 52px)" }}
              >
                Not sure which service<br />
                <em className="text-[#2563eb]">you need? Let's find out.</em>
              </h3>
              <p className="text-[#6b7280] max-w-lg mx-auto mb-10 text-[15px] leading-relaxed font-light">
                Book a free 30-minute strategy call. I'll audit your current marketing setup and tell you exactly what will move the needle for your business.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-[#2563eb] text-[#111827] font-semibold text-[14px] px-8 py-4 rounded-xl hover:bg-[#3b82f6] transition-colors duration-200 no-underline"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Book Free Strategy Call →
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

// ─── SERVICE LIST ACCORDION ───────────────────────────────────────────────────

function ServiceListAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="py-20 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <SLabel>All Services</SLabel>
          <DHead>
            Everything I offer —<br />
            <em style={{ color: "#2563eb", fontStyle: "italic" }}>in detail.</em>
          </DHead>
        </motion.div>

        <div className="border-t border-[#e5e7eb]">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={staggerItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border-b border-[#e5e7eb]"
            >
              {/* ROW HEADER */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-5 py-6 text-left group transition-colors duration-200 hover:bg-[#f9fafb] px-4 -mx-4 rounded-xl"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: svc.colorLight }}
                >
                  {svc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5">
                    <span className="text-[10px] font-mono text-[#9ca3af]">{svc.index}</span>
                    <span
                      className="font-semibold text-[16px] text-[#111827] group-hover:text-[#2563eb] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {svc.title}
                    </span>
                  </div>
                  <span className="text-[13px] text-[#6b7280] font-light hidden sm:block">{svc.tagline}</span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {/* tools preview */}
                  <div className="hidden md:flex gap-1.5">
                    {svc.tools.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 border border-[#e5e7eb] rounded text-[#6b7280] bg-[#f9fafb]">
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* expand icon */}
                  <div
                    className={`w-7 h-7 rounded-full border border-[#e5e7eb] flex items-center justify-center transition-all duration-300 ${open === i ? "bg-[#111827] border-[#111827] rotate-45" : "bg-white"}`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${open === i ? "text-white" : "text-[#111827]"}`}
                      viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* EXPANDED CONTENT */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 px-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <p className="text-[14px] text-[#4b5563] leading-relaxed font-light mb-5">{svc.longDesc}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {svc.deliverables.map((d, j) => (
                            <div key={j} className="flex items-start gap-2 text-[13px] text-[#374151]">
                              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${svc.color}18` }}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: svc.color }} />
                              </div>
                              <span className="font-light">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="border border-[#e5e7eb] rounded-xl p-5 bg-[#f9fafb]">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: svc.color }}>
                            Proof It Works
                          </div>
                          <div className="text-[14px] font-semibold text-[#111827] mb-1">{svc.caseStudy.result}</div>
                          <div className="text-[12px] text-[#6b7280] mb-4">{svc.caseStudy.metric}</div>
                          <div className="grid grid-cols-3 gap-2">
                            {svc.metrics.map((m, k) => (
                              <div key={k} className="text-center">
                                <div className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: svc.color }}>
                                  {m.value}
                                </div>
                                <div className="text-[9px] text-[#6b7280] uppercase tracking-wide leading-tight mt-0.5">{m.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── WHY CHOOSE ME ────────────────────────────────────────────────────────────

function WhyChooseMe() {
  const WHY = [
    {
      icon: "🔬",
      title: "Technical + Strategic",
      desc: "I'm one of the rare marketers who can set up CAPI server-side tagging AND write the ad copy AND build the landing page in React. One person. Full stack.",
    },
    {
      icon: "📊",
      title: "Every Decision is Data-Driven",
      desc: "I don't make creative decisions based on gut feel. Every test, every budget shift, every creative change is backed by data from GA4, Looker Studio, and platform analytics.",
    },
    {
      icon: "🎯",
      title: "ROI-Obsessed",
      desc: "I track everything back to revenue. Not impressions. Not clicks. Not even leads — unless they're converting to actual paying customers.",
    },
    {
      icon: "⚡",
      title: "Fast Execution",
      desc: "I move fast. Campaigns go live within 3–5 days of onboarding. Tracking is set up and verified before the first rupee is spent. No months of 'strategy' docs.",
    },
    {
      icon: "🤝",
      title: "Transparent Communication",
      desc: "Weekly reports. Clear explanations. No agency jargon. You'll always know exactly what I'm doing, why, and what result it drove.",
    },
    {
      icon: "🏗",
      title: "Systems, Not Just Campaigns",
      desc: "I build marketing infrastructure that outlasts our engagement. Your tracking, your funnels, your data — built to scale with or without me.",
    },
  ];

  return (
    <div className="py-24 px-5 sm:px-8 lg:px-16 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SLabel center>Why Work With Me</SLabel>
          <DHead center>
            What makes this<br />
            <em style={{ color: "#2563eb", fontStyle: "italic" }}>partnership different.</em>
          </DHead>
        </motion.div>

        <motion.div
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {WHY.map((w, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,0,0,0.07)" }}
              className="border border-[#e5e7eb] rounded-2xl p-7 bg-white group cursor-default transition-all duration-300 hover:border-[#2563eb]/35"
            >
              <div className="w-11 h-11 rounded-xl bg-[#f9fafb] border border-[#e5e7eb] flex items-center justify-center text-xl mb-5 group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/25 transition-all duration-300">
                {w.icon}
              </div>
              <h4
                className="font-semibold text-[15px] text-[#111827] mb-3 group-hover:text-[#2563eb] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {w.title}
              </h4>
              <p className="text-[13px] text-[#6b7280] leading-relaxed font-light">{w.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}