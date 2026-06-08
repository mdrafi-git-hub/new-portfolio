import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Rafi completely transformed our ad performance. Our ROAS went from 1.8x to 5.2x in just 3 months. His tracking setup alone saved us from wasting budget on the wrong campaigns.",
      name: "Arvind Kumar",
      role: "Founder, StyleCart India",
      initials: "AK",
    },
    {
      text: "The Meta Ads funnel he built generated 200+ qualified leads. He set up CAPI integration, and the data quality improved massively. Worth every rupee.",
      name: "Sunita Patel",
      role: "Marketing Head, PropNest",
      initials: "SP",
    },
    {
      text: "Not only did he grow our organic traffic 3x, he also built our landing pages in React. Having someone who understands both marketing and dev is a huge competitive advantage.",
      name: "Rahul Verma",
      role: "CEO, CloudSprint SaaS",
      initials: "RV",
    },
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
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            What Clients Say
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
            >
              
              {/* STARS */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{item.text}"
              </p>

              {/* AUTHOR */}
              <div className="flex items-center gap-4">
                
                {/* AVATAR */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  {item.initials}
                </div>

                {/* INFO */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}