import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section className="pt-28 pb-20 bg-white relative overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Badge */}
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-6">
                        🚀 Available for Projects
                    </span>

                    {/* Heading with Typing */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        I Help Brands <br />
                        <span className="text-blue-600">
                            <TypeAnimation
                                sequence={[
                                    "Grow with Data-Driven",
                                    2000,
                                    "Scale with Paid Ads",
                                    2000,
                                    "Boost ROI with SEO",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                        <br /> Marketing
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-gray-600 text-lg max-w-lg">
                        Performance Marketer specializing in Google Ads, Meta Ads, SEO &
                        Conversion Tracking — turning ad spend into measurable ROI.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition hover:scale-105">
                            View Case Studies
                        </button>
                        <a href="/SeniorDigitalMarketingResumeUpdated.pdf" download="Mahammad_Rafi_Resume.pdf">
                            <button className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 transition hover:scale-105 w-full sm:w-auto">
                                Download CV
                            </button>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex gap-8">
                        {[
                            { num: "3.5+", label: "Years Experience" },
                            { num: "50+", label: "Campaigns" },
                            { num: "4.8x", label: "Avg ROAS" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-blue-600">
                                    {item.num}
                                </h3>
                                <p className="text-sm text-gray-500">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT SIDE CARD */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-6 -left-6 bg-blue-100 p-3 rounded-xl shadow"
                    >
                        📊
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -bottom-6 -right-6 bg-green-100 p-3 rounded-xl shadow"
                    >
                        📈
                    </motion.div>

                    {/* Card */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">

                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl mb-4">
                            MR
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">
                            Mahammad Rafi
                        </h3>

                        <p className="text-sm text-gray-500 mb-4">
                            Digital & Performance Marketer · 3.5+ Years
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">Google Ads</span>
                            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Meta Ads</span>
                            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">SEO</span>
                            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Conv. Tracking</span>
                            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">React.js</span>
                        </div>

                        {/* Bottom Stats */}
                        <div className="flex justify-between border-t pt-4 text-center">
                            {["3.5+", "50+", "4.8x"].map((val, i) => (
                                <div key={i}>
                                    <h4 className="text-blue-600 font-bold">{val}</h4>
                                    <p className="text-xs text-gray-500">
                                        {i === 0 ? "Years" : i === 1 ? "Campaigns" : "ROAS"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}