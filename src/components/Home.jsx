import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d2d8ed] via-[#eef1f7] to-[#c0cff6] py-20 md:py-0 px-6">
      <div className="max-w-6xl text-center flex flex-col items-center gap-8">

        {/* HEADING */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
          {...fadeUp}
        >
          Smart Solutions for{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-600 bg-clip-text text-transparent">
            Growing Businesses
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          className="text-gray-600 max-w-2xl text-lg"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          We help businesses innovate, automate, and scale with secure,
          high-performance digital solutions — all in one unified platform.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.a
          href="#contact"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition">
            Start Your Project →
          </button>
        </motion.a>

        {/* Process Flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {[
            "Build Digital Products",
            "Grow with Marketing",
            "Optimize Operations",
            "Scale with Confidence",
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-5 shadow-md flex items-center justify-center text-gray-700 font-medium hover:shadow-lg transition
        ${i === 0 || i === 3 ? "md:translate-y-10" : "md:-translate-y-6"}
        `}
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
