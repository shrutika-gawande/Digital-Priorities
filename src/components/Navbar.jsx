import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../data/navData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const timerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const target = e.target.scrollingElement || e.target;
      const scrollTop = target.scrollTop;
      setScrolled(scrollTop > 50);
    };

    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const handleEnter = (menu) => {
    clearTimeout(timerRef.current);
    setActiveMenu(menu);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >

      <div className="flex items-center justify-between sm:justify-around px-8 py-4">

        {/* Logo */}
        <a href="/">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-900 to-blue-800 bg-clip-text text-transparent">
            Digital Priorities
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-10 relative">

          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleEnter(item.name)}
              onMouseLeave={handleLeave}
            >
              {/* Nav Button */}
              <button className="flex items-center gap-2 font-medium text-indigo-900 hover:text-blue-600 transition">
                {item.name}
                {item.icon}
              </button>

              {/* Dropdown */}
              {activeMenu === item.name && (
                <div
                  className="absolute top-10 left-1/2 -translate-x-1/2
                             w-64 rounded-xl bg-white shadow-xl
                             p-4 space-y-3"
                  onMouseEnter={() => handleEnter(item.name)}
                  onMouseLeave={handleLeave}
                >
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-md
                                 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {link.icon && link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex">
          <a href="#contact">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Get Consult
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>


        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="absolute top-16 right-4 w-2/3 rounded-xl backdrop-blur-xl bg-white/30 shadow-lg flex flex-col items-start space-y-2 py-6 z-50 sm:hidden"
          >
            {navItems.map((navItem) => (
              <div key={navItem.name} className="w-full px-4">
                <div className="font-semibold text-indigo-900 mb-2">{navItem.name}</div>

                {/* If there are links, render them */}
                {navItem.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.href || "#"}
                    onClick={() => setIsOpen(false)}      // close menu after click
                    className="block w-full text-left py-2 px-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    <span className="inline-flex items-center gap-3">
                      {link.icon}
                      <span>{link.label}</span>
                    </span>
                  </a>
                ))}

              </div>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
