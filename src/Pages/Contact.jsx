// Contact.jsx — Let's Talk Growth
// Stack: React + Tailwind CSS + Framer Motion
// npm install framer-motion lucide-react

import { motion } from "framer-motion";
import { Mail, Phone, Calendar, MapPin, ArrowRight } from "lucide-react";

// ─── FONT INJECTION ──────────────────────────────────────────────────────────
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  `}</style>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
        fontSize: "clamp(32px, 5vw, 56px)",
      }}
    >
      {children}
    </h2>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section className="bg-[#f9fafb] overflow-hidden min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <FontStyle />

      {/* ══════════════════════════════════════════════
          BLOCK 1 — HERO SECTION
      ══════════════════════════════════════════════ */}
      <div className="pt-32 pb-16 px-5 sm:px-8 lg:px-16 relative bg-white border-b border-[#e5e7eb]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <SLabel center>Get In Touch</SLabel>
            <DHead center className="mb-6">
              Ready to <em style={{ color: "#2563eb", fontStyle: "italic" }}>scale your business?</em>
            </DHead>
            <p className="text-[16px] text-[#6b7280] leading-relaxed font-light max-w-xl mx-auto">
              Whether you need Google Ads, Meta Ads, SEO, or complete conversion tracking —
              let's discuss how we can engineer your growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BLOCK 2 — MAIN TWO-COLUMN LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: DIRECT CONTACT CHANNELS */}
          <motion.div 
            variants={staggerWrap}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* WhatsApp */}
            <motion.a
              variants={staggerItem}
              href="https://wa.me/919492919173"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-6 bg-white border border-[#e5e7eb] rounded-2xl hover:border-[#22c55e]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] text-[16px] mb-1">WhatsApp</h4>
                <p className="text-[14px] text-[#6b7280] font-light mb-2">
                  +91 94929 19173
                </p>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#22c55e]">
                  Quick Reply
                </span>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={staggerItem}
              href="mailto:rafimohammd055@gmail.com"
              className="group flex items-start gap-5 p-6 bg-white border border-[#e5e7eb] rounded-2xl hover:border-[#2563eb]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563eb] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] text-[16px] mb-1">Email</h4>
                <p className="text-[14px] text-[#6b7280] font-light">
                  rafimohammd055@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Book Call */}
            <motion.a
              variants={staggerItem}
              href="#"
              className="group flex items-start gap-5 p-6 bg-white border border-[#e5e7eb] rounded-2xl hover:border-[#a855f7]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#faf5ff] text-[#a855f7] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Calendar size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] text-[16px] mb-1">Book a Call</h4>
                <p className="text-[14px] text-[#6b7280] font-light">
                  30-min free strategy session
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={staggerItem}
              className="flex items-start gap-5 p-6 bg-transparent"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-500 flex-shrink-0">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-semibold text-[#111827] text-[16px] mb-1">Location</h4>
                <p className="text-[14px] text-[#6b7280] font-light">
                  Hyderabad, India<br/>
                  Federal Soft Systems Pvt Ltd
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-white border border-[#e5e7eb] rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden"
          >
            {/* Soft decorative background in form */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2563eb]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-[#111827] mb-2">Send a Message</h3>
              <p className="text-[14px] text-[#6b7280] font-light mb-8">
                Fill out the form below and I will get back to you within 24 hours.
              </p>

              <form className="space-y-5">
                
                {/* Row: Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#4b5563] uppercase tracking-wide">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#f9fafb] border border-[#e5e7eb] text-[#111827] text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 transition-all placeholder:text-[#9ca3af]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-[#4b5563] uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-[#f9fafb] border border-[#e5e7eb] text-[#111827] text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 transition-all placeholder:text-[#9ca3af]"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#4b5563] uppercase tracking-wide">Service Interested In</label>
                  <select className="w-full bg-[#f9fafb] border border-[#e5e7eb] text-[#4b5563] text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 transition-all appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>Select a primary service</option>
                    <option>Google Ads Management</option>
                    <option>Meta Ads Strategy</option>
                    <option>SEO & Content</option>
                    <option>Conversion Tracking (GA4/GTM)</option>
                    <option>Landing Page Build (React)</option>
                    <option>Full Funnel Growth Strategy</option>
                  </select>
                </div>

                {/* Budget Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#4b5563] uppercase tracking-wide">Monthly Ad Budget</label>
                  <select className="w-full bg-[#f9fafb] border border-[#e5e7eb] text-[#4b5563] text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 transition-all appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>Select your current budget</option>
                    <option>Under ₹25,000 / mo</option>
                    <option>₹25,000 – ₹75,000 / mo</option>
                    <option>₹75,000 – ₹2,000,000 / mo</option>
                    <option>₹2,000,000+ / mo</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-[#4b5563] uppercase tracking-wide">Project Details</label>
                  <textarea
                    rows="4"
                    placeholder="Tell me about your goals, your current roadblocks, and what you're looking to achieve..."
                    className="w-full bg-[#f9fafb] border border-[#e5e7eb] text-[#111827] text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 transition-all placeholder:text-[#9ca3af] resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-[#2563eb] text-white py-4 rounded-xl font-semibold text-[15px] hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2563eb]/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <ArrowRight size={18} />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
