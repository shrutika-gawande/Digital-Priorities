import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { team } from "../data/teamem";

export default function TeamMembersPage() {
  return (
    <section id="team" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-2xl bg-gradient-to-r from-indigo-700 to-cyan-500 bg-clip-text text-transparent md:text-4xl font-bold mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate group of creators, developers, and strategists building
            impactful digital experiences.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {team.map((member, i) => (
            
              <div className="rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 h-full  bg-gradient-to-br from-[#ebeefa] via-[#ffffff] to-[#e1e8fa]">
                <div className="p-6 flex flex-col items-center text-center h-full">
                  {/* Avatar or Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-gradient-to-br from-[#6366f1] to-[#9333ea] text-white text-2xl font-semibold flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>{member.mage}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <span className="text-sm text-indigo-600 font-medium mb-2">{member.role}</span>
                    
                  {member.tag && (
                    <span className="mb-3 inline-block text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                      {member.tag}
                    </span>
                  )}

                  <p className="text-sm text-gray-600 mb-4 flex-grow">{member.desc}</p>

                  {/* Social Icons - React Icons */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={member.social?.linkedin || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border bg-white text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition"
                    >
                      <FaLinkedinIn size={16} />
                    </a>

                    <a
                      href={member.social?.github || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border bg-white text-gray-800 hover:bg-gray-900 hover:text-white transition"
                    >
                      <FaGithub size={16} />
                    </a>

                    <a
                      href={member.social?.twitter || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border bg-white text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition"
                    >
                      <FaTwitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}
