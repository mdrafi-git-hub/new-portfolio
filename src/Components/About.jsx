import { motion } from "framer-motion";
import PortfolioImage from "../assets/PortfolioImage.png";

export default function About() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute left-0 top-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE IMAGE + FLOATING CARDS */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    {/* Main Image */}
                    <img
                        src={PortfolioImage}
                        alt="Rafi"
                        className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
                    />

                    {/* Floating Card 1 */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-6 -left-6 bg-white shadow-lg rounded-xl px-5 py-3 border"
                    >
                        <h4 className="text-blue-600 font-bold text-lg">3.5+ Years</h4>
                        <p className="text-xs text-gray-500">Experience</p>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl px-5 py-3 border"
                    >
                        <h4 className="text-green-600 font-bold text-lg">4.8x ROAS</h4>
                        <p className="text-xs text-gray-500">Average Return</p>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    {/* Label */}
                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
                        About Me
                    </p>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Turning Marketing Spend <br />
                        Into Measurable Growth 🚀
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        I’m a performance marketer with 3.5+ years of experience helping
                        brands scale through Google Ads, Meta Ads, and SEO. My focus is
                        simple — **maximize ROI, not just traffic.**
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        I specialize in full-funnel marketing, advanced conversion tracking
                        (GTM, GA4, Meta CAPI), and building high-converting landing pages
                        using React. This combination of **marketing + tech** gives me a
                        strong edge in delivering real business results.
                    </p>

                    {/* SKILLS GRID */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        {[
                            { name: "Google Ads", value: 95 },
                            { name: "Meta Ads", value: 92 },
                            { name: "SEO", value: 85 },
                            { name: "Conversion Tracking", value: 90 },
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-md rounded-xl p-4 border"
                            >
                                <div className="flex justify-between text-sm mb-2">
                                    <span>{skill.name}</span>
                                    <span className="text-blue-600 font-semibold">
                                        {skill.value}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        transition={{ duration: 1.2 }}
                                        viewport={{ once: true }}
                                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* STATS */}
                    <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                        {[
                            { num: "3.0 Cr+", label: "Ad Spend Managed" },
                            { num: "10K+", label: "Leads Generated" },
                            { num: "35%", label: "CPA Reduction" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-lg rounded-xl py-5 border"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-blue-600">
                                    {item.num}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 px-1">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <a href="/RafiUpdatedSeniorDigitalMarketingResume.pdf" download="Mahammad_Rafi_Resume.pdf">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition hover:scale-105">
                                Download Resume
                            </button>
                        </a>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}