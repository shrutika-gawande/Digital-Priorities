import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    category: "Web Development",
    duration: "3 Months",
    title: "E-commerce Platform",
    short:
      "A full-featured online store with product management, cart functionality, and secure checkout.",
    description:
      "This project is a complete e-commerce solution with advanced product management, shopping cart, secure authentication, and Stripe payment integration for seamless checkout experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image:
      "/projects/ecommerce1.png",
    images: [
      "/projects/ecommerce2.png",
      "/projects/ecommerce3.png",
    ],
    liveDemo: "https://ecommercesite-pink-pi.vercel.app/",
  },
  {
    id: uuidv4(),
    category: "Web Design",
    duration: "2 Months",
    title: "Corporate Website",
    short:
      "A responsive website with CMS integration for easy content updates by the client.",
    description:
      "A modern corporate website built with a dynamic CMS to allow non-technical users to update content easily. The website is fully responsive and optimized for performance and SEO.",
    tech: ["WordPress", "JavaScript", "PHP", "MySQL"],
    image:
      "/projects/Corporate1.jpg",
    images: [
      "/projects/Corporate2.jpg",
      "/projects/Corporate3.jpg",
    ],
    liveDemo: "https://digitalpriorities.vercel.app/#",
  },
  {
    id: uuidv4(),
    category: "Web Application",
    duration: "4 Months",
    title: "SaaS Application",
    short:
      "A subscription-based web application with user management and analytics dashboard.",
    description:
      "A scalable SaaS platform featuring role-based authentication, subscription billing, real-time analytics dashboard, and cloud deployment with AWS.",
    tech: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
    image:
      "/projects//SaaS3.jpg",
    images: [
      "/projects//SaaS2.jpg",
      "/projects/SaaS1.jpg",
    ],
    liveDemo: "https://digitalpriorities.vercel.app/#",
  },
];