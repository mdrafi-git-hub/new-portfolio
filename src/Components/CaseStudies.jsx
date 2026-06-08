import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      category: "MOBILE APP GROWTH · ATTRIBUTION",
      title: "Scaled App Acquisition to 10K+ Installs",
      desc: "Managed multi-channel acquisition across Google App campaigns, Meta, and Snapchat Ads. Setup AppsFlyer and SKAN tracking to attribute conversion signals accurately, reducing CPA by 18%.",
      metrics: [
        { value: "10K+", label: "Installs" },
        { value: "-18%", label: "CPA" },
        { value: "AppsFlyer", label: "Attribution" },
      ],
      tools: ["Google Ads", "Meta Ads", "AppsFlyer", "SKAN"],
      gradient: "from-blue-50 to-blue-100",
      icon: "📱",
    },
    {
      category: "B2B LEAD GEN · AUTOMATION",
      title: "Generated 1,500+ Qualified SaaS/EdTech Leads",
      desc: "Optimized 15L+ monthly budgets across Google PMax, Search, and Reddit Ads. Built automated lead capture and distribution funnels using Pabbly Connect, reducing manual effort by 70%.",
      metrics: [
        { value: "1,500+", label: "Leads" },
        { value: "-20%", label: "CPL" },
        { value: "-70%", label: "Manual Effort" },
      ],
      tools: ["Google Ads", "Reddit Ads", "Pabbly Connect", "GTM"],
      gradient: "from-teal-50 to-teal-100",
      icon: "🎯",
    },
    {
      category: "WEB DEV · CRO",
      title: "Boosted Landing Page Conversions by 30%",
      desc: "Designed and developed fast-loading React & Tailwind landing pages. Utilized Microsoft Clarity heatmaps, GTM tracking, and session recordings to optimize user flows and reduce bounce rates.",
      metrics: [
        { value: "+30%", label: "Conv. Rate" },
        { value: "React JS", label: "Stack" },
        { value: "GA4/Clarity", label: "Analytics" },
      ],
      tools: ["React", "Tailwind CSS", "Clarity", "GA4"],
      gradient: "from-indigo-50 to-indigo-100",
      icon: "⚛️",
    },
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Case Studies
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:border-green-400/50 shadow-sm hover:shadow-md transition duration-300"
            >
              
              {/* TOP ICON SECTION */}
              <div
                className={`h-40 flex items-center justify-center text-5xl bg-gradient-to-br ${item.gradient}`}
              >
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-xs text-green-600 font-semibold tracking-widest mb-2">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold mb-2 leading-snug text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* METRICS */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {item.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center"
                    >
                      <h4 className="text-green-600 font-bold">
                        {m.value}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* TOOLS */}
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}