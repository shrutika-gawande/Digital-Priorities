import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

/* SAME GLOBAL ANIMATION */
const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
};

const Footer = () => {
    return (
        <motion.footer
            {...fadeUp}
            className="backdrop-blur-md bg-gradient-to-t from-[#000114] to-[#09012c] text-white p-5"
        >
            <div className="container pt-5 md:p-10 flex flex-col md:flex-row justify-between">

                {/* FIRST COL */}
                <motion.div {...fadeUp} className="flex flex-col pb-8 gap-5">
                    <h1 className="text-2xl font-bold">Digital Priorities</h1>
                    <p className="max-w-xs text-gray-300">
                        Creating innovative web solutions that help businesses grow in the digital world.
                    </p>

                    <div className="flex space-x-6 text-2xl">
                        <a href="" target="_blank" rel="noopener noreferrer" className="iconsHover">
                            <FaGithub />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="iconsHover">
                            <FaLinkedin />
                        </a>
                        <a href="" className="iconsHover">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* SECOND COL */}
                <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="pb-8">
                    <h1 className="text-xl font-bold">Quick Links</h1>
                    <div className="flex flex-col mt-3 gap-5 text-gray-300">
                        <a href="/">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#services">Services</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </motion.div>

                {/* THIRD COL */}
                <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="pb-8">
                    <h1 className="text-xl font-bold">Services</h1>
                    <div className="flex flex-col mt-3 gap-5 text-gray-300">
                        <p>Marketing</p>
                        <p>Full-Stack Solutions</p>
                        <p>Business Development</p>
                        <p>Digital Transformation</p>
                        <p>UI/UX Designs</p>
                    </div>
                </motion.div>

                {/* FOURTH COL */}
                <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col pb-8 gap-5">
                    <h1 className="text-xl font-bold">Stay Updated</h1>
                    <p className="text-gray-300 max-w-xs">
                        Subscribe to our newsletter for the latest news and updates.
                    </p>
                    <div className="flex space-x-3">
                        <input
                            placeholder="Your Email"
                            type="email"
                            className="inline-flex p-2 rounded-md bg-gray-800 border-white/10 border"
                        />
                        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Line */} 
            <div className='border-white/10 p-2 border-t'></div> 
            <div className="flex p-5 md:flex-row gap-2 flex-col text-center justify-center md:gap-10 text-gray-400 text-sm"> 
                <div>© {new Date().getFullYear()} 
                    Digital Priorities. All rights reserved.
                </div> <div className='flex gap-8 items-center justify-center'> 
                    <a href='#'>Privacy Policy</a> 
                    <a href='#'>Terms of Service</a> 
                    <a href='#'>Cookies</a> 
                </div> 
            </div>
        </motion.footer>
    );
};

export default Footer;
