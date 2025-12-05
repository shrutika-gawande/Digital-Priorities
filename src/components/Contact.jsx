import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function Contact() {
  return (
    <div id="contact" className="text-gray-900 min-h-screen">

      {/* Header */}
      <section className="text-left py-10 sm:py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          className="contact-header-expanded text-center"
          {...fadeUp}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-cyan-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-6 pb-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">

        {/* Left: Start Conversation */}
        <motion.div {...fadeUp}>
          <div className="border border-indigo-200 rounded-2xl shadow-md p-12 flex flex-col justify-start text-left">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">
              Start a Conversation
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-lg">
              Have an idea, a project, or just a question? We’d love to hear from you.
              Reach out and let’s explore how Digital Priorities can help you grow.
            </p>

            <a
              href="mailto:contact@digitalpriorities.com"
              className="inline-flex w-fit items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <Mail size={20} />
              Email Us Directly
            </a>
          </div>
        </motion.div>

        {/* Right: Get in Touch */}
        <motion.div {...fadeUp}>
          <div className="bg-indigo-50 rounded-2xl border border-indigo-100 shadow-md p-10 space-y-10">
            <h2 className="text-2xl font-semibold text-indigo-900">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Our team is ready to help you transform your ideas into powerful digital solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-900 text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">contact@digitalpriorities.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-indigo-900 text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+91 73507 23868</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-indigo-900 text-white p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">India · Remote Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
