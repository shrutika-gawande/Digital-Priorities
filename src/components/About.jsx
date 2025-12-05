import { Users, Target, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function AboutUsPreview() {
  return (
    <div id="about" className="min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <motion.section
        className="container mx-auto px-6 md:py-20 py-10 text-center"
        {...fadeUp}
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-800 to-cyan-500 bg-clip-text text-transparent">
          About Digital Priorities
        </h1>
      </motion.section>

      {/* WHO WE ARE */}
      <section className="container max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-2 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div {...fadeUp}>
            <h2 className="text-3xl text-indigo-900 font-semibold mb-4">
              Who We Are
            </h2>
            <p className="leading-relaxed">
              Digital Priorities is a global digital solutions and marketing
              agency delivering scalable technology, intuitive design, and
              performance-driven marketing. We help brands transform digitally,
              expand their reach, and build meaningful customer experiences.
            </p>
            <p className="leading-relaxed sm:mb-4 mt-4">
              We blend technology, design, and marketing to create scalable
              solutions and lasting business impact.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="hidden sm:block rounded-3xl p-8 w-30 shadow-xl border bg-gradient-to-t from-purple-300 to-purple-50"
            {...fadeUp}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-900">
              Why Clients Choose Us
            </h3>
            <ul className="space-y-3">
              <li>• Strategy-driven development</li>
              <li>• Scalable & secure architecture</li>
              <li>• Modern UI/UX experiences</li>
              <li>• Transparent communication</li>
              <li>• Long-term support & growth</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="container max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            title: "Our Mission",
            desc: "To empower businesses with innovative, reliable, and high-impact digital solutions.",
            icon: <Target className="w-8 h-8 text-indigo-700" />,
            bg: "bg-gradient-to-t from-blue-200 to-blue-50",
          }, {
            title: "Our Vision",
            desc: "To become a globally trusted digital transformation partner for fast-growing brands.",
            icon: <Rocket className="w-8 h-8 text-indigo-700" />,
            bg: "bg-gradient-to-t from-orange-200 to-orange-50",
          }, {
            title: "Our Values",
            desc: "Innovation, integrity, excellence, and long-term partnerships.",
            icon: <ShieldCheck className="w-8 h-8 text-indigo-700" />,
            bg: "bg-gradient-to-t from-green-200 to-green-50",
          }].map((item, i) => (
            <motion.div
              key={i}
              className={`${item.bg} rounded-3xl p-8 shadow-xl`}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
