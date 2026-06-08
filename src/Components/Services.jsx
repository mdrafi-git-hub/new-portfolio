import { motion } from "framer-motion";
import { BarChart3, Megaphone, Search, Target } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <BarChart3 size={28} />,
      title: "Google Ads Management",
      desc: "Search, Shopping, Display & YouTube campaigns. Full-funnel strategy, bid optimization, and smart bidding setup for maximum ROI.",
      tags: ["Search", "PMax", "Shopping", "YouTube"],
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Meta Ads Strategy",
      desc: "Facebook & Instagram campaigns with audience research, creative testing, retargeting funnels, and Conversion API setup.",
      tags: ["CAPI", "Retargeting", "A/B Test"],
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <Search size={28} />,
      title: "SEO & Content",
      desc: "On-page, technical SEO, keyword research, content strategy, Core Web Vitals, and link building to grow organic traffic.",
      tags: ["On-Page", "Technical", "GSC"],
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <Target size={28} />,
      title: "Conversion Tracking",
      desc: "End-to-end tracking with GTM, GA4, Meta Pixel, CAPI, and server-side tagging. Know exactly what's driving revenue.",
      tags: ["GTM", "GA4", "Server-Side"],
      color: "bg-orange-50 text-orange-600",
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
          className="mb-14"
        >
          <p className="text-green-600 text-sm font-semibold tracking-widest uppercase">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Services
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-400/50 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* ICON */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition text-gray-900">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}