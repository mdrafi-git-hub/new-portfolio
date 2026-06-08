import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Ready to scale your business?
          </h2>

          <p className="text-gray-600 mt-4">
            Whether you need Google Ads, Meta Ads, SEO, or conversion tracking —
            let’s discuss how we can grow your business.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-15">

          {/* LEFT SIDE - CONTACT OPTIONS */}
          <div className="flex flex-col h-full gap-2">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919492919173"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-4 p-3 border border-gray-200 rounded-xl hover:shadow-md hover:border-green-400 transition"
            >
              <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                <p className="text-sm text-gray-500">
                  +91 94929 19173 · Quick reply
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rafimohammd055@gmail.com"
              className="flex-1 flex items-center gap-4 p-3 border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-400 transition"
            >
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-sm text-gray-500">
                  rafimohammd055@gmail.com
                </p>
              </div>
            </a>

            {/* Book Call */}
            <a
              href="#"
              className="flex-1 flex items-center gap-4 p-3 border border-gray-200 rounded-xl hover:shadow-md hover:border-purple-400 transition"
            >
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Book a Call</h4>
                <p className="text-sm text-gray-500">
                  30-min free strategy session
                </p>
              </div>
            </a>

          </div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col justify-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Send a Message
            </h3>

            <form className="space-y-3">

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Service */}
              <select className="w-full border rounded-lg px-4 py-2.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Google Ads Management</option>
                <option>Meta Ads Strategy</option>
                <option>SEO & Content</option>
                <option>Conversion Tracking</option>
                <option>Landing Page Build</option>
              </select>

              {/* Budget */}
              <select className="w-full border rounded-lg px-4 py-2.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Under ₹25,000/mo</option>
                <option>₹25K – ₹75K/mo</option>
                <option>₹75K – ₹2L/mo</option>
                <option>₹2L+/mo</option>
              </select>

              {/* Message */}
              <textarea
                rows="3"
                placeholder="Tell me about your goals..."
                className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Send Message →
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}