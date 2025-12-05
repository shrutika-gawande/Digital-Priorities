import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeImage, setActiveImage] = useState(null);

  // Reset image when project changes
  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-[999] p-2 rounded-full bg-white shadow-md hover:bg-slate-100 transition"
          >
            <X size={25} />
          </button>

          {/* MODAL CONTENT */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6"
          >
            {/* MAIN IMAGE */}
            <motion.img
              key={activeImage}
              initial={{ opacity: 0.6, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={activeImage}
              alt={project.title}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />

            {/* THUMBNAILS */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {[project.image, ...project.images].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    activeImage === img
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>

            <p className="text-indigo-600 font-medium mb-2">
              {project.category} • {project.duration}
            </p>

            <h1 className="text-3xl font-semibold mb-4">
              {project.title}
            </h1>

            <p className="text-slate-600 mb-6">
              {project.description}
            </p>

            <h3 className="font-semibold mb-3">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-slate-100 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              View Live Demo <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
