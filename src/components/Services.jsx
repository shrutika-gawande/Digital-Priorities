import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { categories, services } from "./../data/services";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function ServicesPage() {
  const [active, setActive] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);

  // Read the category from the Navbar click
  useEffect(() => {
    const applyFilterFromHash = () => {
      const hash = window.location.hash;

      if (hash.includes("?category=")) {
        const category = hash.split("?category=")[1];
        const formatted =
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

        setSelectedCategory(formatted);

        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    applyFilterFromHash();
    window.addEventListener("hashchange", applyFilterFromHash);

    return () => window.removeEventListener("hashchange", applyFilterFromHash);
  }, []);

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div id="services" className="bg-gray-50 text-gray-900 min-h-screen">

      {/* HEADER */}
      <motion.section
        className="text-center py-10 px-6 max-w-5xl mx-auto"
        {...fadeUp}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-10 bg-gradient-to-r from-indigo-700 to-cyan-500 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg">
          Professional digital services designed to help your business scale.
        </p>
      </motion.section>

      {/* CATEGORY FILTERS */}
      <motion.section
        className="px-6 max-w-5xl mx-auto mb-16"
        {...fadeUp}
      >
        <div className="flex flex-wrap justify-center gap-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section className="px-6 pb-24 max-w-7xl mx-auto relative">

        {/* ALL CATEGORY = SLIDER */}
        {selectedCategory === "All" ? (
          <>
            {/* LEFT ARROW */}
            <button
              onClick={() =>
                setStartIndex((prev) =>
                  prev === 0 ? filteredServices.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/3 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaArrowLeft />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                setStartIndex((prev) => (prev + 1) % filteredServices.length)
              }
              className="absolute right-0 top-1/3 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaArrowRight />
            </button>

            <div className="overflow-hidden px-10">
              <div className="flex gap-10 transition-all duration-300">
                {filteredServices
                  .slice(startIndex, startIndex + 4)
                  .map((service, i) => (
                    <motion.div
                      key={i}
                      {...fadeUp}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="h-[260px] md:h-[370px] min-w-[280px] md:min-w-[360px] relative rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                      onClick={() => setActive(service)}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                        <h3 className="text-xl font-semibold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          /* OTHER CATEGORIES */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredServices.map((service, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-[260px] md:h-[320px] min-w-[280px] md:min-w-[360px] relative rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                onClick={() => setActive(service)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <motion.div
            className="bg-white max-w-lg w-full rounded-2xl p-8 shadow-xl"
            {...fadeUp}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-cyan-600 bg-clip-text text-transparent">
                {active.title}
              </h3>
              <button
                onClick={() => setActive(null)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-4">{active.desc}</p>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {active.offer.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-gray-200 px-3 py-2 rounded-lg text-gray-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
}
