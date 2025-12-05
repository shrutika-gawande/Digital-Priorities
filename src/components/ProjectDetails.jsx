import { useState } from "react";
import { BrowserRouter as  useParams, useNavigate } from "react-router-dom";
import {projects} from "../data/projectsData"
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(project?.image);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to Projects
        </button>

        {/* MAIN IMAGE REPLACES ON THUMB CLICK */}
        <motion.img
          key={activeImage}
          initial={{ opacity: 0.6, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={activeImage}
          alt={project.title}
          className="w-full h-96 object-cover rounded-2xl mb-6 shadow-xl"
        />

        {/* CLICKABLE THUMBNAILS */}
        <div className="flex gap-2 mb-12">
          {[project.image, ...project.images].map((img, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={img}
              onClick={() => setActiveImage(img)}
              className={`w-30 h-20 object-cover rounded-xl shadow-md cursor-pointer border-2 transition ${
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

        <h1 className="text-4xl font-semibold mb-6">{project.title}</h1>

        <p className="text-slate-600 leading-relaxed mb-10">
          {project.description}
        </p>

        <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-4 py-1 bg-slate-100 rounded-full text-sm shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LIVE DEMO BUTTON */}
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          View Live Demo <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}