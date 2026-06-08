import { motion } from "framer-motion";
import {
  BarChart3,
  Megaphone,
  Tag,
  LineChart,
  Search,
  Target,
  RefreshCcw,
  Monitor,
  Briefcase,
  Code2,
  Wrench,
  Globe,
  FileCode,
  Paintbrush,
  Code,
  Layers,
} from "lucide-react";

export default function TechStack() {
  const tools = [
    // Ads
    { name: "Google Ads", icon: <BarChart3 size={22} /> },
    { name: "Meta Ads", icon: <Megaphone size={22} /> },
    { name: "Meta CAPI", icon: <RefreshCcw size={22} /> },
    // Digital Marketing & Tracking
    { name: "GTM", icon: <Tag size={22} /> },
    { name: "GA4", icon: <LineChart size={22} /> },
    { name: "Looker", icon: <Monitor size={22} /> },
    { name: "HubSpot", icon: <Briefcase size={22} /> },
    { name: "Search Console", icon: <Globe size={22} /> },
    { name: "Ahrefs", icon: <Search size={22} /> },
    { name: "Semrush", icon: <Target size={22} /> },
    { name: "Hotjar", icon: <Wrench size={22} /> },
    // Frontend Development
    { name: "React.js", icon: <Code2 size={22} /> },
    { name: "HTML5", icon: <FileCode size={22} /> },
    { name: "CSS3", icon: <Paintbrush size={22} /> },
    { name: "JavaScript", icon: <Code size={22} /> },
    { name: "Tailwind CSS", icon: <Layers size={22} /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
            My Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Tools & Platforms
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">

          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center 
                         bg-white border border-gray-200 
                         rounded-xl p-5 text-center
                         shadow-sm hover:shadow-lg
                         hover:-translate-y-1 transition-all duration-300"
            >
              {/* ICON */}
              <div className="text-blue-600 mb-3 group-hover:scale-110 transition">
                {tool.icon}
              </div>

              {/* NAME */}
              <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition">
                {tool.name}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}