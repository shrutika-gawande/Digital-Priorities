import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMessage, MdBookmarks, MdEmail } from "react-icons/md";
import { FaLocationDot, FaHandshake, FaArrowTrendUp } from "react-icons/fa6";
import { FaBullseye, FaFeatherAlt, FaBriefcase, FaTimes, FaGlobe, FaBookReader, FaUsers, FaBook } from "react-icons/fa";

export const navItems = [
  {
    name: "Services",
    icon: <IoIosArrowDown size={18} />,
    links: [
      { label: "Development", icon: <FaGlobe size={16} />, href: "/#services?category=Development" },
      { label: "Design", icon: <FaFeatherAlt size={16} />, href: "/#services?category=Design" },
      { label: "Marketing", icon: <FaArrowTrendUp size={16} />, href: "/#services?category=Marketing" },
      { label: "Business", icon: <FaBriefcase size={16} />, href: "/#services?category=Business" },
      { label: "Transformation", icon: <FaBullseye size={16} />, href: "/#services?category=Transformation" },
    ],
  },
  {
    name: "About",
    icon: <IoIosArrowDown size={18} />,
    links: [
      { label: "Our Team", icon: <FaUsers size={16} />, href: "#team" },
      { label: "Careers", icon: <FaBriefcase size={16} />, href: "/careers" },
      { label: "Mission", icon: <FaBullseye size={16} />, href: "#mission" },
    ],
  },
  {
    name: "Contact",
    icon: <IoIosArrowDown size={18} />,
    links: [
      { label: "Email Us", icon: <MdEmail size={16} />, href: "mailto:info@digitalpriorities.com" },
      { label: "Support", icon: <FaHandshake size={16} />, href: "#contact" },
      { label: "Locations", icon: <FaLocationDot size={16} />, href: "#contact" },
    ],
  },
  {
    name: "Resources",
    icon: <IoIosArrowDown size={18} />,
    links: [
      { label: "Blogs", icon: <MdOutlineMessage size={16} />, href: "/blogs" },
      { label: "Guides", icon: <FaBookReader size={16} />, href: "/guides" },
      { label: "Documentation", icon: <FaBook size={16} />, href: "/docs" },
      { label: "Case Reports", icon: <MdBookmarks size={16} />, href: "#projects" },
    ],
  },
];
