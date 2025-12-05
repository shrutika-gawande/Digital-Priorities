import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import ProjectModal from "./ProjectModal";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="bg-white px-6 py-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.section
          className="text-center py-12 px-6 max-w-5xl mx-auto"
          {...fadeUp}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-600 text-lg">
            Real-world projects engineered for performance, scalability, and growth.
          </p>
        </motion.section>

        {/* PROJECT GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200"
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-indigo-600 font-medium mb-1">
                  {project.category} • {project.duration}
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {project.short}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-300 text-sm font-medium hover:bg-slate-900 hover:text-white transition"
                >
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
