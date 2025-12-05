import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function Cta() {
  return (
    <section className="mx-auto">
      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-16 text-center relative overflow-hidden">

        {/* Grid Pattern Effect */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          {...fadeUp}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-6">
            Transform Your Ideas Into Powerful Digital Solutions
          </h1>

          <p className="text-sm md:text-lg text-indigo-800/80 mb-8">
            Partner with Digital Priorities to build scalable, high-performance
            digital products that drive real business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-indigo-700 font-medium">
              <CheckCircle size={20} /> Free Consultation
            </div>
            <div className="flex items-center gap-2 text-indigo-700 font-medium">
              <CheckCircle size={20} /> No Upfront Commitment
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:contact@digitalpriorities.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-700 to-cyan-600 shadow-lg hover:scale-105 text-white rounded-xl px-8 py-3 font-semibold text-lg transition"
            >
              Start Your Project
              <ArrowRight size={20} />
            </a>

            <a
              href="mailto:contact@digitalpriorities.com"
              className="inline-flex items-center gap-3 bg-white text-indigo-700 border border-indigo-300 px-10 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition"
            >
              Talk to an Expert
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
